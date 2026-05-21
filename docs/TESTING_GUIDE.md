# Momentum UI Testing Guide

## Purpose

This document explains how a developer can validate the repository locally.

Use it to verify:

- install health
- linting
- type safety
- automated tests
- package builds
- Storybook behavior
- playground behavior
- accessibility checks

---

## Prerequisites

Use the repository-supported toolchain:

- Node.js `>= 22.17.0`
- pnpm `>= 11.1.3`

Install dependencies from the repository root:

```bash
pnpm install
```

If the lockfile must be refreshed after package changes:

```bash
pnpm install --no-frozen-lockfile
```

---

## Full Repository Validation

Run these commands from the repository root.

### Lint

Checks TypeScript, Storybook files, and Markdown:

```bash
pnpm lint
```

### Typecheck

Checks TypeScript across all workspaces:

```bash
pnpm typecheck
```

### Automated Tests

Runs workspace Vitest suites:

```bash
pnpm test
```

Important:

- some packages currently have real tests
- some packages intentionally report `No test files found, exiting with code 0`
- that is expected at the current phase unless a package was
  supposed to gain tests in the same change

### Build

Builds the repository packages and the React playground:

```bash
pnpm build
```

This excludes the Storybook static build on purpose. Storybook is
validated separately with:

```bash
pnpm build:storybook
```

---

## Package-Scoped Validation

Use these when working inside one package and you want a tighter feedback loop.

### Tokens

```bash
pnpm --filter @momentum-ui/tokens lint
pnpm --filter @momentum-ui/tokens typecheck
pnpm --filter @momentum-ui/tokens test
pnpm --filter @momentum-ui/tokens build
```

Validate emitted assets after build:

- `packages/tokens/dist/tokens.css`
- `packages/tokens/dist/tokens.json`

### Core CSS

```bash
pnpm --filter @momentum-ui/core-css lint
pnpm --filter @momentum-ui/core-css typecheck
pnpm --filter @momentum-ui/core-css test
pnpm --filter @momentum-ui/core-css build
```

Validate emitted assets after build:

- `packages/core-css/dist/styles.css`
- `packages/core-css/dist/reset.css`
- `packages/core-css/dist/base.css`
- `packages/core-css/dist/motion.css`
- `packages/core-css/dist/utilities.css`

### Core Utils

```bash
pnpm --filter @momentum-ui/core-utils lint
pnpm --filter @momentum-ui/core-utils typecheck
pnpm --filter @momentum-ui/core-utils test
pnpm --filter @momentum-ui/core-utils build
```

### React Package

```bash
pnpm --filter @momentum-ui/react lint
pnpm --filter @momentum-ui/react typecheck
pnpm --filter @momentum-ui/react test
pnpm --filter @momentum-ui/react build
```

### React Storybook

```bash
pnpm --filter @momentum-ui/react-storybook lint
pnpm --filter @momentum-ui/react-storybook typecheck
pnpm --filter @momentum-ui/react-storybook test
pnpm --filter @momentum-ui/react-storybook build
```

### React Playground

```bash
pnpm --filter @momentum-ui/playground-react lint
pnpm --filter @momentum-ui/playground-react typecheck
pnpm --filter @momentum-ui/playground-react test
pnpm --filter @momentum-ui/playground-react build
```

---

## Manual UI Validation

### Storybook Development

Start Storybook:

```bash
pnpm storybook
```

Then verify:

- Storybook starts without terminal errors
- stories render without runtime crashes
- controls and docs panels load correctly
- the a11y addon panel is available
- focus styles are visible
- text contrast remains readable
- reduced motion behavior still feels correct where motion exists

### Storybook Static Build

Build the static Storybook output:

```bash
pnpm build:storybook
```

Expected result:

- static files are written to
  `storybooks/react-storybook/storybook-static`
- build completes without warnings or errors

### Playground Development

Start the React playground:

```bash
pnpm dev
```

This starts:

- React playground
- React Storybook

When verifying the playground, check:

- the Vite dev server starts cleanly
- the page renders without console errors
- imported package styles load correctly
- tokens and core CSS changes are visible in the UI
- hot reload still works after editing package source files

If you only need the playground, you can also run:

```bash
pnpm --filter @momentum-ui/playground-react dev
```

---

## Accessibility Checks

Accessibility is a required validation area for this repository.

Current local checks should include:

- keyboard-only navigation through interactive UI
- visible `:focus-visible` states
- no motion that ignores `prefers-reduced-motion`
- readable contrast in the default tactical theme
- Storybook a11y addon review for each story that exists

For every new interactive component, manually test:

- `Tab` and `Shift+Tab`
- `Enter` and `Space` where relevant
- disabled states
- loading or empty states
- screen-reader naming and labeling strategy

---

## Expected Clean-State Workflow

For a normal feature or fix, the minimum expected validation from the
repository root is:

```bash
pnpm lint
pnpm typecheck
pnpm test
pnpm build
pnpm build:storybook
```

For package-local changes, run the package-scoped commands first, then
run the root commands before finishing the task.

---

## Troubleshooting

### `pnpm install` wants to refresh the lockfile

Run:

```bash
pnpm install --no-frozen-lockfile
```

### Storybook build issues on Windows

This repository includes a postinstall patch for Storybook Windows cache handling:

```bash
node ./scripts/patch-storybook-windows-cache.mjs
```

It runs automatically from `postinstall`, but if dependencies were
reinstalled or reset in an unusual way, rerun:

```bash
pnpm install
```

### A package reports no tests

That is not automatically a failure. It only becomes a problem if:

- the task required new automated coverage
- an existing test suite disappeared unexpectedly
- the package should already contain tests for the area that changed

---

## Current Reality

At the current phase of the repository:

- tokens has automated tests
- core CSS has automated tests
- several packages still only validate through lint, typecheck, build,
  and manual verification

That means a developer should treat manual Storybook and playground
checks as part of the real test surface, not as optional extras.
