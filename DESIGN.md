-# Design System Document

## 1. Overview & Creative North Star: "The Digital Sanctuary"

This design system is engineered to facilitate cognitive ease and deep work. Our Creative North Star is **The Digital Sanctuary**—an environment that feels less like a tool and more like a physical space designed for reflection.

To achieve a premium, editorial feel that surpasses standard "minimalist" templates, we move away from rigid grids and boxy containers. Instead, we utilize **intentional asymmetry, expansive breathing room, and tonal depth**. By prioritizing white space as a functional element rather than "empty" space, we guide the user’s focus toward a single, meaningful action at a time. The interface should feel "quiet," using soft transitions and organic layering to indicate importance rather than loud colors or harsh borders.

---

## 2. Colors & Surface Philosophy

The palette is rooted in deep indigo and soft violets to evoke a sense of nocturnal calm and focused stability.

### Color Tokens

- **Primary (Focus):** `primary` (#000666) and `primary_container` (#1A237E). Used for the core focus of the page.
- **Secondary (Flow):** `secondary` (#6F48B2) and `secondary_container` (#B78EFE). Used for supportive interactive elements.
- **Tertiary (Success):** `tertiary_fixed` (#9FF79F). Used sparingly for completion states and "Deep Work" streaks.
- **Neutral Base:** `surface` (#F9F9F9) and `surface_container_lowest` (#FFFFFF).

### The "No-Line" Rule

**Explicit Instruction:** Designers are prohibited from using 1px solid borders to section content. Layout boundaries must be defined exclusively through:

1.  **Background Shifts:** e.g., A `surface_container_low` card sitting on a `surface` background.
2.  **Vertical Rhythm:** Utilizing the spacing scale (specifically `8` to `12` units) to create "invisible" partitions.

### Surface Hierarchy & Nesting

Treat the UI as a series of stacked sheets of fine, semi-translucent paper.

- **Level 0 (Base):** `surface` (#F9F9F9)
- **Level 1 (Sections):** `surface_container_low` (#F3F3F3)
- **Level 2 (Active Cards):** `surface_container_lowest` (#FFFFFF)

### Signature Textures

To add "soul," use a subtle linear gradient on primary CTAs:

- **CTA Gradient:** `primary_container` (#1A237E) to `primary` (#000666) at a 135° angle.
- **Glassmorphism:** For floating navigation or modals, use `surface_container_lowest` with 80% opacity and a `20px` backdrop-blur.

---

## 3. Typography: Editorial Hierarchy

We pair **Manrope** (Display/Headlines) for its modern, geometric warmth with **Inter** (Body/Labels) for its surgical legibility.

- **The Hero Moment:** Use `display-lg` (3.5rem) with `on_surface` for focus timers. It should feel authoritative yet airy.
- **The Narrative:** Use `body-lg` (1rem) with a generous `1.6` line-height for instructional text to prevent visual fatigue.
- **The Label:** `label-md` (0.75rem) should always use `on_surface_variant` and 0.05em letter spacing to provide a sophisticated, technical feel for metadata.

---

## 4. Elevation & Depth: Tonal Layering

We reject the "drop shadow" defaults of the early web. Depth in this system is organic and atmospheric.

- **The Layering Principle:** Instead of shadows, place a `surface_container_lowest` card on a `surface_container_low` background. The slight shift in brightness creates a "Soft Lift."
- **Ambient Shadows:** If a component must float (e.g., a "Start Session" button), use a multi-layered shadow:
  - _Shadow:_ `0 10px 30px rgba(26, 35, 126, 0.05), 0 4px 8px rgba(0, 0, 0, 0.02)`
- **The "Ghost Border" Fallback:** If accessibility requires a container edge, use `outline_variant` at 15% opacity. Never use 100% opaque lines.
- **Roundedness:** Stick to the `lg` (2rem) and `xl` (3rem) tokens. Sharp corners are perceived as "cognitive friction"; we want "cognitive flow."

---

## 5. Components

### Buttons

- **Primary:** High roundedness (`full`), using the CTA Gradient. Text is `on_primary`.
- **Secondary:** `surface_container_high` background with `on_secondary_container` text. No border.
- **States:** On hover, apply a `surface_tint` overlay at 8% opacity.

### Cards & Lists

- **Forbid Dividers:** Do not use lines between list items. Use a `spacing-4` gap and a subtle background hover state (`surface_container_low`).
- **Layout:** Cards should use `rounded-lg` (2rem) to feel like smooth pebbles.

### Focus Timer (Signature Component)

- **Visual:** A large `display-lg` numeral centered in a `surface_container_lowest` circle.
- **Motion:** Use a slow, "breathing" scale animation (1.0 to 1.02) to signify an active session.

### Inputs

- **Style:** Minimalist underline or "soft well" using `surface_container_highest`.
- **Focus State:** Instead of a thick border, the background should transition to `surface_container_lowest` with a "Ghost Border" of `primary`.

---

## 6. Do’s and Don’ts

### Do

- **Do** embrace extreme asymmetry. Large headers on the left with significant white space on the right creates a premium, editorial look.
- **Do** use `tertiary_fixed` for success states; it provides a "nature-inspired" reward for finishing work.
- **Do** utilize `backdrop-blur` on headers to keep the content feeling layered and deep.

### Don’t

- **Don’t** use pure black (#000000) for text. Use `on_surface` (#1A1C1C) to maintain a soft, ink-on-paper feel.
- **Don’t** use standard "Material Design" shadows. They are too aggressive for a deep work environment.
- **Don’t** crowd the screen. If you have more than three primary interactive elements on a screen, move them to a secondary "drawer" or "sheet."
