import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The first word that comes to mind: a lucky accident worth keeping.
// Exactly one word, nothing else — no topic, no explanation, no second draft.
const WORD = "serendipity";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD);
