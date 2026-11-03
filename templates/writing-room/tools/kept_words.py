"""Count how many of Claude's words survived the writer's edit.

Usage: python3 tools/kept_words.py drafts/<slug>/claude.md drafts/<slug>/mine.md

A word counts as kept when it appears in the same order in both versions
(punctuation and capitals ignored). Uses only the Python standard library.
"""
import re
import sys
from difflib import SequenceMatcher


def words(path):
    with open(path, encoding="utf-8") as f:
        text = f.read()
    text = re.sub(r"^---\n.*?\n---\n", "", text, flags=re.S)  # drop frontmatter
    return re.findall(r"[a-z0-9]+(?:['’][a-z]+)?", text.lower())


def main():
    if len(sys.argv) != 3:
        sys.exit(__doc__)
    claude, mine = words(sys.argv[1]), words(sys.argv[2])
    if not claude or not mine:
        sys.exit("One of the files is empty.")
    blocks = SequenceMatcher(None, claude, mine, autojunk=False).get_matching_blocks()
    kept = sum(b.size for b in blocks)
    print(f"Claude wrote {len(claude):,} words. You kept {kept:,} of them ({kept / len(claude):.0%}).")
    print(f"Your version is {len(mine):,} words, {kept / len(mine):.0%} of them Claude's.")


if __name__ == "__main__":
    main()
