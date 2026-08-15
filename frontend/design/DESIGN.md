# Design System Inspired by GitHub Universe

## 1. Visual Theme & Atmosphere

GitHub Universe 2026 embodies a **bold, developer-first aesthetic** rooted in technical clarity and modern minimalism. The design prioritizes content through stark contrast—dominant black typography against light, neutral backgrounds—creating an interface that feels approachable yet powerful. The palette incorporates vibrant accent colors (emerald green, electric blue, vibrant purple) reserved for interactive moments and event branding, lending energy to key CTAs while maintaining the disciplined, code-focused sensibility of the GitHub brand. Whitespace is generous and intentional, allowing typography and imagery to breathe. The system feels contemporary and forward-thinking, reflecting a platform where humans and AI collaborate to build the future.

**Key Characteristics**

- Bold black typography on light neutral backgrounds for maximum legibility
- Restrained color palette with strategic accent pops for interactivity
- Clean grid-based layouts with generous whitespace
- Mona Sans family for consistent, modern type rendering
- High contrast philosophy supporting accessibility
- Minimal rounded corners; mostly sharp edges for technical precision
- Depth created through layering and careful shadow application rather than ornamentation

## 2. Color Palette & Roles

### Primary

- **Charcoal** (`#58635B`): Primary text, navigation, and dominant UI elements; used extensively for body content and secondary headings
- **Black** (`#000000`): Main heading text, high-contrast typography, primary button backgrounds; the most frequently used color across the system

### Accent Colors

- **Emerald Green** (`#08872B`): Primary call-to-action buttons; "Get passes" CTA and acceptance actions; conveys trust and positive intent
- **Forest Green** (`#0D6731`): Secondary emphasis and supporting green accents; used for active states and success indicators
- **Bright Green** (`#88EA8E`): Light accent highlighting and decorative elements
- **Mint Green** (`#8CF2A6`): Complementary light green for subtle backgrounds and hover states
- **Electric Blue** (`#0000EE`): Primary interactive elements; link text and secondary CTA buttons
- **Purple** (`#543CEE`): Decorative and brand accent; used in illustrations and visual interest elements

### Interactive

- **Blue Primary** (`#0000EE`): Secondary action buttons and link states; used for "Decline" buttons and interactive text links
- **Emerald Interactive** (`#08872B`): Primary action button; strongly associated with positive user intent and event registration

### Neutral Scale

- **White** (`#FFFFFF`): Primary background for content areas; text on dark backgrounds
- **Light Gray** (`#F2F5F3`): Subtle background fills for secondary sections
- **Very Light Gray** (`#E9EDEC`): Minimal background distinction; cards and containers
- **Light Border Gray** (`#E4EBE6`): Border lines and subtle dividers
- **Medium Gray** (`#D2D9D4`): Secondary borders and disabled states
- **Dark Gray** (`#B6BFB8`): Tertiary text and de-emphasized content
- **Stone Gray** (`#808080`): Muted text for metadata and secondary information

### Surface & Borders

- **Light Blue** (`#DDF4FF`): Decorative background fills; used in cookie preference modals and secondary surfaces
- **Border Gray** (`#D2D9D4`): Primary border color for cards, form fields, and containers

### Semantic / Status

- **Success Green** (`#01B000`): Confirmation messages, success states, and positive feedback
- **Warning Yellow** (`#B6A136`): Warning states, caution indicators, and non-critical alerts

## 3. Typography Rules

### Font Family

**Primary:** Mona Sans (`font-family: 'Mona Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif`)  
**Secondary/Mono:** Mona Sans Mono (`font-family: 'Mona Sans Mono', 'Courier New', monospace`)

### Hierarchy

| Role                  | Font           | Size | Weight | Line Height | Letter Spacing | Notes                                      |
| --------------------- | -------------- | ---- | ------ | ----------- | -------------- | ------------------------------------------ |
| Display / Hero        | Mona Sans      | 56px | 440    | 61.6px      | 0px            | Page titles; "UNIVERSE26" branding         |
| Heading 1 (H1)        | Mona Sans      | 28px | 460    | 36.4px      | 0px            | Section headlines and major titles         |
| Heading 2 (H2)        | Mona Sans      | 56px | 440    | 61.6px      | 0px            | Large feature headings                     |
| Heading 3 (H3) / Code | Mona Sans Mono | 14px | 480    | 19.6px      | 0px            | Inline code, metadata, technical labels    |
| Heading 4 (H4)        | Mona Sans      | 16px | 500    | 32px        | 0px            | Subheadings, card titles, smaller sections |
| Body Text             | Mona Sans      | 16px | 400    | 24px        | 0px            | Default paragraph text, descriptions       |
| Button / CTA          | Mona Sans      | 16px | 550    | 24px        | 0px            | All button text; medium-weight emphasis    |
| Link Text             | Mona Sans      | 16px | 700    | 24px        | 0px            | Standalone links and link-styled elements  |
| List Item             | Mona Sans      | 16px | 700    | 24px        | 0px            | List item headings; navigation list items  |
| Caption / Small       | Mona Sans      | 14px | 400    | 21px        | 0px            | Footnotes, timestamps, secondary metadata  |

