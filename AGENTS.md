# Momentum UI — AGENTS.md

## Unified AI Agent & Repository Development Rules

This file is the single source of truth for:

- AI coding agents
- developers
- contributors
- automation systems
- repository tooling

Applies to:

- React
- TypeScript
- CSS
- Storybook
- Documentation
- Testing
- Tooling
- Build systems
- Future framework implementations

---

### 1. Project Identity

Momentum UI is a standalone tactical intelligence design system.

The system is designed for:

- realtime intelligence
- sports analytics
- operational dashboards
- predictive systems
- spatial interfaces
- AI-native enterprise applications

Momentum UI is NOT intended to become:

- a generic dashboard kit
- a standard SaaS component library
- a clone of existing UI frameworks

The design language should feel:

- tactical
- realtime
- kinetic
- intelligent
- spatial
- precise
- enterprise-grade

---

### 2. Core Philosophy

Momentum UI focuses on:

- realtime awareness
- tactical context
- motion as information
- predictive interfaces
- spatial intelligence
- adaptive surfaces
- developer comfort
- framework scalability

The UI should feel closer to:

- Formula 1 telemetry
- command centers
- cybersecurity dashboards
- aerospace telemetry
- operational intelligence systems

than traditional admin dashboards.

---

### 3. Repository Philosophy

The repository must optimize for:

- maintainability
- scalability
- readability
- consistency
- low friction
- warning-free development
- framework extensibility
- developer experience

Every contributor should be able to:

- clone
- install
- run
- build
- and contribute

with minimal setup friction.

---

### 4. Developer Experience Rule

Developer experience is a top-level architectural requirement.

Developers should focus on:

- component quality
- accessibility
- performance
- API design
- optimization

Developers should NOT struggle with:

- noisy warnings
- confusing setup
- unstable tooling
- unclear scripts
- broken documentation
- hidden package coupling
- slow feedback loops
- excessive complexity

Every change should preserve or improve:

- readability
- repository simplicity
- tooling consistency
- development speed

---

### 5. Modern Technology Rule

Always use:

- latest stable package versions
- latest stable APIs
- latest stable language features
- latest stable framework features
- latest stable browser-safe features

Do NOT use:

- deprecated APIs
- deprecated configuration
- unstable browser APIs
- abandoned packages
- legacy framework patterns

---

### 6. Package Management Rules

Use:

- pnpm
- Turborepo

Rules:

- keep dependency tree clean
- avoid unnecessary dependencies
- avoid duplicated tooling
- avoid dependency overlap
- avoid abandoned packages
- avoid deprecated packages

Allowed dependency categories:

- build tooling
- testing
- documentation
- linting
- formatting
- accessibility tooling
- visual regression tooling

Not allowed:

- external component libraries
- prebuilt UI kits
- CSS frameworks that remove design identity

---

### 7. CSS Standards

Use modern browser-safe CSS features.

Preferred CSS:

- CSS custom properties
- cascade layers
- container queries
- logical properties
- modern layout systems
- prefers-reduced-motion
- prefers-color-scheme
- browser-safe modern selectors

Do NOT use:

- deprecated CSS
- unstable experimental CSS
- invalid CSS patterns
- browser-warning-generating CSS

CSS must remain:

- scalable
- maintainable
- predictable
- warning-free

---

### 8. React Standards

Use latest stable React APIs.

Rules:

- avoid deprecated React APIs
- avoid legacy lifecycle patterns
- avoid string refs
- avoid legacy context
- avoid unstable APIs
- prefer composition
- prefer predictable component APIs
- avoid unnecessary re-renders
- avoid unnecessary memoization

Components should remain:

- readable
- accessible
- maintainable

---

### 9. TypeScript Standards

Use strict TypeScript.

Requirements:

- strict mode enabled
- no implicit any
- avoid broad types
- avoid unnecessary assertions
- no ts-ignore without documented reason
- prefer discriminated unions
- strongly type public APIs

Do NOT suppress errors instead of fixing them.

---

### 10. Warning-Free Repository Policy

Momentum UI must remain warning-free.

Warnings are treated as technical debt.

Warnings are NOT acceptable in:

- Markdown
- TypeScript
- JavaScript
- CSS
- Storybook
- build tooling
- testing
- accessibility
- terminal output
- CI pipelines
- documentation

