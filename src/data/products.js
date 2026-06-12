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
