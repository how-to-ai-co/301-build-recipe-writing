import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import recipe from "@/content/recipe.json";
import { REPO, POST, loop, room, principles, prompt } from "@/content/writing";
import { CopyPrompt } from "./copy-prompt";
import { Topbar } from "./topbar";

const lines = (recipe as string).trimEnd().split("\n").length;
const tone = (t: string) => ({ "--tone": `var(--t-${t})`, "--tint": `var(--t-${t}-tint)` }) as CSSProperties;

export default function Page() {
  return <>
    <div className="wrap">
      <Topbar active="steps" />

      <header className="hero">
        <div className="course-tag"><span className="course-num">AI 301</span><span>Live course · Writing</span></div>
        <h1>Write like you.</h1>
        <p className="lede">Build a writing room in Claude Code. One Claude drafts, a second Claude checks the draft against your rules, you edit, and every edit becomes a sharper rule. You bring the ideas. Your edits teach it the rest.</p>
        <CopyPrompt text={recipe as string} lines={lines} />
        <a className="repo-link" href={REPO} target="_blank" rel="noreferrer"><img src="/logos/github.svg" alt="" width={16} height={16} /> github.com/how-to-ai-co/301-build-recipe-writing <ArrowUpRight size={14} aria-hidden="true" /></a>
      </header>

      <section className="section" aria-labelledby="loop">
        <div className="section-head">
          <div><span className="eyebrow accent">How it works</span><h2 id="loop" className="sec-title" style={{ marginBottom: 0 }}>The loop</h2></div>
          <a className="step-link" href="example">See one piece go through it <ArrowUpRight size={15} aria-hidden="true" /></a>
        </div>
        <ol className="loop">
          {loop.map(s => <li key={s.name} className="loop-step" style={tone(s.tone)}>
            <span className="loop-n">{s.n}</span>
            <b>{s.name}</b>
            <span className="loop-who">{s.who} · <code>{s.cmd}</code></span>
            <p>{s.what}</p>
          </li>)}
        </ol>
        <p className="note">Then it starts again with your next piece. Each one makes the next draft closer to you.</p>
      </section>

      <section className="section" aria-labelledby="why">
        <span className="eyebrow accent">Why it&apos;s built this way</span>
        <h2 id="why" className="sec-title">Rules from your edits, not your adjectives</h2>
        <div className="picks">
          {principles.map((p, i) => <div key={p.t} className="pick" style={tone(["orange", "violet", "blue", "green"][i])}><b>{p.t}</b><p>{p.d}</p></div>)}
        </div>
        <div className="quote-card">
          <p>Claude drafted 2,303 words of one issue. Ruben Hassid kept 438. After 127 issues he still rewrites about 80%, and every rewrite becomes a rule.</p>
          <a className="step-link" href={POST} target="_blank" rel="noreferrer">Read &ldquo;Who writes this?&rdquo; <ArrowUpRight size={14} aria-hidden="true" /></a>
        </div>
      </section>

      <section className="section" aria-labelledby="room">
        <span className="eyebrow accent">What you leave with</span>
        <h2 id="room" className="sec-title">Your writing room</h2>
        <div className="room">
          <div className="room-head"><span className="room-path">~/Documents/writing-room/</span><span className="lvl Watch">Private on GitHub</span></div>
          <ul>{room.map(f => <li key={f.path}><code>{f.path}</code><span>{f.what}</span></li>)}</ul>
        </div>
        <p className="note">Bring 10 to 20 of your best recent pieces, and the idea for the next one. Newsletters, LinkedIn posts, client emails, reports and scripts all work.</p>
      </section>

      <section className="does" id="prompt">
        <span className="eyebrow accent">The prompt</span>
        <h2>What the prompt does</h2>
        <p className="lede">You paste it once. Claude works through eight steps, and only stops for your answers, sign-ins, and your own writing.</p>
        <ol className="does-list">
          {prompt.map((p, i) => <li key={p.t}><span className="n">{i + 1}</span><div><b>{p.t}</b><p>{p.d}</p></div></li>)}
        </ol>
        <details className="full">
          <summary>Read the full prompt</summary>
          <div className="md"><ReactMarkdown remarkPlugins={[remarkGfm]}>{recipe as string}</ReactMarkdown></div>
        </details>
      </section>
    </div>
    <footer className="foot">How to AI · AI 301</footer>
  </>;
}