### Principles

- **Hierarchy through weight, not size:** Use font-weight progression (400 → 550 → 700) to create visual hierarchy before adjusting scale
- **Tight leading at display sizes:** Large headlines use moderate line-height for impact and density
- **Generous body leading:** 24px line-height on 16px body ensures readability and breathing room
- **Monospace for technical content:** Code snippets, labels like `dev.experience()`, and metadata use Mona Sans Mono at 14px
- **Single typeface family:** All sizes derive from Mona Sans for cohesive, modern aesthetic
- **Black text on light backgrounds:** Ensure maximum contrast; use `#000000` for primary text

## 4. Component Stylings

### Buttons

#### Primary Button (Emerald CTA)

- **Background:** `#08872B`
- **Text Color:** `#FFFFFF`
- **Font Size:** `16px`
- **Font Weight:** `550`
- **Line Height:** `24px`
- **Padding:** `12px 24px`
- **Border Radius:** `6px`
- **Border:** `none`
- **Box Shadow:** `none`
- **Hover State:** Background darkens to `#0D6731`; no shadow added
- **Active State:** Background becomes `#0A4F1F`; text remains white
- **Disabled State:** Background `#B6BFB8`; text `#808080`; opacity `0.50`

#### Secondary Button (Blue)

- **Background:** `#0000EE`
- **Text Color:** `#FFFFFF`
- **Font Size:** `16px`
- **Font Weight:** `400`
- **Line Height:** `24px`
- **Padding:** `6px 20px`
- **Border Radius:** `0px`
- **Border:** `1px solid rgba(0, 0, 0, 0)`
- **Box Shadow:** `none`
- **Hover State:** Background becomes `#0000BB`
- **Active State:** Background becomes `#00007A`

#### Ghost Button (Bordered)

- **Background:** `rgba(0, 0, 0, 0)`
- **Text Color:** `#000000`
- **Font Size:** `16px`
- **Font Weight:** `550`
- **Line Height:** `24px`
- **Padding:** `0px 0px`
- **Border Radius:** `8px`
- **Border:** `2px solid rgba(0, 0, 0, 0)` (or `2px solid #000000` for outlined variant)
- **Box Shadow:** `rgba(0, 0, 0, 0) 0px 0px 0px 2px`
- **Hover State:** Background becomes `#F2F5F3`; border-color becomes `#000000`
- **Active State:** Background becomes `#E9EDEC`

#### Icon Button

- **Background:** `rgba(0, 0, 0, 0)`
- **Text Color:** `#000000`
- **Width:** `46px`
- **Height:** `46px`
- **Padding:** `0px`
- **Border Radius:** `8px`
- **Border:** `none`
- **Box Shadow:** `rgba(0, 0, 0, 0) 0px 0px 0px 2px`
- **Hover State:** Background becomes `#F2F5F3`

### Navigation

#### Navigation Bar

- **Height:** `72px`
- **Background:** `#FFFFFF` or `rgba(0, 0, 0, 0)` (transparent on light background)
- **Text Color:** `#000000`
- **Font Size:** `16px`
- **Font Weight:** `550`
- **Line Height:** `24px`
- **Padding:** `0px 40px` (horizontal padding for nav items)
- **Border:** `none` or `1px solid #D2D9D4` (bottom border if elevation needed)
- **Box Shadow:** `none` (or elevation shadow if sticky)

#### Navigation Link

- **Text Color:** `#000000`
- **Font Weight:** `550`
- **Font Size:** `16px`
- **Text Decoration:** `none`
- **Hover State:** Color becomes `#58635B`; underline appears (optional)
- **Active State:** Color becomes `#08872B`; font-weight increases to `700`

### Links

#### Primary Link

