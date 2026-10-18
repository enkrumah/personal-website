import { ImageResponse } from "next/og";
import { site } from "@/content/site";

/**
 * Open Graph image. Linked from metadata only when NEXT_PUBLIC_SITE_URL is
 * set, so a production build without that variable does not advertise localhost.
 */
export function GET() {
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
          {site.role.toUpperCase()}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, lineHeight: 1.05, fontFamily: "Georgia, serif" }}>
            {site.name}
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
    { width: 1200, height: 630 },
  );
}
