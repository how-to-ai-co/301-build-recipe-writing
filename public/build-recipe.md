# AI 301 build recipe: Writing

Build Ruben Hassid's writing setup: Claude drafts, a second Claude checks, and every edit you make becomes a rule.

Open Claude Code in a new, empty folder and pick Auto. Copy this whole recipe in. Keep this page open while you work.

By the end you will have Ruben's setup with your own writing inside, in a private GitHub repository: your archive, style files built from your best pieces, your edits log and rules, six skills (pitch, draft, judge, edit, publish, data), the checker test and a guard. You will also have started your next piece with it and given Claude your first correction.

You bring the ideas and the opinions. Claude brings a first draft. Your edits teach it the rest.

## The job

Act as my writing-repo builder. Ask me everything you need up front, make sure I have GitHub, build Ruben's setup exactly as "The build" in Step 3 describes, then start my next piece with me.

## Work with me

- Run commands, create files and check results yourself. When a step needs me (a sign-in, an export, my own opinions), tell me in one line what to do and wait.
- Give every URL as a clickable link, never inside code formatting, and open pages for me when I need to see them.
- Ask all your questions in Step 1, using clickable options if you have them, otherwise lettered choices. After that, only stop for sign-ins, exports and my writing.
- Never ask me to paste passwords or codes into chat.
- Nothing gets published, posted or sent. I publish by hand.
- Use plain language. Explain any technical word the first time it comes up.

## Step 1: ask me everything up front

Ask these together, in one screen:

1. **What do you write?** Newsletter / LinkedIn posts / Blog / Something else.
2. **Where is your past writing?** Ask for the link to my own publication or profile (for example `yourname.substack.com`), or "I'll paste it". If a Substack or other connector is already set up in Claude, check whose account it is before using it. Only gather writing I wrote.
3. **Do you have paid posts?** Yes / No. If yes, tell me now to request a Substack export (Settings → Exports → Create new export) so it arrives while you build.
4. **Do you have a GitHub account?** Yes / No / Not sure.

## Step 2: GitHub

If I have no GitHub account, open https://github.com/signup for me and wait while I sign up. It's free. I type my own email and password on GitHub's page, never in chat.

## Step 3: the build

Run this prompt as written. Fill in its two brackets from my answers in Step 1. It is Ruben Hassid's own setup, from his post "Who writes this?" (27 October 2026). Follow every numbered part; do not skip, shorten or replace any of them.

