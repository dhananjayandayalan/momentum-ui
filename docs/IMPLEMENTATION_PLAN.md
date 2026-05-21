# Momentum UI — Implementation Plan & AI Agent Reference Guide

## Purpose

This document defines:

- repository implementation strategy
- AI agent behavior expectations
- development phases
- architectural standards
- repository workflows
- quality standards
- accessibility requirements
- framework scalability rules
- contributor expectations

This file is intended to work alongside:

```txt
AGENTS.md
CLAUDE.md
```

The goal is to ensure every AI coding agent and developer behaves consistently while contributing to Momentum UI.

---

## 1. AI Agent Reference Architecture

## Universal Rule

Every AI coding agent MUST read and follow:

```txt
AGENTS.md
```

before generating:

- code
- documentation
- configuration
- tests
- build setup
- styling
- scripts
- tooling
- CI configuration

---

## 2. Repository AI Instruction Strategy

### Root Instruction Files

```txt
AGENTS.md      → Universal repository rules
CLAUDE.md      → Claude bootstrap file
```

---

## 3. AGENTS.md Responsibilities

AGENTS.md acts as:

- the universal source of truth
- the repository constitution
- the architectural rulebook
- the engineering quality standard
- the accessibility standard
- the DX standard
- the AI behavior contract

All agents must:

- read AGENTS.md before implementation
- follow all repository standards
- avoid deprecated APIs
- avoid warnings
- preserve repository consistency
- preserve accessibility standards
- preserve developer experience

---

## 4. CLAUDE.md Responsibilities

CLAUDE.md should remain lightweight.

Recommended content:

```md
### Claude Code Instructions

Read and strictly follow:

@AGENTS.md

Do not proceed until AGENTS.md is understood.

Always:

- preserve repository consistency
- maintain accessibility standards
- maintain warning-free code
- maintain developer experience
```

---

## 5. Recommended Future AI Agent Files

Optional future support:

```txt
.cursor/rules/main.mdc
.github/copilot-instructions.md
GEMINI.md
```

However:

```txt
AGENTS.md remains the single source of truth.
```

---

## 6. Project Vision

Momentum UI is a standalone tactical intelligence design system.

The system is intended for:

- realtime intelligence
- sports analytics
- operational dashboards
- AI-native interfaces
- spatial analytics
- predictive systems
- tactical visualization
- enterprise operational tooling

Momentum UI should NOT feel like:

- a generic dashboard kit
- a CRUD-first UI library
- a standard SaaS component framework

Momentum UI should feel:

- tactical
- realtime
- kinetic
- intelligent
- spatial
- enterprise-grade
- operational

---

## 7. Core Architecture Strategy

Momentum UI must be:

- framework-extensible
- npm-publishable
- monorepo-based
- warning-free
- accessibility-first
- enterprise-scalable
- developer-friendly

React is the FIRST implementation layer.

However:

- the foundation must remain framework-agnostic
- tokens must remain framework-agnostic
- CSS must remain framework-agnostic
- utilities must remain framework-agnostic

---

## 8. Technology Stack

### Package Manager

```txt
pnpm
```

---

### Monorepo Tool

```txt
Turborepo
```

---

### Language

```txt
TypeScript
```

---

### Bundler

```txt
Vite
```

---

### Package Builder

```txt
tsup
```

---

### Testing

```txt
Vitest
Testing Library
```

---

### Documentation

```txt
Storybook
```

---

### Versioning

```txt
Changesets
```

---

## 9. Repository Structure

```txt
momentum-ui/
  packages/
    tokens/
    core-css/
    core-utils/
    react/
    web-components/
    vue/
    svelte/
    angular/

  storybooks/
    react-storybook/
    web-components-storybook/
    vue-storybook/
    svelte-storybook/
    angular-storybook/
    composed-storybook/

  apps/
    playground-react/

  docs/

  AGENTS.md
  CLAUDE.md
```

---

## 10. Package Responsibilities

### @momentum-ui/tokens

Contains:

- color tokens
- typography tokens
- spacing tokens
- motion tokens
- shadows
- breakpoints
- z-index
- tactical semantic tokens

Exports:

- CSS variables
- JSON tokens
- TypeScript exports

---

### @momentum-ui/core-css

Contains:

- reset styles
- typography
- utilities
- theme setup
- motion utilities
- responsive utilities

---

### @momentum-ui/core-utils

Contains:

- accessibility helpers
- keyboard navigation helpers
- focus management
- utility functions
- variant helpers

---

### @momentum-ui/react

Contains:

- React components
- hooks
- providers
- Storybook stories
- React-specific implementations

---

## 11. Design Token Philosophy

Avoid generic-only naming.

BAD:

```txt
primary
secondary
success
warning
```

GOOD:

```txt
momentum-surge
pressure-danger
fatigue-warning
transition-burst
collapse-critical
zone-neutral
confidence-high
```

Tokens should communicate:

- tactical meaning
- operational state
- realtime context

---

## 12. Component Categories

```txt
Foundation
Core Primitives
Realtime Components
Tactical Components
Visualization Components
Motion Components
AI Components
Navigation Components
Enterprise Components
```

---

## 13. Initial MVP Scope

The FIRST implementation should ONLY include:

### Foundation

```txt
Text
Heading
MetricText
TacticalNumber
Icon
```

---

### Core Primitives

```txt
Surface
TacticalCard
Button
IconButton
Input
Badge
```

---

### Realtime

```txt
LiveIndicator
RealtimePulse
```

---

### Tactical

```txt
MomentumBar
PressureMeter
```

Do NOT start:

- advanced graph systems
- AI replay systems
- large visualization engines
- multi-framework implementations

until the React MVP becomes stable.

