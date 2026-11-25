// An ex, summed up as a billing relationship you cannot cancel.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "Auto-renewal";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
