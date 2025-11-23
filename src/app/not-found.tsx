'use client';

import { useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Particle {
  left: string;
  top: string;
  color: string;
  delay: string;
  duration: string;
}

export default function NotFound() {
  const [glitchActive, setGlitchActive] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [timestamp, setTimestamp] = useState('');
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Generate particles only on client side to avoid hydration mismatch
  const particles = useMemo<Particle[]>(() => {
    if (!mounted || prefersReducedMotion) return [];
    return [...Array(20)].map((_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      color: i % 2 === 0 ? '#00ffff' : '#8b5cf6',
      delay: `${Math.random() * 2}s`,
      duration: `${2 + Math.random() * 3}s`,
    }));
  }, [mounted, prefersReducedMotion]);

  useEffect(() => {
    setMounted(true);

    // --- New Timestamp Logic ---
    const now = new Date();
    const offset = -now.getTimezoneOffset();
    // Using Math.abs ensures hours are positive for formatting, sign is handled in gmtString
    const hours = Math.floor(Math.abs(offset) / 60).toString().padStart(2, '0');
    const minutes = Math.abs(offset % 60).toString().padStart(2, '0');
    const gmtString = `GMT${offset >= 0 ? '+' : '-'}${hours}:${minutes}`;

    setTimestamp(
      `${now.toLocaleDateString(undefined, { day: '2-digit', month: 'short', year: 'numeric' })} | ${
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
      } | ${gmtString} (${Intl.DateTimeFormat().resolvedOptions().timeZone})`
    );
    // ---------------------------

    // Check for reduced motion preference
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    motionQuery.addEventListener('change', handleMotionChange);

    // Random glitch effect - only if motion is allowed
    let glitchInterval: NodeJS.Timeout | null = null;
    if (!motionQuery.matches) {
      glitchInterval = setInterval(() => {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 150);
      }, 3000);
    }

    return () => {
      if (glitchInterval) clearInterval(glitchInterval);
      motionQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  return (
    <main className="bg-quantum-black min-h-screen flex flex-col overflow-hidden">
      <Header />

      <section className="relative flex-grow flex flex-col items-center justify-center min-h-[calc(100vh-80px)] overflow-hidden py-8 sm:py-10">
        {/* Animated Background - decorative */}
        <div className="absolute inset-0 bg-gradient-to-br from-quantum-dark via-quantum-black to-quantum-charcoal" aria-hidden="true" />

        {/* Grid Pattern - decorative */}
        <div className="absolute inset-0 opacity-20" aria-hidden="true">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 255, 0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 255, 0.03) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        {/* Floating Particles - decorative, respect reduced motion */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          {particles.map((particle, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 rounded-full ${prefersReducedMotion ? '' : 'animate-pulse'}`}
              style={{
                left: particle.left,
                top: particle.top,
                backgroundColor: particle.color,
                animationDelay: particle.delay,
                animationDuration: particle.duration,
              }}
            />
          ))}
        </div>

        {/* Quantum Shield 3D Icon - Centered Behind Content */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] opacity-10 pointer-events-none z-0" aria-hidden="true">
          <svg viewBox="0 0 200 200" className={`w-full h-full ${prefersReducedMotion ? '' : 'animate-spin-slow'}`} aria-hidden="true">
            <defs>
              <linearGradient id="shieldGrad404" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00ffff" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#00ffff" />
              </linearGradient>
            </defs>
            {/* Outer ring */}
            <circle cx="100" cy="100" r="95" fill="none" stroke="url(#shieldGrad404)" strokeWidth="0.5" strokeDasharray="4 4" />
            <circle cx="100" cy="100" r="80" fill="none" stroke="url(#shieldGrad404)" strokeWidth="0.3" />
            {/* Shield shape */}
            <path
              d="M100 30 L150 50 L150 100 Q150 150 100 180 Q50 150 50 100 L50 50 Z"
              fill="none"
              stroke="url(#shieldGrad404)"
              strokeWidth="1"
            />
            {/* Inner elements */}
            <circle cx="100" cy="90" r="15" fill="none" stroke="url(#shieldGrad404)" strokeWidth="0.5" />
            <rect x="90" y="100" width="20" height="25" rx="2" fill="none" stroke="url(#shieldGrad404)" strokeWidth="0.5" />
          </svg>
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          {/* 404 Display */}
          <div className="relative inline-block mb-4 md:mb-8">
            <h1
              aria-label="Error 404 - Page not found"
              className={`text-[5rem] sm:text-[6rem] md:text-[10rem] lg:text-[14rem] font-display font-black leading-none tracking-tighter ${
                glitchActive ? 'animate-pulse' : ''
              }`}
              style={{
                background: 'linear-gradient(180deg, #ffffff 0%, #00ffff 50%, #8b5cf6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: glitchActive ? 'hue-rotate(90deg)' : 'none',
                textShadow: '0 0 80px rgba(0, 255, 255, 0.2)',
              }}
            >
              404
            </h1>

            {/* Glitch layers - decorative */}
            {glitchActive && (
              <div aria-hidden="true">
                <span
                  className="absolute top-0 left-0 text-[5rem] sm:text-[6rem] md:text-[10rem] lg:text-[14rem] font-display font-black leading-none tracking-tighter text-quantum-cyan opacity-70"
                  style={{ transform: 'translate(-3px, -3px)', clipPath: 'inset(0 0 50% 0)' }}
                >
                  404
                </span>
                <span
                  className="absolute top-0 left-0 text-[5rem] sm:text-[6rem] md:text-[10rem] lg:text-[14rem] font-display font-black leading-none tracking-tighter text-quantum-violet opacity-70"
                  style={{ transform: 'translate(3px, 3px)', clipPath: 'inset(50% 0 0 0)' }}
                >
                  404
                </span>
              </div>
            )}
          </div>

          {/* Error Message */}
          <div className="max-w-xl mx-auto space-y-5">
            <h2 className="text-2xl md:text-3xl font-display">
              <span className="text-white">Quantum </span>
              <span className="gradient-text">Anomaly Detected</span>
            </h2>

            <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-lg mx-auto">
              The page you&apos;re looking for has collapsed into a quantum superposition.
              It simultaneously exists and doesn&apos;t exist until observed elsewhere.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4">
              <Link href="/" className="btn-primary group w-full sm:w-auto" aria-label="Return to home page">
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5 transition-transform group-hover:-translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Return Home
                </span>
              </Link>

              <Link href="/help" className="btn-secondary group w-full sm:w-auto" aria-label="Visit help center">
                <span className="flex items-center justify-center gap-2">
                  Help Center
                  <svg
                    className="w-5 h-5 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* Error Details */}
          <div className="mt-8 sm:mt-10 max-w-md mx-auto px-2 sm:px-0">
            <div className="glass-card p-4 sm:p-5 text-left font-mono text-sm border border-white/5 bg-white/5 backdrop-blur-sm rounded-lg" role="status" aria-label="Error details">
              <div className="flex items-center gap-2 mb-3 text-gray-500 border-b border-white/5 pb-2">
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-red-500" aria-hidden="true" />
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-yellow-500" aria-hidden="true" />
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500" aria-hidden="true" />
                <span className="ml-2 text-[10px] sm:text-xs uppercase tracking-wider truncate">quantum_error.log</span>
              </div>
              <div className="space-y-1.5 text-[10px] sm:text-xs font-medium overflow-hidden">
                <p className="truncate"><span className="text-quantum-violet">ERROR</span> <span className="text-gray-500">[{timestamp || '---'}]</span></p>
                <p className="text-gray-400">Page not found in quantum realm</p>
                <p className="truncate"><span className="text-quantum-cyan">STATUS:</span> <span className="text-red-400">404_QUANTUM_COLLAPSE</span></p>
                <p><span className="text-quantum-cyan">VECTOR:</span> <span className="text-gray-400">NULL_REFERENCE</span></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}