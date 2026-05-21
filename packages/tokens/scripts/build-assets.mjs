import { mkdir, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath, pathToFileURL } from "node:url";

const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const distRoot = path.join(packageRoot, "dist");

const { tokenCollections, tokensCss } = await import(pathToFileURL(path.join(distRoot, "index.js")).href);

await removeTestArtifacts(distRoot);
await mkdir(distRoot, { recursive: true });
await Promise.all([
  writeFile(path.join(distRoot, "tokens.css"), tokensCss, "utf8"),
  writeFile(path.join(distRoot, "tokens.json"), `${JSON.stringify(tokenCollections, null, 2)}\n`, "utf8")
]);

async function removeTestArtifacts(directory) {
  const entries = await readdir(directory, { withFileTypes: true });

  await Promise.all(
    entries.map(async (entry) => {
      const location = path.join(directory, entry.name);

      if (entry.isDirectory()) {
        await removeTestArtifacts(location);
        return;
      }

      if (/(\.test\.|\.spec\.)/.test(entry.name)) {
        await rm(location, { force: true });
      }
    })
  );
}
