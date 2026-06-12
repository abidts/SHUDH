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

export const aboutPoints = [
  'Freshness you can smell the moment the pack opens',
  'Flavor-first sourcing inspired by trusted regional staples',
  'Reliable support for repeat household and business orders',
]

export const products = [
  {
    name: 'Kashmiri Saffron',
    emoji: '🌸',
    blurb:
      'Crimson threads of pure Mongra that make a few strands feel like an open flex.',
  },
  {
    name: 'Premium Almonds',
    emoji: '🥜',
    blurb:
      'The overachiever of snack jars: quiet, classy, and always pretending to be healthy.',
  },
  {
    name: 'Kashmiri Walnuts',
    emoji: '🌰',
    blurb:
      'Brain-shaped little geniuses that crack open into pure cold-weather comfort.',
  },
  {
    name: 'Green Cardamom',
    emoji: '🫛',
    blurb:
      'Small pods, huge attitude, and the secret reason chai gets all the compliments.',
  },
  {
    name: 'Dry Fruits Mix',
    emoji: '🍇',
    blurb:
      'A handful of everything good, for people who can never pick just one favorite.',
  },
  {
    name: 'Blended Masalas',
    emoji: '🌶️',
    blurb:
      'Tiny flavor fireworks for people who believe bland food is a personal insult.',
  },
]
