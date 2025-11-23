'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setStatus('success');
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', company: '', subject: '', message: '' });
    setStatus('idle');
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      value: 'sales@quantumshield.io',
      link: 'mailto:sales@quantumshield.io',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      value: '+91 80 4567 8900',
      link: 'tel:+918045678900',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Office',
      value: 'Bengaluru, Karnataka, India',
      link: '#',
    },
  ];

  return (
    <main className="bg-quantum-black min-h-screen">
      <Header />
      <PageHero
        title="Get in Touch"
        subtitle="Have questions? We're here to help."
        badge="24/7 Support"
      />

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Methods */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-display font-bold mb-6">Contact Information</h3>
                <p className="text-gray-400">
                  Reach out to our team for sales inquiries, technical support, or partnership opportunities.
                </p>
              </div>

              <div className="space-y-6">
                {contactMethods.map((method) => (
                  <a
                    key={method.title}
                    href={method.link}
                    className="glass-card p-6 flex items-start gap-4 hover:scale-105 transition-transform group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-quantum-cyan/10 border border-quantum-cyan/30 flex items-center justify-center text-quantum-cyan group-hover:scale-110 transition-transform">
                      {method.icon}
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">{method.title}</div>
                      <div className="text-white font-medium">{method.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="glass-card p-6">
                <div className="text-sm text-gray-500 mb-4">Follow Us</div>
                <div className="flex gap-4">
                  {/* Twitter/X */}
                  <a
                    href="https://twitter.com/quantumshield"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Twitter"
                    className="group w-12 h-12 rounded-xl bg-gradient-to-br from-quantum-cyan/10 to-quantum-violet/10 hover:from-quantum-cyan/20 hover:to-quantum-violet/20 border border-white/10 hover:border-quantum-cyan/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-quantum-cyan/20"
                  >
                    <svg className="w-5 h-5 text-quantum-cyan group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com/company/quantumshield"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on LinkedIn"
                    className="group w-12 h-12 rounded-xl bg-gradient-to-br from-quantum-cyan/10 to-quantum-violet/10 hover:from-quantum-cyan/20 hover:to-quantum-violet/20 border border-white/10 hover:border-quantum-violet/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-quantum-violet/20"
                  >
                    <svg className="w-5 h-5 text-quantum-violet group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/quantumshield"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on GitHub"
                    className="group w-12 h-12 rounded-xl bg-gradient-to-br from-quantum-cyan/10 to-quantum-violet/10 hover:from-quantum-cyan/20 hover:to-quantum-violet/20 border border-white/10 hover:border-quantum-cyan/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-quantum-cyan/20"
                  >
                    <svg className="w-5 h-5 text-quantum-cyan group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="glass-card p-8 md:p-12">
                <h3 className="text-2xl font-display font-bold mb-6">Send us a Message</h3>

                {status === 'success' ? (
                  <div className="text-center py-12" role="status" aria-live="polite">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center" aria-hidden="true">
                      <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-white mb-2">Message Sent!</h4>
                    <p className="text-gray-400 mb-6">We&apos;ll get back to you within 24 hours via secure channel.</p>
                    <button
                      onClick={resetForm}
                      className="text-quantum-cyan hover:text-quantum-cyan-glow transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-gray-400 mb-2">
                        Name <span aria-hidden="true">*</span>
                        <span className="sr-only">(required)</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        aria-required="true"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-quantum-cyan/50 focus:outline-none focus:ring-2 focus:ring-quantum-cyan/20 text-white placeholder-gray-600 transition-colors"
                        placeholder="Amit Kumar"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-gray-400 mb-2">
                        Email <span aria-hidden="true">*</span>
                        <span className="sr-only">(required)</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        aria-required="true"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-quantum-cyan/50 focus:outline-none focus:ring-2 focus:ring-quantum-cyan/20 text-white placeholder-gray-600 transition-colors"
                        placeholder="amit.kumar@company.in"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="contact-company" className="block text-sm font-medium text-gray-400 mb-2">
                        Company
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-quantum-cyan/50 focus:outline-none focus:ring-2 focus:ring-quantum-cyan/20 text-white placeholder-gray-600 transition-colors"
                        placeholder="TechCorp India Pvt Ltd"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-400 mb-2">
                        Subject <span aria-hidden="true">*</span>
                        <span className="sr-only">(required)</span>
                      </label>
                      <select
                        id="contact-subject"
                        required
                        aria-required="true"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-quantum-charcoal border border-white/10 focus:border-quantum-cyan/50 focus:outline-none focus:ring-2 focus:ring-quantum-cyan/20 text-white appearance-none cursor-pointer hover:border-quantum-cyan/30 transition-colors"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                          backgroundPosition: 'right 0.5rem center',
                          backgroundRepeat: 'no-repeat',
                          backgroundSize: '1.5em 1.5em',
                          paddingRight: '2.5rem'
                        }}
                      >
                        <option value="" className="bg-quantum-charcoal text-gray-400">Select a topic</option>
                        <option value="sales" className="bg-quantum-charcoal text-white">Sales Inquiry</option>
                        <option value="support" className="bg-quantum-charcoal text-white">Technical Support</option>
                        <option value="partnership" className="bg-quantum-charcoal text-white">Partnership</option>
                        <option value="other" className="bg-quantum-charcoal text-white">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-gray-400 mb-2">
                      Message <span aria-hidden="true">*</span>
                      <span className="sr-only">(required)</span>
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      aria-required="true"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-quantum-cyan/50 focus:outline-none focus:ring-2 focus:ring-quantum-cyan/20 text-white placeholder-gray-600 transition-colors resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full md:w-auto px-12 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={status === 'submitting'}
                    aria-busy={status === 'submitting'}
                  >
                    {status === 'submitting' ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </span>
                    ) : 'Send Message'}
                  </button>
                </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
