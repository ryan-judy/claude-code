import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Spark Street Digital | Digital Marketing for Ohio Businesses";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A1628",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              background: "#2563EB",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              color: "#F59E0B",
              fontWeight: "bold",
            }}
          >
            SD
          </div>
          <span style={{ color: "white", fontSize: "28px", fontWeight: "bold" }}>
            Spark Street Digital<span style={{ color: "#F59E0B" }}>.</span>
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            color: "white",
            fontSize: "64px",
            fontWeight: "bold",
            lineHeight: 1.1,
            maxWidth: "800px",
            marginBottom: "24px",
          }}
        >
          Digital Marketing for{" "}
          <span style={{ color: "#D4AF37" }}>Ohio Businesses</span>
        </div>

        {/* Subhead */}
        <div
          style={{
            color: "rgba(255,255,255,0.65)",
            fontSize: "26px",
            maxWidth: "700px",
            lineHeight: 1.4,
          }}
        >
          Websites, SEO & GEO/AEO, paid media, AI, and hands-on strategy — without the agency overhead.
        </div>

        {/* CTA pill */}
        <div
          style={{
            marginTop: "48px",
            background: "#F59E0B",
            color: "#0A1628",
            fontSize: "22px",
            fontWeight: "bold",
            padding: "16px 36px",
            borderRadius: "12px",
          }}
        >
          Get Your Free Website Audit →
        </div>
      </div>
    ),
    { ...size }
  );
}
