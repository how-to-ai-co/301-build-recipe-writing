import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { blob } from "@/content/writing";
import { Topbar } from "../topbar";

export const metadata: Metadata = { title: "See an example | 301 Build Recipe: Writing | How to AI" };

const dir = join(process.cwd(), "examples/pricing");
const read = (f: string) => readFileSync(join(dir, f), "utf8").trim();

const idea = read("idea.md");
const first = read("claude-first.md");
const check = read("check.txt");
const fixed = read("claude.md");
const mine = read("mine.md");
const learn = read("learn.md");
const patterns = learn.split("## Patterns in your edit")[1].split("## Rules")[0].trim();
const kept = learn.match(/You kept (\d+) of them \((\d+)%\)/)!;
const total = learn.match(/Claude wrote (\d+) words/)![1];
const newRules = read("RULES.md").split("\n### ").slice(1)
  .map(r => { const [title, ...rest] = r.split("\n"); return { title, why: rest.find(l => l.startsWith("- Why"))?.split(": ").slice(1).join(": ") ?? "" }; })
  .filter(r => /^R[789]\./.test(r.title));

const Step = ({ n, title, who, children }: { n: number; title: string; who: string; children: React.ReactNode }) =>
  <section className="ex-step">
    <div className="ex-label"><span className="loop-n">{n}</span><div><b>{title}</b><span>{who}</span></div></div>
    <div className="ex-body">{children}</div>
  </section>;

export default function Example() {
  return <>
    <div className="wrap">
      <Topbar active="example" />
      <header className="hero inside-hero">
        <div className="course-tag"><span className="course-num">AI 301</span><span>See an example</span></div>
        <h1>One piece, start to finish.</h1>
        <p className="lede">A freelance designer&apos;s newsletter, kept short to fit on a screen. Their first six rules came from a blind rewrite in class. Here&apos;s their next piece going through the loop.</p>
      </header>

      <div className="ex">
        <Step n={1} title="Idea" who="The writer · idea.md">
          <pre className="ex-text">{idea}</pre>
        </Step>

        <Step n={2} title="Draft" who="The drafter · first pass">
          <pre className="ex-text muted">{first}</pre>
        </Step>

        <Step n={3} title="Check" who="The checker · against RULES.md only">
          <pre className="ex-text mono">{check}</pre>
          <p className="note">The drafter fixes only the flagged lines, then the checker runs again. Nothing flagged on round two.</p>
        </Step>

        <Step n={4} title="Edit" who="The writer · claude.md → mine.md">
          <div className="ex-pair">
            <div><span className="eyebrow">Claude&apos;s checked draft</span><pre className="ex-text muted">{fixed}</pre></div>
            <div><span className="eyebrow accent">What the writer published</span><pre className="ex-text">{mine}</pre></div>
          </div>
        </Step>

        <Step n={5} title="Learn" who="/learn pricing">
          <div className="kept"><b>{kept[2]}%</b><span>of Claude&apos;s words kept ({kept[1]} of {total})</span></div>
          <div className="md ex-md"><ReactMarkdown remarkPlugins={[remarkGfm]}>{patterns}</ReactMarkdown></div>
          <span className="eyebrow accent">New rules</span>
          <ul className="new-rules">{newRules.map(r => <li key={r.title}><b>{r.title}</b><span>{r.why}</span></li>)}</ul>
        </Step>
      </div>
      <p className="note">Real pieces are longer, and day-one kept-words numbers are usually lower. All the files are in <a className="step-link" style={{ marginTop: 0 }} href={blob("examples/pricing")} target="_blank" rel="noreferrer">examples/pricing <ArrowUpRight size={13} aria-hidden="true" /></a>.</p>

      <section className="closer">
        <h2>Build yours</h2>
        <p>Copy the prompt into Claude Code. Bring 10 to 20 of your best pieces and the idea for your next one.</p>
        <a className="btn" href="./">Get the prompt</a>
      </section>
    </div>
    <footer className="foot">How to AI · AI 301</footer>
  </>;
}
