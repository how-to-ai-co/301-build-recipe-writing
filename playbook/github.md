# Back it up on GitHub, privately

GitHub stores your writing room online, with every version of every file. If your laptop dies, nothing is lost. And Claude can read it from anywhere.

The repository is **private**: only you can see it.

## 1. A GitHub account

Free. If the student has none, open https://github.com/signup and wait. They choose the username and password on GitHub's page. Never ask for either in chat.

## 2. Sign Claude Code in to GitHub

Check whether the GitHub command-line tool is there: `gh --version`.

- If it is missing on a Mac with Homebrew: `brew install gh`. Without Homebrew, download the installer from https://cli.github.com and have the student open it.
- On Windows: `winget install --id GitHub.cli`.

Then run `gh auth login --web --git-protocol https`. It shows a one-time code and opens a GitHub page. **The student** types the code on that page and approves. Do not ask them to paste anything back.

Check with `gh auth status`.

If `gh` cannot be installed, use GitHub Desktop (https://desktop.github.com): the student signs in there, adds `~/Documents/writing-room` as a local repository, and clicks Publish with "Keep this code private" ticked.

## 3. Create the private repository and push

From `~/Documents/writing-room/`:

```bash
git add -A
git commit -m "Writing room: archive and first rules"
gh repo create writing-room --private --source . --push
```

If `writing-room` already exists on their account, use `writing-room-2026`.

Open the repository page for the student and confirm the **Private** label next to the name.

## 4. Optional: connect GitHub to Claude

So the student can draft from the Claude app on their phone or the web, using the same rules:

1. In Claude (claude.ai or the app): Settings, Connectors, GitHub. Connect and allow the `writing-room` repository only.
2. In a chat, attach the repository and ask: "Read RULES.md and the archive. Draft from this idea, then check the draft against every rule."

The full loop (subagents and commands) runs in Claude Code. The connector is for drafting on the go. **(check before class: connector menu names)**

## Saving after each piece

`/learn` commits and pushes for you. To save by hand:

```bash
git add -A && git commit -m "notes" && git push
```