- **Text Color:** `#0000EE`
- **Font Size:** `16px`
- **Font Weight:** `700`
- **Line Height:** `24px`
- **Text Decoration:** `underline`
- **Background:** `rgba(0, 0, 0, 0)`
- **Padding:** `0px`
- **Border:** `none`
- **Hover State:** Color becomes `#0000BB`; text-decoration remains underline
- **Active State:** Color becomes `#00007A`
- **Focus State:** Outline `2px solid #0000EE`; outline-offset `2px`

### Cards & Containers

#### Card (Default)

- **Background:** `#FFFFFF`
- **Border:** `1px solid #D2D9D4`
- **Border Radius:** `8px`
- **Padding:** `24px`
- **Box Shadow:** `none`
- **Hover State:** Border becomes `#B6BFB8`; box-shadow becomes `0px 4px 12px rgba(0, 0, 0, 0.08)`

#### Section Container

- **Background:** `#F2F5F3`
- **Padding:** `64px 40px`
- **Border:** `none`
- **Border Radius:** `0px`
- **Margin Bottom:** `64px`

#### Overlay / Modal Background

- **Background:** `rgba(0, 0, 0, 0.50)`
- **Z-Index:** `1000`

### Inputs & Forms

#### Text Input

- **Background:** `#FFFFFF`
- **Text Color:** `#000000`
- **Font Size:** `16px`
- **Font Weight:** `400`
- **Line Height:** `24px`
- **Padding:** `12px 16px`
- **Border:** `1px solid #D2D9D4`
- **Border Radius:** `6px`
- **Box Shadow:** `none`
- **Focus State:** Border-color becomes `#0000EE`; box-shadow becomes `0px 0px 0px 3px rgba(0, 0, 238, 0.1)`
- **Disabled State:** Background `#E9EDEC`; border-color `#B6BFB8`; color `#808080`

#### Checkbox / Radio

- **Width:** `20px`
- **Height:** `20px`
- **Border:** `2px solid #000000`
- **Border Radius:** `4px` (checkbox) or `50%` (radio)
- **Background (unchecked):** `#FFFFFF`
- **Background (checked):** `#08872B`
- **Accent Color (checked):** `#FFFFFF` (checkmark)
- **Hover State:** Border-color becomes `#58635B`

### Badges & Status Indicators

#### Success Badge

- **Background:** `#01B000`
- **Text Color:** `#FFFFFF`
- **Font Size:** `12px`
- **Font Weight:** `550`
- **Padding:** `4px 8px`
- **Border Radius:** `4px`

#### Warning Badge

- **Background:** `#B6A136`
- **Text Color:** `#FFFFFF`
- **Font Size:** `12px`
- **Font Weight:** `550`
- **Padding:** `4px 8px`
- **Border Radius:** `4px`

## 5. Layout Principles

### Spacing System

**Base Unit:** `8px` (all spacing values are multiples of 8)

**Scale in Use:**

- **4px** — Micro padding within tightly constrained components
- **8px** — Compact spacing between elements; small component padding
- **12px** — Button vertical padding; form field spacing
- **16px** — Standard padding within cards and sections
- **20px** — Button horizontal padding; list item spacing
- **24px** — Card padding; moderate section spacing
- **32px** — Gap between columns; moderate grid gutters
- **40px** — Horizontal page padding; section margins
- **48px** — Large section separation
- **56px** — Page section margins; hero spacing
- **64px** — Major section breaks; full-width margins
- **80px** — Maximum vertical breathing room between major content areas

**Usage Context:**

- **Internal padding (buttons, inputs):** 4px–20px
- **Card and container padding:** 16px–48px
- **Gap between grid items:** 32px
- **Section margins:** 48px–80px
- **Top-level page margins:** 40px horizontal

### Grid & Container

- **Max Width:** `1440px` for primary content containers
- **Column Strategy:** 12-column flexible grid; responsive collapse to 6 columns on tablet, 1 column on mobile
- **Gutter Width:** `32px` between columns
- **Section Padding:** `40px` left and right on desktop; `24px` on tablet; `16px` on mobile
- **Horizontal Margins:** Auto-centered with max-width constraint
- **Breakpoint Patterns:** Desktop 1440px → Tablet 768px → Mobile 375px

### Whitespace Philosophy

The design system treats whitespace as an active compositional element, not empty space. Generous margins and padding between sections create visual hierarchy and allow content to breathe. Block-level spacing (64px–80px) separates major sections and allows the viewer's eye to reset. Micro-spacing (8px–12px) within components maintains compactness without clutter. The overall effect is a layout that feels spacious and approachable rather than cramped or dense, reinforcing the modern, forward-thinking aesthetic.

