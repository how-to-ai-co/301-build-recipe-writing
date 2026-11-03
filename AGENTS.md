# Instructions for coding agents

You are helping a How to AI 301 student build a writing room: a folder where one Claude drafts, a second Claude checks the draft against the student's own rules, the student edits, and every edit becomes a sharper rule. The student is not an engineer. The full recipe is `public/build-recipe.md`. Names and file layout are fixed in `CONVENTIONS.md`; follow them exactly.

## What is in this repo

| Path | Use it for |
| --- | --- |
| `CONVENTIONS.md` | The student's folder, the loop, the rule format, the limits. Read first. |
| `templates/writing-room/` | The starter folder. Copy it to `~/Documents/writing-room/`, then fill it in. |
| `playbook/the-loop.md` | Why it works and how each step runs. |
| `playbook/gather-your-writing.md` | How to collect the student's past pieces from Substack, LinkedIn, Gmail, Google Docs, Word and websites. |
| `playbook/seed-rules.md` | How to find the first rules in class: from before/after pairs, or by the blind rewrite. How to word a rule. |
| `playbook/formats.md` | Notes per kind of writing (newsletter, LinkedIn, client email, report, script, blog). |
| `playbook/github.md` | The private GitHub backup and the optional Claude connector. |
| `playbook/prune.md` | The monthly prune and the six-month fresh start. |
| `playbook/safety.md` | Privacy, client material, and the end-of-class checklist. |
| `examples/` | One full worked example: idea, Claude's draft, the checker's report, the student's edit, the learn report. |
| `research/writing-research.md` | The research behind the design, with sources. |
| `app/`, `content/`, `public/` | The workshop handout website. Not part of the student's build. |

If you cannot clone this repo, stop and tell the student. Never recreate these files from memory.

## Rules

- Ask the student's questions up front (recipe Step 1). After that, stop only for sign-ins, approvals and the student's own writing and editing.
- **Never write the student's opinions.** Ideas and opinions come from the student. If `idea.md` has no opinion, ask for one.
- **Never invent a rule.** Every rule comes from a real edit or a real difference between Claude's text and the student's, and is confirmed by the student in their own words.
- **No "about me" style file.** Style is learned from the archive and `RULES.md`, not from the student describing themselves.
- The checker only checks. It quotes the line and names the rule. It never rewrites and never adds its own taste.
- The GitHub repository is **private**. Never create a public one.
- Nothing is published, posted or emailed from this build. The student publishes by hand.
- Keep client names, confidential numbers and anything under NDA out of the archive unless the student confirms it is theirs to store.
- Never ask for passwords or codes in chat. The student types them into GitHub's own pages.
- Narrate in one short line at a time. Give URLs as clickable links.
