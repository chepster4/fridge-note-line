import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I counted: you stared into me for 4 minutes, took the pickles, and left. The pickles saw everything.";

// Gate is 1-200 chars: refuse to write an out-of-range line instead of shipping an invalid entry.
if ([...LINE].length < 1 || [...LINE].length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${[...LINE].length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
