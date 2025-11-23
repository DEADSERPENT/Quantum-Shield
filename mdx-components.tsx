import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold text-white mt-10 mb-4 first:mt-0">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold text-white mt-10 mb-4">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-bold text-quantum-cyan mt-8 mb-3">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-semibold text-white mt-6 mb-2">{children}</h4>
    ),
    p: ({ children }) => (
      <p className="mb-4 text-gray-300 leading-relaxed">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="mb-4 space-y-2">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-4 space-y-2 list-decimal list-inside">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="ml-6 flex items-start gap-2 text-gray-300">
        <span className="text-quantum-cyan mt-1.5 text-xs">●</span>
        <span>{children}</span>
      </li>
    ),
    strong: ({ children }) => (
      <strong className="text-quantum-cyan font-semibold">{children}</strong>
    ),
    code: ({ children }) => (
      <code className="bg-black/50 px-2 py-0.5 rounded text-sm font-mono text-quantum-cyan">{children}</code>
    ),
    pre: ({ children }) => (
      <div className="my-6">
        <div className="bg-black/50 border border-white/10 rounded-lg overflow-hidden">
          <div className="bg-white/5 px-4 py-2 border-b border-white/10">
            <span className="text-xs font-mono text-gray-400">code</span>
          </div>
          <pre className="p-5 overflow-x-auto text-sm font-mono text-gray-300">{children}</pre>
        </div>
      </div>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-quantum-cyan pl-4 my-4 italic text-gray-400">
        {children}
      </blockquote>
    ),
    a: ({ href, children }) => (
      <a href={href} className="text-quantum-cyan hover:text-quantum-cyan-glow underline transition-colors">
        {children}
      </a>
    ),
    ...components,
  };
}
