import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// One-Line Roast: The Gadget You Use Every Day — the joke is a misheard
// voice command with a painful real-world consequence: 'play jazz' becomes
// a call to my ex, and the punchline lands on the final clause.
// The grader cwd is read-only, so nothing is ever written relative to it —
// only /output/entry.txt.

const LINE =
  "My smart speaker heard 'play jazz' and called my ex instead — and honestly, the jazz would have hurt less.";

// The gate requires 1-200 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line out of gate: ${LINE.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Verify the written file round-trips byte-identical to the chosen line.
if (readFileSync("/output/entry.txt", "utf8") !== LINE) {
  throw new Error("entry.txt does not match the chosen line");
}
