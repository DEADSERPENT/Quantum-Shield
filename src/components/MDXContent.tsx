'use client';

import React from 'react';

interface MDXContentProps {
  content: string;
}

export function MDXContent({ content }: MDXContentProps) {
  const lines = content.split('\n');
  const elements: React.ReactElement[] = [];
  let inCodeBlock = false;
  let codeLines: string[] = [];
  let codeLanguage = '';

  lines.forEach((line, idx) => {
    // Handle code blocks
    if (line.startsWith('```')) {
      if (!inCodeBlock) {
        inCodeBlock = true;
        codeLanguage = line.substring(3);
        codeLines = [];
      } else {
        inCodeBlock = false;
        elements.push(
          <div key={`code-${idx}`} className="my-6">
            <div className="bg-black/50 border border-white/10 rounded-lg overflow-hidden">
              <div className="bg-white/5 px-4 py-2 border-b border-white/10">
                <span className="text-xs font-mono text-gray-400">{codeLanguage || 'code'}</span>
              </div>
              <pre className="p-5 overflow-x-auto">
                <code className="text-sm font-mono text-gray-300">{codeLines.join('\n')}</code>
              </pre>
            </div>
          </div>
        );
      }
      return;
    }

    if (inCodeBlock) {
      codeLines.push(line);
      return;
    }

    // Headings
    if (line.startsWith('# ')) {
      elements.push(<h1 key={idx} className="text-4xl font-bold text-white mt-10 mb-4 first:mt-0">{line.substring(2)}</h1>);
    } else if (line.startsWith('## ')) {
      elements.push(<h2 key={idx} className="text-3xl font-bold text-white mt-10 mb-4">{line.substring(3)}</h2>);
    } else if (line.startsWith('### ')) {
      elements.push(<h3 key={idx} className="text-2xl font-bold text-quantum-cyan mt-8 mb-3">{line.substring(4)}</h3>);
    } else if (line.startsWith('#### ')) {
      elements.push(<h4 key={idx} className="text-xl font-semibold text-white mt-6 mb-2">{line.substring(5)}</h4>);
    }
    // Bold list items
    else if (line.startsWith('- **') && line.includes('**')) {
      const match = line.match(/- \*\*(.+?)\*\*(.+)?/);
      if (match) {
        elements.push(
          <li key={idx} className="ml-6 mb-2.5 flex items-start gap-2">
            <span className="text-quantum-cyan mt-1.5 text-xs">●</span>
            <span>
              <strong className="text-quantum-cyan font-semibold">{match[1]}</strong>
              <span className="text-gray-300">{match[2] || ''}</span>
            </span>
          </li>
        );
      }
    }
    // Regular list items
    else if (line.startsWith('- ')) {
      elements.push(
        <li key={idx} className="ml-6 mb-2.5 flex items-start gap-2">
          <span className="text-quantum-cyan mt-1.5 text-xs">●</span>
          <span className="text-gray-300">{line.substring(2)}</span>
        </li>
      );
    }
    // Numbered lists
    else if (line.match(/^\d+\. /)) {
      const num = line.match(/^(\d+)\./)?.[1];
      elements.push(
        <li key={idx} className="ml-6 mb-2.5 flex items-start gap-3">
          <span className="text-quantum-cyan font-semibold min-w-[1.5rem]">{num}.</span>
          <span className="text-gray-300 flex-1">{line.substring(line.indexOf('. ') + 2)}</span>
        </li>
      );
    }
    // Bold standalone text
    else if (line.startsWith('**') && line.endsWith('**')) {
      elements.push(<p key={idx} className="font-bold text-white mt-6 mb-3 text-lg">{line.replace(/\*\*/g, '')}</p>);
    }
    // Empty lines
    else if (line.trim() === '') {
      elements.push(<div key={idx} className="h-4" />);
    }
    // Regular paragraphs
    else if (line.trim()) {
      // Handle inline bold
      const formattedLine = line.replace(/\*\*(.+?)\*\*/g, '<strong class="text-quantum-cyan font-semibold">$1</strong>');
      elements.push(
        <p
          key={idx}
          className="mb-4 text-gray-300 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: formattedLine }}
        />
      );
    }
  });

  return <div className="text-gray-300 leading-relaxed">{elements}</div>;
}
