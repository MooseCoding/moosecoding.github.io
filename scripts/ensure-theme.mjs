import { copyFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const theme = join(root, "src/content/theme.css");
const example = join(root, "src/content/theme.example.css");

if (!existsSync(theme)) {
  copyFileSync(example, theme);
}
