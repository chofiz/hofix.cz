import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0b",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "monospace",
        }}
      >
        {/* Logo: oranžový čtverec s "h" + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 12,
              border: "2px solid #ef590d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ef590d",
              fontSize: 38,
              fontWeight: 700,
            }}
          >
            h
          </div>
          <span
            style={{
              color: "#ededed",
              fontSize: 36,
              fontWeight: 600,
              letterSpacing: -0.5,
            }}
          >
            hofix
          </span>
        </div>

        {/* Hlavní text */}
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              color: "#ef590d",
              fontSize: 24,
              letterSpacing: 4,
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            IT & vývoj
          </div>
          <div
            style={{
              color: "#ededed",
              fontSize: 76,
              fontWeight: 700,
              letterSpacing: -2,
              lineHeight: 1.02,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex" }}>Od někoho,</div>
            <div style={{ display: "flex" }}>kdo to zná.</div>
          </div>
          <div
            style={{
              color: "#a1a1a8",
              fontSize: 26,
              maxWidth: 820,
              display: "flex",
            }}
          >
            Sítě, end-user support, analýza procesů a vývoj. 25 let v IT,
            otevřený pro zajímavé věci.
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#6b6b73",
            fontSize: 20,
          }}
        >
          <span>Olomouc & online</span>
          <span>hofix.cz</span>
        </div>
      </div>
    )
  );
}
