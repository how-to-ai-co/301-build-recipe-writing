export const REPO = "https://github.com/how-to-ai-co/301-build-recipe-writing";
export const blob = (p: string) => `${REPO}/blob/main/${p}`;
export const POST = "https://ruben.substack.com/p/292481-words";
export const META_FAIR = "https://facebookresearch.github.io/RAM/blogs/unslop/";

// The loop: who does each step, the command, and what comes out.
export const loop = [
  { name: "Idea", who: "You", you: true, cmd: "idea.md", does: "your opinion, in bullets" },
  { name: "Draft", who: "Claude 1", you: false, cmd: "/draft", does: "a first draft" },
  { name: "Check", who: "Claude 2", you: false, cmd: "/draft", does: "broken rules, line by line" },
  { name: "Edit", who: "You", you: true, cmd: "mine.md", does: "your version" },
  { name: "Learn", who: "Claude", you: false, cmd: "/learn", does: "words kept, new rules" },
];

// The private folder each student leaves with.
export const room = [
  { path: "RULES.md", size: "10 to 20 rules on day one", icon: "rules" },
  { path: "archive/", size: "your 10 to 20 best pieces", icon: "folder" },
  { path: "drafts/ and edits/", size: "each piece, before and after", icon: "folder" },
  { path: ".claude/", size: "/draft /check /learn /prune", icon: "cmd" },
  { path: "CLAUDE.md", size: "under 200 words", icon: "file" },
];

// What the prompt does in class, in order.
export const classSteps = [
  { name: "Asks 6 questions", who: "Claude" },
  { name: "Gathers your past writing", who: "You and Claude" },
  { name: "Finds your first rules", who: "You and Claude" },
  { name: "Builds the checker and backs it up", who: "Claude" },
  { name: "Runs your next piece through the loop", who: "You and Claude" },
];
