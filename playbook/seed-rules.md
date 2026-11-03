# Seed your first rules

Goal for class: **10 to 20 rules**, each from a real difference between Claude's writing and yours, each confirmed by you in your own words.

## Route A: you have before-and-after pairs

For each pair in `edits/`, run the learn steps from `.claude/skills/learn/SKILL.md` (count, compare, ask why, write rules), without the archive and commit steps. Three to five pairs usually give 10 rules.

## Route B: the blind rewrite

No pairs? Make some.

1. Pick three of your best pieces from `archive/`.
2. For each, Claude writes a one-paragraph summary of the idea and the opinion. Nothing about style.
3. A fresh subagent, one that has **not** read the original or your archive, writes the piece from the summary only. Save it as `edits/blind-<slug>/claude.md`, and your original as `edits/blind-<slug>/mine.md`.
4. Compare them. Claude shows you the biggest patterns of difference, one example each:

```text
Pattern 1: Claude opens with context. You open with the claim.
  Claude: "Pricing is one of the hardest decisions a freelancer makes."
  You:    "You are charging half what you should."
Why do you open this way?
```

5. You answer in a sentence. That sentence becomes the rule's "Why" line.

Three pieces usually give 8 to 15 rules. If you need more, do two more pieces.

## What a good rule looks like

| Good | Too vague |
| --- | --- |
| Open with the claim. Never with context or "In today's…". | Write engaging intros. |
| One idea per paragraph. Three lines at most. | Keep it readable. |
| Use a number instead of "many", "a lot", "significant". | Be specific. |
| Never start a sentence or a title with "No". | Avoid negativity. |
| End on the action, not a summary. | Strong endings. |

A good rule can be checked by someone who has never met you, by pointing at a line. Test: could the checker quote a line that breaks it? If not, sharpen it.

Every rule has:

- **one instruction**, starting with a verb where possible;
- **Why**, in your words, in quotes;
- **Before and After**, real lines from the comparison;
- **From**, the edit it came from;
- **Caught: 0**.

## What not to add

- Rules you did not confirm. Claude proposes, you decide.
- Rules about facts or topics. Those go in `idea.md` each time.
- Generic "AI tells" from the internet, unless your own edits show you cut them. Your rules, not anyone else's.
- Two rules that say the same thing. Sharpen the first one instead.

## Test the rules on yourself

Run `/check` on two of your best archive pieces. Your own writing should break few or no rules. A rule that flags your best lines is worded wrong. Fix it now.
