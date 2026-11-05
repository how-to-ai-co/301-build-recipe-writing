---
name: learn
description: Learn from the writer's edit. Compare drafts/<slug>/claude.md with mine.md, count kept words, ask the writer why, and turn the answers into rules. Then archive, commit and push. Usage: /learn <slug>
---

Learn from the edit in `drafts/$ARGUMENTS/`.

1. **Count.** Run `python3 tools/kept_words.py drafts/$ARGUMENTS/claude.md drafts/$ARGUMENTS/mine.md`. If Python is missing, count by hand: words of Claude's draft that survive, in order, in the writer's version.
2. **Compare.** Read both files side by side. Group the changes into patterns (for example "cut every opening sentence", "replaced abstract words with a number", "split long sentences"). Ignore one-off fixes of facts.
3. **Ask why.** Show the writer the top patterns, each with one before/after example, and ask *why* they made that change. One short question per pattern. Wait for the answers. Use their exact words.
4. **Write rules.** For each answer:
   - If an existing rule covers it, sharpen that rule's wording or example instead of adding a new one.
   - Otherwise add a new rule at the end of `RULES.md` in the standard format, with their words in the "Why" line and `From: edits/<date>-$ARGUMENTS.md`.
   - Show the writer every new or changed rule and get a yes before saving.
5. **Log.** Write `edits/<today YYYY-MM-DD>-$ARGUMENTS.md` with: the kept-words numbers, the patterns, the writer's answers word for word, and the rules added or changed.
6. **Archive.** Copy `mine.md` to `archive/<today YYYY-MM-DD>-$ARGUMENTS.md`. Ask the writer for numbers later (opens, likes, replies) and add them when they have them.
7. **Save.** `git add -A`, commit with the message `learn: $ARGUMENTS (+N rules)`, and `git push`. Tell the writer it is backed up.
8. If `RULES.md` now has more than 40 rules, suggest `/prune`.
