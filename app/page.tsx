import type { CSSProperties } from "react";
import recipe from "@/content/recipe.json";
import { CopyPrompt } from "./copy-prompt";

const css = (v: Record<string, string | number>) => v as CSSProperties;

function Archive() {
  const pieces = [["Newsletter", 92], ["LinkedIn post", 70], ["Client email", 84]] as const;
  return <div className="viz viz-archive">
    {pieces.map(([name, w], i) => <div key={name} className="page" style={css({ "--i": i })}>
      <b>{name}</b><i style={{ width: `${w}%` }} /><i style={{ width: `${w - 18}%` }} /><i style={{ width: `${w - 6}%` }} />
    </div>)}
  </div>;
}

function Draft() {
  const lines = [96, 88, 92, 60];
  return <div className="viz viz-draft">
    <div className="sheet">
      <img src="logos/claude.svg" alt="" width={22} height={22} />
      {lines.map((w, i) => <i key={i} style={css({ "--w": `${w}%`, "--i": i })} />)}
    </div>
  </div>;
}

function Check() {
  return <div className="viz viz-check">
    <div className="sheet">
      <p>Pricing is one of the most important decisions you will make.</p>
      <p className="hit">In today&apos;s fast-moving world, every dollar counts.</p>
      <p>Start with what the client already pays.</p>
    </div>
    <span className="flag">Rule 3: no filler openers</span>
  </div>;
}

function Edit() {
  return <div className="viz viz-edit">
    <div className="sheet">
      <p><s>In today&apos;s fast-moving world, every dollar counts.</s></p>
      <p className="new">Your client already knows what they pay.</p>
    </div>
  </div>;
}

function Rules() {
  const rules = ["Say the number first", "No filler openers", "Short words over long ones"];
  return <div className="viz viz-rules">
    <ul>{rules.map((r, i) => <li key={r} className={i === rules.length - 1 ? "added" : ""}><span>{i + 1}</span>{r}</li>)}</ul>
  </div>;
}

const steps = [
  { t: "Bring your best writing", d: "10 to 20 pieces you are proud of.", v: <Archive /> },
  { t: "Claude drafts", d: "From your idea and your opinion.", v: <Draft /> },
  { t: "A second Claude checks", d: "Against your rules, nothing else.", v: <Check /> },
  { t: "You edit", d: "Make it sound like you.", v: <Edit /> },
  { t: "Your edits become rules", d: "Every draft gets closer.", v: <Rules /> },
];

export default function Page() {
  return <>
    <div className="wrap">
      <div className="topbar"><span className="wordmark">How to AI<span className="dot">.</span></span><span className="eyebrow">AI 301 · Writing</span></div>

      <header className="hero">
        <h1>Make Claude write like you.</h1>
        <CopyPrompt text={recipe as string} />
      </header>

      <ol className="flow-steps" aria-label="How it works">
        {steps.map((s, i) => <li key={s.t} className="step">
          <div className="step-text">
            <span className="big-num">{i + 1}</span>
            <h2>{s.t}</h2>
            <p>{s.d}</p>
          </div>
          <div aria-hidden="true">{s.v}</div>
        </li>)}
      </ol>
    </div>
    <footer className="foot">How to AI · AI 301</footer>
  </>;
}
