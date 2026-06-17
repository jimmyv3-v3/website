"use client";

import type { ReactNode } from "react";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

/**
 * Brushed-titanium button. A dark pill with a metallic rim and a light sheen
 * that sweeps across on hover, built entirely in CSS (no WebGL). This is the
 * robust replacement for the shader-based liquid-metal button: it keeps the
 * premium silver glint the brand wants without spawning WebGL contexts, and it
 * degrades gracefully under prefers-reduced-motion (the global rule freezes the
 * sweep).
 *
 * Renders an <a> when `href` is set, a <button> otherwise, or any element via
 * `asChild` (e.g. to wrap a Next.js <Link>).
 */

const SIZES = {
  sm: "h-9 px-5 text-sm",
  default: "h-11 px-6 text-sm",
  lg: "h-12 px-8 text-[0.95rem]",
} as const;

type Variant = "metal" | "outline";

interface MetalButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  size?: keyof typeof SIZES;
  variant?: Variant;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  ariaLabel?: string;
}

export function MetalButton({
  children,
  href,
  onClick,
  className,
  size = "default",
  variant = "metal",
  type = "button",
  disabled = false,
  ariaLabel,
}: MetalButtonProps) {
  const inner = (
    <>
      {/* Titanium rim */}
      <span
        aria-hidden
        className={cn(
          "absolute inset-0 rounded-full",
          variant === "metal"
            ? "bg-[linear-gradient(180deg,hsl(var(--titanium-bright)/0.85),hsl(var(--titanium-dim)/0.45)_45%,hsl(var(--titanium-dim)/0.2))]"
            : "bg-[linear-gradient(180deg,hsl(var(--border)/1),hsl(var(--border)/0.4))]",
        )}
      />
      {/* Inner surface */}
      <span
        aria-hidden
        className={cn(
          "absolute inset-px rounded-full transition-shadow duration-300",
          variant === "metal"
            ? "bg-[linear-gradient(180deg,#1f1f22_0%,#070708_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_0_26px_-8px_hsl(var(--titanium-mid)/0.7)]"
            : "bg-[linear-gradient(180deg,hsl(var(--card)/0.6),hsl(var(--background)/0.8))] group-hover:bg-card/60",
        )}
      />
      {/* Sheen sweep */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
      >
        <span className="absolute inset-y-0 -left-1/3 w-1/3 -skew-x-[20deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.22),transparent)] transition-transform duration-700 ease-out group-hover:translate-x-[450%]" />
      </span>
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </>
  );

  const classes = cn(
    "group relative inline-flex select-none items-center justify-center gap-2 overflow-hidden rounded-full font-medium text-titanium-mid transition-colors duration-300 hover:text-titanium-bright focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    SIZES[size],
    className,
  );

  if (href) {
    // Interne paden (beginnend met "/") krijgen automatisch de juiste taal-
    // prefix via de locale-bewuste Link. Hash-ankers (#offerte) en externe
    // links (tel:, mailto:) blijven een gewone <a>.
    if (href.startsWith("/")) {
      return (
        <Link
          href={href}
          className={classes}
          onClick={onClick}
          aria-label={ariaLabel}
        >
          {inner}
        </Link>
      );
    }
    return (
      <a href={href} className={classes} onClick={onClick} aria-label={ariaLabel}>
        {inner}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(classes, disabled && "pointer-events-none opacity-60")}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {inner}
    </button>
  );
}
