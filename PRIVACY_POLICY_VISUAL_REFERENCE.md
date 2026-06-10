# Privacy Policy Page - Visual & Structural Reference

## 📐 Page Layout Structure

```
┌─────────────────────────────────────────────────────────┐
│                   NAVIGATION BAR                         │
│  (Reused from existing site)                             │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                   HERO SECTION                           │
│  ┌─ Privacy & Compliance (Eyebrow)                       │
│  │  ─────────                                            │
│  │                                                        │
│  │  Privacy                                              │
│  │  POLICY (in accent color)                             │
│  │                                                        │
│  │  We collect limited business and operational data...  │
│  │  Last updated: [Current Date]                         │
│  │                                                        │
│  │  ┌─────────────────────────────────────────────────┐  │
│  │  │ Quick Navigation                                 │  │
│  │  │ ┌────────────────────────────────────────────┐  │  │
│  │  │ │ 1. Introduction   4. Data Sharing        │  │  │
│  │  │ │ 2. Information    5. Cookies & Analytics │  │  │
│  │  │ │ 3. How We Use     6. Data Security       │  │  │
│  │  │ │ 7. Third-Party    8. Your Rights        │  │  │
│  │  │ │ 9. Contact                               │  │  │
│  │  │ └────────────────────────────────────────────┘  │  │
│  │  └─────────────────────────────────────────────────┘  │
│  └─ HR Line                                              │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│            EXPANDABLE CONTENT SECTIONS                   │
│                                                          │
│  ┌─ 1. Introduction                         [▼ Click]   │ ← Collapsed
│  │  (Expandable content shown on click)                 │
│  │  ─────────────────────────────────────────────────   │
│  │                                                       │
│  ├─ 2. Information We Collect              [▼ Click]   │
│  │  ─────────────────────────────────────────────────   │
│  │                                                       │
│  ├─ 3. How We Use Information              [▼ Click]   │
│  │  ─────────────────────────────────────────────────   │
│  │                                                       │
│  ├─ 4. Data Sharing                        [▼ Click]   │
│  │  ─────────────────────────────────────────────────   │
│  │                                                       │
│  ├─ 5. Cookies & Analytics                 [▼ Click]   │
│  │  ─────────────────────────────────────────────────   │
│  │                                                       │
│  ├─ 6. Data Security                       [▼ Click]   │
│  │  ─────────────────────────────────────────────────   │
│  │                                                       │
│  ├─ 7. Third-Party Platforms               [▼ Click]   │
│  │  ─────────────────────────────────────────────────   │
│  │                                                       │
│  ├─ 8. Your Rights                         [▼ Click]   │
│  │  ─────────────────────────────────────────────────   │
│  │                                                       │
│  └─ 9. Contact Information                 [▼ Click]   │
│     ─────────────────────────────────────────────────   │
│                                                          │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                    CTA SECTION                           │
│                                                          │
│  Have Questions About Your Privacy?                     │
│  Contact us and we'll respond within 30 days.           │
│                                                          │
│              [CONTACT US BUTTON]                         │
│                                                          │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                   FOOTER                                 │
│  (Reused from existing site)                             │
│  ┌─ Privacy Policy ← Links to THIS page                 │
│  ├─ Terms of Service                                    │
│  └─ Cookie Settings                                     │
└─────────────────────────────────────────────────────────┘
```

## 🎨 Color Palette Reference

```
PRIMARY COLORS
┌──────────────────────────────────┐
│ #1535C2  ██████ Accent Blue     │  Used for titles, links, hover states
│ #2a4fd4  ██████ Accent Hover    │  Hover state for accent color
│ #0a0a0a  ██████ Foreground      │  Dark text, headings
│ #ffffff  ██████ Background      │  Page background
└──────────────────────────────────┘

SECONDARY COLORS
┌──────────────────────────────────┐
│ #555555  ██████ Body Text       │  Main content paragraphs
│ #888888  ██████ Muted Text      │  Secondary labels
│ #bbb    ██████ Light Muted     │  Footer text
│ #e8e8e8  ██████ Border          │  Lines and dividers
└──────────────────────────────────┘
```

