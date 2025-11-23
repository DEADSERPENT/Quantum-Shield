# QuantumShield

**The World's First Quantum-Safe Hardware Security Key**

Protecting your digital identity from quantum computing threats with NIST-approved post-quantum cryptography and true quantum random number generation.

---

## Overview

QuantumShield is a next-generation hardware security key that combines:
- **ML-KEM** (NIST-approved post-quantum encryption)
- **ML-DSA** (Quantum-safe digital signatures)
- **QRNG** (Quantum Random Number Generation)
- **FIDO2/WebAuthn** compatibility

### Product Line

| Model | Encryption | Connectivity | Price |
|-------|-----------|--------------|-------|
| **QuantumShield One** | ML-KEM-768 | USB-C, NFC | ₹24,999 |
| **QuantumShield Pro** | ML-KEM-1024 | USB-C, NFC, Bluetooth | ₹49,999 |

---

## Tech Stack

| Technology | Version |
|------------|---------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript 5.9 |
| **Styling** | Tailwind CSS 4 |
| **UI Library** | React 19 |

---

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/DEADSERPENT/quantum-Shield.git

# Navigate to project
cd quantum-Shield

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Production Deployment

> **Warning**: Never run `npm run dev` in production!

### Quick Deploy

```bash
# Build and start production server
npm run build && npm start
```

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Automatic build and deployment

### Other Platforms

See [DEPLOYMENT.md](./DEPLOYMENT.md) for:
- Netlify
- Docker
- VPS/Cloud servers
- PM2 process manager

---

## Project Structure

```
quantumshield/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── page.tsx            # Home page
│   │   ├── about/              # About page
│   │   ├── blog/               # Blog with MDX
│   │   ├── careers/            # Careers page
│   │   ├── community/          # Community page
│   │   ├── contact/            # Contact form
│   │   ├── documentation/      # Docs page
│   │   ├── downloads/          # Downloads page
│   │   ├── enterprise/         # Enterprise page
│   │   ├── faq/                # FAQ page
│   │   ├── features/           # Features page
│   │   ├── getting-started/    # Getting started guide
│   │   ├── help/               # Help center
│   │   ├── pricing/            # Pricing page
│   │   ├── privacy/            # Privacy policy
│   │   ├── product/            # Product page
│   │   ├── product-design/     # Product design showcase
│   │   ├── security/           # Security page
│   │   ├── technology/         # Technology page
│   │   ├── terms/              # Terms of service
│   │   └── not-found.tsx       # Custom 404 page
│   │
│   ├── components/             # Reusable UI components
│   │   ├── Header.tsx          # Navigation header
│   │   ├── Footer.tsx          # Site footer
│   │   ├── HeroSection.tsx     # Landing hero
│   │   ├── FeaturesSection.tsx # Features grid
│   │   ├── PricingSection.tsx  # Pricing cards
│   │   ├── PageHero.tsx        # Reusable page hero
│   │   ├── MDXContent.tsx      # MDX renderer
│   │   ├── Icons3D.tsx         # 3D SVG icons
│   │   └── ...
│   │
│   ├── content/                # Content files
│   │   └── blog/               # MDX blog posts
│   │       ├── quantum-computing-timeline.mdx
│   │       ├── nist-pqc-standards.mdx
│   │       └── ...
│   │
│   └── globals.css             # Global styles + Tailwind
│
├── public/                     # Static assets
├── tailwind.config.ts          # Tailwind configuration
├── next.config.ts              # Next.js configuration
└── package.json
```

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (port 3000) |
| `npm run build` | Create production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Features

### Website Features
- Responsive design (mobile-first)
- Dark theme with quantum-inspired aesthetics
- Animated 3D SVG icons
- Interactive product showcase
- Blog with MDX support
- SEO optimized
- Accessible (WCAG compliant)

### Security Key Features (Product)
- NIST PQC approved algorithms
- True quantum random number generation
- FIDO2/WebAuthn/U2F support
- USB-C, NFC, Bluetooth connectivity
- Tamper-evident design (Pro model)
- FIPS 140-3 certified (Pro model)

---

## Environment Variables

Create `.env.local` from example:

```bash
cp .env.example .env.local
```

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Production site URL |
| `NEXT_PUBLIC_GA_ID` | Google Analytics ID (optional) |

---

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome for Android)

---

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## Support

- **Website**: [quantum-shield-vert.vercel.app](https://quantum-shield-vert.vercel.app/)
- **Documentation**: [quantum-shield-vert.vercel.app/documentation](https://quantum-shield-vert.vercel.app/documentation)
- **Issues**: [GitHub Issues](https://github.com/DEADSERPENT/quantum-Shield/issues)

---

## License

ISC License - See [LICENSE](./LICENSE) for details.

---

## About QuantumShield

QuantumShield was founded in Bengaluru, India by a team of quantum computing researchers and cryptography experts. Our mission is to protect the world's most sensitive data from the quantum computing revolution.

### Certifications
- NIST PQC Approved
- FIDO2 Alliance Certified
- FIPS 140-3 Level 3 (Pro)
- Common Criteria EAL6+ (Pro)
- SOC 2 Type II Compliant

---

**Made with pride in India**

© 2025 QuantumShield. All rights reserved.
