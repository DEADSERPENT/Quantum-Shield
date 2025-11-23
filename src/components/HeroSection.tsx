'use client';

import React from 'react';
import Link from 'next/link';
import { useParallax } from '@/hooks/useScrollEffects';

// Deterministic particle positions for hydration consistency
const particlePositions = [
  { left: 5, top: 10, delay: 0, duration: 8, size: 3 },
  { left: 15, top: 85, delay: 2, duration: 9, size: 2 },
  { left: 25, top: 30, delay: 4, duration: 10, size: 4 },
  { left: 35, top: 60, delay: 1, duration: 11, size: 2 },
  { left: 45, top: 20, delay: 3, duration: 8.5, size: 3 },
  { left: 55, top: 75, delay: 5, duration: 9.5, size: 2 },
  { left: 65, top: 45, delay: 7, duration: 10.5, size: 4 },
  { left: 75, top: 90, delay: 6, duration: 11.5, size: 2 },
  { left: 85, top: 15, delay: 8, duration: 8.2, size: 3 },
  { left: 95, top: 55, delay: 9, duration: 9.2, size: 2 },
  { left: 10, top: 40, delay: 1.5, duration: 10.2, size: 3 },
  { left: 20, top: 70, delay: 3.5, duration: 11.2, size: 2 },
  { left: 30, top: 5, delay: 5.5, duration: 8.8, size: 4 },
  { left: 40, top: 95, delay: 7.5, duration: 9.8, size: 2 },
  { left: 50, top: 35, delay: 0.5, duration: 10.8, size: 3 },
  { left: 60, top: 65, delay: 2.5, duration: 11.8, size: 2 },
  { left: 70, top: 25, delay: 4.5, duration: 8.3, size: 3 },
  { left: 80, top: 80, delay: 6.5, duration: 9.3, size: 2 },
  { left: 90, top: 50, delay: 8.5, duration: 10.3, size: 4 },
  { left: 3, top: 68, delay: 9.5, duration: 11.3, size: 2 },
];

