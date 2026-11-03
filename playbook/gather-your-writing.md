# Gather your writing

Aim for **10 to 20 of your best recent pieces** of the one kind you chose. Recent beats old: your style moves. Best beats many: Claude copies what it sees.

Save each piece to `archive/YYYY-MM-DD-slug.md`:

```markdown
---
title: You are charging half what you should
date: 2026-10-14
where: newsletter
numbers: opens 41%, replies 23
---

The piece, as published, in plain text or Markdown.
```

Leave `numbers` out if you do not have them. Strip images, buttons, footers and signatures.

## By source

| Source | How |
| --- | --- |
| **Substack** | Settings, Exports, "Create new export". Substack emails a zip with every post as HTML. Unzip it, and Claude converts the best ones to Markdown. Or give Claude the public post links and it reads them. Paid posts need the export. |
| **LinkedIn** | Copy each post's text. For many posts, request your data: Settings, Data privacy, "Get a copy of your data", choose Shares. It arrives by email, often within a day, as `Shares.csv`. **(check before class: export menu names change)** |
| **Gmail** | In Gmail search, `in:sent` plus a word you always use, for client emails. Copy 10 to 20 good ones into one text file and Claude splits them. Remove client names first (see `safety.md`). If the Gmail connector is set up in Claude, Claude can read sent mail directly, read only. |
| **Outlook** | Same as Gmail: copy from Sent Items, or use the Outlook connector, read only. |
| **Google Docs** | File, Download, Markdown (.md). Or Plain text. |
| **Word** | Save as Plain Text, or drop the .docx files in a folder and Claude converts them. |
| **A website or blog** | Give Claude the links. It reads each page and saves the text. |
| **Scripts** | Use the script, not the auto-transcript. If only the transcript exists, keep it, but fix obvious errors first. |

## Before-and-after pairs

The best material there is: an AI draft and the version you actually published. Look in your ChatGPT or Claude history for chats where you asked for a draft of something you then published. Save each pair to `edits/` as:

```text
edits/2026-09-02-onboarding/claude.md   (the AI draft)
edits/2026-09-02-onboarding/mine.md     (what you published)
```

`seed-rules.md` turns them into your first rules.
