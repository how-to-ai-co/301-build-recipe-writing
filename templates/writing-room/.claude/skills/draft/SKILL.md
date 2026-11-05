---
name: draft
description: Draft a piece from drafts/<slug>/idea.md with the drafter, check it with the checker, fix, and hand it to the writer. Usage: /draft <slug>
---

Draft the piece in `drafts/$ARGUMENTS/`.

1. If `drafts/$ARGUMENTS/idea.md` is missing or has no opinion in it, ask the writer for the idea and their opinion, save it there, and continue.
2. Use the **drafter** subagent to write `drafts/$ARGUMENTS/claude.md`.
3. Use the **checker** subagent to check `claude.md` against `RULES.md`. Keep the report.
4. If anything is flagged, give the report to the drafter to fix, then check again. At most two rounds.
5. For every rule the checker flagged, add 1 to its `Caught:` line in `RULES.md`.
6. Show the writer: the final checker report, any `[ASK: ...]` placeholders, and the path to `claude.md`.
7. Copy `claude.md` to `mine.md` and tell the writer: "Edit `mine.md` until it is yours. Then run `/learn $ARGUMENTS`." Never edit `mine.md` yourself.