### Border Radius Scale

- **Sharp (0px):** Primary buttons, full-width elements, large containers
- **Subtle (6px):** Secondary buttons, input fields, small cards
- **Rounded (8px):** Icon buttons, status badges, modal containers
- **Full Circle (50%):** Avatar placeholders, circular icon buttons

### Border Widths

- **Thin (1px):** Default borders on cards, inputs, and dividers; primary subtle visual separation
- **Medium (2px):** Ghost button borders, focus indicators, semantic emphasis
- **Thick (4px):** Heavy emphasis borders (rare); reserved for critical focus states

## 6. Depth & Elevation

### Elevation Levels

| Level        | Treatment                           | Use                                          |
| ------------ | ----------------------------------- | -------------------------------------------- |
| Base (0)     | No shadow; flat surface             | Page backgrounds, primary content containers |
| Raised (1)   | `0px 2px 4px rgba(0, 0, 0, 0.08)`   | Cards, form inputs on hover                  |
| Lifted (2)   | `0px 4px 12px rgba(0, 0, 0, 0.12)`  | Hovered cards, secondary elevation           |
| Floating (3) | `0px 8px 24px rgba(0, 0, 0, 0.16)`  | Dropdowns, tooltips, overlays                |
| Modal (4)    | `0px 12px 40px rgba(0, 0, 0, 0.20)` | Modals, full-screen overlays                 |

**Shadow Philosophy:**

The system uses minimal shadows, relying primarily on color contrast and layout structure to establish hierarchy. When shadows are applied, they are soft and subtle—designed to suggest elevation rather than create heavy visual weight. The dropdowns and secondary surfaces use restrained shadows (2px blur radius) rather than dramatic effects. This maintains the clean, modern aesthetic while preserving accessibility and ensuring text remains legible. Shadows darken slightly on hover/focus states to provide interactive feedback without overwhelming the interface.

### Opacity Levels

- **Full Opacity (1.0):** All primary UI elements
- **High Opacity (0.87):** Secondary text and de-emphasized content
- **Medium Opacity (0.62):** Disabled text, placeholder text
- **Low Opacity (0.50):** Disabled states, secondary backgrounds, overlay fills
- **Minimal Opacity (0.12):** Subtle background tints, dividers

### Z-index / Layering

- **Base (1):** Standard page content, default components
- **Elevated (2):** Hovered cards, floating action buttons
- **Dropdown (10):** Dropdowns, popovers, contextual menus
- **Sticky (100):** Fixed navigation bar, sticky headers
- **Modal (1000):** Modal dialogs, full-screen overlays
- **Toast/Alert (1010):** Notifications, toast messages (always above modals)

## 7. Do's and Don'ts

### Do

- **Use Mona Sans exclusively** for all UI text; it provides consistent, modern rendering across sizes
- **Maintain high contrast:** Default to `#000000` text on `#FFFFFF` backgrounds; never use text below WCAG AA standards
- **Apply color strategically:** Reserve emerald green (`#08872B`) for primary CTAs; use blue for secondary interactions; limit accent colors to 2–3 per page
- **Respect the spacing scale:** Always use 8px multiples; never create arbitrary spacing values
- **Stack shadows subtly:** Use elevation only for hover and interactive states; never add shadow to primary content surfaces
- **Center content horizontally:** Use max-width container with auto margins to keep layouts balanced
- **Weight typography for hierarchy:** Adjust font-weight before changing font-size
- **Test for accessibility:** Ensure color contrast ratios meet WCAG AA; provide focus outlines on all interactive elements
- **Use border-radius consistently:** Apply 0px to full-width hero sections; use 6px–8px for contained components

### Don't

- **Don't mix font families:** Never use alternative typefaces; stick with Mona Sans and Mona Sans Mono
- **Don't create custom color values:** All colors must come from the predefined palette
- **Don't use thick borders or heavy shadows:** Keep the aesthetic clean; maximum border-width is 2px
- **Don't over-round corners:** Most elements should use 0px or 6px; only use 8px for small icon buttons
- **Don't add multiple background patterns or textures:** The design relies on flat color and typography
- **Don't create spacing values outside the 8px scale:** All margin, padding, and gap must align to the system
- **Don't layer modals recursively:** Only one modal layer at a time; avoid stacking z-index beyond 1010
- **Don't use opacity for all interactive feedback:** Combine opacity with color change when possible
- **Don't render text below 14px:** Smallest readable size is 14px (Heading 3 / code labels)
- **Don't ignore focus states:** All interactive elements must have visible focus indicators (minimum 2px outline)

