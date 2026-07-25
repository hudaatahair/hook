---
name: Serene Pastels
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf1'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fa'
  on-surface: '#111c2c'
  on-surface-variant: '#3f4946'
  inverse-surface: '#263142'
  inverse-on-surface: '#ebf1ff'
  outline: '#6f7976'
  outline-variant: '#bec9c5'
  surface-tint: '#146a5c'
  primary: '#146a5c'
  on-primary: '#ffffff'
  primary-container: '#86d2c1'
  on-primary-container: '#005c4f'
  inverse-primary: '#89d5c4'
  secondary: '#59579a'
  on-secondary: '#ffffff'
  secondary-container: '#b7b4fe'
  on-secondary-container: '#464385'
  tertiary: '#30628a'
  on-tertiary: '#ffffff'
  tertiary-container: '#99c9f6'
  on-tertiary-container: '#1f557b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#a4f1df'
  primary-fixed-dim: '#89d5c4'
  on-primary-fixed: '#00201b'
  on-primary-fixed-variant: '#005045'
  secondary-fixed: '#e3dfff'
  secondary-fixed-dim: '#c3c0ff'
  on-secondary-fixed: '#150f53'
  on-secondary-fixed-variant: '#413f80'
  tertiary-fixed: '#cde5ff'
  tertiary-fixed-dim: '#9bcbf8'
  on-tertiary-fixed: '#001d32'
  on-tertiary-fixed-variant: '#104a70'
  background: '#f9f9ff'
  on-background: '#111c2c'
  surface-variant: '#d8e3fa'
typography:
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The brand identity is built on tranquility, kindness, and approachability. It targets users seeking a low-stress digital environment, such as wellness apps, early childhood education, or community-focused social platforms. The visual language aims to reduce cognitive load and evoke a sense of gentle optimism.

The design system adopts a **Modern Soft-Minimalism** style. It leverages generous whitespace and a "frosted" aesthetic to maintain clarity while feeling warm. By combining high-contrast typography with a desaturated, pastel-driven palette, the interface remains accessible without being visually aggressive. The emotional response is one of safety, reliability, and calm.

## Colors

The color strategy uses ultra-light tints as structural foundations rather than traditional greys. 

- **Primary (Soft Mint):** Used for primary actions and success states. It represents growth and balance.
- **Secondary (Light Lavender):** Used for accents, secondary buttons, and playful highlights.
- **Tertiary (Pale Sky Blue):** Reserved for information cues, link states, and calming background washes.
- **Backgrounds:** Use a "nearly white" approach. Base backgrounds are `#F8FBFA` (Mint-tinted white) or `#F9F9FF` (Lavender-tinted white) to prevent screen glare.
- **Typography:** To ensure WCAG AA compliance, text uses a deep charcoal-blue (`#4A5568`) rather than pure black, maintaining high legibility against pastel backgrounds while softening the visual weight.

## Typography

This design system uses a pairing of two friendly, modern sans-serifs. **Plus Jakarta Sans** provides a rhythmic, optimistic feel for headlines with its soft curves and open counters. **Be Vietnam Pro** is used for body copy and labels to ensure maximum readability across long-form content, maintaining a contemporary and inviting tone.

Large headlines use a tighter letter-spacing to create a cohesive visual block, while body text uses a generous line-height (1.6) to enhance the airy, "breathable" feel of the layout.

## Layout & Spacing

The layout follows a **Fluid Grid** model with an emphasis on "Safe Air"—purposeful empty space that directs focus toward content. 

- **Desktop:** A 12-column grid with a 24px gutter and 64px outer margins.
- **Mobile:** A 4-column grid with 16px margins. 
- **Rhythm:** An 8px base unit governs all padding and margin decisions. Elements should prioritize `md` (24px) or `lg` (48px) spacing to avoid visual clutter. 

Content containers should never feel cramped; vertical rhythm is achieved by doubling the spacing between distinct conceptual sections.

## Elevation & Depth

Depth is conveyed through **Ambient Shadows** and **Tonal Layers** rather than sharp borders.

- **Surface Tiers:** Use subtle background color shifts (e.g., a Lavender-white card on a Mint-white background) to define hierarchy.
- **Shadows:** Use extremely soft, long-range shadows. Shadows should be tinted with the Primary color (e.g., `rgba(134, 210, 193, 0.15)`) instead of grey, ensuring the elevation feels integrated with the color palette. 
- **Interactive Depth:** On hover, elements should slightly lift (increase shadow spread) and transition in color, rather than using heavy outlines.

## Shapes

The shape language is defined by **Rounded** geometry. 

- Standard components (Inputs, Buttons) use a 0.5rem (8px) radius.
- Large containers and Cards use a 1rem (16px) radius to emphasize the friendly, non-threatening aesthetic.
- Fully circular "Pill" shapes are reserved for high-visibility tags, chips, and floating action buttons to signify distinct interactivity.

## Components

- **Buttons:** Primary buttons use solid Soft Mint with dark charcoal text. Secondary buttons use a Light Lavender background or a 2px "ghost" border of the same color. Transitions must be smooth (200ms ease-in-out).
- **Cards:** Cards should feature 1rem corner radii, a subtle primary-tinted ambient shadow, and a background color that is one step lighter or more neutral than the page background.
- **Input Fields:** Fields use a 0.5rem radius and a very light grey-mint background (`#F0F7F5`). Focus states transition the border to the Primary Mint color with a soft outer glow.
- **Chips/Labels:** Use the Tertiary Pale Sky Blue for information-based chips and Light Lavender for category-based chips. Text inside chips should be slightly bolder for legibility.
- **Lists:** Items are separated by generous padding and ultra-thin, low-opacity lines (`rgba(0,0,0,0.05)`) to maintain the clean, "unrefined" minimalist look.
- **Modals/Overlays:** Use a heavy backdrop blur (12px) with a semi-transparent white overlay to create a dream-like, focused state for user attention.