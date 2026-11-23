# One-Line Roast: The Gadget You Use Every Day — Method

## The entry

> My smart speaker heard 'play jazz' and called my ex instead — and honestly, the jazz would have hurt less.

106 characters (112 bytes), comfortably inside the 1–200 gate.

## Why this line wins

Judged against the published criteria, in order:

1. **Roasts a daily gadget, clearly.** "My smart speaker" names the gadget in the first three words; the roast is about what the gadget itself does (mishears a command).
2. **Actually funny on first read.** The mishearing has a painful, instantly imaginable consequence — a call to an ex — so the sting of recognition lands immediately.
3. **Fresh angle.** Not the stock complaint ("it never understands me") but a specific wrong understanding with the worst possible outcome. The brief's own example angles (phone dying at 4pm, app asking for a rating, kettle firmware update) were deliberately avoided.
4. **Neatly worded.** 106 characters, no wasted words; the setup is one clause, the turn is one clause, the punchline is the final clause.
5. **Specific personal gripe.** The exact misheard phrase ('play jazz') and the exact wrong action (called my ex) are concrete details about how the thing actually behaves — not a generic complaint.

## Candidates considered

24 candidates were drafted in English and compared pairwise against the criteria in order; the full list with pairwise notes is in `~/workspace/makefun/roast-gadget-candidates.md` (kept outside this repo). Closest rivals:

- **Runner-up:** "My laptop fan spins up like a jet engine every time I open a spreadsheet, as if the numbers were trying to escape." (114 chars) — a vivid image, but the fan-as-jet-engine comparison is familiar; the winner's misheard-command twist is fresher and its punchline hits harder.
- "My Bluetooth speaker connects to my neighbour's phone every morning, so my shower playlist is whatever Dave fancies." (116 chars) — very specific, but needs the reader to fill in the shower context; the winner is self-contained.
- "My smartwatch buzzes 'Time to stand!' while I'm carrying groceries up three flights of stairs." (94 chars) — a strong recognition sting, but its punchline is the situation itself rather than a twist at the end.

## Implementation

`main.ts` (Node 22, stdlib only, no network) writes the line to `/output/entry.txt` only — never `./entry.txt`, since the grader cwd is read-only. It enforces the 1–200 character gate before writing and verifies the file round-trips byte-identical after writing.