---

### 11. Markdown Rules

All Markdown files must be lint-clean.

Requirements:

- proper heading hierarchy
- no trailing spaces
- valid fenced code blocks
- valid language identifiers
- proper spacing
- valid tables
- valid links
- consistent formatting

Use:

```bash
markdownlint .
```

### 11.1 Non-Obvious Change Documentation Rule

If an implementation uses a non-straightforward approach, the change must
be documented in `docs/` for developers.

This rule applies only when the reasoning would be difficult to infer from
the codebase alone.

Documentation should explain:

- why the approach exists
- which files are involved
- how a developer should work with or verify it
- which commands are relevant

Do NOT create explanation documents for routine, obvious, or low-risk
changes.

### 11.2 Current Status Tracking Rule

The repository must include:

```txt
docs/CURRENT_STATUS.md
```

This file is required and must track implementation progress against:

```txt
docs/IMPLEMENTATION_PLAN.md
```

Rules:

- completed phases should only state that the phase is complete
- the currently active phase must contain detailed implementation status
- when work moves to the next phase, detailed notes from the previous
  phase may be removed
- the file should reflect the real current state of the repository, not a
  future plan
- AI agents must update this file when phase status materially changes

Purpose:

- preserve development continuity across CLI agents
- reduce repeated codebase rediscovery
- make implementation status obvious without scanning the whole repo

### 12. Accessibility Excellence Standards

Accessibility is a first-class architectural requirement.

Momentum UI components should aim to achieve:

- WCAG 2.2 AA compliance at minimum wherever possible
- WCAG AAA compliance when realistically achievable
  without harming usability or product goals

Accessibility is NOT considered:

- optional
- enhancement work
- post-development work
- separate QA work

Accessibility must be designed into components from the beginning.

---

#### Mandatory Accessibility Requirements

Every component must support:

- semantic HTML
- keyboard navigation
- visible focus states
- screen reader compatibility
- accessible labeling
- ARIA attributes where appropriate
- reduced motion support
- accessible interaction patterns
- sufficient contrast ratios
- scalable typography
- zoom compatibility
- logical tab order
- non-color-based communication
- accessible loading and error states

---

#### WCAG Standards

##### Required Minimum Target

WCAG 2.2 AA

##### Preferred Target

WCAG AAA where feasible.

Examples where AAA should be attempted:

- typography readability
- color contrast
- focus visibility
- spacing clarity
- motion reduction
- interaction clarity

---

#### Color & Contrast Rules

Components must:

- maintain accessible contrast ratios
- avoid low-contrast text
- avoid relying only on color to communicate meaning
- remain readable in dark and light themes

Avoid:

- visually aesthetic but inaccessible combinations
- hidden focus indicators
- low-opacity important content

---

#### Keyboard Accessibility Rules

Every interactive component must:

- be fully keyboard accessible
- support logical tab navigation
- support Enter/Space activation where appropriate
- avoid keyboard traps
- expose clear focus visibility

Keyboard users must be able to use the system without requiring a mouse.

---

#### Motion Accessibility Rules

Motion-heavy interfaces must:

- respect reduced motion settings
- avoid excessive animation
- avoid flashing effects
- avoid disorienting movement
- avoid motion-only communication

Required:

```css id="9v7ru9"
@media (prefers-reduced-motion: reduce);
```

## 13. Storybook Documentation Standards

Every component MUST have proper Storybook documentation.

Storybook documentation is NOT optional.

A component is NOT considered complete unless:

- its behavior is documented,
- its variants are documented,
- its states are documented,
- its accessibility behavior is documented,
- and its usage examples are documented.

---

### Mandatory Storybook Requirements

Every component must include:

- default story
- variant stories
- size stories where applicable
- state stories
- accessibility notes
- usage examples
- prop documentation
- interaction examples where relevant

---

### Variant Documentation Rules

Every supported variant must be documented.

Example:

```tsx id="rjlwm0"
<Button variant="primary" />
<Button variant="ghost" />
<Button variant="danger" />
<Button variant="momentum" />
```

## Repository Reference Documents

Before implementation, AI agents MUST also read:

```txt
docs/IMPLEMENTATION_PLAN.md
docs/CURRENT_STATUS.md
```

Development must continue only after these required documents have been
checked and understood, including the current implementation status.
