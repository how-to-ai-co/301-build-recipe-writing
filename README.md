# 301 Build Recipe: Writing

Materials for the **AI 301 live workshop: build a writing room where Claude drafts like you, a second Claude checks, and every edit you make becomes a rule.** Students paste one recipe into Claude Code. Claude gathers their past writing, finds their first rules with them, builds a drafter and a separate checker, backs everything up to a private GitHub repository, and runs one real piece through the loop.

Based on Ruben Hassid's "Who writes this?" (How to AI, 27 October 2026): https://ruben.substack.com/p/292481-words

Handout and recipe: https://301-build-recipe-writing.vercel.app

Prerequisite: the AI 201 live workshop (Claude Code and connectors).

## What's here

- **`public/build-recipe.md`**: the prompt students paste into Claude Code. Keep `content/recipe.json` identical (`npm run sync`).
- **`AGENTS.md`** and **`CONVENTIONS.md`**: orientation for the agent that clones this repo, and the fixed names (the student's folder, the loop, the rule format, the limits).
- **`templates/writing-room/`**: the starter folder copied to `~/Documents/writing-room/`: `CLAUDE.md`, `RULES.md`, the drafter and checker subagents, the `/draft`, `/check`, `/learn` and `/prune` skills, and `tools/kept_words.py`.
- **`playbook/`**: the loop, gathering past writing, seeding the first rules (before/after pairs or the blind rewrite), notes per kind of writing, GitHub, pruning, and safety with the end-of-class checklist.
- **`examples/pricing/`**: one short piece through the whole loop.
- **`research/writing-research.md`**: the research behind the design, with sources. Checked 2 November 2026.
- **`app/`, `content/`**: the handout site.

## Before class

- Re-check every item marked **(check before class)**: export menus (LinkedIn, Substack), the Claude GitHub connector, Claude privacy settings, and the Boris Cherny source.
- Run the recipe once end to end on a test account, including `gh auth login` on a fresh machine.

## Handout site

`npm ci`, then `npm run dev`. Validate with `npm run check` and `npm run build`. No accounts or keys are needed.
