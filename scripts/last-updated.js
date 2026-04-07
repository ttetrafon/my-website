import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const footerPath = join(__dirname, "../src/components/Footer.astro");

const now = new Date();
const day = String(now.getDate()).padStart(2, "0");
const month = String(now.getMonth() + 1).padStart(2, "0");
const year = now.getFullYear();
const dateStr = `${day}/${month}/${year}`;

const content = readFileSync(footerPath, "utf-8");
const updated = content.replace(
  /const lastUpdated = ".*?";/,
  `const lastUpdated = "${dateStr}";`
);

writeFileSync(footerPath, updated, "utf-8");
console.log(`Footer last updated set to ${dateStr}`);
