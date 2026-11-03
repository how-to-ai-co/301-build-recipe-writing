"use client";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  function flip() {
    const root = document.documentElement;
    const dark = root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
    const next = dark ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch {}
  }
  return <button className="theme" onClick={flip} aria-label="Switch light or dark"><Sun size={16} aria-hidden="true" className="sun" /><Moon size={16} aria-hidden="true" className="moon" /></button>;
}
