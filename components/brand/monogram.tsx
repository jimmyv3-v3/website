import { cn } from "@/lib/utils";

/**
 * J. Versseput beeldmerk — the real brushed-titanium JV mark (transparent PNG
 * derived from the supplied logo). Kept as a single component so the header,
 * footer, testimonial and watermark all share one source of truth.
 *
 * `idSuffix` is accepted for backwards compatibility but no longer used.
 */
export function Monogram({
  className,
  title = "J. Versseput",
}: {
  className?: string;
  idSuffix?: string;
  title?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/jv-mark.png"
      alt={title}
      className={cn("h-9 w-auto select-none", className)}
      draggable={false}
    />
  );
}
