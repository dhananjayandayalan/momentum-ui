import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const target = path.join(
  repoRoot,
  "node_modules",
  ".pnpm",
  "storybook@10.4.0_@emnapi+co_8e7fc18de35f94175f2a6f4b37887b2b",
  "node_modules",
  "storybook",
  "dist",
  "_node-chunks",
  "builder-manager-SBMOFRIH.js"
);

const writeNeedles = [
  "      return await writeFile2(location, `import '${slash(entry).replaceAll(/'/g, \"\\\\'\")}';`), location;",
  '      let relativeLocation = `././${slash(relative2(process.cwd(), location))}`;\n      return await writeFile2(location, `import ${JSON.stringify(pathToFileURL(entry).href)};`), relativeLocation;'
];
const writeReplacement =
  '      let relativeImport = slash(relative2(dirname2(location), entry));\n      if (!relativeImport.startsWith(".")) relativeImport = `./${relativeImport}`;\n      return await writeFile2(location, `import ${JSON.stringify(relativeImport)};`), location;';

const contents = await readFile(target, "utf8");
let next = contents;

for (const needle of writeNeedles) {
  if (next.includes(needle)) {
    next = next.replace(needle, writeReplacement);
  }
}

next = next.replace('\nimport { pathToFileURL } from "node:url";', "");

if (next !== contents) {
  await writeFile(target, next, "utf8");
}
