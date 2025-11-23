'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';
import { KeyIcon3D, ChipIcon3D, DocumentIcon3D, TeamIcon3D } from '@/components/Icons3D';

interface HelpArticle {
  title: string;
  category: string;
  description: string;
  href: string;
  tags: string[];
}

const allArticles: HelpArticle[] = [
  // Getting Started
  { title: 'Quick Start Guide', category: 'Getting Started', description: 'Get up and running with QuantumShield in minutes', href: '/getting-started', tags: ['setup', 'beginner', 'start', 'new'] },
  { title: 'Initial Setup', category: 'Getting Started', description: 'Step-by-step guide to set up your device', href: '/documentation/setup', tags: ['setup', 'install', 'configure'] },
  { title: 'First Time Configuration', category: 'Getting Started', description: 'Configure your QuantumShield for first use', href: '/documentation/configuration', tags: ['config', 'settings', 'first'] },
  { title: 'System Requirements', category: 'Getting Started', description: 'Check if your system is compatible', href: '/documentation/requirements', tags: ['requirements', 'compatible', 'system', 'specs'] },

  // Troubleshooting
  { title: 'Connection Issues', category: 'Troubleshooting', description: 'Fix USB and NFC connection problems', href: '/documentation/troubleshooting#connection', tags: ['connection', 'usb', 'nfc', 'not working', 'detect'] },
  { title: 'Authentication Problems', category: 'Troubleshooting', description: 'Resolve login and authentication errors', href: '/documentation/troubleshooting#auth', tags: ['auth', 'login', 'password', 'fido', 'webauthn'] },
  { title: 'Firmware Updates', category: 'Troubleshooting', description: 'How to update your device firmware', href: '/documentation/firmware', tags: ['firmware', 'update', 'upgrade', 'version'] },
  { title: 'Reset & Recovery', category: 'Troubleshooting', description: 'Factory reset and data recovery options', href: '/documentation/recovery', tags: ['reset', 'factory', 'recovery', 'restore'] },

  // Documentation
  { title: 'User Manual', category: 'Documentation', description: 'Complete user guide for QuantumShield', href: '/documentation', tags: ['manual', 'guide', 'docs', 'documentation'] },
  { title: 'API Reference', category: 'Documentation', description: 'Developer API documentation', href: '/api-reference', tags: ['api', 'developer', 'integration', 'code'] },
  { title: 'Security Best Practices', category: 'Documentation', description: 'Keep your data secure with best practices', href: '/documentation/security', tags: ['security', 'best practices', 'safe', 'protect'] },
  { title: 'Integration Guides', category: 'Documentation', description: 'Integrate QuantumShield with your systems', href: '/documentation/integration', tags: ['integration', 'enterprise', 'sso', 'saml'] },

  // Technology
  { title: 'Understanding Post-Quantum Cryptography', category: 'Technology', description: 'Learn about PQC and why it matters', href: '/technology', tags: ['pqc', 'quantum', 'cryptography', 'encryption'] },
  { title: 'ML-KEM Encryption', category: 'Technology', description: 'How ML-KEM protects your data', href: '/technology#ml-kem', tags: ['ml-kem', 'kyber', 'encryption', 'nist'] },
  { title: 'Hardware Security', category: 'Technology', description: 'Our hardware security architecture', href: '/security', tags: ['hardware', 'chip', 'secure', 'tamper'] },

  // Support
  { title: 'Contact Support', category: 'Support', description: 'Get help from our support team', href: '/contact', tags: ['contact', 'support', 'help', 'ticket'] },
  { title: 'Community Forum', category: 'Support', description: 'Connect with other QuantumShield users', href: '/community', tags: ['community', 'forum', 'discuss', 'users'] },
  { title: 'FAQ', category: 'Support', description: 'Frequently asked questions', href: '/faq', tags: ['faq', 'questions', 'answers', 'common'] },
];

const helpCategories = [
  {
    IconComponent: KeyIcon3D,
    title: 'Getting Started',
    description: 'New to QuantumShield? Start here for setup guides and tutorials.',
    links: [
      { label: 'Quick Start Guide', href: '/getting-started' },
      { label: 'Initial Setup', href: '/documentation/setup' },
      { label: 'First Time Configuration', href: '/documentation/configuration' },
      { label: 'System Requirements', href: '/documentation/requirements' },
    ],
  },
  {
    IconComponent: ChipIcon3D,
    title: 'Troubleshooting',
    description: 'Having issues? Find solutions to common problems.',
    links: [
      { label: 'Connection Issues', href: '/documentation/troubleshooting#connection' },
      { label: 'Authentication Problems', href: '/documentation/troubleshooting#auth' },
      { label: 'Firmware Updates', href: '/documentation/firmware' },
      { label: 'Reset & Recovery', href: '/documentation/recovery' },
    ],
  },
  {
    IconComponent: DocumentIcon3D,
    title: 'Documentation',
    description: 'Comprehensive guides and technical documentation.',
    links: [
      { label: 'User Manual', href: '/documentation' },
      { label: 'API Reference', href: '/api-reference' },
      { label: 'Security Best Practices', href: '/documentation/security' },
      { label: 'Integration Guides', href: '/documentation/integration' },
    ],
  },
  {
    IconComponent: TeamIcon3D,
    title: 'Contact Support',
    description: "Can't find what you need? Reach out to our support team.",
    links: [
      { label: 'Submit a Ticket', href: '/contact?type=support' },
      { label: 'Email Support', href: 'mailto:support@quantumshield.com' },
      { label: 'Community Forum', href: '/community' },
      { label: 'Live Chat', href: '/contact#chat' },
    ],
  },
];

