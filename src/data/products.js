// Single source of truth for branding, contact details, and product copy.
// To rebrand or update contact info, edit ONLY this file.

export const site = {
  name: 'SHUDH SPICES',
  tagline: 'Premium Kashmiri spices & dry fruits, packed fresh in Srinagar.',
  city: 'Srinagar, Jammu & Kashmir',

  // ---- PLACEHOLDER CONTACT DETAILS — replace with real values ----
  address: 'Lal Chowk, Srinagar, Jammu & Kashmir 190001', // placeholder
  phoneDisplay: '+91 XXXXX XXXXX', // placeholder
  whatsappNumber: '910000000000', // placeholder: country code + number, no symbols
  email: 'info@shudhspices.in', // placeholder
  // ----------------------------------------------------------------

  social: {
    instagram: '#',
    facebook: '#',
    whatsappNumber: '910000000000', // placeholder
  },
}

// Build a wa.me link with a prefilled message.
export function whatsappLink(message) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`
}

// ---- Homepage hero + feature-card visuals ----
// Free Unsplash photos (royalty-free). Swap any URL for your own product/spice
// photos when ready — the layout doesn't change.
const stock = (id, w = 800) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`

export const homepage = {
  badge: 'PURE SPICES, BETTER FLAVOR',
  headline: ['EVERY PINCH TELLS', 'A FLAVOR STORY'],
  heroImages: {
    left: stock('1596040033229-a9821ebd058d', 520),
    right: stock('1532336414038-cf19250c5757', 520),
  },
  cards: [
    {
      tone: 'green',
      label: 'FRESHLY PACKED.',
      image: stock('1509358271058-acd22cc93898', 700),
      badge: 'BOLD FLAVOR',
      heading: 'Your favorite dishes, elevated one pinch',
      jar: stock('1467003909585-2f8a72700288', 360),
    },
    {
      tone: 'yellow',
      label: 'PURE & NATURAL.',
      image: stock('1556909211-36987daf7b4d', 700),
      badge: 'ORGANIC',
      heading: 'Authentic Kashmiri spices to elevate every meal naturally',
    },
    {
      tone: 'orange',
      kicker: 'FEATURED',
      title: 'KASHMIRI SAFFRON MONGRA BLEND',
      jar: stock('1505253758473-96b7015fcd40', 420),
      pill: 'BOLD FLAVOR',
      tag: 'PURE SPICE',
    },
  ],
}

export const features = [
  {
    icon: '🌿',
    title: 'Authentic Kashmir-inspired flavor profile',
    text: 'Sourced and blended to bring genuine Kashmiri character to every pinch.',
  },
  {
    icon: '📦',
    title: 'Clean packing and consistent quality checks',
    text: 'Hygienic packing and repeat quality checks on every batch we ship.',
  },
  {
    icon: '🛒',
    title: 'Retail and bulk-friendly ordering options',
    text: 'Single jars for the home kitchen, big orders for shops and businesses.',
  },
]

// Emotive, Everest-inspired brand storytelling — localized to Kashmir.
export const aboutStory = [
  "At Shudh Spices, a spice isn't just an ingredient — it's a memory. It carries the warmth of a Kashmiri kitchen in winter, the aroma of kahwa shared with family, and the colour saffron lends to a festive plate.",
  'Rooted in Srinagar, we bring authentic flavours from the valley to your home — sourced with care, packed clean, and quality-checked, one batch at a time.',
]

export const aboutPoints = [
  'Freshness you can smell the moment the pack opens',
  'Flavor-first sourcing inspired by trusted Kashmiri staples',
  'Reliable support for repeat household and business orders',
]

// "Rooted in Kashmir" values band — honest highlights, not sales figures.
export const stats = [
  { value: '100%', label: 'Pure & natural — nothing added' },
  { value: 'Kashmir', label: 'Sourced at the origin' },
  { value: '6+', label: 'Signature spices & dry fruits' },
  { value: 'Retail + Bulk', label: 'Orders of every size welcome' },
]

