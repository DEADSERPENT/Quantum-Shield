'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { NAV_LINKS } from '@/constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-white/10 shadow-2xl'
          : 'border-b border-white/5'
      }`}
      style={{
        background: 'rgba(3, 7, 18, 0.8)',
        backdropFilter: 'blur(24px) saturate(180%)',
        WebkitBackdropFilter: 'blur(24px) saturate(180%)',
      }}
    >
      <nav className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10">
              {/* Animated glow background */}
              <div className="absolute inset-0 rounded-lg bg-quantum-cyan/20 blur-xl group-hover:bg-quantum-cyan/40 transition-all" />

              {/* Logo SVG - Quantum Shield */}
              <svg viewBox="0 0 40 40" className="relative z-10 w-10 h-10" fill="none">
                <defs>
                  <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00ffff" />
                    <stop offset="50%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#00ffff" />
                  </linearGradient>
                  <filter id="logoGlow">
                    <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>

                {/* Shield outline */}
                <path
                  d="M20 4 L32 8 L32 18 Q32 28 20 36 Q8 28 8 18 L8 8 Z"
                  stroke="url(#logoGrad)"
                  strokeWidth="1.5"
                  fill="none"
                  className="group-hover:stroke-[2] transition-all"
                  filter="url(#logoGlow)"
                />

                {/* Inner quantum lock */}
                <circle cx="20" cy="18" r="4" stroke="url(#logoGrad)" strokeWidth="1.5" fill="none" />
                <rect x="16" y="20" width="8" height="8" rx="1" stroke="url(#logoGrad)" strokeWidth="1.5" fill="none" />

                {/* Quantum particles */}
                <circle cx="14" cy="12" r="1" fill="#00ffff" className="animate-pulse" />
                <circle cx="26" cy="12" r="1" fill="#8b5cf6" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
                <circle cx="20" cy="30" r="1" fill="#00ffff" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
              </svg>
            </div>
            <span className="text-xl font-display font-bold gradient-text">
              QuantumShield
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-quantum-cyan to-quantum-violet group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              Contact
            </Link>
            <Link href="/pricing" className="btn-primary !py-3 !px-6 !text-sm">
              Buy Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={`w-6 h-0.5 bg-white transition-all ${
                isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all ${
                isMobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-white transition-all ${
                isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            role="navigation"
            aria-label="Mobile navigation"
            className="lg:hidden py-6 border-t border-white/10 animate-fade-in-down"
          >
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base font-medium text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/pricing"
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary !py-3 !px-6 !text-sm inline-block text-center"
              >
                Buy Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
