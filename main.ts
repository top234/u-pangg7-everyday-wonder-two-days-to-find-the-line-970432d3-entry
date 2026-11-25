import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// v3: "The Shirts on the Line" — a small everyday moment (laundry drying
// on the line) turned strange by one concrete reflex: waving back.
// The surprise is a real physical action, not an abstract metaphor,
// and it lands in a single read at the very last words. "Already" sharpens
// it: the wave back is finished before thought catches up.
const sentence =
  "The shirts on the line waved at me, and before I could stop myself, I had already waved back.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), sentence, "utf8");