// Kashmiri recipes — informational cards, link to a WhatsApp enquiry.
export const recipes = [
  { name: 'Rogan Josh', emoji: '🍖', note: 'The crimson Kashmiri classic — lamb slow-cooked in our pure spices.' },
  { name: 'Mutton Yakhni', emoji: '🥘', note: 'Fragrant yoghurt curry carried by green cardamom and fennel.' },
  { name: 'Kashmiri Kahwa', emoji: '🍵', note: 'Saffron, cardamom and almond — the valley in a cup.' },
  { name: 'Dum Aloo', emoji: '🥔', note: 'Baby potatoes simmered in a rich, spiced Kashmiri gravy.' },
  { name: 'Modur Pulav', emoji: '🍚', note: 'Sweet saffron rice studded with dry fruits for festive days.' },
  { name: 'Kesar Kheer', emoji: '🍮', note: 'Slow-cooked milk pudding perfumed with our Mongra saffron.' },
]

// Order in which product categories are listed on the page.
export const categoryOrder = [
  'Blended Spices',
  'Pure Spices',
  'Exotic Range',
  'Dry Fruits',
]

// Everest-style intro for each category, shown in the "Shop by Category"
// showcase. Paste a Cloudinary URL into `image` to replace the emoji.
export const categoryInfo = {
  'Blended Spices': {
    emoji: '🌶️',
    image: '',
    blurb:
      "Nothing beats the taste of traditional Indian spice blends! Shudh's range of blended masalas is hand-crafted, with ingredients sourced from trusted Kashmiri and Indian spice lands — so the taste, aroma, flavour and colour stay uncompromised in every pack.",
  },
  'Pure Spices': {
    emoji: '🫛',
    image: '',
    blurb:
      'Pure spices hold a special place of honour in every Indian kitchen, no matter the region or recipe. At Shudh, we believe in spices that are rich, clean and authentic — and nothing says it better than our range of single-origin pure spices.',
  },
  'Exotic Range': {
    emoji: '🌸',
    image: '',
    blurb:
      "Pure, premium and exotic — Shudh's Kashmiri Saffron is a must-have for traditional, mouth-watering shahi feasts. Hand-picked Mongra threads carry a subtle, earthy flavour and an unmistakable aroma that make every dish a little more special.",
  },
  'Dry Fruits': {
    emoji: '🌰',
    image: '',
    blurb:
      "From plump almonds to crisp Kashmiri walnuts, our dry fruits are freshness you can smell the moment the pack opens. Sourced at the origin and clean-packed, they're perfect for daily snacking, festive sweets and thoughtful gifting.",
  },
}

// Group products by their `category`, following categoryOrder. Any category
// not in categoryOrder is appended at the end in first-seen order.
export function productsByCategory() {
  const groups = {}
  for (const p of products) {
    ;(groups[p.category] ||= []).push(p)
  }
  const ordered = categoryOrder.filter((c) => groups[c])
  for (const c of Object.keys(groups)) {
    if (!ordered.includes(c)) ordered.push(c)
  }
  return ordered.map((category) => ({ category, items: groups[category] }))
}

// To add a real photo, paste the Cloudinary URL into `image`.
// While `image` is empty (''), the card shows the `emoji` fallback.
export const products = [
  {
    name: 'Kashmiri Saffron',
    category: 'Exotic Range',
    emoji: '🌸',
    image: '',
    blurb:
      'Crimson threads of pure Mongra that make a few strands feel like an open flex.',
  },
  {
    name: 'Premium Almonds',
    category: 'Dry Fruits',
    emoji: '🥜',
    image: '',
    blurb:
      'The overachiever of snack jars: quiet, classy, and always pretending to be healthy.',
  },
  {
    name: 'Kashmiri Walnuts',
    category: 'Dry Fruits',
    emoji: '🌰',
    image: '',
    blurb:
      'Brain-shaped little geniuses that crack open into pure cold-weather comfort.',
  },
  {
    name: 'Green Cardamom',
    category: 'Pure Spices',
    emoji: '🫛',
    image: '',
    blurb:
      'Small pods, huge attitude, and the secret reason chai gets all the compliments.',
  },
  {
    name: 'Dry Fruits Mix',
    category: 'Dry Fruits',
    emoji: '🍇',
    image: '',
    blurb:
      'A handful of everything good, for people who can never pick just one favorite.',
  },
  {
    name: 'Blended Masalas',
    category: 'Blended Spices',
    emoji: '🌶️',
    image: '',
    blurb:
      'Tiny flavor fireworks for people who believe bland food is a personal insult.',
  },
]
