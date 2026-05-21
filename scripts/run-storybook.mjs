import path from "node:path";
import process from "node:process";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const command = process.platform === "win32" ? "storybook.CMD" : "storybook";
const binDir = path.join(repoRoot, "node_modules", ".bin");
const commandPath = path.join(repoRoot, "node_modules", ".bin", command);
const mode = process.argv[2];

const args =
  mode === "dev"
    ? ["dev", "-p", "6006", "--config-dir", "storybooks/react-storybook/.storybook"]
    : [
        "build",
        "--config-dir",
        "storybooks/react-storybook/.storybook",
        "--output-dir",
        "storybooks/react-storybook/storybook-static"
      ];

const result = spawnSync(commandPath, args, {
  cwd: repoRoot,
  env: {
    ...process.env,
    PATH:
      process.platform === "win32"
        ? `${binDir};${process.env.PATH ?? ""}`
        : `${binDir}:${process.env.PATH ?? ""}`
  },
  shell: process.platform === "win32",
  stdio: "inherit"
});

process.exit(result.status ?? 1);
