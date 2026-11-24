// Everyday Wonder — one sentence, at most 200 characters, written to /output/entry.txt.
// No dependencies. Never removes the output directory (the grader mounts it).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const sentence =
  "The receipt faded in my pocket until the groceries I bought became a rumour I could no longer prove.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), sentence, "utf8");