```text
Goal: build me a private writing repo on GitHub, the same setup Ruben Hassid uses for his newsletter. You draft, a second Claude checks, and every edit I make becomes a rule, so each draft needs fewer edits.

About me: I write [what you write: a newsletter, LinkedIn posts, a blog]. My past writing is at [your Substack or blog link, or "I'll paste it"]. I'm not technical: do every step yourself, and tell me in one line when I must click something.

Build it in a folder called my-writing, in my home folder:

1. archive/posts/: every piece I've published, one file each (YYYY-MM-DD-slug.md), the full text with its numbers at the top (likes, comments, restacks or shares). On Substack, write tools/sync_archive.py to pull them from <my link>/api/v1/archive and /api/v1/posts/<slug> (public, no login; --new adds only the new ones). The public API cuts paid posts at the paywall: mark those, and ask me for a new Substack export (Settings → Exports → Create new export, then download it) to fill in their full text. Never copy its files about readers (email list, opens, delivers) into the repo. Not on Substack? Fetch the links I give you, or save what I paste. Also data/posts.csv: one row per piece with its numbers.
2. style/: what the checker compares drafts to, built from my archive only. "Best" means likes (or signups and paid, if I share my stats) divided by the median of the 10 pieces published around it. winners.md: how my 10 best pieces open, word for word. signature.md: words and habits I use far more than AI writing does, with counts, plus the AI tells I never use. format.md: length, headings, lists, how I end. voice.md: how I talk to the reader. retention.md: how my best pieces open, move from part to part and end, as checks for the judge.
3. analysis/what-works.md: what my best pieces share that my worst don't, from the numbers.
4. feedback/edits-log.md: every edit I give, newest first, as "## date · piece / I said: "my exact words" / What changed / → rule (or one-off)". feedback/rules.md: the rules my edits became, in short sections (facts, ideas and titles, opening, flow, words, format, ending), one line each with the date of the edit. It starts with one rule: "Never lie. Every fact, number, quote and story comes from me or a source you opened. Never write my feelings: leave [ME: ...]." Every other rule comes from my edits.
5. issues/: one folder per new piece (YYYY-MM-DD-slug/, the day we start it) with notes.md (idea, outline, my answers, the draft's link), sources.md (every fact with its link), draft.md, judge.md, published-diff.md. Plus issues/backlog.md for ideas.
6. research/: long reports, one dated file each, read only when needed.
7. tools/, in Python with the standard library only:
   - preflight.py: checks draft.md for every rule a pattern can catch (FIX; the pattern goes into preflight.py when the rule is added), and flags every number in the text that isn't in sources.md (CHECK).
   - diff_published.py: your draft vs what I published, paragraph by paragraph (each paragraph matched once, nothing past a paywall cut), into published-diff.md.
   - build_paste.py: draft.md into one page with a Copy button that pastes cleanly into my editor, images included.
   - checker_test.py: after I publish, it writes each passage I rewrote as a blind pair (mine and yours, in random order). A fresh subagent that reads only rules.md and the pairs picks the one that follows my rules. Then the script scores how often it picked mine.
   - results.py: a week after I publish, compares the piece's numbers with my closest past pieces and adds the score to its notes.md.
   - tools/README.md: what each tool does. And a .gitignore that keeps my export's files about readers out.
8. Six skills in .claude/skills/, so I never type a command. I just talk:
   - writing-pitch, when I bring an idea: read the first rule and the sections on ideas and titles, the last 10 edits, what-works.md and my 3 closest past pieces (same topic). Score it against their numbers and stop me if they did worse than usual or I covered this in the last 2 months. Lead with what's new, then the outline. Ask me for my biggest true number, then give 4 titles, each checked against my past titles. If I have a paywall, say where to cut it. Save notes.md and sources.md. Wait for my "go".
   - writing-draft, after my "go" on the piece we just pitched: first ask me 3 quick questions about my opinions and stories. Read only notes.md, sources.md, the first rule and 2–3 of my closest past pieces, never the rest of rules.md (a writer loaded with rules writes to tick boxes). Write draft.md, with [ME: ...] wherever only I can say it. Copy my standard blocks (how I open and close every piece) word for word from my latest piece. Run writing-judge, apply only its findings, run preflight, build the paste page, then give me a link I can open (a private Artifact if you can).
   - writing-judge, in a fresh subagent, never the one that wrote: read all of rules.md and style/, run preflight. First check every pair of lines: does each one follow from the one before? Then write judge.md: each line that breaks a rule, the rule, the fix. Then a swap pass: 3–8 places where one of my own words (style/signature.md) fits better than yours. End with the list of rules that fired: every 6 months, the rules that never fired are up for deletion. Never rewrite the draft.
   - writing-edit, every time I correct anything: log my exact words in edits-log.md. If it will apply again, add the rule yourself (I said it, so it's mine), and add it to preflight.py if a pattern can catch it. Apply it, rebuild the paste page if it was a draft, and save to GitHub.
   - writing-publish, when I say I published: pull it into archive/, run diff_published, log what I changed in one entry grouped by lesson (no bloat), and propose each lasting lesson as a rule. Add it only after my yes (you guessed it from my edits, so I decide). Then run the checker test and tell me the score in one line. Add "Results due: <date + 7 days>" to notes.md, check for it at the start of every chat, and run results.py when it's due. Commit the whole issue folder.
   - writing-data, when I share stats or ask what works: update data/ and what-works.md.
9. CLAUDE.md, under 200 words, read in every chat: this repo is the only source of truth; rules.md is my word and beats everything; the writer drafts free and the judge reads the rules; log every edit in my words; which skill does what; commit only the files you changed, by path, and push. README.md: a map of every folder.
10. .claude/hooks/git_guard.py: it blocks git add -A / . / -u, commit -a, push --force, reset --hard, rebase, clean -f, checkout ., restore . and stash without a path, so two chats can never erase each other's work. Register it in .claude/settings.json.
11. So I can talk to you from any Claude Code chat: link the six skills into ~/.claude/skills/, register the hook in ~/.claude/settings.json too, and add one line to ~/.claude/CLAUDE.md: "For anything about my writing, first read ~/my-writing/CLAUDE.md and follow it." Create those files if they're missing, and never erase what's in them.
12. Make it a private repo on my GitHub and push. If git has no name or email yet, set them for this repo. If I'm not signed in to GitHub, install GitHub's command-line tool yourself (no Homebrew needed), start its sign-in, and show me the one-time code and the link.

Never create a file about who I am or how I should write. You learn that from my archive and my edits only.

When it's done, tell me in 5 lines what's inside and show me my first rule.

If you need more, ask me questions.
```

When it's done, show me the repository page and confirm it says **Private**.

## Step 4: start my next piece

Tell me to open a new Claude Code chat and paste this, with my idea after it:

> New newsletter. First: go to ~/my-writing. I want to brainstorm a potential topic together. Here's how I feel and what I want to discuss with you before writing an outline. Ask me clarifying questions using AskUserTool.

Then the skills take over: Claude pitches, I say "go", Claude asks me 3 questions about my opinions and stories, drafts, has a second Claude judge the draft, and gives me a link.

## Step 5: correct it in plain words

I correct the draft in my own words. Each correction is logged word for word, and when it will apply again, it becomes a rule. Show me the entry in `feedback/edits-log.md` and the rule it became.

## After class: tell Claude it's out

When I publish, I tell Claude, for example:

> I made tons of changes. Like always, compare your version to mine and explain to your future self (on GitHub) what you must do / or stop to be doing. Without context bloat.

Claude logs what I changed, proposes lessons as rules, and runs the checker test: a fresh Claude sees my version and its draft, blind, and picks the one that follows my rules. Each time it picks Claude's draft, a rule is missing.

## Finish with a handoff

End with:

- The link to my private repository, and where it is on my computer (`~/my-writing`).
- How many pieces are in my archive, and my first rule.
- My routine in four lines: bring an idea, say go, correct in plain words, tell Claude when it's out.
- That every 6 months, the rules that never fired are up for deletion.

Then give me this resume prompt:

> Resume my AI 301 writing setup in `~/my-writing`. Check what Step 3 built, keep what works, and finish anything missing from the build. Do not repeat the questions.
