import { ImageResponse } from "next/og";

export const alt = "Ebenezer Nkrumah, Product Manager";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#161412",
          color: "#f4f1eb",
          padding: "72px",
        }}
      >
        <div
          style={{
            fontSize: 20,
            letterSpacing: 4,
            color: "#cbbba6",
            fontFamily: "sans-serif",
          }}
        >
          PRODUCT MANAGER
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, lineHeight: 1.05, fontFamily: "Georgia, serif" }}>
            Ebenezer Nkrumah
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 30,
              lineHeight: 1.35,
              color: "#d5cfc6",
              maxWidth: 860,
              fontFamily: "sans-serif",
            }}
          >
            AI-powered consumer products, search, and recommendations.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
