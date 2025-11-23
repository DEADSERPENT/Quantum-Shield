'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NotFound() {
  return (
    <main className="bg-quantum-black min-h-screen flex flex-col font-sans overflow-x-hidden selection:bg-quantum-cyan selection:text-quantum-black">
      <Header />

      {/* Increased height to min-h-[100vh] & added top padding to compensate for Header */}
      <section className="relative flex-grow flex flex-col items-center justify-center min-h-[100vh] pt-10 md:pt-20 overflow-hidden">
        
        {/* --- CINEMATIC BACKGROUND EFFECTS --- */}
        
        {/* Deep Space Gradient */}
        <div className="absolute inset-0 bg-radial-gradient from-[#0f172a] via-[#030712] to-black opacity-80 z-0" />
        
        {/* Animated Starfield / Dust */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 mix-blend-overlay" />
        
        {/* Responsive sizing for the Singularity Rings to prevent overlap */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[700px] sm:h-[700px] lg:w-[800px] lg:h-[800px] pointer-events-none z-0 opacity-40 md:opacity-60">
          {/* Outer Ring - Cyan */}
          <div className="absolute inset-0 border border-quantum-cyan/20 rounded-full animate-[spin_20s_linear_infinite]" />
          <div className="absolute inset-10 border border-quantum-violet/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
          <div className="absolute inset-32 border-2 border-dashed border-quantum-cyan/10 rounded-full animate-[spin_40s_linear_infinite]" />
          
          {/* Inner Glow */}
          <div className="absolute inset-[30%] bg-quantum-cyan/5 rounded-full blur-[80px] animate-pulse-slow" />
          <div className="absolute inset-[40%] bg-quantum-violet/10 rounded-full blur-[60px] animate-pulse-slow" style={{ animationDelay: '1s' }} />
        </div>

        {/* --- MAIN CONTENT --- */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          
          {/* Responsive scaling for the 404 Title */}
          <div className="relative inline-block mb-6">
            <h1 className="text-[5rem] sm:text-[7rem] md:text-[10rem] lg:text-[12rem] font-display font-bold leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-gray-200 to-gray-600 drop-shadow-2xl relative z-10">
              404
            </h1>
            {/* Decorative 'Ghost' Text for Blur Effect */}
            <h1 className="text-[5rem] sm:text-[7rem] md:text-[10rem] lg:text-[12rem] font-display font-bold leading-none tracking-tighter text-quantum-cyan absolute top-0 left-0 blur-xl opacity-40 animate-pulse z-0">
              404
            </h1>
          </div>

          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-2xl md:text-4xl font-light tracking-wide text-white">
              Event Horizon <span className="font-bold text-quantum-cyan">Reached</span>
            </h2>
            
            <p className="text-lg text-gray-400 leading-relaxed">
              You've ventured into an unexplored sector of the quantum realm. 
              The coordinates you requested have collapsed into a singularity.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
              <Link 
                href="/" 
                className="group relative px-8 py-4 bg-transparent overflow-hidden rounded-lg"
              >
                <div className="absolute inset-0 w-full h-full transition-all duration-300 ease-out opacity-0 group-hover:opacity-100 bg-quantum-cyan/10 border border-quantum-cyan/50 rounded-lg shadow-[0_0_30px_rgba(0,255,255,0.3)]" />
                <div className="absolute inset-0 w-full h-full border border-white/10 rounded-lg group-hover:opacity-0" />
                <span className="relative flex items-center gap-3 text-white font-semibold tracking-wider">
                  <svg className="w-5 h-5 text-quantum-cyan transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                  RETURN HOME
                </span>
              </Link>

              <Link 
                href="/features" 
                className="group px-8 py-4 rounded-lg text-gray-400 hover:text-white transition-colors flex items-center gap-2"
              >
                <span>Explore Features</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>

          {/* Technical Footer Data */}
          <div className="mt-24 grid grid-cols-3 gap-4 max-w-lg mx-auto text-[10px] text-gray-600 font-mono uppercase tracking-widest border-t border-white/5 pt-6">
            <div>
              <span className="block text-quantum-violet mb-1">Error</span>
              Page_Not_Found
            </div>
            <div className="border-l border-r border-white/5">
              <span className="block text-quantum-cyan mb-1">Status</span>
              Unstable
            </div>
            <div>
              <span className="block text-gray-400 mb-1">Vector</span>
              Null_Ref
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}