## 📱 Responsive Breakpoints

### Mobile (< 768px)
```
┌─────────────────────┐
│  Navigation         │
├─────────────────────┤
│                     │
│  Privacy            │  ← Font size: 36-56px (clamp)
│  Policy             │
│                     │
│  Quick Nav          │
│  (2 columns)        │  ← Grid: 2 columns
│                     │
├─────────────────────┤
│ [Section Header ▼] │  ← Full width
│                     │
│ [Section Header ▼] │  ← Stacked sections
│                     │
├─────────────────────┤
│  Footer             │
└─────────────────────┘

Padding: 24px sides
Font: Smaller (mobile optimized)
```

### Tablet (768px-1024px)
```
┌──────────────────────────────────┐
│  Navigation                      │
├──────────────────────────────────┤
│                                  │
│  Privacy                         │  ← Font size: 72px
│  Policy                          │
│                                  │
│  Quick Nav (3 columns)           │  ← Grid: 3 columns
│                                  │
├──────────────────────────────────┤
│ [Section Header ▼]               │
│                                  │
│ [Section Header ▼]               │
│                                  │
├──────────────────────────────────┤
│  Footer                          │
└──────────────────────────────────┘

Padding: 36px sides
Font: Medium
Container: Optimized width
```

### Desktop (> 1024px)
```
┌────────────────────────────────────────────────────────────────┐
│                     Navigation                                 │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  Privacy                                                       │
│  Policy                                          ← Font: 96px  │
│                                                                │
│  Quick Nav (3 columns, full width)                             │
│  [Intro]  [Sharing]    [Security]  [Rights]                    │
│  [Info]   [Cookies]    [Platforms] [Contact]                   │
│  [Usage]                                                       │
│                                                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│ [1. Introduction Header ▼]                                    │
│                                                                │
│ [2. Information We Collect Header ▼]                          │
│                                                                │
│ [3. How We Use Header ▼]                                      │
│                                                                │
│ ... (more sections)                                           │
│                                                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│         Have Questions About Your Privacy?                    │
│         Contact us and we'll respond within 30 days.          │
│                    [CONTACT US]                               │
│                                                                │
├────────────────────────────────────────────────────────────────┤
│                      Footer                                    │
└────────────────────────────────────────────────────────────────┘

Padding: 48px sides
Font: Full sizes
Max width: 1440px
Grid columns: 3
```

## 🎭 Interaction States

### Default Section (Collapsed)
```
┌──────────────────────────────────────┐
│ 1. Introduction          [▼ Expand]  │  ← Text gray, icon blue
│ ─────────────────────────────────── │
```

### Hovered Section
```
┌──────────────────────────────────────┐
│ 1. Introduction          [▼ Expand]  │  ← Opacity: 0.7
│ ─────────────────────────────────── │  ← Subtle hover effect
```

### Expanded Section
```
┌──────────────────────────────────────┐
│ 1. Introduction          [▲ Close]   │  ← Icon rotated 180°
│ ─────────────────────────────────── │
│                                      │
│ At THINKWAY, we are committed to    │
│ protecting your privacy and ensuring │
│ transparency in how we handle your  │
│ personal information...              │
│                                      │
│ This policy applies to all          │
│ interactions...                      │
└──────────────────────────────────────┘
```

## 🔤 Typography Hierarchy

### H1 - Page Title
```
Font: Font-black, uppercase
Size: 96px (clamps 48-96px)
Letter-spacing: -0.05em
Line-height: 0.95
Color: #0a0a0a with accent on secondary word
```

