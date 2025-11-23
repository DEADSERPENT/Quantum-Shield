import Link from 'next/link';
import Header from '@/components/Header';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';
import { getAllPosts } from '@/lib/blog';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="bg-quantum-black min-h-screen">
      <Header />
      <PageHero
        title="Blog"
        subtitle="Insights on quantum security and cryptography"
        badge="Latest Updates"
      />

      <section className="section-padding">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="glass-card p-8 hover:scale-[1.02] hover:border-quantum-cyan/50 transition-all duration-300 cursor-pointer group block"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-quantum-cyan/10 text-quantum-cyan border border-quantum-cyan/30">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.readTime}</span>
                </div>
                <h2 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-quantum-cyan transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-400 mb-4 leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-500">
                    <div className="w-6 h-6 rounded-full bg-quantum-cyan/20 border border-quantum-cyan/30 flex items-center justify-center">
                      <span className="text-[10px] text-quantum-cyan font-bold">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <span className="text-quantum-cyan group-hover:translate-x-2 transition-transform inline-flex items-center gap-1">
                    Read more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
