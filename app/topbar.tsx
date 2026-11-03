import { REPO } from "@/content/writing";

export function Topbar({ active }: { active: "steps" | "example" }) {
  return <div className="topbar">
    <a href="./" className="wordmark">How to AI<span className="dot">.</span></a>
    <nav className="nav" aria-label="Pages">
      <a href="./" aria-current={active === "steps" ? "page" : undefined}>Steps</a>
      <a href="example" className="nav-inside" aria-current={active === "example" ? "page" : undefined}>See an example</a>
      <a href={REPO} target="_blank" rel="noreferrer" className="gh"><img src="/logos/github.svg" alt="" width={16} height={16} /> <span className="gh-label">GitHub</span></a>
    </nav>
  </div>;
}
