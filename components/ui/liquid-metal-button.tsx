"use client";

import {
  useEffect,
  useRef,
  useState,
  type MouseEvent,
  type ReactNode,
} from "react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

/**
 * Liquid-metal button. A dark pill with a shimmering brushed-titanium rim
 * (WebGL shader from @paper-design/shaders). Fluid width, renders as a link
 * when `href` is set or a button otherwise.
 *
 * Performance + a11y: the shader idles slowly, speeds up on hover, bursts on
 * click, pauses when scrolled off-screen, and freezes entirely under
 * prefers-reduced-motion.
 */

const STYLE_ID = "lm-button-style";
function ensureStyle() {
  if (typeof document === "undefined" || document.getElementById(STYLE_ID)) return;
  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = `
    .lm-shader canvas {
      width: 100% !important;
      height: 100% !important;
      display: block !important;
      position: absolute !important;
      top: 0 !important;
      left: 0 !important;
      border-radius: 9999px !important;
    }
    @keyframes lm-ripple {
      0% { transform: translate(-50%, -50%) scale(0); opacity: 0.5; }
      100% { transform: translate(-50%, -50%) scale(4); opacity: 0; }
    }
  `;
  document.head.appendChild(style);
}

const UNIFORMS = {
  u_repetition: 4,
  u_softness: 0.5,
  u_shiftRed: 0.3,
  u_shiftBlue: 0.3,
  u_distortion: 0,
  u_contour: 0,
  u_angle: 45,
  u_scale: 8,
  u_shape: 1,
  u_offsetX: 0.1,
  u_offsetY: -0.1,
};

const SIZES = {
  sm: "h-9 px-5 text-sm",
  default: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-[0.95rem]",
} as const;

interface LiquidMetalButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  size?: keyof typeof SIZES;
  ariaLabel?: string;
}

export function LiquidMetalButton({
  children,
  href,
  onClick,
  className,
  size = "default",
  ariaLabel,
}: LiquidMetalButtonProps) {
  const shaderRef = useRef<HTMLSpanElement>(null);
  const rootRef = useRef<HTMLElement | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mountRef = useRef<any>(null);
  const hovered = useRef(false);
  const visible = useRef(true);
  const reduced = useRef(false);
  const rippleId = useRef(0);
  const [pressed, setPressed] = useState(false);
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>(
    [],
  );

  useEffect(() => {
    ensureStyle();
    reduced.current =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;

    // Speed the shader should run at, given current hover/visibility state.
    const targetSpeed = () =>
      reduced.current ? 0 : !visible.current ? 0 : hovered.current ? 1 : 0.6;

    let cancelled = false;
    // Loaded lazily below, so the heavy WebGL lib stays out of the critical
    // bundle. Null until the dynamic import resolves.
    let shaderApi: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ShaderMount: any;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      liquidMetalFragmentShader: any;
    } | null = null;

    // (Re)mount the shader at the element's CURRENT size. Remounting on resize
    // is what keeps the metal rim crisp after the web font widens the button.
    let lastWidth = 0;
    const mount = () => {
      const host = shaderRef.current;
      if (!host || !shaderApi) return;
      try {
        mountRef.current?.destroy?.();
        mountRef.current = new shaderApi.ShaderMount(
          host,
          shaderApi.liquidMetalFragmentShader,
          UNIFORMS,
          undefined,
          reduced.current ? 0 : 0.6,
        );
        mountRef.current?.setSpeed?.(targetSpeed());
      } catch (error) {
        console.error("[liquid-metal] shader failed to mount", error);
      }
    };

    const ro = new ResizeObserver(([entry]) => {
      const w = Math.round(entry.contentRect.width);
      if (w > 0 && w !== lastWidth) {
        lastWidth = w;
        mount();
      }
    });
    if (shaderRef.current) ro.observe(shaderRef.current);

    let io: IntersectionObserver | undefined;
    if (rootRef.current && !reduced.current) {
      io = new IntersectionObserver(
        ([entry]) => {
          visible.current = entry.isIntersecting;
          mountRef.current?.setSpeed?.(targetSpeed());
        },
        { threshold: 0 },
      );
      io.observe(rootRef.current);
    }

    // Defer the ~1MB shader bundle until after first paint. The button is fully
    // styled without it; the shimmering rim simply fades in a moment later.
    import("@paper-design/shaders")
      .then((mod) => {
        if (cancelled) return;
        shaderApi = {
          ShaderMount: mod.ShaderMount,
          liquidMetalFragmentShader: mod.liquidMetalFragmentShader,
        };
        mount();
      })
      .catch((error) =>
        console.error("[liquid-metal] shader failed to load", error),
      );

    return () => {
      cancelled = true;
      ro.disconnect();
      io?.disconnect();
      mountRef.current?.destroy?.();
      mountRef.current = null;
    };
  }, []);

  const setSpeed = (v: number) => {
    if (!reduced.current) mountRef.current?.setSpeed?.(v);
  };

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    setSpeed(2.4);
    window.setTimeout(() => setSpeed(hovered.current ? 1 : 0.6), 300);
    const el = rootRef.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      const id = rippleId.current++;
      setRipples((p) => [
        ...p,
        { x: e.clientX - rect.left, y: e.clientY - rect.top, id },
      ]);
      window.setTimeout(
        () => setRipples((p) => p.filter((r) => r.id !== id)),
        600,
      );
    }
    onClick?.();
  };

  const props = {
    ref: rootRef as React.Ref<never>,
    onClick: handleClick,
    onMouseEnter: () => {
      hovered.current = true;
      if (visible.current) setSpeed(1);
    },
    onMouseLeave: () => {
      hovered.current = false;
      setPressed(false);
      if (visible.current) setSpeed(0.6);
    },
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    "aria-label": ariaLabel,
    className: cn(
      "group relative inline-flex select-none items-center justify-center gap-2 overflow-hidden rounded-full font-medium text-titanium-mid transition-colors duration-300 hover:text-titanium-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      SIZES[size],
      className,
    ),
  };

  const inner = (
    <>
      <span
        ref={shaderRef}
        aria-hidden
        className="lm-shader pointer-events-none absolute inset-0 overflow-hidden rounded-full"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-[2px] rounded-full"
        style={{
          background: "linear-gradient(180deg, #1e1e20 0%, #050506 100%)",
          boxShadow: pressed
            ? "inset 0 2px 5px rgba(0,0,0,0.5)"
            : "0 1px 1px rgba(255,255,255,0.04) inset",
          transition: "box-shadow 0.15s ease",
        }}
      />
      <span
        className="relative z-10 inline-flex items-center gap-2"
        style={{ transform: pressed ? "translateY(0.5px)" : "none" }}
      >
        {children}
      </span>
      {ripples.map((r) => (
        <span
          key={r.id}
          aria-hidden
          className="pointer-events-none absolute z-20 h-5 w-5 rounded-full"
          style={{
            left: r.x,
            top: r.y,
            background:
              "radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%)",
            animation: "lm-ripple 0.6s ease-out",
          }}
        />
      ))}
    </>
  );

  if (href) {
    // Interne paden krijgen de juiste taal-prefix via de locale-bewuste Link;
    // hash-ankers (#offerte) en externe links (tel:, mailto:) blijven <a>.
    if (href.startsWith("/")) {
      return (
        <Link href={href} {...props}>
          {inner}
        </Link>
      );
    }
    return (
      <a href={href} {...props}>
        {inner}
      </a>
    );
  }
  return (
    <button type="button" {...props}>
      {inner}
    </button>
  );
}
