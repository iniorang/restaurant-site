---
name: Warung Hati
description: A living Indonesian table expressed through real food, ink, and generous rice-paper space.
colors:
  ink: "#211e1a"
  paper: "#f7f1e6"
  paper-deep: "#ebe0ce"
  heart: "#e9434d"
  sprout: "#547a43"
  turmeric: "#d7a62f"
  muted-ink: "#685f55"
typography:
  display:
    fontFamily: "Georgia, Times New Roman, serif"
    fontSize: "clamp(2.6rem, 5vw, 5.2rem)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Trebuchet MS, Segoe UI, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Trebuchet MS, Segoe UI, sans-serif"
    fontSize: "0.73rem"
    fontWeight: 800
    lineHeight: 1.4
    letterSpacing: "0.16em"
rounded:
  image-arch: "90px 0 0 0"
  image-corner: "0 0 0 42px"
  icon: "50%"
spacing:
  page-gutter: "24px"
  mobile-gutter: "16px"
  section-large: "148px"
  section-mobile: "88px"
  component-gap: "28px"
components:
  button-primary:
    backgroundColor: "{colors.heart}"
    textColor: "#ffffff"
    rounded: "0"
    padding: "0 20px"
    height: "48px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "0"
    padding: "0 20px"
    height: "48px"
  nav:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    rounded: "0"
    padding: "8px 0"
---

# Design System: Warung Hati

## Overview

**Creative North Star: "The Hand-Inked Living Table"**

Warung Hati's home page turns Indonesian heritage into a warm, editorial table setting: real dishes and farmer imagery sit on a rice-paper ground, while ink-black type and rules give the page its structure. The heart red carries appetite and action; sprout green carries ingredients and continuity; turmeric appears as a small note of warmth.

The system feels modern through proportion, open space, asymmetry, and restrained motion. Cultural specificity remains visible in the food, copy, and image choices. Surfaces are mostly quiet and flat so the photographic material and hand-inked geometry can lead.

**Key Characteristics:**
- Rice-paper warmth with ink-black structure.
- Heart red for action, appetite, and active rules.
- Sprout green for ingredient and story links.
- Asymmetric photographic compositions with generous breathing room.

## Colors

The palette is earthy and high-contrast: a warm paper base, near-black ink, one red action color, one botanical green, and a restrained turmeric accent.

