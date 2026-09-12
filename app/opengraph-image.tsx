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
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo: H+X monogram + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.14)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {/* H */}
            <div
              style={{
                position: "absolute",
                width: 40,
                height: 40,
                display: "flex",
              }}
            >
              <div
                style={{
                  width: 3,
                  height: 40,
                  background: "#ededed",
                  position: "absolute",
                  left: 4,
                  borderRadius: 2,
                }}
              />
              <div
                style={{
                  width: 3,
                  height: 40,
                  background: "#ededed",
                  position: "absolute",
                  right: 4,
                  borderRadius: 2,
                }}
              />
              <div
                style={{
                  width: 32,
                  height: 2,
                  background: "#ededed",
                  position: "absolute",
                  top: 19,
                  left: 4,
                  opacity: 0.6,
                }}
              />
            </div>
            {/* X */}
            <div
              style={{
                position: "absolute",
                width: 44,
                height: 44,
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 3,
                  background: "#ef590d",
                  position: "absolute",
                  top: 20,
                  transform: "rotate(45deg)",
                  borderRadius: 2,
                }}
              />
              <div
                style={{
                  width: 44,
                  height: 3,
                  background: "#ef590d",
                  position: "absolute",
                  top: 20,
                  transform: "rotate(-45deg)",
                  borderRadius: 2,
                }}
              />
            </div>
          </div>
          <span
            style={{
              color: "#ededed",
              fontSize: 36,
              fontWeight: 600,
              fontFamily: "monospace",
              letterSpacing: -0.5,
            }}
          >
            hofix
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              color: "#ef590d",
              fontSize: 24,
              letterSpacing: 4,
              textTransform: "uppercase",
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
            }}
          >
            Od někoho,
            <br />
            kdo to zná.
          </div>
          <div style={{ color: "#a1a1a8", fontSize: 26, maxWidth: 820 }}>
            Sítě, end-user support, analýza procesů a vývoj. 25 let v IT,
            otevřený pro zajímavé věci.
          </div>
        </div>

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
