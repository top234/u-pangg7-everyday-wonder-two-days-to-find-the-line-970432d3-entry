// Everyday Wonder — v2: one sentence; an umbrella opened indoors by mistake.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const sentence =
  "I opened my umbrella indoors by mistake, and for one second the living room grew its own weather.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), sentence);
