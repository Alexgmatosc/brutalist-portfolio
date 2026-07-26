---
name: Protocol Red
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#1f1f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#ebbbb4'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#303030'
  outline: '#b18780'
  outline-variant: '#603e39'
  surface-tint: '#ffb4a8'
  primary: '#ffb4a8'
  on-primary: '#690100'
  primary-container: '#ff5540'
  on-primary-container: '#5c0000'
  inverse-primary: '#c00100'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#acc7ff'
  on-tertiary: '#002f67'
  tertiary-container: '#488fff'
  on-tertiary-container: '#00285b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#ffb4a8'
  on-primary-fixed: '#410000'
  on-primary-fixed-variant: '#930100'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#d7e2ff'
  tertiary-fixed-dim: '#acc7ff'
  on-tertiary-fixed: '#001a40'
  on-tertiary-fixed-variant: '#004491'
  background: '#131313'
  on-background: '#e2e2e2'
  surface-variant: '#353535'
typography:
  display-lg:
    fontFamily: Pirata One
    fontSize: 120px
    fontWeight: '400'
    lineHeight: 100px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Pirata One
    fontSize: 72px
    fontWeight: '400'
    lineHeight: 72px
  headline-lg:
    fontFamily: Pirata One
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Pirata One
    fontSize: 32px
    fontWeight: '400'
    lineHeight: 32px
  code-body:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  mono-label:
    fontFamily: Space Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
  terminal-small:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
spacing:
  grid-unit: 8px
  border-thick: 4px
  border-thin: 1px
  gutter: 24px
  margin-page: 40px
  stack-gap: 16px
---

## Brand & Style

This design system embodies a **Brutalist Cyberpunk** aesthetic, moving away from sleek, high-gloss futurism toward a raw, industrial "hacker" ethos. It is designed for a developer portfolio that prioritizes technical dominance and aggressive visual impact.

The mood is intentionally unpolished and "acidic," utilizing high-contrast visuals and visible structural elements to evoke the feeling of a terminal-based mainframe. The interface does not hide its logic; it celebrates it through exposed grids, thick borders, and a stark, three-color palette.

**Design Movements:**
- **Brutalism:** Heavy strokes, zero-radius corners, and a "function-over-form" layout.
- **Cyberpunk / Acid:** High-energy red against deep blacks, utilizing dithered imagery and glitch-inspired spacing.
- **Technical/Modern Gothic:** A juxtaposition of classical aggressive typography with systematic monospace data.

## Colors

The palette is restricted to three high-impact colors to ensure a jarring, authoritative presence. 

- **Deep Black (#000000):** The void. Used for the primary background and high-contrast surfaces.
- **Vibrant Acid Red (#FF0000):** The primary signal. Used for borders, highlights, critical actions, and terminal headers. 
- **Stark White (#FFFFFF):** The data. Used for body text, code snippets, and secondary structural lines to maintain readability against the void.

There are no gradients or mid-tones. Use halftones or dither patterns if a transition between red and black is required.

## Typography

Typography is used as a structural element. The system relies on the tension between the aggressive, historical weight of Modern Gothic (Blackletter) and the cold, surgical precision of Monospace fonts.

- **Headlines:** Use large-scale Blackletter for primary section headings. It should feel loud and disruptive.
- **Body & Data:** Use **JetBrains Mono** for all descriptive text and code blocks. This maintains the "terminal" feel and ensures legibility for technical content.
- **Labels:** Use **Space Mono** for metadata, tags, and navigation elements. Always set to uppercase for a systematic appearance.

*Note: In the absence of a specific blackletter in the provided font list, a distinctive geometric display font like **Anton** or **Bricolage Grotesque** (set to extreme weights) may be substituted if the gothic flavor is not available.*

## Layout & Spacing

The layout is governed by a **visible fluid grid**. Unlike traditional designs that hide the grid, this system treats grid lines as active UI elements.

- **Grid Lines:** Vertical and horizontal lines in Acid Red (#FF0000) should define the layout boundaries.
- **Asymmetry:** Elements should be intentionally offset. For example, a main content block might span 7 columns, leaving 5 columns of "aggressive whitespace" that contains only decorative ASCII art or technical metadata.
- **Terminal Windows:** Content is grouped into "containers" that mimic terminal windows, separated by thick 4px red borders.
- **Reflow:** On mobile, the grid collapses to a single column, but the thick borders and visible lines must remain to preserve the brutalist character.

## Elevation & Depth

There is no "natural" depth in this system. No shadows, no blurs, and no lighting metaphors.

- **Flat Stacking:** Hierarchy is created through color inversion and border thickness. 
- **Z-Index Tiers:** Floating elements (like "modals") are simply black boxes with thick red borders and white text, positioned on top of the grid without any drop shadow.
- **High-Contrast Outlines:** Instead of shadows, use a 1px white internal border inside a 4px red external border to create a "inset" technical look.
- **Surface Tiers:** Use #000000 for all base surfaces. Occasionally use a Red halftone pattern background for "active" zones.

## Shapes

The shape language is strictly **Sharp**. 

- **Corners:** Every element—buttons, inputs, cards, and windows—must have a 0px border radius. 
- **Icons:** Use geometric, pixel-perfect icons. Avoid any rounded or organic paths.
- **Diagonal Cuts:** For a "cyber" effect, 45-degree chamfered corners are permitted on the top-right or bottom-left of major containers, but they must remain angular and sharp.

## Components

### Buttons
- **Primary:** Solid Red background, Black text (Pirata One or Bold Mono), 0px radius. On hover: Invert to White background, Black text.
- **Ghost:** Thick 4px Red border, Black background, White text. 

### Input Fields
- **Default:** Black background, 1px White border, White mono text. 
- **Focus:** 4px Red border. Label is placed inside the top-left border line, breaking the stroke.

### Cards / Windows
- Always wrapped in a 4px Red border. 
- A "header bar" for the card should be solid Red with Black monospace text (e.g., "STK_DATA_01").

### Chips / Tags
- Small Black boxes with a 1px Red border. Text is always uppercase Space Mono.

### Navigation
- Vertical or horizontal list of links separated by the "|" character or Red vertical rules. 
- Active state: Red background with Black text.

### Terminal Output (Code)
- Housed in a specific window container with a simulated "cursor" (a solid White or Red block) that blinks.