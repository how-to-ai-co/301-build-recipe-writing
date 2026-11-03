import { ImageResponse } from "next/og";
export const alt = "301 Build Recipe: Writing. One prompt builds a writing room where Claude drafts and your edits become the rules.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#ffffff", color: "rgba(0,0,0,.9)", width: "100%", height: "100%", padding: 72, fontFamily: "Georgia, serif", borderTop: "14px solid #d97757" }}>
      <div style={{ display: "flex", fontSize: 26, color: "rgba(0,0,0,.6)", fontFamily: "sans-serif" }}>AI 301 workshop · Writing · How to AI</div>
      <div style={{ display: "flex", fontSize: 72, lineHeight: 1.15 }}>One prompt builds a writing room where your edits become the rules</div>
      <div style={{ display: "flex", fontSize: 28, color: "#c6613f", fontFamily: "sans-serif" }}>Idea → Draft → Check → Edit → Learn</div>
    </div>,
    size,
  );
}