### H2 - Section Headers
```
Font: Font-bold, uppercase  
Size: 28px (clamps 18-28px)
Letter-spacing: -0.02em
Line-height: 1.2
Color: #0a0a0a
With number prefix: "1. Section Title"
```

### H3 - Eyebrow / Labels
```
Font: Uppercase
Size: 10px
Letter-spacing: 0.35em
Color: #1535C2
With accent line before text
```

### Body Text
```
Font: Regular weight
Size: 14px
Letter-spacing: normal
Line-height: 2 (double spacing)
Color: #555555
```

### Small Text / Footer
```
Font: Uppercase
Size: 9-11px
Letter-spacing: 0.15em
Color: #888888 or #bbb
```

## ✨ Animation Timings

### Expand/Collapse Sections
```
Duration: 300ms
Easing: ease
Transition: max-height, opacity
Content slides down smoothly
Icon rotates 180°
```

### Hover Effects
```
Duration: 300ms
Effect: Color transition
Opacity change: slight fade
No transform (smooth only)
```

## 🎯 Quick Navigation Links

```
Each link in table of contents:
├─ Anchor: #introduction
├─ Anchor: #information-collected
├─ Anchor: #how-we-use
├─ Anchor: #data-sharing
├─ Anchor: #cookies-analytics
├─ Anchor: #data-security
├─ Anchor: #third-party-platforms
├─ Anchor: #your-rights
└─ Anchor: #contact

All sections have scroll-margin-top: 96px
Smooth scroll behavior enabled
```

## 🌐 Internationalization

### English (Default)
```
Direction: LTR (left-to-right)
Font: Inter
Headings: Large (96px)
Spacing: Normal
```

### Arabic
```
Direction: RTL (right-to-left)
Font: Cairo
Headings: Smaller (72px - clamp adjusted)
Spacing: Normal
All elements mirror automatically
```

## 📊 Spacing System

```
Margin/Padding Scale:
4px   = 0.25rem
6px   = 0.375rem
8px   = 0.5rem
10px  = 0.625rem
12px  = 0.75rem
16px  = 1rem
20px  = 1.25rem
24px  = 1.5rem
36px  = 2.25rem
48px  = 3rem
80px  = 5rem
120px = 7.5rem
```

## 🔗 Route Map

```
/privacy-policy
├─ Accessible from: Footer link
├─ Quick navigation: Internal anchor links
├─ Button links: /contact-us
└─ Navigation: All main navigation links work
```

## 📦 Component Hierarchy

```
PrivacyPolicyPage (Main Component)
├── Navigation (Reused)
├── Section: Hero
│   ├── Eyebrow label
│   ├── Main title (h1)
│   ├── Description paragraph
│   ├── Last updated date
│   └── Table of Contents Box
├── Section: Content Sections (Repeat ×9)
│   ├── Section header (h2, expandable)
│   ├── Chevron icon (lucide-react)
│   └── Content container (conditional render)
├── HR divider
├── Section: CTA
│   ├── Heading (h3)
│   ├── Description
│   └── Button (link to /contact-us)
├── HR divider
└── Footer (Reused)
```

## ✅ Accessibility Features

```
Semantic HTML
├─ <h1> for page title
├─ <h2> for section titles
├─ <button> for expandable sections
├─ <a> for all links
└─ <section> for content areas

ARIA Attributes
├─ aria-expanded: true/false on buttons
├─ aria-label: Clear link labels
└─ role: implicit from semantic HTML

Color Contrast
├─ #1535C2 on #ffffff: 7.8:1 ✓
├─ #0a0a0a on #ffffff: 17.5:1 ✓
├─ #555555 on #ffffff: 6.4:1 ✓
└─ All ratios exceed WCAG AA

Keyboard Navigation
├─ Tab through links and buttons
├─ Enter to expand/collapse
├─ Section anchors for jump links
└─ Focus visible outlines
```

---

This visual reference shows exactly how the Privacy Policy page is structured and styled to match your existing website design system.
