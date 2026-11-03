"use client";
import { useRef, useState } from "react";
import { Check, Copy, Download } from "lucide-react";

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
  return <>
    <div className="ask-buttons">
      <button className="main" onClick={copy}>{state === "copied" ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}{state === "copied" ? "Copied" : "Copy the prompt"}</button>
      <a className="button" href="build-recipe.md" download="301-writing-recipe.md"><Download size={16} aria-hidden="true" /> Download</a>
    </div>
    <p aria-live="polite" className="ask-status">
      {state === "copied" && "Copied. Paste it into a new Claude Code session."}
      {state === "error" && "Your browser blocked copying. Use Download instead."}
    </p>
  </>;
}
