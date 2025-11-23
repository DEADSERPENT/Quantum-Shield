import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import PageHero from '@/components/PageHero';
import Footer from '@/components/Footer';
import { getPostBySlug, getAllPostSlugs } from '@/lib/blog';
import { MDXContent } from '@/components/MDXContent';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: `${post.title} | QuantumShield Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-quantum-black min-h-screen">
      <Header />
      <PageHero
        title={post.title}
        subtitle={`By ${post.author} • ${post.readTime}`}
        badge={post.category}
      />

      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <Link
            href="/blog"
            className="mb-8 flex items-center gap-2 text-quantum-cyan hover:text-quantum-cyan-glow transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all posts
          </Link>

          <div className="glass-card p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6 text-sm text-gray-500">
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span>{post.author}</span>
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <MDXContent content={post.content} />
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-quantum-cyan/20 to-quantum-violet/20 border border-quantum-cyan/30 flex items-center justify-center">
                    <span className="text-quantum-cyan font-bold">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{post.author}</p>
                    <p className="text-sm text-gray-500">QuantumShield Team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
