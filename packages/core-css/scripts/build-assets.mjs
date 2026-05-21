import { cp, mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceRoot = path.join(packageRoot, "src");
const distRoot = path.join(packageRoot, "dist");

await mkdir(distRoot, { recursive: true });
await copyCssAssets(sourceRoot, distRoot);

async function copyCssAssets(sourceDirectory, targetDirectory) {
  const entries = await readdir(sourceDirectory, { withFileTypes: true });

  await Promise.all(
    entries.map(async (entry) => {
      const sourcePath = path.join(sourceDirectory, entry.name);
      const targetPath = path.join(targetDirectory, entry.name);

      if (entry.isDirectory()) {
        await mkdir(targetPath, { recursive: true });
        await copyCssAssets(sourcePath, targetPath);
        return;
      }

      if (entry.name.endsWith(".css")) {
        await cp(sourcePath, targetPath);
      }
    })
  );
}