## 8. Responsive Behavior

### Breakpoints

| Breakpoint | Width        | Key Changes                                                                      |
| ---------- | ------------ | -------------------------------------------------------------------------------- |
| Desktop    | 1440px+      | Full 12-column grid; 40px horizontal padding; all features visible               |
| Tablet     | 768px–1439px | 6-column grid; 24px horizontal padding; navigation collapses to mobile menu      |
| Mobile     | 375px–767px  | 1-column layout; 16px horizontal padding; touch targets increase to 48px minimum |

### Touch Targets

- **Minimum interactive size:** `44px × 44px` on mobile (WCAG 2.1 Level AAA)
- **Desktop button minimum:** `40px` height
- **Icon button minimum:** `40px × 40px` (includes padding)
- **Link minimum:** `48px` line-height with 8px vertical padding on mobile
- **Spacing between touch targets:** Minimum `8px` on mobile; `16px` on desktop

### Collapsing Strategy

- **Navigation:** Desktop horizontal navigation bar (72px height) collapses to hamburger menu icon on tablet (768px)
- **Grid columns:** 12 columns → 6 columns → 1 column as viewport shrinks
- **Padding:** 40px (desktop) → 24px (tablet) → 16px (mobile)
- **Font sizes:** Reduce by 2px on mobile for display sizes; body text stays 16px for legibility
- **Margins:** Section margins reduce from 64px–80px (desktop) to 48px (tablet) to 32px (mobile)
- **Images and video:** Scale to 100% container width with `max-width` constraint; maintain aspect ratio
- **Modals:** Full-screen on mobile (375px); fixed max-width (600px) on desktop with centered positioning
- **Cookie consent banner:** Stacks vertically on mobile (buttons below text); horizontal layout on desktop

## 9. Agent Prompt Guide

### Quick Color Reference

- **Primary CTA:** Emerald Green (`#08872B`)
- **Secondary CTA / Link:** Electric Blue (`#0000EE`)
- **Primary Text:** Black (`#000000`)
- **Secondary Text:** Charcoal (`#58635B`)
- **Background:** White (`#FFFFFF`)
- **Subtle Background:** Light Gray (`#F2F5F3`)
- **Borders:** Light Border Gray (`#D2D9D4`)
- **Success:** Success Green (`#01B000`)
- **Warning:** Warning Yellow (`#B6A136`)
- **Accent (Decorative):** Bright Green (`#88EA8E`), Purple (`#543CEE`), Light Blue (`#DDF4FF`)

### Iteration Guide

1. **Start with black text on white:** All default body and heading text uses `#000000` on `#FFFFFF` unless explicitly styled as a link or interactive element
2. **Primary buttons are emerald (#08872B):** Always use this color for the main CTA, "Get passes" button, and positive user actions
3. **Secondary buttons are blue (#0000EE):** Use for secondary actions, "Decline" buttons, and linked text
4. **Apply 8px-aligned spacing:** All padding, margin, and gap values must be multiples of 8px (4px minimum for micro adjustments)
5. **Use Mona Sans at 16px for body text:** Default line-height is 24px; weight is 400 unless emphasis is needed (550 for buttons, 700 for list items and links)
6. **Button padding is 12px vertical × 24px horizontal minimum:** Smaller buttons use 6px vertical × 16px horizontal
7. **Cards and containers have 24px padding:** Borders are 1px solid #D2D9D4; border-radius is 6px–8px
8. **Navigation bars are 72px tall:** Transparent background with black text; sticky positioning applies z-index: 100
9. **Sections have 64px top and bottom margin:** Horizontal padding is 40px on desktop; reduce to 24px on tablet and 16px on mobile
10. **Elevation shadows are minimal:** Use `0px 4px 12px rgba(0, 0, 0, 0.08)` for hovered cards; never apply shadow to primary surfaces
11. **Focus states require visible outlines:** All interactive elements need `2px solid #0000EE` outline with 2px offset on focus
12. **Disabled states use #B6BFB8 background with #808080 text:** Apply 0.50 opacity when appropriate; never make disabled states invisible
13. **Modals use rgba(0, 0, 0, 0.50) overlay with z-index: 1000:** Content inside modals inherits the standard component styling
14. **Responsive breakpoints are 1440px (desktop) → 768px (tablet) → 375px (mobile):** Adjust padding and reduce font sizes by 2px on mobile
15. **All colors must use UPPERCASE hex (#08872B, not #08872b):** Consistency in color notation ensures reliable parsing and implementation
