# Conventions (for anyone writing in this repo)

Every playbook, template and the recipe use these names. Keep them identical.

## The student's writing room

Claude creates `~/Documents/writing-room/` for each student by copying `templates/writing-room/`. It is a git repository (a folder that remembers every version of every file), backed up to a **private** GitHub repository called `writing-room`.

| Path | What it is |
| --- | --- |
| `CLAUDE.md` | Short instructions Claude reads every time it opens the folder. Under 200 words. Says what the student writes and how the folder works. **Not** a description of their style. |
| `RULES.md` | The student's rules, numbered `R1`, `R2`… Each one came from a real edit, is written in the student's own words, and has a before/after example. The only style guide. |
| `archive/` | Past published pieces, one file each: `YYYY-MM-DD-slug.md`, with the numbers if they have them (opens, likes, replies). |
| `drafts/<slug>/` | Work in progress. `idea.md` (the student's idea and opinion), `claude.md` (Claude's checked draft, never edited by hand), `mine.md` (the student's edit of it). |
| `edits/` | One file per finished piece: `YYYY-MM-DD-slug.md`. The kept-words count, the corrections in the student's words, and the rules that came out of it. |
| `.claude/agents/drafter.md` | The drafter: writes from `idea.md`, following `RULES.md` and the archive. |
| `.claude/agents/checker.md` | The checker: a separate Claude that only checks a draft against `RULES.md`. It never rewrites. |
| `.claude/skills/` | The four commands: `/draft`, `/check`, `/learn`, `/prune`. |
| `tools/kept_words.py` | Counts how many of Claude's words survived the student's edit. |
| `.writing/setup.json` | Answers and progress (no secrets). |

## The loop

Use these exact names everywhere.

| # | Name | Who | What happens |
| --- | --- | --- | --- |
| 1 | **Idea** | Student | The student writes the idea and their opinion in `idea.md`. Bullet points are fine. Claude never supplies the opinion. |
| 2 | **Draft** | Drafter | `/draft <slug>`: the drafter writes `claude.md`. |
| 3 | **Check** | Checker | The checker lists every rule the draft breaks, with the line. The drafter fixes them. At most two rounds, then the student sees it. |
| 4 | **Edit** | Student | The student copies `claude.md` to `mine.md` and rewrites it until it is theirs. |
| 5 | **Learn** | Claude | `/learn <slug>`: compares `claude.md` with `mine.md`, counts kept words, asks the student *why* for each pattern of change, and turns the answers into new or sharper rules. Then commits and pushes. |

## The rule format

```markdown
### R7. Open with the strongest line, not the setup.
- Why (my words): "Nobody reads past a warm-up. Start where it hurts."
- Before: "In today's issue, I want to talk about pricing."
- After: "You are charging half what you should."
- From: edits/2026-11-04-pricing.md
- Caught: 0
```

`Caught` counts how many times the checker flagged it. `/prune` uses it.

## Limits

- `CLAUDE.md`: under 200 words.
- `RULES.md`: under 40 rules. Past that, `/prune` merges or retires rules.
- Fresh start: every six months, archive `RULES.md` and rebuild it from the last three months of edits.

## The kinds of writing

Ids used in `.writing/setup.json` and `playbook/formats.md`: `newsletter`, `linkedin`, `client-email`, `report`, `script`, `blog`, `other`.

## Writing style for this repo

Plain words for non-engineers. Short sentences. No hype. Explain any technical word the first time. Every prompt the student pastes goes in a fenced block with `text`.
