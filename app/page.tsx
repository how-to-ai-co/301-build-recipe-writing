import { FileText, Folder, Lightbulb, ListChecks, PenLine, Pencil, RefreshCw, Terminal } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import recipe from "@/content/recipe.json";
import { META_FAIR, POST, classSteps, loop, room } from "@/content/writing";
import { CopyPrompt } from "./copy-prompt";
import { Topbar } from "./topbar";

const lines = (recipe as string).trimEnd().split("\n").length;
const loopIcons = [Lightbulb, PenLine, ListChecks, Pencil, RefreshCw];
const roomIcons = { rules: ListChecks, folder: Folder, cmd: Terminal, file: FileText };

export default function Page() {
  return <>
    <div className="wrap">
      <Topbar active="steps" />
      <p className="meta">AI 301 workshop · Writing · From How to AI, for 201 graduates · Copy one prompt</p>

      <header className="top">
        <h1>One prompt builds a writing room where Claude drafts and your edits become the rules</h1>
        <div className="ask">
          <p><b>Paste the prompt into Claude Code at the start of class.</b> Bring 10 to 20 of your best pieces and the idea for your next one.</p>
          <CopyPrompt text={recipe as string} />
        </div>
        <ol className="path" aria-label="The loop">
          {loop.map((s, i) => {
            const Icon = loopIcons[i];
            return <li key={s.name} className={s.you ? "you" : ""}>
              <span className="who"><b>{i + 1}</b> · {s.who}</span>
              <h3><Icon size={18} aria-hidden="true" />{s.name}</h3>
              <code>{s.cmd}</code>
              <span className="does">{s.does}</span>
            </li>;
          })}
        </ol>
        <a className="link" href="example">See one piece go through the loop →</a>
      </header>

      <section className="section" aria-labelledby="why">
        <h2 id="why">Claude drafts well but judges writing badly, so only your edits set the rules</h2>
        <div className="grid-2">
          <div className="card stat-card">
            <h3>Ruben Hassid kept 438 of the 2,303 words Claude drafted for one issue</h3>
            <span className="big">19%</span>
            <div className="bar-row">
              <div className="bar-track" role="img" aria-label="438 of 2,303 words kept, 19%"><div className="bar-fill" style={{ width: "19%" }} /></div>
              <div className="bar-scale"><span>0</span><span>2,303 words</span></div>
            </div>
            <a className="link" href={POST} target="_blank" rel="noreferrer">Ruben&apos;s post, 27 Oct 2026 →</a>
          </div>
          <div className="card stat-card">
            <h3>AI judges picked AI-written text over an expert&apos;s most of the time</h3>
            <span className="big">63.5–84.6%</span>
            <div className="bar-row">
              <div className="bar-track" role="img" aria-label="Between 63.5% and 84.6%"><div className="bar-fill range" style={{ left: "63.5%", width: "21.1%" }} /></div>
              <div className="bar-scale"><span>0%</span><span>50%</span><span>100%</span></div>
            </div>
            <a className="link" href={META_FAIR} target="_blank" rel="noreferrer">Meta FAIR, 2026, academic writing →</a>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="room">
        <h2 id="room">After class you have a private folder with five parts</h2>
        <div className="card">
          <div className="folder-head"><code>~/Documents/writing-room/</code><span className="pill good">Private on GitHub</span></div>
          <ul className="folder">
            {room.map(f => {
              const Icon = roomIcons[f.icon as keyof typeof roomIcons];
              return <li key={f.path}><Icon size={18} aria-hidden="true" /><code>{f.path}</code><span className="label">{f.size}</span></li>;
            })}
          </ul>
        </div>
      </section>

      <section className="section" aria-labelledby="class">
        <h2 id="class">In class, Claude takes you through five steps and stops only for you</h2>
        <ol className="path">
          {classSteps.map((s, i) => <li key={s.name} className={s.who !== "Claude" ? "you" : ""}>
            <span className="who"><b>{i + 1}</b> · {s.who}</span>
            <h3>{s.name}</h3>
          </li>)}
        </ol>
        <details className="more">
          <summary>Read the full prompt ({lines} lines)</summary>
          <div className="md"><ReactMarkdown remarkPlugins={[remarkGfm]}>{recipe as string}</ReactMarkdown></div>
        </details>
      </section>
    </div>
    <footer className="foot">How to AI · AI 301 · Based on Ruben Hassid&apos;s &ldquo;Who writes this?&rdquo;</footer>
  </>;
}
