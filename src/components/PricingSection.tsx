'use client';

import React from 'react';
import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollEffects';

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted: boolean;
  badge?: string;
}

const pricingTiers: PricingTier[] = [
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

const PricingCard = ({ tier, index }: { tier: PricingTier; index: number }) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`pricing-card relative group hover:scale-[1.02] transition-all duration-700 ${
        tier.highlighted
          ? 'border-quantum-cyan/50 shadow-neon-cyan'
          : 'border-glass-border'
      } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {tier.badge && (
        <div className="absolute top-2 left-1/2 -translate-x-1/2 z-20">
          <span className="bg-gradient-to-r from-quantum-cyan to-quantum-violet px-4 py-1 rounded-full text-xs font-semibold text-white shadow-neon-cyan">
            {tier.badge}
          </span>
        </div>
      )}

      <div className={`absolute inset-0 bg-gradient-to-br from-quantum-cyan/5 via-transparent to-quantum-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl`} />

      <div className="mb-8 flex justify-center">
        {tier.highlighted ? (
          // QuantumShield Pro - Enterprise 3D Icon
          <svg viewBox="0 0 120 80" className="w-40 h-24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id={`proGrad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00ffff" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#00ffff" stopOpacity="0.9" />
              </linearGradient>
              <linearGradient id={`proBody-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4a4a4a" />
                <stop offset="50%" stopColor="#2a2a2a" />
                <stop offset="100%" stopColor="#1a1a1a" />
              </linearGradient>
              <filter id={`proGlow-${index}`}>
                <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Main device body - 3D appearance */}
            <rect x="20" y="20" width="80" height="40" rx="6" fill="url(#proBody-${index})" stroke="#555" strokeWidth="0.5" />

            {/* Top highlight for 3D effect */}
            <rect x="24" y="20" width="72" height="2" rx="1" fill="url(#proGrad-${index})" opacity="0.3" />

            {/* Brushed metal texture lines */}
            <line x1="25" y1="25" x2="95" y2="25" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
            <line x1="25" y1="28" x2="95" y2="28" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
            <line x1="25" y1="31" x2="95" y2="31" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
            <line x1="25" y1="52" x2="95" y2="52" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
            <line x1="25" y1="55" x2="95" y2="55" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />

            {/* Quantum shield emblem in center */}
            <path d="M60 32 L68 34 L68 40 Q68 44 60 48 Q52 44 52 40 L52 34 Z"
                  fill="none" stroke="url(#proGrad-${index})" strokeWidth="1" filter="url(#proGlow-${index})" />

            {/* Central quantum lock */}
            <circle cx="60" cy="39" r="2.5" fill="none" stroke="url(#proGrad-${index})" strokeWidth="0.8" />
            <rect x="58" y="40" width="4" height="4" rx="0.5" fill="none" stroke="url(#proGrad-${index})" strokeWidth="0.8" />

            {/* Status indicators - animated */}
            <circle cx="35" cy="40" r="1.5" fill="#00ffff" opacity="0.8" className="animate-pulse" />
            <circle cx="40" cy="40" r="1.5" fill="#8b5cf6" opacity="0.8" className="animate-pulse" style={{animationDelay: '0.3s'}} />
            <circle cx="45" cy="40" r="1.5" fill="#00ffff" opacity="0.8" className="animate-pulse" style={{animationDelay: '0.6s'}} />

            {/* USB-C connector */}
            <rect x="100" y="35" width="8" height="10" rx="1" fill="url(#proBody-${index})" stroke="#555" strokeWidth="0.5" />
            <rect x="102" y="37" width="4" height="6" rx="0.5" fill="#1a1a1a" />

            {/* NFC indicator */}
            <path d="M 75 30 Q 78 30 78 33" stroke="url(#proGrad-${index})" strokeWidth="0.5" fill="none" opacity="0.6" />
            <path d="M 77 28 Q 81 28 81 32" stroke="url(#proGrad-${index})" strokeWidth="0.5" fill="none" opacity="0.4" />
            <path d="M 79 26 Q 84 26 84 31" stroke="url(#proGrad-${index})" strokeWidth="0.5" fill="none" opacity="0.3" />

            {/* Premium border glow */}
            <rect x="20" y="20" width="80" height="40" rx="6" fill="none" stroke="url(#proGrad-${index})" strokeWidth="0.8" opacity="0.6" filter="url(#proGlow-${index})" />

            {/* Quantum particles orbiting */}
            <circle cx="28" cy="28" r="1" fill="#00ffff" opacity="0.7" className="animate-pulse" />
            <circle cx="92" cy="52" r="1" fill="#8b5cf6" opacity="0.7" className="animate-pulse" style={{animationDelay: '0.5s'}} />
            <circle cx="70" cy="25" r="0.8" fill="#ff00ff" opacity="0.6" className="animate-pulse" style={{animationDelay: '0.7s'}} />
          </svg>
        ) : (
          // QuantumShield One - Personal 3D Icon
          <svg viewBox="0 0 120 80" className="w-36 h-20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id={`oneGrad-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#6d28d9" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8" />
              </linearGradient>
              <linearGradient id={`oneBody-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3a3a3a" />
                <stop offset="50%" stopColor="#252525" />
                <stop offset="100%" stopColor="#1a1a1a" />
              </linearGradient>
              <filter id={`oneGlow-${index}`}>
                <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Main device body */}
            <rect x="25" y="25" width="70" height="30" rx="5" fill="url(#oneBody-${index})" stroke="#444" strokeWidth="0.5" />

            {/* Top highlight */}
            <rect x="28" y="25" width="64" height="2" rx="1" fill="url(#oneGrad-${index})" opacity="0.3" />

            {/* Simple texture lines */}
            <line x1="30" y1="30" x2="90" y2="30" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
            <line x1="30" y1="45" x2="90" y2="45" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />

            {/* Quantum core indicator */}
            <circle cx="60" cy="40" r="3" fill="none" stroke="url(#oneGrad-${index})" strokeWidth="1" filter="url(#oneGlow-${index})" />
            <circle cx="60" cy="40" r="1.5" fill="#8b5cf6" className="animate-pulse" />

            {/* Status LEDs */}
            <circle cx="40" cy="40" r="1.2" fill="#8b5cf6" opacity="0.7" className="animate-pulse" />
            <circle cx="44" cy="40" r="1.2" fill="#8b5cf6" opacity="0.7" className="animate-pulse" style={{animationDelay: '0.4s'}} />

            {/* USB-C connector */}
            <rect x="95" y="36" width="6" height="8" rx="1" fill="url(#oneBody-${index})" stroke="#444" strokeWidth="0.5" />
            <rect x="97" y="38" width="3" height="4" rx="0.5" fill="#1a1a1a" />

            {/* Border */}
            <rect x="25" y="25" width="70" height="30" rx="5" fill="none" stroke="url(#oneGrad-${index})" strokeWidth="0.6" opacity="0.5" />

            {/* Floating particles */}
            <circle cx="35" cy="32" r="0.8" fill="#8b5cf6" opacity="0.6" className="animate-pulse" />
            <circle cx="85" cy="48" r="0.8" fill="#8b5cf6" opacity="0.6" className="animate-pulse" style={{animationDelay: '0.6s'}} />
          </svg>
        )}
      </div>

      <h3 className="text-xl font-display font-bold text-white mb-2 relative z-10">
        {tier.name}
      </h3>

      <p className="text-sm text-gray-400 mb-6 relative z-10">
        {tier.description}
      </p>

      <div className="mb-6 relative z-10">
        <span className={`text-4xl font-display font-bold ${
          tier.highlighted ? 'text-quantum-cyan neon-text-cyan' : 'text-white'
        }`}>
          {tier.price}
        </span>
        <span className="text-gray-500 ml-2">INR</span>
      </div>

      <ul className="space-y-3 mb-8 relative z-10">
        {tier.features.map((feature, idx) => (
          <li
            key={feature}
            className="flex items-start gap-3"
            style={{
              transitionDelay: `${idx * 50}ms`,
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
              transition: 'all 0.5s ease-out'
            }}
          >
            <svg
              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                tier.highlighted ? 'text-quantum-cyan' : 'text-quantum-violet'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-sm text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href="/pricing"
        className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 relative z-10 block text-center ${
          tier.highlighted
            ? 'btn-primary'
            : 'btn-secondary'
        }`}
      >
        Buy Now
      </Link>

      <div className="mt-4 text-center relative z-10">
        <span className="text-xs text-gray-500 flex items-center justify-center gap-1">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          Secure checkout
        </span>
      </div>

      <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className={`absolute top-4 right-4 w-12 h-px bg-gradient-to-l ${tier.highlighted ? 'from-quantum-cyan' : 'from-quantum-violet'} to-transparent`} />
        <div className={`absolute top-4 right-4 h-12 w-px bg-gradient-to-b ${tier.highlighted ? 'from-quantum-cyan' : 'from-quantum-violet'} to-transparent`} />
      </div>
    </div>
  );
};

const PricingSection: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-quantum-charcoal/30 to-quantum-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-violet-glow opacity-20" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-glow opacity-20" />
      </div>

      <div className="relative z-10 container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            <span className="text-white">Choose Your </span>
            <span className="gradient-text">Protection</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Invest in quantum-safe security today. Protect your data for decades to come.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <PricingCard key={tier.name} tier={tier} index={index} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="glass-card inline-block px-8 py-6 max-w-2xl hover:scale-105 transition-all duration-300">
            <h4 className="text-lg font-semibold text-white mb-2">Enterprise Solutions</h4>
            <p className="text-sm text-gray-400 mb-4">
              Need to protect your entire organization? Get volume pricing and dedicated support.
            </p>
            <Link href="/contact" className="text-quantum-cyan hover:text-quantum-cyan-glow transition-colors font-semibold inline-block">
              Contact Sales →
            </Link>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-50">
          {['NIST Approved', 'FIPS 140-3', 'CC EAL6+', 'SOC 2 Type II'].map((badge) => (
            <span key={badge} className="text-xs font-mono text-gray-500 hover:text-quantum-cyan transition-colors">
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
