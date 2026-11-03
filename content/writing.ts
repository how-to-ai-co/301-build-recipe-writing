export const REPO = "https://github.com/how-to-ai-co/301-build-recipe-writing";
export const blob = (p: string) => `${REPO}/blob/main/${p}`;
export const POST = "https://ruben.substack.com/p/292481-words";
export const CHECKED = "2 November 2026";

export const loop = [
  { n: 1, name: "Idea", who: "You", tone: "orange", cmd: "idea.md", what: "What the piece is about and what you think. Bullet points are fine. Claude never makes up the opinion." },
  { n: 2, name: "Draft", who: "Drafter", tone: "blue", cmd: "/draft", what: "One Claude writes a first draft from your idea, your archive and your rules." },
  { n: 3, name: "Check", who: "Checker", tone: "violet", cmd: "inside /draft", what: "A second Claude checks the draft against your rules only. It quotes the line and names the rule. It never rewrites." },
  { n: 4, name: "Edit", who: "You", tone: "orange", cmd: "mine.md", what: "You rewrite it until it's yours. Every change you make is information." },
  { n: 5, name: "Learn", who: "Claude", tone: "green", cmd: "/learn", what: "Counts the words you kept, asks why you changed what you changed, and turns your answers into rules." },
];

export const room = [
  { path: "CLAUDE.md", what: "Under 200 words. What you write and how the folder works. Not your style." },
  { path: "RULES.md", what: "Your rules, each from a real edit, in your own words, with a before and after." },
  { path: "archive/", what: "Your 10 to 20 best recent pieces, with their numbers." },
  { path: "drafts/", what: "Each piece in progress: your idea, Claude's draft, your edit." },
  { path: "edits/", what: "What you changed in each piece, why, and the rules it produced." },
  { path: ".claude/", what: "The drafter, the checker, and /draft, /check, /learn, /prune." },
];

export const principles = [
  { t: "Your edits beat your self-description", d: "\"Clear and punchy\" is useless to Claude. \"Never open with 'In today's issue'\" is not. There's no about-me file: the room learns from your archive and your edits." },
  { t: "Claude is a poor judge of writing", d: "In a 2026 Meta FAIR test, AI judges preferred AI-written text over an expert's 63.5% to 84.6% of the time. So the checker uses your rules, not its taste." },
  { t: "The writer and the checker are separate", d: "A Claude that checks its own draft tends to approve it. The checker is a separate subagent that only checks." },
  { t: "Short instructions, pruned often", d: "Under 200 words of instructions, under 40 rules, a monthly prune and a fresh start every six months." },
];

export const prompt = [
  { t: "Asks you everything up front", d: "What you write, where your past pieces live, whether you have AI drafts you rewrote, the next piece you need, GitHub, and anything confidential." },
  { t: "Builds the room and gathers your writing", d: "A folder on your computer with your 10 to 20 best recent pieces, from Substack, LinkedIn, Gmail, Docs or your site." },
  { t: "Finds your first rules", d: "From your before-and-after pairs, or a blind rewrite: Claude writes three of your pieces from a summary, and you explain why yours is different." },
  { t: "Builds the drafter and the checker", d: "Two separate Claudes and four commands, tested on your own writing so the rules don't flag your best lines." },
  { t: "Backs it up privately", d: "A private GitHub repository with every version of every file. Optionally connected to Claude, so you can draft from your phone." },
  { t: "Writes one real piece with you", d: "Your next piece, through the whole loop: idea, draft, check, your edit, learn. You see how many words you kept." },
  { t: "Walks the safety check", d: "Private repo, no client secrets in the archive, nothing publishes itself." },
  { t: "Hands off", d: "Your top rules, your kept-words number, the four-line weekly routine, and a prompt to pick up where you left off." },
];
