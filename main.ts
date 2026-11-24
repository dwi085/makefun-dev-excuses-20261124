// Make the AI Judge Laugh: Developer Excuses
// Writes exactly one funny single-line developer excuse for code that
// broke in production to /output/entry.txt (or MAKEFUN_OUTPUT_DIR).
// Deterministic: the same line every run, no network, no randomness.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "It worked on my machine, so I shipped my machine — production is now running on a laptop under my desk.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
if (LINE.includes("\n") || LINE.length === 0 || LINE.length >= 200) {
  throw new Error("excuse must be a single line under 200 characters");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
