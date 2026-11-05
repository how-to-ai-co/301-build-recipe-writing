import { ImageResponse } from "next/og";
export const alt = "Make Claude write like you. AI 301 from How to AI.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#f5f2ec", color: "#1f1d1a", width: "100%", height: "100%", padding: 72, fontFamily: "Georgia, serif", borderTop: "14px solid #ff6719" }}>
      <div style={{ display: "flex", fontSize: 26, color: "rgba(0,0,0,.6)", fontFamily: "sans-serif" }}>AI 301 workshop · Writing · How to AI</div>
      <div style={{ display: "flex", fontSize: 96, lineHeight: 1.15 }}>Make Claude write like you.</div>
      <div style={{ display: "flex", fontSize: 28, color: "#c2450a", fontFamily: "sans-serif" }}>Claude drafts. You edit. Your edits become the rules.</div>
    </div>,
    size,
  );
}
