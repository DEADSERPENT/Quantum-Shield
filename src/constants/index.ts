// Navigation Links
export const NAV_LINKS = [
  { label: 'Product', href: '/product' },
  { label: 'Features', href: '/features' },
  { label: 'Technology', href: '/technology' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Enterprise', href: '/enterprise' },
  { label: 'Resources', href: '/documentation' },
] as const;

// Footer Links
export const PRODUCT_LINKS = [
  { label: 'Overview', href: '/product' },
  { label: 'Product Design', href: '/product-design' },
  { label: 'Features', href: '/features' },
  { label: 'Technology', href: '/technology' },
  { label: 'Security', href: '/security' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Enterprise', href: '/enterprise' },
] as const;

export const RESOURCE_LINKS = [
  { label: 'Documentation', href: '/documentation' },
  { label: 'API Reference', href: '/api-reference' },
  { label: 'Downloads', href: '/downloads' },
  { label: 'Blog', href: '/blog' },
] as const;

export const COMPANY_LINKS = [
  { label: 'About Us', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
] as const;

export const SUPPORT_LINKS = [
  { label: 'Help Center', href: '/help' },
  { label: 'Getting Started', href: '/getting-started' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Community', href: '/community' },
] as const;

export const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
] as const;

// Pricing Tiers
export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted: boolean;
  badge?: string;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    name: 'QuantumShield One',
    price: '₹24,999',
    description: 'Personal quantum security for individuals',
    features: [
      'Quantum-safe encryption (ML-KEM-768)',
      'Hardware QRNG',
      'FIDO2/WebAuthn support',
      'USB-C & NFC',
      '2-year warranty',
      'Personal use license',
    ],
    highlighted: false,
  },
  {
    name: 'QuantumShield Pro',
    price: '₹49,999',
    description: 'Enterprise-grade protection for professionals',
    features: [
      'Maximum security (ML-KEM-1024)',
      'Advanced QRNG with entropy export',
      'FIDO2/WebAuthn + PKCS#11',
      'USB-C, NFC & Bluetooth',
      'Tamper-evident enclosure',
      '5-year warranty',
      'Enterprise license',
      'Priority support',
    ],
    highlighted: true,
    badge: 'Most Popular',
  },
];

// Security Badges
export const SECURITY_BADGES = [
  'NIST Approved',
  'FIPS 140-3',
  'CC EAL6+',
  'SOC 2 Type II',
] as const;

// Sitemap Routes
export const SITEMAP_ROUTES = [
  '/',
  '/contact',
  '/pricing',
  '/features',
  '/product',
  '/technology',
  '/about',
  '/enterprise',
  '/security',
  '/terms',
  '/privacy',
] as const;

// Company Info
export const COMPANY_INFO = {
  name: 'QuantumShield',
  tagline: "The world's first quantum-safe security key",
  email: 'sales@quantumshield.io',
  phone: '+91 80 4567 8900',
  location: 'Bengaluru, Karnataka, India',
  baseUrl: 'https://quantum-shield.vercel.app',
} as const;

// Social Links
export const SOCIAL_LINKS = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/quantumshield',
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com/company/quantumshield',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/quantumshield',
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@quantumshield',
  },
] as const;
