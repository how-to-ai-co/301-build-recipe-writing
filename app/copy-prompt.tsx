"use client";
import { useRef, useState } from "react";
import { Check, Copy } from "lucide-react";

function fallbackCopy(text: string) {
  const t = document.createElement("textarea"); t.value = text; t.setAttribute("readonly", ""); t.style.position = "fixed"; t.style.opacity = "0";
  document.body.appendChild(t); t.select(); const ok = document.execCommand("copy"); t.remove(); return ok;
}

export function CopyPrompt({ text }: { text: string }) {
  const [state, setState] = useState<"idle" | "copied" | "error">("idle");
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  async function copy() {
    let ok = false;
    try { await navigator.clipboard.writeText(text); ok = true; } catch { ok = fallbackCopy(text); }
    setState(ok ? "copied" : "error"); clearTimeout(timer.current); timer.current = setTimeout(() => setState("idle"), ok ? 2500 : 6000);
  }
  return (
    <div className="prompt">
      <button className="btn" onClick={copy}>{state === "copied" ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}{state === "copied" ? "Copied" : "Copy the prompt"}</button>
      <p aria-live="polite" className="prompt-status">
        {state === "idle" && "Paste it into Claude Code at the start of class."}
        {state === "copied" && "Now paste it into Claude Code."}
        {state === "error" && "Your browser blocked copying. Try another browser."}
      </p>
    </div>
  );
}
