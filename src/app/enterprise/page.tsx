'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';
import { EnterpriseIcon3D, ShieldIcon3D, TeamIcon3D, KeyIcon3D, DocumentIcon3D, ChipIcon3D } from '@/components/Icons3D';
import { useScrollReveal } from '@/hooks/useScrollEffects';

interface EnterpriseFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const EnterpriseFeatureCard = ({ feature, index }: { feature: EnterpriseFeature; index: number }) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`glass-card p-8 group hover:scale-105 transition-all duration-500 relative overflow-hidden ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
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

      <h3 className="text-xl font-semibold text-white mb-3 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-quantum-cyan group-hover:to-quantum-violet transition-all duration-500">
        {feature.title}
      </h3>
      <p className="text-gray-400 relative z-10 group-hover:text-gray-300 transition-colors">
        {feature.description}
      </p>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute top-4 right-4 w-12 h-px bg-gradient-to-l from-quantum-cyan to-transparent" />
        <div className="absolute top-4 right-4 h-12 w-px bg-gradient-to-b from-quantum-cyan to-transparent" />
      </div>
    </div>
  );
};

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function EnterprisePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    size: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');

  const features: EnterpriseFeature[] = [
    {
      icon: <EnterpriseIcon3D className="w-16 h-16" />,
      title: 'Bulk Licensing',
      description: 'Volume discounts and flexible licensing for organizations of any size',
    },
    {
      icon: <ChipIcon3D className="w-16 h-16" />,
      title: 'Centralized Management',
      description: 'Cloud-based management console with policy enforcement and audit logs',
    },
    {
      icon: <TeamIcon3D className="w-16 h-16" />,
      title: 'Training & Support',
      description: 'Onboarding assistance, training programs, and dedicated support team',
    },
    {
      icon: <KeyIcon3D className="w-16 h-16" />,
      title: 'Custom Integration',
      description: 'SCIM provisioning, SAML SSO, and custom API development',
    },
    {
      icon: <DocumentIcon3D className="w-16 h-16" />,
      title: 'Compliance Reporting',
      description: 'Automated compliance reports for SOC 2, ISO 27001, and more',
    },
    {
      icon: <ShieldIcon3D className="w-16 h-16" />,
      title: 'Priority Deployment',
      description: 'Fast-track deployment with dedicated implementation engineers',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setStatus('success');
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', company: '', size: '', message: '' });
    setStatus('idle');
  };

  return (
    <main className="bg-quantum-black min-h-screen">
      <Header />
      <PageHero
        title="Enterprise Solutions"
        subtitle="Quantum-safe security at scale"
        badge="Trusted by Indian Enterprises"
      />

      {/* Features */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <EnterpriseFeatureCard key={feature.title} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-quantum-charcoal/30">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Get Started
            </h2>
            <p className="text-gray-400">
              Contact our enterprise team for a personalized quote and demo
            </p>
          </div>

          <div className="glass-card p-12">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Request Submitted!</h4>
                <p className="text-gray-400 mb-6">Our enterprise team will contact you within 24 hours.</p>
                <button
                  onClick={resetForm}
                  className="text-quantum-cyan hover:text-quantum-cyan-glow transition-colors"
                >
                  Submit another request
                </button>
              </div>
            ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-quantum-cyan/50 focus:outline-none text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-quantum-cyan/50 focus:outline-none text-white"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-quantum-cyan/50 focus:outline-none text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Company Size *
                  </label>
                  <select
                    required
                    value={formData.size}
                    onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-quantum-charcoal border border-white/10 focus:border-quantum-cyan/50 focus:outline-none text-white appearance-none cursor-pointer hover:border-quantum-cyan/30 transition-colors"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                      backgroundPosition: 'right 0.5rem center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '1.5em 1.5em',
                      paddingRight: '2.5rem'
                    }}
                  >
                    <option value="" className="bg-quantum-charcoal text-gray-400">Select size</option>
                    <option value="10-50" className="bg-quantum-charcoal text-white">10-50 employees</option>
                    <option value="51-200" className="bg-quantum-charcoal text-white">51-200 employees</option>
                    <option value="201-1000" className="bg-quantum-charcoal text-white">201-1000 employees</option>
                    <option value="1000+" className="bg-quantum-charcoal text-white">1000+ employees</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-quantum-cyan/50 focus:outline-none text-white resize-none"
                  placeholder="Tell us about your security needs..."
                />
              </div>

              <button
                type="submit"
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Submitting...
                  </span>
                ) : 'Request Enterprise Quote'}
              </button>
            </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
