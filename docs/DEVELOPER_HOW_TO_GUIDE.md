# Momentum UI Developer How-To Guide

## Purpose

This guide is for a developer opening the repository for the first time or
returning after some time away.

It explains:

- where to start reading
- where to make common changes
- how the packages connect
- which implementation choices are non-obvious
- which commands matter while developing

For test workflows, use [TESTING_GUIDE.md](./TESTING_GUIDE.md).

---

## First Files To Read

Start in this order:

1. `AGENTS.md`
2. `docs/IMPLEMENTATION_PLAN.md`
3. `package.json`
4. `turbo.json`
5. `tsconfig.base.json`

That sequence gives you:

- repository rules
- planned phases
- root commands
- task orchestration
- shared TypeScript behavior

---

## Where To Start In The Codebase

### If You Want To Understand The App Entry

Start here:

- `apps/playground-react/src/main.tsx`
- `apps/playground-react/src/App.tsx`

Why:

- `main.tsx` is the browser entry point
- `App.tsx` is the simplest place to wire package output together
- this is the fastest feedback loop for UI work outside Storybook

### If You Want To Work On React Components

Start here:

- `packages/react/src/index.ts`
- `packages/react/src/components/`

Why:

- `index.ts` is the public React package surface
- `components/` is where component implementation should grow from

### If You Want To Work On Design Tokens

Start here:

- `packages/tokens/src/index.ts`
- `packages/tokens/src/color-tokens.ts`
- `packages/tokens/src/typography-tokens.ts`
- `packages/tokens/src/create-tokens.ts`

Why:

- token category files define the source of truth
- `create-tokens.ts` explains how tokens are flattened into publishable
  outputs
- `index.ts` shows which token groups are public

### If You Want To Work On Global CSS

Start here:

- `packages/core-css/src/styles.css`
- `packages/core-css/src/reset.css`
- `packages/core-css/src/base.css`
- `packages/core-css/src/motion.css`
- `packages/core-css/src/utilities.css`

Why:

- `styles.css` is the layer entry point
- the other files define the foundation by concern

### If You Want To Work On Storybook

Start here:

- `storybooks/react-storybook/.storybook/main.ts`
- `storybooks/react-storybook/.storybook/preview.ts`
- `storybooks/react-storybook/stories/`
- `scripts/run-storybook.mjs`

Why:

- Storybook config lives under `.storybook`
- stories are the UI documentation surface
- the launcher script is part of the real Storybook behavior on Windows

---

## Package Responsibilities

### `@momentum-ui/tokens`

Owns:

- semantic token source
- flattened token metadata
- emitted `tokens.css`
- emitted `tokens.json`

You should edit:

- `packages/tokens/src/*`

You should not edit by hand:

- `packages/tokens/dist/*`

### `@momentum-ui/core-css`

Owns:

- layered global CSS foundation
- reset, base, motion, and utility CSS
- the publishable stylesheet entry point

You should edit:

- `packages/core-css/src/*`

You should not edit by hand:

- `packages/core-css/dist/*`

### `@momentum-ui/core-utils`

Owns:

- framework-agnostic helper logic

### `@momentum-ui/react`

Owns:

- React component APIs
- React-specific composition
- eventually hooks, providers, and component stories

### `apps/playground-react`

Owns:

- quick manual verification
- package integration checks
- fast local UI iteration

### `storybooks/react-storybook`

Owns:

- documented component behavior
- isolated visual verification
- accessibility review surface

---

## Non-Obvious Decisions

These are the decisions a developer is least likely to infer correctly
without help.

### 1. Tokens Are Authored In TypeScript But Published As TS, CSS, And JSON

Relevant files:

- `packages/tokens/src/index.ts`
- `packages/tokens/src/create-tokens.ts`
- `packages/tokens/scripts/build-assets.mjs`
- `packages/tokens/package.json`

Why this exists:

- token source needs strong typing during development
- downstream consumers need CSS variables
- non-React or tooling consumers may need JSON output

How it works:

1. token groups are authored in `src/*.ts`
2. `index.ts` combines them into `tokenCollections`
3. `create-tokens.ts` flattens them into definitions and CSS text
4. `build-assets.mjs` writes `dist/tokens.css` and `dist/tokens.json`

Commands:

