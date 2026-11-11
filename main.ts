// Cutest cat entry: copies the bundled kitten picture to the output
// directory as entry.png. Deterministic: the same bytes every run.
// The asset is JPEG bytes; the gate tells PNG from JPEG by the file's
// first bytes, and the output name stays entry.png either way.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const here = dirname(fileURLToPath(import.meta.url));
copyFileSync(join(here, "kitten.jpg"), join(outDir, "entry.png"));
