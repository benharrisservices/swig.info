import { ImageResponse } from "next/og";

export const alt = "SWIG · Hospitality and event logistics · United Kingdom";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0b",
          color: "#f4f3f1",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: 4,
            color: "#76767b",
            textTransform: "uppercase",
          }}
        >
          <span>Status · Operational</span>
          <span>United Kingdom</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 260,
              fontWeight: 700,
              letterSpacing: -10,
              lineHeight: 1,
            }}
          >
            SWIG
          </div>
          <div
            style={{
              fontSize: 40,
              marginTop: 24,
              maxWidth: 820,
              letterSpacing: -1,
              color: "#f4f3f1",
            }}
          >
            Hospitality and event logistics.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: 3,
            color: "#76767b",
          }}
        >
          <span>///trout.forms.flats</span>
          <span>swig.info</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