```bash
pnpm --filter @momentum-ui/tokens build
pnpm --filter @momentum-ui/tokens test
```

### 2. Core CSS Publishes Real CSS Assets Instead Of Only a JS Wrapper

Relevant files:

- `packages/core-css/src/styles.css`
- `packages/core-css/scripts/build-assets.mjs`
- `packages/core-css/package.json`

Why this exists:

- consumers need a real stylesheet export
- the package should be usable without bundling CSS out of source files
- publishable CSS must land in `dist`

How it works:

1. TypeScript builds the JS entry point
2. `build-assets.mjs` copies CSS files from `src/` into `dist/`
3. `package.json` exports `./styles.css` from `dist/styles.css`

Commands:

```bash
pnpm --filter @momentum-ui/core-css build
pnpm --filter @momentum-ui/core-css test
```

### 3. Default Root Build Excludes Storybook On Purpose

Relevant files:

- `package.json`
- `storybooks/react-storybook/package.json`
- `scripts/run-storybook.mjs`

Why this exists:

- package builds and Storybook builds solve different problems
- Storybook had environment-specific Windows issues that were isolated
  instead of contaminating the default package build path
- developers still need a dedicated Storybook build command

How to use it:

- use `pnpm build` for normal repository build validation
- use `pnpm build:storybook` when validating documentation output

Commands:

```bash
pnpm build
pnpm build:storybook
```

### 4. Storybook Uses a Custom Launcher Script

Relevant files:

- `scripts/run-storybook.mjs`
- `storybooks/react-storybook/package.json`

Why this exists:

- Storybook needs a consistent repo-root working directory
- Windows path behavior was more reliable with an explicit launcher
- cache location is forced into a repo-local `.cache` directory

What the script does:

- resolves the repo root
- sets `CACHE_DIR`
- ensures `node_modules/.bin` is on `PATH`
- launches Storybook in `dev` or `build` mode

Commands:

```bash
pnpm storybook
pnpm build:storybook
```

### 5. Storybook Also Has a Postinstall Patch

Relevant files:

- `scripts/patch-storybook-windows-cache.mjs`
- `package.json`

Why this exists:

- Storybook 10 manager entry wrapping on Windows was not stable in this
  environment
- the patch adjusts how wrapped manager entry files are written so the
  build resolves them correctly

How to think about it:

- this is a targeted environment workaround
- do not casually remove it unless `pnpm build:storybook` is validated on
  the target environment after removal

Commands:

```bash
pnpm install
pnpm build:storybook
```

---

## Recommended Starting Paths By Task

### Adding a New Token

1. edit the appropriate file in `packages/tokens/src/`
2. check `packages/tokens/src/index.ts`
3. run:

```bash
pnpm --filter @momentum-ui/tokens test
pnpm --filter @momentum-ui/tokens build
```

### Changing Global Styling

1. edit files under `packages/core-css/src/`
2. verify the layer entry in `packages/core-css/src/styles.css`
3. run:

```bash
pnpm --filter @momentum-ui/core-css test
pnpm --filter @momentum-ui/core-css build
pnpm --filter @momentum-ui/playground-react build
```

### Adding or Changing a React Component

1. start in `packages/react/src/components/`
2. export it from `packages/react/src/index.ts`
3. verify it in the playground and Storybook
4. run:

```bash
pnpm --filter @momentum-ui/react typecheck
pnpm --filter @momentum-ui/react test
pnpm storybook
```

### Debugging Package Wiring

Check these files first:

- `package.json`
- `pnpm-workspace.yaml`
- `turbo.json`
- `tsconfig.base.json`
- package-level `package.json`
- package-level `tsconfig.build.json`

---

## Commands Developers Will Actually Use Often

From the repository root:

```bash
pnpm install
pnpm dev
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm build:storybook
pnpm storybook
```

For package-only iteration:

```bash
pnpm --filter @momentum-ui/tokens build
pnpm --filter @momentum-ui/core-css build
pnpm --filter @momentum-ui/react build
```

---

## What Not To Do

- do not edit `dist/` files directly
- do not remove scripts that look unusual without understanding why they
  exist
- do not bypass Storybook or playground verification for UI changes
- do not treat environment workarounds as dead code without rerunning the
  commands that justified them
- do not add documentation for every tiny code change

Only document the tough decisions that a future developer would likely get
wrong without context.
