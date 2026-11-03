# Prune: keep the rules short

Rules pile up. Old ones go stale, new ones repeat old ones, and a long list starts to fight itself. Two habits keep it working.

## Monthly: `/prune`

About ten minutes. Claude proposes, you approve each change:

| Change | When |
| --- | --- |
| **Merge** | Two rules say the same thing. Keep the clearer wording and the better example. |
| **Retire** | `Caught: 0` for two months and your recent edits never touch it. Claude has learned it. Retired rules move to the bottom, not the bin. |
| **Sharpen** | The checker called it unclear, or it flagged your own best writing. |
| **Settle** | Two rules pull against each other. You pick the winner. |

Targets: `RULES.md` under 40 rules, `CLAUDE.md` under 200 words.

## Every six months: the fresh start

Boris Cherny, who created Claude Code, has said he deletes his setup files every six months and sees what the model does without them. Models get better; yesterday's rules can become today's clutter.

The writing-room version:

1. Move `RULES.md` to `edits/rules-<date>.md`. Nothing is lost.
2. Start an empty `RULES.md`.
3. Run `/draft` on your next piece with no rules at all. Edit it. `/learn` it.
4. Rebuild from the last three months of `edits/`: bring back only the rules your recent edits still prove.

Most writers end the fresh start with fewer rules and a higher kept-words number.
