# Frontend UI/UX Agent

## Purpose

This agent defines how the UCLA experience website should look, feel, move, and behave. It is responsible for maintaining a premium editorial frontend instead of letting the site drift into generic landing-page patterns or inconsistent one-off effects.

## Design Intent

The site should communicate:

- a meaningful personal UCLA experience
- aspiration and atmosphere
- clarity without stiffness
- confidence without visual noise

The visual language should feel closer to an editorial story page or polished brand experience than to a student project demo page.

## Visual Direction

Preferred characteristics:

- bold but restrained typography
- generous whitespace
- strong section rhythm
- large media moments
- elegant color use
- carefully layered surfaces
- premium transitions

Avoid:

- overly bright or playful palettes
- crowded card grids as the dominant visual pattern
- random gradients without compositional purpose
- excessive rounded-corner SaaS styling
- loud shadow stacks
- too many competing highlight colors
- novelty effects that date quickly

## Content Presentation Rules

This site should tell a story, not just list facts.

Rules:

- every major section should have a clear visual role
- use strong opening and closing moments
- alternate dense and calm sections to control pacing
- large images should support emotional memory and place-making
- text blocks should stay readable and not span too wide
- supporting detail should be subordinate to the main narrative

If a section feels like generic filler, restructure or cut it.

## Typography Rules

Typography should do significant visual work.

Rules:

- establish a clear display style for hero and section headlines
- use a highly readable body style
- keep the number of font families low
- use weight, scale, spacing, and case intentionally
- avoid default system-looking typography unless deliberately chosen

Typography should feel designed, not inherited.

## Color Rules

Color should support sophistication and UCLA context without becoming literal school-brand merchandise.

Guidance:

- use a refined palette with UCLA-aware blue/gold influences only if handled sparingly
- neutral tones should carry much of the layout
- accent color should be used to direct focus, not to decorate everything
- contrast must remain strong enough for accessibility

The palette should feel premium and calm, not saturated and noisy.

## Layout Rules

The page should rely on section composition, not default blocks.

Rules:

- sections need distinct pacing and spatial identity
- use asymmetry when it improves elegance or emphasis
- containers should not all share the same width and rhythm
- use layered media, bleed areas, and framing where it strengthens the story
- keep alignment systems disciplined even when layouts feel expressive

Visual sophistication should come from proportion and rhythm, not clutter.

## Motion Strategy

Motion must feel smooth, expensive, and under control.

Preferred motion types:

- fade and rise entrances
- masked reveals
- subtle parallax or depth response
- hover refinement on cards, media, and navigation
- scroll-linked emphasis between sections
- gentle image scaling or framing transitions

Rules:

- motion should be slow enough to feel intentional
- avoid springy, bouncy, or game-like behavior
- avoid multiple unrelated motions firing at once
- keep easing curves soft and premium
- use stagger only when it improves readability and cadence
- treat motion as part of composition, not an afterthought

If an animation draws attention to itself more than to the content, tone it down.

## Mobile Motion Rules

Mobile should receive a lighter version of the experience.

Rules:

- reduce layered parallax and mouse-based behavior
- shorten animation distance
- preserve opacity and transform-based entrances where cheap and clear
- remove nonessential decorative motion
- prioritize readability, touch comfort, and smooth scrolling

Desktop may be richer. Mobile must remain stable, fast, and deliberate.

## Interaction Rules

Interactions should feel polished and legible.

Rules:

- hover effects must have visible intent and clean states
- touch interactions must not rely on hover discovery
- sticky or scroll-reactive components must not trap the user
- interactive cards should have clear hit areas
- navigation should help orientation, not create visual noise

Micro-interactions are welcome only when they reinforce hierarchy or feedback.

## Implementation Rules

Preferred implementation order:

1. semantic HTML structure
2. CSS layout and tokens
3. CSS transitions and animation
4. small JavaScript enhancements
5. external library only if still necessary

Preferred frontend techniques:

- CSS custom properties for spacing, color, radius, durations, and easing
- `clamp()` for scalable typography and spacing
- CSS Grid and Flexbox for layout
- `IntersectionObserver` for reveal logic
- `requestAnimationFrame` only for interaction that genuinely needs frame control
- progressive enhancement for richer effects

Avoid:

- animation logic spread randomly through large script files
- inline styles for recurring design decisions
- effect code that cannot be disabled or simplified per breakpoint
- dependencies for interactions that are trivial in native code

## Accessibility Rules

Premium design must still be accessible.

Required:

- `prefers-reduced-motion` handling for all significant motion
- keyboard support for navigation and interactive elements
- visible focus styling aligned with the design
- readable line length and line height
- sufficient contrast in overlays and hero text
- no critical meaning hidden only in animation states

## Performance Rules

Smoothness is part of the visual brief.

Rules:

- optimize imagery before adding more effects
- animate `transform` and `opacity` first
- avoid scroll listeners for effects that can be done with observers or CSS
- limit simultaneous animated elements on first load
- lazy-load embeds and heavy media where possible
- question every third-party embed that costs performance or visual control

An elegant page that feels smooth is better than a more ambitious page that stutters.

## Working Rules For Future Codex Sessions

When making frontend changes:

1. Define the visual intention of the section before coding.
2. Reuse existing patterns only if they match the premium direction.
3. Prefer refinement over effect accumulation.
4. Test both desktop and mobile assumptions.
5. Check whether the interaction still works with reduced motion.
6. Keep the DOM and CSS understandable for later editing in IntelliJ/Rider.

## When To Keep It Simple

Prefer the simpler approach when:

- a CSS-only solution achieves the desired effect
- a static composition communicates better than an elaborate interaction
- a single well-crafted media section is better than multiple busy modules
- removing an effect increases elegance

Complexity is justified only when it creates a clearly better visual and narrative result.
