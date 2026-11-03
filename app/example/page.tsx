import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";
import { blob } from "@/content/writing";
import { Topbar } from "../topbar";

export const metadata: Metadata = { title: "Worked example | 301 Build Recipe: Writing | How to AI" };

const dir = join(process.cwd(), "examples/pricing");
const read = (f: string) => readFileSync(join(dir, f), "utf8").trim();

// idea.md: "Label: text" lines
const idea = read("idea.md").split("\n").map(l => { const [k, ...v] = l.split(": "); return { k, v: v.join(": ") }; }).filter(x => x.k !== "Slug");

// check.txt: "R1 · "quote"" then "breaks: ..."
const check = read("check.txt");
const flags = [...check.matchAll(/^(R\d+) · "(.+?)"\s*\n\s*breaks: (.+)$/gm)].map(m => ({ rule: m[1], quote: m[2], breaks: m[3] }));
const flaggedRules = new Set(flags.map(f => f.rule)).size;

// learn.md: kept words and the three patterns
const learn = read("learn.md");
const [, draftWords, keptWords, pct] = learn.match(/Claude wrote (\d+) words\. You kept (\d+) of them \((\d+)%\)/)!;
const patterns = [...learn.matchAll(/- Claude: "(.+?)"\n\s+- You: "(.+?)"\n\s+- Why\? \*"(.+?)"\*/g)].map(m => ({ was: m[1], now: m[2], why: m[3] }));

// RULES.md: the rules this edit added
const rules = read("RULES.md").split("\n### ").slice(1).map(r => r.split("\n")[0]).filter(t => /^R[789]\./.test(t));
const totalRules = read("RULES.md").split("\n### ").length - 1;

export default function Example() {
  return <>
    <div className="wrap">
      <Topbar active="example" />
      <p className="meta">AI 301 workshop · Writing · Worked example · One newsletter piece, idea to new rules</p>

      <header className="top">
        <h1>A short newsletter piece went through the loop once and left behind three new rules</h1>
        <div className="grid-3">
          <div className="card stat-card">
            <span className="big">{pct}%</span>
            <div className="bar-track" role="img" aria-label={`${keptWords} of ${draftWords} words kept`}><div className="bar-fill" style={{ width: `${pct}%` }} /></div>
            <span className="label">of Claude&apos;s words kept ({keptWords} of {draftWords})</span>
          </div>
          <div className="card stat-card">
            <span className="big">{flags.length}</span>
            <span className="label">lines the checker flagged before the writer saw it</span>
          </div>
          <div className="card stat-card">
            <span className="big">+{rules.length}</span>
            <span className="label">rules from the edit, now {totalRules} in all</span>
          </div>
        </div>
        <div className="ask">
          <p><b>Want this for your own writing?</b> Copy the prompt into Claude Code.</p>
          <a className="button main" href="./">Get the prompt</a>
        </div>
      </header>

      <section className="section" aria-labelledby="idea">
        <h2 id="idea">The writer gave Claude an idea and an opinion, nothing more</h2>
        <ul className="card idea">{idea.map(i => <li key={i.k}><b>{i.k}:</b> {i.v}</li>)}</ul>
      </section>

      <section className="section" aria-labelledby="check">
        <h2 id="check">The checker flagged {flags.length} lines against {flaggedRules} of the writer&apos;s rules</h2>
        <ul className="card flags">{flags.map(f => <li key={f.quote}><span className="pill bad">{f.rule}</span><q>{f.quote}</q><span className="label">{f.breaks}</span></li>)}</ul>
        <details className="more">
          <summary>See Claude&apos;s first draft</summary>
          <p className="text old md">{read("claude-first.md")}</p>
        </details>
      </section>

      <section className="section" aria-labelledby="edit">
        <h2 id="edit">The writer rewrote the checked draft</h2>
        <div className="grid-2">
          <div className="card"><h3 className="label" style={{ marginBottom: 10 }}>Claude&apos;s checked draft</h3><p className="text old">{read("claude.md")}</p></div>
          <div className="card"><h3 className="label" style={{ marginBottom: 10 }}>What the writer published</h3><p className="text">{read("mine.md")}</p></div>
        </div>
      </section>

      <section className="section" aria-labelledby="rules">
        <h2 id="rules">Three of those edits became three new rules</h2>
        <div className="grid-3">
          {patterns.map((p, i) => <div key={p.why} className="card rule-card">
            <span className="pill clay" style={{ justifySelf: "start" }}>{rules[i]?.split(". ")[0]}</span>
            <h3>{rules[i]?.split(". ").slice(1).join(". ")}</h3>
            <p className="was">{p.was}</p>
            <p className="now">{p.now}</p>
            <p className="why label">Why: &ldquo;{p.why}&rdquo;</p>
          </div>)}
        </div>
        <a className="link" href={blob("examples/pricing")} target="_blank" rel="noreferrer">All the files for this example →</a>
      </section>
    </div>
    <footer className="foot">How to AI · AI 301 · Based on Ruben Hassid&apos;s &ldquo;Who writes this?&rdquo;</footer>
  </>;
}
