import { cn } from "@/lib/utils";
import { Monogram } from "./monogram";

/**
 * Full lockup: monogram + wordmark, matching the wrap typography
 * (wide-tracked caps, titanium, with the B.V. descriptor beneath).
 */
export function Wordmark({
  className,
  idSuffix = "lockup",
  showDescriptor = true,
}: {
  className?: string;
  idSuffix?: string;
  showDescriptor?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <Monogram idSuffix={idSuffix} className="h-8 w-auto" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[0.95rem] font-medium tracking-[0.18em] text-titanium">
          J. VERSSEPUT
        </span>
        {showDescriptor && (
          <span className="mt-1 text-[0.55rem] font-medium tracking-[0.34em] text-muted-foreground">
            VASTGOEDONDERHOUD B.V.
          </span>
        )}
      </span>
    </span>
  );
}
