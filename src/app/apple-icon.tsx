import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Apple touch icon (iOS ignores SVG favicons, so this must be a raster PNG).
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0a",
          color: "#f2efe8",
          fontSize: 120,
          fontWeight: 400,
          fontFamily: "Georgia, 'Times New Roman', serif",
        }}
      >
        P
      </div>
    ),
    { ...size }
  );
}
