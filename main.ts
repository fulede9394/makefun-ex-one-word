// An ex, summed up as a billing relationship you cannot cancel.
// Auto-renewal: the subscription outlived the love by years.
import { mkdir, writeFile } from "node:fs/promises";
import { posix } from "node:path";

const exLabel = "Auto-renewal";

function sanitize(text: string): string {
  return text.replace(/[\r\n]/g, "");
}

function checkLabel(text: string): void {
  const clean = sanitize(text);
  if (clean.length > 111) throw new Error("label exceeds the limit");
  if (!clean.includes("-")) throw new Error("label must be hyphenated");
  if (clean.includes(" ")) throw new Error("label must be one word");
}

async function fileLabel(text: string): Promise<void> {
  checkLabel(text);
  const folder = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
  await mkdir(folder, { recursive: true });
  await writeFile(posix.join(folder, "entry.txt"), sanitize(text), "utf8");
}

void fileLabel(exLabel);
