import { ImageResponse } from "next/og";
export const alt = "301 Build Recipe: Writing. Claude drafts like you, a second Claude checks, your edits become rules.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#ffffff", color: "#363737", width: "100%", height: "100%", padding: 72, fontFamily: "Georgia, serif", borderTop: "14px solid #ff6719" }}>
      <div style={{ display: "flex", fontSize: 26, letterSpacing: 2, color: "#757575", fontFamily: "sans-serif", fontWeight: 600 }}>HOW TO AI · 301 BUILD RECIPE · WRITING</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", fontSize: 96, fontWeight: 700 }}>Write like <span style={{ color: "#ff6719", fontStyle: "italic", marginLeft: 26 }}>you.</span></div>
      </div>
      <div style={{ display: "flex", fontSize: 28, color: "#868787" }}>Claude drafts. A second Claude checks. Your edits become the rules.</div>
    </div>,
    size,
  );
}
