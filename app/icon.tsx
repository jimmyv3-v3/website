import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/**
 * Generated favicon: the JV monogram in titanium on satin charcoal, so the
 * browser tab and search results carry the brand.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0c0f",
          color: "#cfd6e0",
          fontSize: 34,
          fontWeight: 700,
          letterSpacing: -1,
          fontFamily: "sans-serif",
        }}
      >
        JV
      </div>
    ),
    { ...size },
  );
}