const popularArticles = [
  { title: 'How to set up QuantumShield with your computer', category: 'Setup', readTime: '5 min read', href: '/documentation/setup' },
  { title: 'Understanding post-quantum cryptography', category: 'Security', readTime: '8 min read', href: '/technology' },
  { title: 'Troubleshooting connection issues', category: 'Troubleshooting', readTime: '6 min read', href: '/documentation/troubleshooting' },
  { title: 'How to update firmware', category: 'Maintenance', readTime: '4 min read', href: '/documentation/firmware' },
];

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();
    return allArticles.filter(article =>
      article.title.toLowerCase().includes(query) ||
      article.description.toLowerCase().includes(query) ||
      article.category.toLowerCase().includes(query) ||
      article.tags.some(tag => tag.includes(query))
    ).slice(0, 8);
  }, [searchQuery]);

  const showResults = isSearchFocused && searchQuery.trim().length > 0;

  return (
    <main className="bg-quantum-black min-h-screen">
      <Header />
      <PageHero
        title="Help Center"
        subtitle="Find answers, guides, and support resources"
        badge="24/7 Support Available"
      />

      {/* Search Section */}
      <section className="section-padding bg-quantum-charcoal/30">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 text-white">
            How can we help you?
          </h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search for help articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
              className="w-full px-6 py-4 pl-14 rounded-xl bg-white/5 border border-glass-border text-white placeholder-gray-500 focus:border-quantum-cyan focus:outline-none focus:ring-2 focus:ring-quantum-cyan/20 transition-all"
            />
            <svg
              className="w-6 h-6 absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>

            {/* Search Results Dropdown */}
            {showResults && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-quantum-charcoal border border-glass-border rounded-xl shadow-2xl overflow-hidden z-50">
                {searchResults.length > 0 ? (
                  <div className="max-h-96 overflow-y-auto">
                    {searchResults.map((article, idx) => (
                      <Link
                        key={idx}
                        href={article.href}
                        className="flex items-start gap-4 p-4 hover:bg-white/5 transition-colors border-b border-glass-border last:border-0"
                      >
                        <div className="w-10 h-10 rounded-lg bg-quantum-cyan/10 border border-quantum-cyan/30 flex items-center justify-center flex-shrink-0">
                          <svg className="w-5 h-5 text-quantum-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <div className="text-left">
                          <h4 className="text-white font-medium">{article.title}</h4>
                          <p className="text-sm text-gray-400">{article.description}</p>
                          <span className="text-xs text-quantum-cyan mt-1 inline-block">{article.category}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-800 flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <p className="text-gray-400">No results found for &ldquo;{searchQuery}&rdquo;</p>
                    <p className="text-sm text-gray-500 mt-2">Try different keywords or browse categories below</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Quick Search Tags */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {['setup', 'connection', 'firmware', 'security', 'api'].map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchQuery(tag)}
                className="px-4 py-1.5 rounded-full text-sm bg-white/5 border border-glass-border text-gray-400 hover:text-quantum-cyan hover:border-quantum-cyan/50 transition-all"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {helpCategories.map((category, index) => {
              const IconComponent = category.IconComponent;
              return (
                <div
                  key={index}
                  className="glass-card p-8 hover:border-quantum-cyan/50 transition-all duration-300 group"
                >
                  <div className="mb-4 flex justify-start">
                    <IconComponent className="w-16 h-16" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-quantum-cyan transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{category.description}</p>
                  <ul className="space-y-3">
                    {category.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          href={link.href}
                          className="text-sm text-gray-300 hover:text-quantum-cyan transition-colors flex items-center gap-2 group/link"
                        >
                          <svg
                            className="w-4 h-4 text-quantum-cyan opacity-0 group-hover/link:opacity-100 transition-opacity"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Popular Articles */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-8 text-center">
              <span className="text-white">Popular </span>
              <span className="gradient-text">Articles</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {popularArticles.map((article, index) => (
                <Link
                  key={index}
                  href={article.href}
                  className="glass-card p-6 hover:border-quantum-cyan/50 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-quantum-cyan/10 text-quantum-cyan border border-quantum-cyan/20">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-quantum-cyan transition-colors">
                    {article.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-gradient-to-b from-quantum-charcoal/30 to-quantum-black">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-2xl md:text-4xl font-display font-bold mb-6">
            <span className="text-white">Still need </span>
            <span className="gradient-text">help?</span>
          </h2>
          <p className="text-gray-400 mb-8">
            Our support team is available 24/7 to assist you with any questions or issues.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Contact Support
            </Link>
            <Link href="/community" className="btn-secondary">
              Join Community
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
