# The loop

Idea, draft, check, edit, learn. Each piece you write makes the next draft closer to you.

## Why it works

1. **Your edits say more than any description of your style.** Ask people to describe how they write and you get "clear, punchy, warm". Show Claude what you cut and you get something it can use: "never open with 'In today's issue'". So the room has no "about me" file. Claude learns from your archive and from the rules your edits produce.
2. **A model is a poor judge of writing, especially its own.** In a 2026 Meta FAIR test, AI judges preferred an AI-written section of an academic paper over an expert's 63.5% to 84.6% of the time. So the checker does not use its own taste. It checks against your rules and nothing else.
3. **Separate the writer from the checker.** A Claude that checks its own draft tends to approve it. The checker is a separate subagent (a second Claude with its own instructions) that never saw the drafter's reasoning.
4. **Keep the instructions short.** Long instruction files go stale and fight each other. `CLAUDE.md` stays under 200 words, `RULES.md` under 40 rules, and both get pruned.

Sources are in `research/writing-research.md`.

## The five steps

| # | Step | Who | Command | Output |
| --- | --- | --- | --- | --- |
| 1 | Idea | You | (none) | `drafts/<slug>/idea.md` |
| 2 | Draft | Drafter | `/draft <slug>` | `drafts/<slug>/claude.md` |
| 3 | Check | Checker | inside `/draft`, or `/check <file>` | A report: rule, line |
| 4 | Edit | You | (none) | `drafts/<slug>/mine.md` |
| 5 | Learn | Claude | `/learn <slug>` | New rules, an `edits/` log, the piece in `archive/`, a commit |

### 1. Idea

Write what the piece is about and what you think. Bullet points are fine. A voice memo transcript is fine. The opinion has to be yours: Claude will not make one up, and leaves `[ASK: ...]` where something is missing.

```text
Slug: pricing
Idea: most freelancers undercharge because they price by the hour.
My take: price by the outcome. I doubled my rate in 2025 and lost one client out of nine.
Must include: the one-client story. The line "you are not selling hours".
```

### 2 and 3. Draft and check

`/draft pricing` runs the drafter, then the checker, then the drafter again to fix what was flagged. Two rounds at most. You see the last checker report and the draft.

### 4. Edit

Rewrite `mine.md` until it is yours. Edit freely. Every change you make is information. Do not tidy Claude's draft politely. Change it the way you would if nobody were watching.

### 5. Learn

`/learn pricing`:

- counts how many of Claude's words you kept,
- shows you the patterns in your changes, one example each,
- asks *why* you made each one, and writes your answer into a rule,
- logs it in `edits/`, files the piece in `archive/`, commits and pushes.

## What to expect

Your kept-words number is the honest measure. On day one it is often 10 to 25%. Ruben Hassid, whose newsletter this class is based on, still rewrites about 80% of his drafts after 127 issues: Claude drafted 2,303 words of one issue and he kept 438. The goal is not 100%. The goal is a draft that is quicker to fix and an archive of rules that is yours.

## The weekly routine

```text
1. Write idea.md (5 minutes).
2. /draft <slug>
3. Edit mine.md.
4. /learn <slug>
```

Once a month: `/prune`. Every six months: the fresh start (see `prune.md`).
