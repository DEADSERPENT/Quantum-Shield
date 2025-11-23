import dynamic from 'next/dynamic';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import Footer from '@/components/Footer';

// Lazy load below-the-fold components for better LCP
const QuantumThreatSection = dynamic(() => import('@/components/QuantumThreatSection'));
const ExplodedViewSection = dynamic(() => import('@/components/ExplodedViewSection'));
const FeaturesSection = dynamic(() => import('@/components/FeaturesSection'));
const NetworkProtectionSection = dynamic(() => import('@/components/NetworkProtectionSection'));
const ProductPhotographySection = dynamic(() => import('@/components/ProductPhotographySection'));
const PricingSection = dynamic(() => import('@/components/PricingSection'));

export default function Home() {
  return (
    <main className="min-h-screen bg-quantum-black">
      {/* Navigation Header */}
      <Header />

      {/* Hero Section - Main product showcase */}
      <HeroSection />

      {/* How Quantum Attacks Work - Educational threat section */}
      <QuantumThreatSection />

      {/* Exploded 3D Device View - Internal technology showcase */}
      <ExplodedViewSection />

      {/* Features Grid - Key capabilities */}
      <FeaturesSection />

      {/* Network Protection Visualization - Global security map */}
      <NetworkProtectionSection />

      {/* Product Photography - Premium hardware showcase */}
      <ProductPhotographySection />

      {/* Pricing Cards - Purchase options */}
      <PricingSection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
