# UCLA Website Agents

## Agent Setup Recommendation

This project should use `2` agents.

1. `AGENTS.md`
   Purpose: global project, architecture, scope, technical guardrails, and decision rules.
2. `agents/frontend-ui-ux.md`
   Purpose: design direction, motion principles, responsive behavior, accessibility, and frontend implementation standards.

This is intentionally lean. A separate backend agent is not justified for the current project state because the site is a static, presentation-focused experience without meaningful backend workflows, business logic, or data processing requirements.

## Project Identity

This repository contains a personal UCLA experience website. The site is not a generic portfolio and not a data-heavy product surface. It should present the UCLA experience as a polished, immersive, editorial story with strong visual hierarchy, premium spacing, large imagery, and carefully controlled motion.

The intended tone is:

- modern
- cinematic
- elegant
- editorial
- visually strong
- emotionally engaging

The site must not become playful, noisy, gimmicky, or overloaded with effects.

## Current Technical Reality

The current repository is a static frontend:

- root-level HTML pages
- custom CSS in `css/`
- custom JavaScript in `js/`
- static assets in `images/`
- no build pipeline
- no framework application structure

Any future change should respect that the project currently succeeds through simplicity.

## Primary Goal For Future Work

Future work should improve the website in this order:

1. visual quality and narrative clarity
2. interaction quality and motion polish
3. responsive behavior
4. performance and maintainability
5. content refinement

Features that do not materially improve presentation quality, storytelling, usability, or maintainability should be rejected.

## Technical Base Recommendation

Preferred base for this project: `Vanilla HTML + CSS + modern Vanilla JavaScript`.

Reasoning:

- The current site is static and content-driven rather than application-driven.
- Most desired improvements are visual layout, motion, transitions, hover behavior, scroll choreography, and stronger structure.
- React would add setup, abstraction, and maintenance overhead before there is enough component/state complexity to justify it.
- Native web APIs are sufficient for most likely needs: `IntersectionObserver`, `matchMedia`, `scroll-timeline` where safely usable, CSS transforms, CSS transitions, CSS animations, `requestAnimationFrame`, and small focused ES modules.
- IntelliJ/Rider compatibility stays straightforward with plain files and minimal tooling.

React should only be introduced if at least one of these becomes true:

- the site evolves into a multi-view component system with repeated interactive patterns that are expensive to maintain in plain HTML
- stateful UI behavior becomes central to the experience
- content sections become data-driven or CMS-fed
- a build system is already being introduced for strong reasons beyond React itself

Until then, default to vanilla.

## Library And Framework Rules

Default rule: prefer native platform capabilities first.

Allowed:

- small, targeted libraries that solve a hard problem clearly better than native code
- animation helpers only when they materially improve smoothness, orchestration, or maintainability
- utility tooling if it remains lightweight and does not force a framework migration

Not allowed by default:

- heavy UI frameworks just for convenience
- multiple overlapping animation libraries
- libraries that mostly duplicate CSS capabilities
- dependencies that exist only to avoid writing a small amount of clear JavaScript

Before adding any dependency, answer all of these:

1. What concrete problem does it solve here?
2. Why are native APIs or a small custom implementation not enough?
3. What is the performance cost?
4. What is the maintenance cost?
5. Does it improve the mobile experience, or only desktop flair?

If those answers are weak, do not add the dependency.

## Backend Position

Backend is currently out of scope.

Do not introduce backend code, APIs, databases, authentication, form handling services, or deployment complexity unless the user explicitly changes the product scope.

If a future feature request appears to require backend work, first ask whether the requirement can be achieved as:

- static content
- embedded third-party media
- pre-generated data
- client-side progressive enhancement

## Motion And Interaction Principles

Motion is a storytelling tool, not decoration.

Approved interaction types:

- scroll reveal
- image parallax or depth cues
- subtle mouse-follow behavior
- hover elevation and highlight responses
- section transitions
- soft content entrance animations
- cinematic media framing changes

Rules:

- every animation must support hierarchy, focus, pacing, or delight
- avoid constant motion that competes with reading
- avoid stacked effects on the same element unless the result is clearly restrained
- mobile gets a simplified version of desktop motion
- respect `prefers-reduced-motion`
- prioritize transform and opacity over layout-triggering animation

If an effect is impressive but distracts from the story, remove or reduce it.

## Responsive Strategy

Responsive behavior is mandatory, not cleanup work.

Design for:

- mobile first in layout resilience
- desktop first in cinematic composition

Rules:

- mobile should preserve the same narrative structure with reduced motion and simpler layering
- typography, spacing, and media cropping must be tuned per breakpoint
- hover-only ideas must have a touch-safe fallback
- sticky, scroll-driven, and layered sections must degrade cleanly on smaller screens
- no section should rely on precise viewport dimensions to remain usable

## Performance Priorities

Performance is a first-class design requirement.

Rules:

- large images must be optimized and sized intentionally
- animation work must avoid scroll jank
- prefer CSS for straightforward transitions
- use JavaScript only when interaction logic truly requires it
- lazy-load non-critical media where appropriate
- avoid embedding unnecessary third-party payloads
- remove dead CSS, dead JS, and unused framework assets when touched

When visual ambition and performance conflict, keep the premium feeling while reducing implementation complexity.

## Accessibility Priorities

Accessibility is part of quality, not a later pass.

Required standards:

- semantic HTML first
- meaningful heading hierarchy
- keyboard-accessible navigation and interactive components
- visible focus states
- sufficient text contrast
- reduced-motion handling
- images and media with sensible alternative text or labels

Do not ship interactions that work only with hover, only with precise pointer input, or only with animation cues.

## Code Quality Standards

All future work should follow these rules:

- keep HTML semantic and section-oriented
- keep CSS organized by tokens, layout, components, states, and responsive overrides
- keep JavaScript modular, focused, and event-safe
- prefer small reusable utilities over sprawling script files
- avoid magic numbers unless tied to a documented layout reason
- remove obsolete code when replacing it
- comment only where intent would otherwise be unclear

## Maintainability And Structure

The project should remain easy to continue in IntelliJ/Rider.

Preferred structure direction:

- `index.html` remains the main narrative page unless a larger re-architecture is explicitly approved
- content pages may remain plain HTML if they are simple supporting pages
- custom styles should gradually consolidate into clearly named sections or files
- custom scripts should move toward small purpose-specific modules when complexity grows
- assets should be named descriptively and grouped by purpose

Avoid premature architecture. This project should feel curated, not over-engineered.

## Decision Rules For Future Changes

Choose the simpler solution when:

- it produces the same user-facing result
- it is easier to maintain
- it avoids adding dependencies
- it performs better on mobile
- it keeps the codebase easier to understand

Choose the more advanced solution only when:

- the design intent genuinely requires it
- the simpler solution visibly degrades the experience
- the added complexity is contained and justified

## Change Management Rules

When working on this project in the future:

1. Start by stating the intended user-facing outcome.
2. Preserve the editorial, premium design direction.
3. Confirm whether the change should be static-first and vanilla-first.
4. Keep motion restrained and purposeful.
5. Validate desktop and mobile behavior.
6. Check for accessibility and performance regressions.
7. Prefer incremental improvement over broad rewrites unless a rewrite is explicitly requested.

## Agent Routing

Use this file for:

- architecture decisions
- framework and dependency decisions
- structure changes
- scope control
- performance guardrails
- maintainability rules

Use [agents/frontend-ui-ux.md](/C:/Users/pschwarz/RiderProjects/nak_ucla/agents/frontend-ui-ux.md) for:

- visual direction
- layout tone
- motion style
- section design
- interaction design
- responsive UI behavior
