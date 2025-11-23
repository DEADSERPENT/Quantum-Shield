'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';
import {
  LockIcon3D,
  QuantumIcon3D,
  ShieldIcon3D,
  KeyIcon3D,
  NetworkIcon3D,
  ChipIcon3D,
  CloudIcon3D,
  MobileIcon3D,
  EnterpriseIcon3D,
} from '@/components/Icons3D';
import { useScrollReveal } from '@/hooks/useScrollEffects';

const FeatureCard = ({ feature, index }: { feature: any; index: number }) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`group relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="glass-card p-10 h-full relative overflow-hidden hover:scale-[1.02] transition-all duration-500">
        {/* Background gradient on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-quantum-cyan/5 via-transparent to-quantum-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Icon Container */}
        <div className="relative mb-6">
          <div className="relative z-10 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
            {feature.icon}
          </div>
          {/* Icon glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-quantum-cyan/20 to-quantum-violet/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content */}
        <h3 className="text-2xl font-display font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-quantum-cyan group-hover:to-quantum-violet transition-all duration-500">
          {feature.title}
        </h3>

        <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors">
          {feature.description}
        </p>

        {/* Details list */}
        <ul className="space-y-3">
          {feature.details.map((detail: string, idx: number) => (
            <li
              key={idx}
              className="flex items-start gap-3 group/item"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-quantum-cyan mt-2 flex-shrink-0 group-hover:scale-150 group-hover:shadow-neon-cyan transition-all duration-300" />
              <span className="text-sm text-gray-500 group-hover/item:text-gray-400 transition-colors">
                {detail}
              </span>
            </li>
          ))}
        </ul>

        {/* Corner accent */}
        <div className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-4 right-4 w-16 h-px bg-gradient-to-l from-quantum-cyan to-transparent" />
          <div className="absolute top-4 right-4 h-16 w-px bg-gradient-to-b from-quantum-cyan to-transparent" />
        </div>
      </div>
    </div>
  );
};

const ComparisonRow = ({ feature, one, pro }: { feature: string; one: string; pro: string }) => {
  const { ref, isVisible } = useScrollReveal<HTMLTableRowElement>();

  return (
    <tr
      ref={ref}
      className={`border-b border-white/5 hover:bg-white/5 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
      }`}
    >
      <td className="p-6 text-gray-300">{feature}</td>
      <td className="p-6 text-center text-gray-400">{one}</td>
      <td className="p-6 text-center text-white font-semibold">{pro}</td>
    </tr>
  );
};

export default function FeaturesPage() {
  const features = [
    {
      icon: <LockIcon3D className="w-20 h-20" />,
      title: 'Post-Quantum Cryptography',
      description: 'NIST-approved ML-KEM and ML-DSA algorithms protect against quantum computer attacks.',
      details: ['ML-KEM-768/1024 key encapsulation', 'ML-DSA-65/87 digital signatures', 'Quantum-resistant key exchange'],
    },
    {
      icon: <QuantumIcon3D className="w-20 h-20" />,
      title: 'Hardware QRNG',
      description: 'True quantum random number generation from vacuum fluctuations ensures unpredictable cryptographic keys.',
      details: ['Entropy rate: 1 Gbps', 'NIST SP 800-90B certified', 'On-demand entropy export'],
    },
    {
      icon: <ShieldIcon3D className="w-20 h-20" />,
      title: 'Secure Element',
      description: 'Tamper-resistant hardware stores private keys with Common Criteria EAL6+ certification.',
      details: ['Physical tamper detection', 'Side-channel attack protection', 'Secure boot verification'],
    },
    {
      icon: <KeyIcon3D className="w-20 h-20" />,
      title: 'Multi-Protocol Support',
      description: 'Works seamlessly with FIDO2, WebAuthn, PKCS#11, and OpenPGP protocols.',
      details: ['Passwordless authentication', 'SSH key storage', 'Email encryption'],
    },
    {
      icon: <NetworkIcon3D className="w-20 h-20" />,
      title: 'Zero-Trust Authentication',
      description: 'Hardware-backed authentication eliminates password vulnerabilities and phishing attacks.',
      details: ['Biometric binding', 'Challenge-response', 'Multi-factor authentication'],
    },
    {
      icon: <MobileIcon3D className="w-20 h-20" />,
      title: 'Universal Compatibility',
      description: 'Works with Windows, macOS, Linux, Android, and iOS without drivers.',
      details: ['USB-C interface', 'NFC support (Pro)', 'Bluetooth LE (Pro)'],
    },
    {
      icon: <ChipIcon3D className="w-20 h-20" />,
      title: 'Quantum Entropy Pool',
      description: 'Continuously harvests quantum entropy to seed all cryptographic operations.',
      details: ['1MB entropy buffer', 'Auto-replenishment', 'Health monitoring'],
    },
    {
      icon: <CloudIcon3D className="w-20 h-20" />,
      title: 'Mobile Integration',
      description: 'Native support for mobile devices via NFC and Bluetooth.',
      details: ['Tap-to-authenticate', 'Wireless pairing', 'Battery-free operation'],
    },
    {
      icon: <EnterpriseIcon3D className="w-20 h-20" />,
      title: 'Enterprise Management',
      description: 'Centralized policy enforcement and audit logging for corporate deployments.',
      details: ['SCIM provisioning', 'SAML integration', 'Compliance reporting'],
    },
  ];

  return (
    <main className="bg-quantum-black min-h-screen">
      <Header />
      <PageHero
        title="Features"
        subtitle="Advanced security features designed for the quantum era"
        badge="Comprehensive Protection"
      />

      {/* Features Grid */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="section-padding bg-quantum-charcoal/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Feature Comparison
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the model that fits your security needs
            </p>
          </div>

          <div className="glass-card overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-6 text-gray-400 font-medium">Feature</th>
                  <th className="text-center p-6">
                    <div className="text-quantum-cyan font-display font-bold text-lg">QuantumShield One</div>
                    <div className="text-sm text-gray-500 mt-1">₹24,999</div>
                  </th>
                  <th className="text-center p-6">
                    <div className="text-quantum-violet font-display font-bold text-lg">QuantumShield Pro</div>
                    <div className="text-sm text-gray-500 mt-1">₹49,999</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <ComparisonRow feature="Post-Quantum Encryption" one="ML-KEM-768" pro="ML-KEM-1024" />
                <ComparisonRow feature="Quantum RNG" one="✓" pro="✓" />
                <ComparisonRow feature="FIDO2/WebAuthn" one="✓" pro="✓" />
                <ComparisonRow feature="PKCS#11" one="—" pro="✓" />
                <ComparisonRow feature="USB-C" one="✓" pro="✓" />
                <ComparisonRow feature="NFC" one="—" pro="✓" />
                <ComparisonRow feature="Bluetooth" one="—" pro="✓" />
                <ComparisonRow feature="Entropy Export" one="—" pro="✓" />
                <ComparisonRow feature="Warranty" one="2 years" pro="5 years" />
              </tbody>
            </table>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <Link href="/pricing" className="btn-primary inline-block">
              View Pricing Details
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
