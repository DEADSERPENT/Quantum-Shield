'use client';

import Header from '@/components/Header';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';
import { LockIcon3D, ShieldIcon3D, KeyIcon3D, ChipIcon3D, QuantumIcon3D } from '@/components/Icons3D';
import { useScrollReveal } from '@/hooks/useScrollEffects';

const FeatureItem = ({ feature, index }: { feature: string; index: number }) => {
  const { ref, isVisible } = useScrollReveal<HTMLLIElement>();

  return (
    <li
      ref={ref}
      className={`flex items-start gap-3 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-6 h-6 rounded-full bg-quantum-cyan/10 border border-quantum-cyan/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
        <svg className="w-3 h-3 text-quantum-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-gray-300 group-hover:text-gray-200 transition-colors">{feature}</span>
    </li>
  );
};

const SpecCard = ({ spec, index }: { spec: { label: string; value: string }; index: number }) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`glass-card p-6 text-center group hover:scale-105 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="text-2xl font-display font-bold text-quantum-cyan mb-2 group-hover:scale-110 transition-transform">
        {spec.value}
      </div>
      <div className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">{spec.label}</div>
    </div>
  );
};

const ModelCard = ({ model, index }: { model: any; index: number }) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`glass-card p-8 relative group hover:scale-[1.02] transition-all duration-500 ${
        model.featured ? 'ring-2 ring-quantum-cyan' : ''
      } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {model.featured && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-quantum-cyan to-quantum-violet px-4 py-1 rounded-full text-xs font-semibold shadow-neon-cyan">
            Popular Choice
          </span>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-br from-quantum-cyan/5 via-transparent to-quantum-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
      <h3 className="text-2xl font-display font-bold mb-2 relative z-10">{model.name}</h3>
      <div className={`text-4xl font-bold bg-gradient-to-r ${model.color} bg-clip-text text-transparent mb-6 relative z-10`}>
        {model.price}
      </div>
      <ul className="space-y-3 mb-8 relative z-10">
        {model.features.map((feature: string, idx: number) => (
          <li key={feature} className="flex items-center gap-2 text-gray-300 group-hover:text-gray-200 transition-colors">
            <div className="w-1.5 h-1.5 rounded-full bg-quantum-cyan group-hover:scale-150 transition-transform" />
            {feature}
          </li>
        ))}
      </ul>
      <button className={`${model.featured ? 'btn-primary' : 'btn-secondary'} w-full relative z-10`}>
        Select Model
      </button>
    </div>
  );
};

export default function ProductPage() {
  const specs = [
    { label: 'Dimensions', value: '48 × 18 × 8 mm' },
    { label: 'Weight', value: '12g' },
    { label: 'Material', value: 'Grade 5 Titanium' },
    { label: 'Interface', value: 'USB-C 3.2' },
    { label: 'Water Resistance', value: 'IP68' },
    { label: 'Operating Temp', value: '-20°C to 70°C' },
    { label: 'Encryption', value: 'ML-KEM-1024' },
    { label: 'Secure Element', value: 'CC EAL6+' },
  ];

  const models = [
    {
      name: 'QuantumShield One',
      price: '₹24,999',
      features: ['ML-KEM-768', 'USB-C', 'FIDO2', '2-year warranty'],
      color: 'from-quantum-cyan to-quantum-violet',
    },
    {
      name: 'QuantumShield Pro',
      price: '₹49,999',
      features: ['ML-KEM-1024', 'USB-C + NFC + BLE', 'FIDO2 + PKCS#11', '5-year warranty'],
      color: 'from-quantum-violet to-quantum-magenta',
      featured: true,
    },
  ];

  return (
    <main className="bg-quantum-black min-h-screen">
      <Header />
      <PageHero
        title="Product Overview"
        subtitle="Military-grade quantum-safe security in a titanium body"
        badge="Available Now"
      />

      {/* Product Showcase */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="glass-card p-12 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-quantum-cyan/5 to-quantum-violet/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-full aspect-[3/2] flex items-center justify-center">
                  <div className="w-3/4 aspect-[3/1] rounded-2xl bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 shadow-device animate-float">
                    <div className="absolute inset-0 rounded-2xl border border-quantum-cyan/30 shadow-glow-md" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-quantum-cyan animate-pulse shadow-neon-cyan" />
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 group">
              <h2 className="text-3xl md:text-5xl font-display font-bold">
                <span className="gradient-text">Engineered for Excellence</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed">
                QuantumShield combines aerospace-grade materials with cutting-edge post-quantum cryptography.
                Every unit is precision-machined from a single block of titanium and tested to military standards.
              </p>
              <ul className="space-y-4">
                {[
                  'Aerospace-grade titanium construction',
                  'Post-quantum cryptographic algorithms',
                  'Hardware-based quantum random number generator',
                  'Tamper-resistant secure element',
                  'FIPS 140-3 Level 3 certified',
                ].map((feature, index) => (
                  <FeatureItem key={feature} feature={feature} index={index} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="section-padding bg-quantum-charcoal/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Technical Specifications
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Precision engineering meets quantum physics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specs.map((spec, index) => (
              <SpecCard key={spec.label} spec={spec} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Models */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Choose Your Model
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {models.map((model, index) => (
              <ModelCard key={model.name} model={model} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