---

## 14. Recommended Build Order

### Phase 1 — Repository Setup

Setup:

- pnpm workspaces
- Turborepo
- TypeScript
- ESLint
- Prettier
- tsup
- Vitest
- Storybook
- Changesets
- markdownlint

---

### Phase 2 — Tokens

Build:

- semantic colors
- spacing
- typography
- motion tokens
- breakpoints
- shadows

---

### Phase 3 — Core CSS

Build:

- reset.css
- tokens.css
- typography.css
- motion.css
- utilities.css

---

### Phase 4 — React Foundations

Build:

- Text
- Heading
- MetricText
- TacticalNumber
- Icon

---

### Phase 5 — Core React Components

Build:

- Surface
- TacticalCard
- Button
- IconButton
- Input
- Badge

---

### Phase 6 — Realtime Components

Build:

- LiveIndicator
- RealtimePulse

---

### Phase 7 — Tactical Identity

Build:

- MomentumBar
- PressureMeter

---

### Phase 8 — Storybook & Documentation

Document:

- installation
- usage
- accessibility
- variants
- tokens
- motion
- contribution workflow

---

### Phase 9 — npm Publishing

Publish:

```txt
@momentum-ui/tokens
@momentum-ui/core-css
@momentum-ui/react
```

---

### Phase 10 — Framework Expansion

After React stabilizes:

```txt
web-components
vue
svelte
angular
```

---

## 15. Accessibility Standards

Accessibility is mandatory.

Target:

```txt
WCAG 2.2 AA minimum
WCAG AAA whenever realistically achievable
```

Accessibility is NOT optional.

Every component must support:

- semantic HTML
- keyboard navigation
- visible focus states
- accessible labels
- screen reader compatibility
- reduced motion support
- accessible contrast ratios
- logical tab order
- responsive accessibility

Motion-heavy components MUST support:

```css
@media (prefers-reduced-motion: reduce);
```

Accessibility regressions are treated as critical regressions.

---

## 16. Warning-Free Repository Policy

Momentum UI must remain warning-free.

Warnings are treated as technical debt.

Warnings are NOT acceptable in:

- Markdown
- TypeScript
- JavaScript
- CSS
- Storybook
- CI
- builds
- tooling
- tests
- terminal output
- documentation

---

## 17. Markdown Standards

All Markdown files must be lint-clean.

Use:

```bash
markdownlint .
```

Requirements:

- valid heading hierarchy
- valid fenced blocks
- valid language identifiers
- valid tables
- no malformed Markdown
- consistent formatting
- no trailing spaces

---

## 18. Modern Technology Rules

Always use:

- latest stable package versions
- latest stable APIs
- latest stable framework features
- latest stable browser-safe CSS features

Do NOT use:

- deprecated APIs
- deprecated configuration
- unstable browser APIs
- abandoned packages
- legacy patterns

---

## 19. CSS Rules

Use modern browser-safe CSS.

Preferred:

- CSS custom properties
- cascade layers
- container queries
- logical properties
- modern selectors
- modern layout systems
- prefers-reduced-motion
- prefers-color-scheme

Do NOT use:

- deprecated CSS
- unstable CSS
- invalid selectors
- warning-generating CSS

---

## 20. React Rules

Use latest stable React APIs.

Avoid:

- deprecated APIs
- string refs
- legacy lifecycle methods
- legacy context
- unstable APIs

Prefer:

- composition
- accessibility
- predictable APIs
- readable components

---

## 21. TypeScript Rules

Use strict TypeScript.

Requirements:

- strict mode enabled
- no implicit any
- no ts-ignore without reason
- strongly typed public APIs
- discriminated unions where useful

Do NOT suppress errors instead of fixing them.

---

## 22. Performance Rules

Components should be:

- lightweight
- optimized
- tree-shakeable
- scalable

Avoid:

- unnecessary context
- excessive DOM nesting
- unnecessary effects
- heavy abstractions
- unnecessary dependencies

---

## 23. Storybook Strategy

Use separate Storybooks per framework.

Do NOT run multiple frameworks inside one Storybook builder.

Structure:

```txt
storybooks/
  react-storybook/
  vue-storybook/
  svelte-storybook/
  angular-storybook/
  web-components-storybook/
  composed-storybook/
```

Use Storybook Composition later.

---

## 24. Testing Rules

Use:

```txt
Vitest
Testing Library
```

Tests should cover:

- rendering
- variants
- accessibility
- keyboard behavior
- interactions
- states

---

## 25. Repository Quality Commands

All contributors and AI agents must run:

```bash
pnpm quality
```

Recommended scripts:

```bash
pnpm lint -- --max-warnings=0
pnpm typecheck
pnpm test
pnpm build
markdownlint .
```

---

## 26. First Milestone Success Criteria

The first milestone is successful when:

- monorepo setup works
- tokens package exports correctly
- core CSS exports correctly
- React package builds successfully
- Storybook works
- TacticalCard renders
- Button renders
- LiveIndicator renders
- repository remains warning-free
- accessibility standards are maintained

---

## 27. Long-Term Vision

Momentum UI should eventually become:

- a reusable enterprise design system
- a tactical intelligence interface ecosystem
- a multi-framework UI platform
- an AI-native operational UI architecture

Potential future targets:

- React
- Vue
- Svelte
- Angular
- Web Components
- React Native
- TV interfaces
- wearable operational interfaces

---

## 28. Final Rule

A task is NOT complete if:

- warnings exist
- deprecated APIs exist
- accessibility regresses
- lint fails
- typecheck fails
- tests fail
- markdownlint fails
- developer experience becomes worse
- repository consistency is reduced

Before completing any task:

```bash
pnpm quality
```
