import { ImageResponse } from "next/og";

export const alt = "J. Versseput · Glas-, gevel- en vastgoedonderhoud";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Branded Open Graph image, generated on the fly. Satin charcoal background
 * with a titanium wordmark and tagline, so every shared link looks on-brand.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "96px",
          background:
            "radial-gradient(60% 80% at 80% 20%, #1a1e24 0%, #0b0c0f 60%)",
          color: "#e6eaf0",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 34,
            letterSpacing: 14,
            color: "#9aa4b2",
            fontWeight: 600,
          }}
        >
          J. VERSSEPUT
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 76,
            lineHeight: 1.05,
            fontWeight: 600,
            maxWidth: 900,
          }}
        >
          Glas-, gevel- en vastgoedonderhoud
        </div>
        <div style={{ marginTop: 28, fontSize: 34, color: "#9aa4b2" }}>
          Uw vertrouwde partner, door heel Nederland
        </div>
      </div>
    ),
    { ...size },
  );
}
