# SHUDH SPICES — Website Design Spec

**Date:** 2026-06-12
**Status:** Approved

## Goal

Build a brochure marketing website for **SHUDH SPICES**, a Srinagar-based
spices and dry-fruits business. The site mirrors the structure and tone of
the reference site `safaspices.in` (a React/Vite + Bootstrap single-page
brochure), rebranded to SHUDH SPICES with Kashmir-localized copy.

## Decisions

- **Stack:** React 18 + Vite + Bootstrap 5. Matches the reference site.
- **Copy:** Kashmir-themed. "Karnataka-inspired" → "Kashmir-inspired".
  Product set leans into Kashmiri staples (saffron, almonds, walnuts,
  cardamom). The reference site's witty product one-liners are kept.
- **Contact info:** Placeholders, clearly marked for the owner to replace.

## Brand & Contact

- Name: **SHUDH SPICES**
- Location: **Srinagar, Jammu & Kashmir 190001** (placeholder pincode)
- Phone: **+91 XXXXX XXXXX** (placeholder)
- Email: **info@shudhspices.in** (placeholder)
- WhatsApp: same number; "Enquire Now" / "Chat on WhatsApp" deep-link to
  `https://wa.me/<number>` with a prefilled product enquiry message.

## Project Structure

```
shudh-spices/
  index.html
  package.json
  vite.config.js
  src/
    main.jsx
    App.jsx
    index.css
    components/
      Navbar.jsx
      Hero.jsx
      Features.jsx
      Products.jsx
      About.jsx
      Contact.jsx
      Footer.jsx
    data/
      products.js   # product list + copy + theme config (contact, name)
```

Note: the app lives at the repo root (not a nested `shudh-spices/` folder),
since the repo itself is the project.

## Sections (top → bottom)

1. **Navbar** — "SHUDH SPICES" brand/logo, nav links (Home · Products ·
   About · Contact), green "Chat on WhatsApp" button. Bootstrap collapse on
   mobile.
2. **Hero** — brand name, tagline, "Srinagar, Jammu & Kashmir", two CTAs
   (Explore Products → scroll to products; Chat on WhatsApp).
3. **Features** — 3 cards:
   - "Authentic Kashmir-inspired flavor profile"
   - "Clean packing and consistent quality checks"
   - "Retail and bulk-friendly ordering options"
4. **Products** — responsive grid of 6 cards. Each card: name, witty
   one-liner, "Contact for price", green "Enquire Now" button → WhatsApp
   with prefilled message naming the product. Product set:
   - **Kashmiri Saffron** — premium Mongra saffron one-liner (new copy)
   - **Premium Almonds** — "The overachiever of snack jars: quiet, classy,
     and always pretending to be healthy."
   - **Kashmiri Walnuts** — new copy in the same witty register
   - **Green Cardamom** — "Small pods, huge attitude, and the secret reason
     chai gets all the compliments."
   - **Dry Fruits** — assorted mix
   - **Blended Masalas** — house spice blends
5. **About** — "Serving local buyers and wider orders with a quality-first
   approach." plus three bullets:
   - "Freshness you can smell the moment the pack opens"
   - "Flavor-first sourcing inspired by trusted regional staples"
   - "Reliable support for repeat household and business orders"
6. **Contact** — contact form (name, email, message → "Send Message"; submit
   opens WhatsApp/mailto with the composed message). Displays placeholder
   address, phone, email.
7. **Footer** — brand, social links (placeholder), © current year
   (computed via `new Date().getFullYear()`).

## Design / Palette

Spice-warm theme: deep saffron/amber primary, Bootstrap success-green
accents for buttons (matches reference), cream/off-white background, dark
text. Responsive via Bootstrap grid. Subtle card hover lift.

## Data Flow

- `src/data/products.js` exports `products` (array) and `site` config
  (name, address, phone, email, whatsappNumber). All components read from
  this single source so rebranding/contact edits happen in one file.
- No backend. Form and enquiry buttons compose a message and open
  `wa.me` (WhatsApp) or `mailto:` — no server submission.

## Out of Scope (YAGNI)

- E-commerce / cart / payments (original has none either — "Contact for
  price").
- CMS / admin panel.
- Real product photography (use CSS/emoji or simple placeholders; owner can
  swap images later).
- Backend form handling / database.

## Success Criteria

- `npm install && npm run dev` serves the site locally without errors.
- All 7 sections render and are responsive on mobile and desktop.
- Brand reads "SHUDH SPICES" everywhere; address is Srinagar; copy is
  Kashmir-themed; no "Safa" or "Karnataka/Bangalore" strings remain.
- Enquire/WhatsApp buttons open wa.me with a product-specific message.
- Contact placeholders are obvious and centralized in `data/products.js`.
