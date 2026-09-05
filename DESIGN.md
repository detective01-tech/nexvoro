---
name: Tarifino High Tech Limited Systems
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#424754'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#727785'
  outline-variant: '#c2c6d6'
  surface-tint: '#005ac2'
  primary: '#0058be'
  on-primary: '#ffffff'
  primary-container: '#2170e4'
  on-primary-container: '#fefcff'
  inverse-primary: '#adc6ff'
  secondary: '#545f73'
  on-secondary: '#ffffff'
  secondary-container: '#d5e0f8'
  on-secondary-container: '#586377'
  tertiary: '#924700'
  on-tertiary: '#ffffff'
  tertiary-container: '#b75b00'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#d8e3fb'
  secondary-fixed-dim: '#bcc7de'
  on-secondary-fixed: '#111c2d'
  on-secondary-fixed-variant: '#3c475a'
  tertiary-fixed: '#ffdcc6'
  tertiary-fixed-dim: '#ffb786'
  on-tertiary-fixed: '#311400'
  on-tertiary-fixed-variant: '#723600'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  h1-desktop:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h1-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.25'
    letterSpacing: -0.01em
  h2:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
  button:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: '1'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  section-gap-desktop: 120px
  section-gap-mobile: 64px
  grid-gutter: 24px
  container-max-width: 1200px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style

The design system is built for a professional, helpful, and reliable Canadian technology consulting service. It utilizes a **Corporate / Modern** aesthetic that emphasizes clarity, trust, and accessibility. 

The visual language is characterized by high legibility, structured layouts, and a calming professional palette. It balances technical precision with a "helpful neighbor" persona, ensuring that even complex technical services feel approachable to the target audience. The interface remains grounded through the use of solid backgrounds and clear information hierarchy, avoiding unnecessary flourishes in favor of functional elegance.

## Colors

The palette is anchored by **Dark Navy (#1E293B)**, used for high-impact hero sections, headers, and footers to establish authority and professional depth. **Sky Blue (#3B82F6)** serves as the primary action color, driving user engagement through buttons, links, and active states.

The background system relies on **#F8FAFC** for main body content to ensure a clean, breathable canvas, while white (#FFFFFF) is reserved for card surfaces to provide subtle elevation contrast. Text is rendered in **#0F172A** for optimal readability and accessibility.

## Typography

The design system exclusively uses **Inter** to maintain a systematic, utilitarian, and modern feel. The hierarchy is driven by significant weight contrasts. 

- **Headlines:** Use Bold (700) or SemiBold (600) weights with slight negative letter-spacing to create a "strong" and authoritative presence.
- **Body:** Standardized at 16px for general content, with 18px used for lead paragraphs in hero sections to improve scannability.
- **Labels:** Small, uppercase labels are used for category tags or "How it works" steps to provide architectural clarity without competing with headings.

## Layout & Spacing

This design system follows a **Fixed Grid** approach for desktop, centering content within a 1200px container to maintain a professional, organized structure. 

- **Desktop:** 12-column grid with 24px gutters. Section vertical spacing is generous (120px) to allow for clear separation of service offerings.
- **Mobile:** Single column layout with 20px horizontal margins. 
- **Rhythm:** All margins and paddings are multiples of 8px. Use "stack-lg" (48px) to separate distinct groups within a section, and "stack-sm" (12px) for internal component spacing (e.g., card title to card description).

## Elevation & Depth

Hierarchy is achieved through **Tonal Layers** and **Ambient Shadows**. 

1.  **Level 0 (Base):** Light Gray (#F8FAFC) for the main page background.
2.  **Level 1 (Surface):** White (#FFFFFF) for cards and input containers, featuring a 1px border (#E2E8F0) to define boundaries.
3.  **Level 2 (Interaction):** On hover, cards transition to a soft, diffused shadow (0px 10px 25px rgba(30, 41, 59, 0.05)) to indicate interactivity.

Hero sections and footers use the **Dark Navy (#1E293B)** as a flat, deep layer with no shadows, allowing the white text and blue buttons to pop via high color contrast.

## Shapes

The design system utilizes **Rounded (0.5rem)** corners for all standard components like cards and buttons. This provides a balance between the precision of technology (straight lines) and the friendliness of consulting services (rounded edges).

- **Cards/Buttons:** 8px (0.5rem) radius.
- **Form Inputs:** 8px (0.5rem) radius.
- **Badges:** Circular (Full pill/50%) for numbered steps and status indicators.

## Components

### Buttons
Primary buttons use a solid Sky Blue (#3B82F6) background with White text. Secondary buttons use a transparent background with a 1px border in Sky Blue or Dark Navy, depending on the background they sit on. Padding should be 12px vertical and 24px horizontal.

### Service Cards
Cards are the primary container for service offerings. They feature a white background, 8px border radius, and a subtle #E2E8F0 border. Icons within cards should be Sky Blue.

### Numbered Badges
For "Process" or "Step" sections, use 40x40px circular badges. They should have a Sky Blue background with white bold text. This adds a "helpful" instructional element to the UI.

### Inputs
Text fields use the Light Gray (#F8FAFC) background with a 1px #E2E8F0 border. On focus, the border transitions to Sky Blue with a 2px outer glow.

### Header/Footer
The Header is white with a bottom border for the landing state, but transitions to Dark Navy (#1E293B) for the Hero integration. The Footer is always Dark Navy with light-gray text for a grounded, professional finish.