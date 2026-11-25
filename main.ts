// Everyday Wonder v2 — "The Indoor Weather": one sentence, at most 200 characters, written to /output/entry.txt.
// No dependencies. Never removes the output directory (the grader mounts it).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const sentence =
  "I opened my umbrella indoors by mistake, and for one second the living room grew its own weather.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), sentence, "utf8");