### Primary
- **Heart Red** (#e9434d): Primary action color, active navigation rule, and appetite signal.
- **Sprout Green** (#547a43): Story links, ingredient continuity, and secondary action emphasis.

### Tertiary
- **Turmeric Yellow** (#d7a62f): Small label and highlight accent, especially on the dark featured section.

### Neutral
- **Ink Black** (#211e1a): Main text, dark featured-dish band, footer, and structural contrast.
- **Rice Paper** (#f7f1e6): Page ground, hero panel, light text on dark sections, and image framing.
- **Deep Paper** (#ebe0ce): Available warm paper-depth token for supporting surfaces.
- **Muted Ink** (#685f55): Long-form copy, captions, and quiet supporting information.

### Named Rules
**The Three-Accent Table Rule.** Heart red leads action, sprout green supports continuity, and turmeric remains a small note; do not make all three compete equally.

## Typography

**Display Font:** Georgia (with Times New Roman, serif)
**Body Font:** Trebuchet MS (with Segoe UI, sans-serif)
**Label/Mono Font:** Trebuchet MS (with Segoe UI, sans-serif)

**Character:** Serif display type gives the page a literary, grounded voice, while the sans-serif body and labels keep navigation and practical details clear. Display headings are tight and expressive; labels are compact, uppercase, and tracked.

### Hierarchy
- **Display** (500, `clamp(2.6rem, 5vw, 5.2rem)`, 0.98): Hero statement and major section headings.
- **Headline** (500, `clamp(2.4rem, 4vw, 4.5rem)`, 0.98): Intro, featured, and contact section titles.
- **Title** (500, 1.65rem, 1.0): Featured dish names.
- **Body** (400, 16px, 1.5): Site-wide readable copy; longer text is constrained to roughly 58ch.
- **Label** (800, 0.73rem, 0.16em, uppercase): Kicker labels, navigation, footer, and compact metadata.

### Named Rules
**The Serif-for-Meaning Rule.** Use the Georgia display face for statements, dish names, and story headings; keep operational text in the sans-serif face.

## Layout

The page uses a centered fluid shell: `min(1180px, calc(100% - 48px))` on larger screens and `min(100% - 32px, 600px)` on mobile. Desktop sections use broad vertical breathing room (`148px`) and asymmetric grids rather than equal cards. The intro uses an approximately 0.8 / 1.2 copy-to-image split; contact uses two equal columns; the featured dishes use a 1.1 / 0.8 / 1 ratio with staggered top offsets.

At `800px` and below, navigation becomes a compact menu, multi-column sections stack, and section spacing reduces to `88px`. Dish images become one column with stable viewport-relative heights. The hero remains tall (`760px` on mobile), with its panel and note stacked in the reading order.

## Elevation & Depth

Depth is primarily tonal and photographic: paper against ink, image against paper, and ruled dividers. The hero panel uses a deliberate hard offset shadow (`12px 12px 0 rgba(33, 30, 26, .16)`), while the smaller partner image uses a green offset (`8px 8px 0 #547a43`). There is no soft card-shadow vocabulary.

### Shadow Vocabulary
- **Ink offset:** `12px 12px 0 rgba(33, 30, 26, .16)`; anchors the hero paper panel against the opening photograph.
- **Sprout offset:** `8px 8px 0 #547a43`; frames the smaller partner image as a physical, hand-placed element.

### Named Rules
**The Flat-by-Default Rule.** Keep ordinary surfaces flat; use offset shadows only where an image or paper element should feel physically placed.

## Shapes

The general form language is square and editorial: buttons, panels, navigation controls, and dividers use zero radius. Curved corners are reserved for image crops and the circular hand-stamp. The main food image uses a top-right `90px` arch; the smaller image uses a bottom-left `42px` curve; icon-only buttons are circular. Borders are thin and ink-like, with the heart red used for active underlines and the turmeric yellow used for keyboard focus.

## Components

### Buttons
- **Shape:** Square, zero radius for action buttons; circular only for icon-only social buttons (`50%`).
- **Primary:** Heart red background, white text, `48px` minimum height, `0 20px` horizontal padding.
- **Hover / Focus:** Primary changes to ink on hover; outline changes to heart red fill with white text. All buttons use a turmeric `3px` focus outline with `4px` offset.
- **Secondary / Ghost:** Text links are transparent, underlined by a one-pixel current-color rule, with a small arrow that shifts on hover.

### Cards / Containers
- **Corner Style:** Hero panel is square; image containers carry the system's selective curved crops.
- **Background:** Rice paper for light framing, ink for the featured-dish band.
- **Shadow Strategy:** Use the named hard offsets only for the hero panel and partner image.
- **Border:** Section and navigation dividers are one-pixel translucent paper rules.
- **Internal Padding:** Hero panel uses `34px 38px 38px` desktop and `24px 24px 28px` mobile.

### Navigation
- **Style:** Fixed, transparent over the hero, centered desktop links with the Warung Hati logo in the middle.
- **Typography:** Uppercase sans-serif labels at `0.73rem`, weight 800, `0.14em` tracking.
- **States:** Heart red two-pixel underline expands on hover and active state. Mobile uses a square 44px menu control and an ink dropdown.

### Signature Components
- **Hero paper panel:** Real Nasi Campur Bali photography sits behind a rice-paper copy panel containing the logo, proposition, one solid menu action, and a quieter story link.
- **Featured dish strip:** Three real menu items form an uneven menu-board composition rather than equal cards, with staggered image heights and numbered image markers.
- **Image story spread:** A large Nasi Betutu image, a smaller farmer-partner image, and a rotated circular stamp create the page's living-table signature.

## Do's and Don'ts

### Do:
- **Do** keep product imagery photographic and inspectable; use the real dish and farmer assets.
- **Do** use the ink, paper, heart, sprout, and turmeric roles consistently.
- **Do** preserve asymmetric composition and generous vertical breathing room.
- **Do** use serif display type for story and food statements, with sans-serif practical text.
- **Do** retain visible keyboard focus using the turmeric outline and reduced-motion behavior.

### Don't:
- **Don't** flatten the page into equal stacked cards or a generic restaurant hero.
- **Don't** replace the warm paper and ink grammar with gradients, filters, or glossy soft shadows.
- **Don't** invent badges, claims, menu items, or ordering and reservation affordances not established by the product.
- **Don't** use heart red, sprout green, and turmeric as equal competing accents.
- **Don't** canonize the footer's generic copyright line, icon-font implementation, or any task-specific image placement as a reusable design rule.