const HeroSection: React.FC = () => {
  const { ref: deviceRef, offset: deviceOffset } = useParallax<HTMLDivElement>(0.3);
  const { ref: particleRef, offset: particleOffset } = useParallax<HTMLDivElement>(0.5);
  const { ref: contentRef, offset: contentOffset } = useParallax<HTMLDivElement>(-0.2);

  return (
    <section id="main-content" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-quantum-black">
      {/* Decorative backgrounds - hidden from screen readers */}
      <div className="absolute inset-0 bg-mesh-gradient animate-pulse-slow" aria-hidden="true" />
      <div className="absolute inset-0 bg-hero-gradient" aria-hidden="true" />
      <div className="absolute inset-0 wave-bg opacity-60" aria-hidden="true" />
      <div className="quantum-lattice" aria-hidden="true" />

      {/* Floating glow orbs - decorative */}
      <div className="glow-orb w-96 h-96 bg-quantum-violet/30 top-1/4 -left-48" aria-hidden="true" />
      <div className="glow-orb w-80 h-80 bg-quantum-cyan/20 bottom-1/4 -right-40" style={{ animationDelay: '5s' }} aria-hidden="true" />
      <div className="glow-orb w-64 h-64 bg-quantum-pink/20 top-1/2 left-1/3" style={{ animationDelay: '10s' }} aria-hidden="true" />

      {/* Enhanced animated particles with parallax - decorative */}
      <div
        ref={particleRef}
        className="absolute inset-0 overflow-hidden pointer-events-none"
        style={{ transform: `translateY(${particleOffset * 0.5}px)` }}
        aria-hidden="true"
      >
        {particlePositions.map((particle, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
          />
        ))}
      </div>

      {/* Scan lines effect - decorative */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" aria-hidden="true"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.03) 2px, rgba(0, 255, 255, 0.03) 4px)',
        }}
      />

      {/* Bottom gradient fade - decorative */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-quantum-black via-quantum-black/80 to-transparent z-[5] pointer-events-none" aria-hidden="true" />

      {/* Main content container */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center min-h-screen pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-24 md:pb-32">

          {/* Left Column - Text Content */}
          <div
            ref={contentRef}
            className="space-y-8 text-center lg:text-left"
            style={{ transform: `translateY(${contentOffset * 0.3}px)` }}
          >
            {/* Pre-headline badge */}
            <div className="inline-flex items-center gap-2 glass-card px-5 py-2.5 animate-fade-in-down">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-quantum-cyan opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-quantum-cyan"></span>
              </span>
              <span className="text-sm font-medium text-gray-300 tracking-wide">Now Shipping Worldwide</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.1] tracking-tight animate-fade-in-up">
              <span className="text-white">The Future of</span>
              <br />
              <span className="gradient-text">Digital Security</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed animate-fade-in-up max-w-xl lg:max-w-none" style={{ animationDelay: '0.1s' }}>
              Quantum-proof encryption meets hardware security. Protect your most sensitive data from tomorrow&apos;s threats, today.
            </p>

            {/* Feature highlights */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-500 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {['NIST Approved', 'Hardware QRNG', 'Zero-Trust'].map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-quantum-cyan" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Link href="/pricing" className="btn-primary group w-full sm:w-auto" aria-label="Order QuantumShield now">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Order Now
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              <Link href="/technology" className="btn-secondary group w-full sm:w-auto" aria-label="Explore our technology">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore Tech
                  <svg className="w-4 h-4 transform group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-xs text-gray-600 mb-3">Trusted by security teams at</p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 opacity-40">
                {['Indian Banks', 'Government', 'IT Services', 'Healthcare'].map((sector) => (
                  <span key={sector} className="text-xs font-medium text-gray-500">{sector}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Device visualization with parallax */}
          <div
            ref={deviceRef}
            className="relative mx-auto w-full max-w-[400px] sm:max-w-[500px] lg:max-w-none aspect-square"
            style={{ transform: `translateY(${-deviceOffset * 0.5}px)` }}
            aria-hidden="true"
            role="img"
            aria-label="QuantumShield device visualization"
          >
          {/* Multiple rotating quantum rings */}
          <div className="absolute inset-0 animate-rotate-slow">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <defs>
                <linearGradient id="ringGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00ffff" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#00ffff" stopOpacity="0.8" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <circle
                cx="200"
                cy="200"
                r="185"
                fill="none"
                stroke="url(#ringGradient1)"
                strokeWidth="1"
                strokeDasharray="15 10"
                opacity="0.6"
                filter="url(#glow)"
              />
            </svg>
          </div>

          {/* Second ring - reverse rotation */}
          <div className="absolute inset-4 animate-rotate-reverse">
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <circle
                cx="200"
                cy="200"
                r="160"
                fill="none"
                stroke="#8b5cf6"
                strokeWidth="0.5"
                strokeDasharray="8 12"
                opacity="0.4"
              />
            </svg>
          </div>

          {/* Third ring - slower rotation */}
          <div className="absolute inset-8 animate-rotate-slow" style={{ animationDuration: '30s' }}>
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <circle
                cx="200"
                cy="200"
                r="135"
                fill="none"
                stroke="#00ffff"
                strokeWidth="0.5"
                opacity="0.3"
              />
            </svg>
          </div>

          {/* Pulsing center glow */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-quantum-cyan/10 animate-ping-slow" />
          </div>

          {/* Device representation */}
          <div className="absolute inset-0 flex items-center justify-center animate-float">
            <div className="relative group cursor-pointer">
              {/* Device body - enhanced */}
              <div className="relative w-52 h-28 md:w-64 md:h-32 rounded-2xl bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 shadow-device transition-all duration-500 group-hover:scale-105 group-hover:shadow-neon-cyan">
                {/* Titanium brushed texture effect */}
                <div className="absolute inset-0 rounded-2xl opacity-20" style={{
                  background: 'repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(255,255,255,0.05) 1px, rgba(255,255,255,0.05) 2px)'
                }} />

                {/* Top edge highlight */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />

                {/* Inner glow effect */}
                <div className="absolute inset-2 rounded-xl bg-gradient-to-br from-quantum-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Edge glow - enhanced */}
                <div className="absolute inset-0 rounded-2xl border border-quantum-cyan/20 shadow-glow-sm group-hover:border-quantum-cyan/50 group-hover:shadow-neon-cyan transition-all duration-500" />

                {/* Central indicator - pulsing */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-quantum-cyan animate-pulse-glow shadow-neon-cyan" />
                    <div className="absolute inset-0 w-4 h-4 rounded-full bg-quantum-cyan/50 animate-ping" />
                  </div>
                </div>

                {/* Side indicators */}
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex flex-col gap-1.5">
                  <div className="w-1 h-1 rounded-full bg-quantum-violet animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <div className="w-1 h-1 rounded-full bg-quantum-violet animate-pulse" style={{ animationDelay: '1s' }} />
                </div>

                {/* USB connector - enhanced */}
                <div className="absolute -right-5 top-1/2 transform -translate-y-1/2 w-7 h-10 bg-gradient-to-r from-gray-700 to-gray-800 rounded-r-sm">
                  <div className="absolute inset-0.5 bg-gray-900 rounded-r-sm" />
                  <div className="absolute right-1 top-1/2 transform -translate-y-1/2 w-3 h-6 bg-gradient-to-b from-gray-700 to-gray-800 rounded-sm">
                    <div className="absolute inset-0.5 bg-gray-900 rounded-sm" />
                  </div>
                </div>

                {/* Product name engraving - enhanced */}
                <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 text-[8px] md:text-[10px] font-mono text-quantum-cyan/40 tracking-[0.25em] group-hover:text-quantum-cyan/60 transition-colors">
                  QUANTUMSHIELD
                </div>
              </div>
            </div>
          </div>

          {/* Orbiting particles - enhanced */}
          <div className="absolute inset-0 animate-rotate-slow" style={{ animationDuration: '25s' }}>
            <div className="absolute top-2 left-1/2 w-2.5 h-2.5 bg-quantum-cyan rounded-full shadow-neon-cyan animate-pulse" />
          </div>
          <div className="absolute inset-0 animate-rotate-reverse" style={{ animationDuration: '20s' }}>
            <div className="absolute bottom-6 right-1/4 w-2 h-2 bg-quantum-violet rounded-full shadow-neon-violet animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
          <div className="absolute inset-0 animate-rotate-slow" style={{ animationDuration: '35s' }}>
            <div className="absolute top-1/3 right-4 w-1.5 h-1.5 bg-quantum-pink rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
