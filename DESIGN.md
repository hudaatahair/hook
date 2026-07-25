---
name: Clinical Clarity & Compassion
colors:
  surface: '#f7f9ff'
  surface-dim: '#d7dadf'
  surface-bright: '#f7f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f4f9'
  surface-container: '#ebeef3'
  surface-container-high: '#e5e8ee'
  surface-container-highest: '#e0e3e8'
  on-surface: '#181c20'
  on-surface-variant: '#424752'
  inverse-surface: '#2d3135'
  inverse-on-surface: '#eef1f6'
  outline: '#727784'
  outline-variant: '#c2c6d4'
  surface-tint: '#115cb9'
  primary: '#003f87'
  on-primary: '#ffffff'
  primary-container: '#0056b3'
  on-primary-container: '#bbd0ff'
  inverse-primary: '#acc7ff'
  secondary: '#006e25'
  on-secondary: '#ffffff'
  secondary-container: '#80f98b'
  on-secondary-container: '#007327'
  tertiary: '#3f4243'
  on-tertiary: '#ffffff'
  tertiary-container: '#57595a'
  on-tertiary-container: '#ced0d1'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d7e2ff'
  primary-fixed-dim: '#acc7ff'
  on-primary-fixed: '#001a40'
  on-primary-fixed-variant: '#004491'
  secondary-fixed: '#83fc8e'
  secondary-fixed-dim: '#66df75'
  on-secondary-fixed: '#002106'
  on-secondary-fixed-variant: '#00531a'
  tertiary-fixed: '#e1e3e4'
  tertiary-fixed-dim: '#c5c7c8'
  on-tertiary-fixed: '#191c1d'
  on-tertiary-fixed-variant: '#454748'
  background: '#f7f9ff'
  on-background: '#181c20'
  surface-variant: '#e0e3e8'
typography:
  headline-lg:
    fontFamily: Public Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Public Sans
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Public Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Public Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Public Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-md:
    fontFamily: Public Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  touch-target-min: 48px
  margin-mobile: 24px
  margin-desktop: 64px
  gutter: 16px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style
The design system is centered on a "Supportive Professionalism" aesthetic. It balances the precision of medical technology with the warmth of a rehabilitative companion. The style utilizes a refined **Corporate/Modern** foundation with **Minimalist** leanings to reduce cognitive load—essential for users experiencing post-stroke recovery. 

The emotional response is one of safety, progress, and clarity. The interface avoids clutter, using generous whitespace and a rhythmic hierarchy to guide the eye through recovery tasks without causing fatigue.

## Colors
The palette is rooted in medical stability and natural vitality. 
- **Primary (Medical Blue):** Used for critical actions, navigation, and brand elements to establish trust and authority.
- **Secondary (Healing Green):** Reserved for progress indicators, success states, and positive reinforcement in the recovery journey.
- **Surface & Backgrounds:** A range of ultra-light greys and off-whites ensure the UI feels airy.
- **Semantic Colors:** Critical alerts use a soft amber rather than a harsh red to minimize patient anxiety, while maintaining high contrast for legibility.

## Typography
This design system utilizes **Public Sans** for its exceptional legibility and institutional neutrality. The typographic scale is intentionally larger than standard applications to accommodate users with visual impairments or motor-control challenges. 

- **Weight Usage:** Bold weights are used sparingly for key instructions. 
- **Readability:** Paragraph widths are capped at 60 characters to prevent eye strain.
- **Contrast:** All text-to-background ratios strictly exceed WCAG AA standards (4.5:1 for body text).

## Layout & Spacing
A **fixed-fluid hybrid grid** is employed. On mobile, a single-column layout is prioritized to minimize distractions. For tablet and desktop, a 12-column grid is used with significant external margins to keep content centered and easy to scan.

The spacing rhythm follows an 8px base unit. Interaction targets (buttons, inputs) must never fall below the 48px threshold. Generous "stack" spacing (vertical rhythm) is used to separate distinct functional blocks, preventing the UI from feeling cramped.

## Elevation & Depth
Depth is conveyed through **Tonal Layers** and **Ambient Shadows**. 
- **Level 0 (Background):** Solid white or #F8F9FA.
- **Level 1 (Cards):** Subtle 1px borders in a soft neutral grey, paired with a very diffused, low-opacity shadow (4% alpha) to suggest lift without creating visual noise.
- **Level 2 (Active/Floating):** Higher elevation shadows (8% alpha) are used for active states or modals to pull the user's focus to the primary interaction point.
Avoid using harsh dark shadows or complex gradients.

## Shapes
The shape language is **Rounded**, using an 8px (0.5rem) base radius. This removes the "sharpness" often associated with clinical software, making the experience feel more approachable and gentle. 
- **Interactive elements:** Buttons and input fields use the standard 8px radius.
- **Large Containers:** Cards and modals use `rounded-xl` (24px) to create a friendly, modern frame for content.

## Components
- **Buttons:** Minimum height of 48px. Primary buttons use Medical Blue with white text. Ghost buttons use a 2px border for high visibility. Icons should accompany text where possible to aid recognition.
- **Cards:** Used to group recovery exercises or health metrics. Cards feature 24px internal padding and a subtle Level 1 shadow.
- **Inputs:** Large, clear labels placed above the field. 16px internal padding for touch ease. Active states are highlighted with a 2px Medical Blue border.
- **Progress Trackers:** Horizontal bars using Healing Green to visualize recovery milestones. Avoid thin lines; use a minimum 12px height for progress bars.
- **Selection (Radios/Checks):** Enhanced size (24x24px) for easier interaction for those with limited dexterity.
- **Specialty - Exercise Cards:** High-contrast visuals with a "Large Play" button, ensuring the start action is the most prominent element on the screen.