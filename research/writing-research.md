# The research behind the writing room

Checked 2 November 2026. Each finding, what it means for the build, and the source.

## The starting point

**Ruben Hassid, "Who writes this?", How to AI, 27 October 2026.** https://ruben.substack.com/p/292481-words

Ruben drafts his newsletter with Claude and still rewrites about 80% of it. For one issue Claude drafted 2,303 words and he kept 438 word for word. Every correction he makes is stored as a rule in a private GitHub repository, along with every past issue; a second Claude checks new drafts against those rules before he sees them. He has no "about me" file: Claude learns from his 127 issues. This class turns that setup into a build anyone can do in Claude Code.

## Why the checker uses your rules, not its own taste

**Meta FAIR (RAM group: Jason Weston, Ilia Kulikov, Swarnadeep Saha), "Towards RL for Superhuman Text: Unslopping AI", 2026.** https://facebookresearch.github.io/RAM/blogs/unslop/ . Technical report: "Aligning Autoresearch: Co-Improvement between Agents and Humans", arXiv:2610.38882, submitted 28 October 2026. https://arxiv.org/abs/2610.38882

When asked to choose between an AI-written and an expert-written section of an academic paper, AI judges picked the AI version 63.5% to 84.6% of the time (several model pairs, both orders shown). Caveats: the numbers are on the blog post, not in the report's abstract, and the task was academic writing.

*For the build:* a Claude left to judge writing on its own taste will favour Claude-like writing. The checker is told to check only against `RULES.md`.

## Why the writer and the checker are separate

**Cerebras, Sarah Chieng and Sherif Cherfa, "Lessons learned from building multi-agent workflows", 16 April 2026.** https://www.cerebras.ai/blog/lessons-learned-from-building-multi-agent-workflows

"Models today have very little taste." They keep the agent that builds separate from the agents that check, and the builder retries on what the checkers find. Caveat: written about coding agents, not prose.

*For the build:* the drafter and the checker are two subagents. The checker never sees the drafter's reasoning and cannot rewrite.

## Why rules learned from your writing beat a self-description

**Apple, Aroca-Ouellette, Mackraz, Theobald, Metcalf, "Aligning LLMs by Predicting Preferences from User Writing Samples" (PROSE), ICML 2025.** https://arxiv.org/abs/2505.23815

A model that turns a person's own writing samples into a written list of their preferences, checked across several samples, matched their style better than earlier methods (33% better than CIPHER; up to 9% on top of in-context examples alone). Note: PROSE learns from writing samples. The edit-to-rule step in this build is Ruben's practice, not this paper's.

*For the build:* style comes from the archive plus explicit rules, each checked against real writing. No "about me" file.

## Why the instructions stay short and get reset

**Boris Cherny (Anthropic, creator of Claude Code), speaking at Y Combinator, 2026**, as reported in e.g. Charlie Hills, "Delete your CLAUDE.md", 9 August 2026. https://charliehills.substack.com/p/delete-your-claudemd

Every six months, delete your CLAUDE.md, skills and hooks, see what the model does, and add back only what it still gets wrong. **(check before class: no primary recording found; reports differ on which YC talk.)**

*For the build:* `CLAUDE.md` under 200 words, `RULES.md` under 40 rules, monthly `/prune`, six-month fresh start.

## Claude Code features used

Checked against the official docs, 2 November 2026.

| Feature | Where | Docs |
| --- | --- | --- |
| Project instructions | `CLAUDE.md` in the folder | https://code.claude.com/docs/en/memory |
| Subagents (drafter, checker) | `.claude/agents/<name>.md`, YAML frontmatter with `name`, `description`, optional `tools` | https://code.claude.com/docs/en/sub-agents |
| Skills as commands (`/draft`, `/check`, `/learn`, `/prune`) | `.claude/skills/<name>/SKILL.md`, run as `/name`; `$ARGUMENTS` holds what follows | https://code.claude.com/docs/en/skills |
