# AI 301 build recipe: Writing

Build a writing room where Claude drafts like you, a second Claude checks, and every edit you make becomes a rule.

Copy this whole recipe into Claude Code. Keep this page open while you work.

By the end you will have a private writing room on your computer, backed up to GitHub: your past writing in one place, your first 10 to 20 rules taken from your own edits, a drafter and a separate checker, and four commands (`/draft`, `/check`, `/learn`, `/prune`). You will also have run the whole loop once on a real piece you are about to publish, and you will know how much of Claude's draft you kept.

You bring the ideas and the opinions. Claude brings a first draft. Your edits teach it the rest.

## The job

Act as my writing-room builder. Ask me everything you need up front, gather my past writing, find my first rules with me, build the drafter and the checker, back it all up privately, run one full piece with me, and hand off.

Use the playbooks and templates at https://github.com/how-to-ai-co/301-build-recipe-writing. Clone it into a scratch folder and read `AGENTS.md`, `CONVENTIONS.md` and `playbook/the-loop.md` before you start. If the clone fails, stop and tell me. Never recreate the playbooks from memory.

## Work with me

- Run commands, create files and check results yourself. When a step needs me (a sign-in, an export, my own editing), tell me exactly what to do and wait.
- Give every URL as a clickable link, never inside code formatting, and open pages for me when I need to see them.
- Ask all your questions in Step 1, using clickable options if you have them, otherwise lettered choices. After that, only stop for sign-ins, approvals and my writing.
- Never ask me to paste passwords or codes into chat.
- Never write my opinions for me, and never add a rule I have not confirmed in my own words.
- Nothing gets published, posted or sent. I publish by hand.
- Use plain language. Explain any technical word the first time it comes up.

## Step 1: ask me everything up front

Ask these together, in one or two screens. Skip any question my earlier answers make unnecessary.

1. **What do you write most?** (choose one to start) Newsletter / LinkedIn posts / Client emails / Reports or proposals / Video or podcast scripts / Blog posts / Something else.
2. **Where do your past pieces live?** (choose any) Substack / LinkedIn / Gmail or Outlook sent mail / Google Docs / Word files / A website or blog / Scattered.
3. **Do you have before-and-after pairs?** An AI draft and the version you actually published. Yes, several / A few / No.
4. **What is the next piece you need to write?** One line is enough. We will write it in class.
5. **Do you have a GitHub account?** Yes / No / Not sure.
6. **Is any of your writing confidential?** Client work, numbers under NDA, internal memos. Yes / No.

Save the answers (no secrets) to `~/Documents/writing-room/.writing/setup.json`.

## Step 2: build the room and gather my writing

1. Copy `templates/writing-room/` to `~/Documents/writing-room/` and make it a git repository. Explain in one line what that means.
2. Fill in `CLAUDE.md` with what I write, for whom, and how long a piece usually is. Keep it under 200 words. Do **not** describe my style there.
3. Follow `playbook/gather-your-writing.md` for my sources. Aim for 10 to 20 of my best recent pieces. Save each one to `archive/` as `YYYY-MM-DD-slug.md`, with its numbers if I have them.
4. If anything is confidential, follow `playbook/safety.md`: leave it out or take the confidential parts out first, and ask me before saving.

Show me the list of what is in `archive/`.

## Step 3: find my first rules

Follow `playbook/seed-rules.md`.

- **If I have before-and-after pairs:** put each pair in `edits/` and run the learn step on them.
- **If not, do the blind rewrite:** pick three pieces from my archive. For each one, write a one-paragraph summary of its idea. Then, in a fresh subagent that has **not** seen the original, write the piece from that summary only. Put Claude's version next to mine and show me the biggest differences.

For each pattern of difference, ask me **why** I wrote it my way. Turn my answers into rules in `RULES.md`, in the format from `CONVENTIONS.md`, with my words in the "Why" line. Aim for 10 to 20 rules. Do not add a rule I have not confirmed.

## Step 4: build the drafter and the checker

1. Check that `.claude/agents/drafter.md`, `.claude/agents/checker.md` and the four skills in `.claude/skills/` are in place, and adjust the drafter to my kind of writing from `playbook/formats.md`.
2. Run `/check` on one piece from my archive as a test. My own writing should break few or no rules. If the checker flags my own best lines, the rule is wrong. Show me and fix the rule with me.

## Step 5: back it up privately

Follow `playbook/github.md`.

1. If I have no GitHub account, open the sign-up page for me and wait.
2. Create a **private** repository called `writing-room` and push the room to it. I type my sign-in on GitHub's page, never in chat.
3. Show me the repository page and confirm it says **Private**.
4. Optional: show me how to connect GitHub to Claude (claude.ai, Settings, Connectors, GitHub), so I can draft from my phone too.

## Step 6: write one real piece with me

1. Ask me for the idea and my opinion on the piece from Step 1, question 4. Bullet points are fine. Save them to `drafts/<slug>/idea.md`.
2. Run `/draft <slug>`. Show me the checker's report and the final `claude.md`.
3. Copy it to `mine.md` and open it for me. I edit it myself until it is mine. Wait until I say I am done.
4. Run `/learn <slug>`. Show me how many of Claude's words I kept, the patterns in my edits, and the new or changed rules. Ask me "why" before you write any rule.
5. Commit and push.

## Step 7: the safety check

Go through the checklist at the end of `playbook/safety.md` with me, one line at a time.

## Finish with a handoff

End with:

- Where my room is (`~/Documents/writing-room/`) and the link to my private repository.
- How many rules I have, and the three you think matter most.
- My kept-words number for today's piece, and what to expect over the next ten pieces.
- My weekly routine in four lines: idea, `/draft`, edit, `/learn`.
- When to run `/prune` (monthly) and the six-month fresh start.

Update `.writing/setup.json` with what was built, then give me this resume prompt:

> Resume my AI 301 writing room from `~/Documents/writing-room/.writing/setup.json`. Check what is working, keep it, and continue from the next unfinished step. Do not repeat the questions.
