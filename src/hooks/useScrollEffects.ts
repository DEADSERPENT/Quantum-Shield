'use client';

import { useEffect, useRef, useState } from 'react';

export function useScrollReveal<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return { ref, isVisible };
}

export function useParallax<T extends HTMLElement = HTMLElement>(speed: number = 0.5) {
  const ref = useRef<T>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let ticking = false;

    const updateOffset = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const elementTop = rect.top + scrolled;
      const windowHeight = window.innerHeight;

      if (scrolled + windowHeight > elementTop && scrolled < elementTop + rect.height) {
        setOffset((scrolled - elementTop + windowHeight) * speed);
      }
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateOffset();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateOffset();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { ref, offset };
}
