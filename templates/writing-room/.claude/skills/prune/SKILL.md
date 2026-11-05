---
name: prune
description: Monthly tidy of RULES.md and CLAUDE.md. Merge duplicates, retire rules that never fire, and keep both files short. Usage: /prune
---

Tidy the writer's rules. Change nothing without their yes.

1. Read `RULES.md`, `CLAUDE.md`, and the `edits/` files from the last two months.
2. Propose, in one list:
   - **Merge:** rules that say the same thing. Show the merged wording.
   - **Retire:** rules with `Caught: 0` that are older than two months and that the writer's recent edits never touch. Claude has probably learned them.
   - **Sharpen:** rules the checker reported as unclear, or that flagged the writer's own archive pieces.
   - **Contradictions:** rules that pull against each other. Ask which wins.
3. After the writer says yes to each change, apply it. Move retired rules to the bottom under `## Retired` instead of deleting them.
4. Check `CLAUDE.md` is under 200 words. Suggest cuts if not.
5. Commit with the message `prune: N merged, N retired` and push.

**Every six months**, offer the fresh start instead: move `RULES.md` to `edits/rules-<date>.md`, start an empty one, and rebuild it with the writer from the last three months of `edits/`. Ask first.
