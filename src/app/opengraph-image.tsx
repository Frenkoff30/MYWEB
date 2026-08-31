import { ImageResponse } from "next/og";

export const alt = "Webo Studio – tvorba webů pro živnostníky a malé firmy";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** Náhledový obrázek pro sdílení odkazu (Facebook, Messenger, WhatsApp, X). */
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0c10",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(37,99,235,0.28), transparent 55%), radial-gradient(circle at 82% 78%, rgba(239,68,68,0.2), transparent 55%)",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <span style={{ fontSize: 96, fontWeight: 800, color: "#7f8794" }}>‹</span>
          <span style={{ fontSize: 132, fontWeight: 800, letterSpacing: -2 }}>webo</span>
          <span style={{ fontSize: 96, fontWeight: 800, color: "#7f8794" }}>›</span>
        </div>

        <div style={{ display: "flex", gap: 16, marginTop: 6 }}>
          <div style={{ width: 150, height: 9, borderRadius: 5, backgroundColor: "#e0281e" }} />
          <div style={{ width: 150, height: 9, borderRadius: 5, backgroundColor: "#1f6fe0" }} />
        </div>

        <div
          style={{
            display: "flex",
            marginTop: 54,
            fontSize: 46,
            fontWeight: 700,
            textAlign: "center",
            maxWidth: 940,
            lineHeight: 1.25,
          }}
        >
          Weby, co prodávají. Ne jen visí na internetu.
        </div>

        <div style={{ display: "flex", marginTop: 26, fontSize: 30, color: "#9aa3b2" }}>
          Tvorba webů pro živnostníky a malé firmy
        </div>

        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 44,
            fontSize: 26,
            fontWeight: 600,
            color: "#60a5fa",
          }}
        >
          webostudio.cz
        </div>
      </div>
    ),
    { ...size }
  );
}
