'use client';

import { useEffect, useRef } from 'react';

type ScrollHeroProps = {
  items?: string[];
  hue?: number;
  startVh?: number;
  spaceVh?: number;
};

const PASO_WORDS = [
  'Find Art.',
  'Analyze Art.',
  'Curate Art.',
  'Exhibit Art.',
  'Trade Art.',
  'Grow Art.',
];

export default function ScrollHeroSection({
  items = PASO_WORDS,
  hue = 45,
  startVh = 50,
  spaceVh = 50,
}: ScrollHeroProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    el.style.setProperty('--scroll-hue', String(hue));
    el.style.setProperty('--scroll-start', `${startVh}vh`);
    el.style.setProperty('--scroll-space', `${spaceVh}vh`);
  }, [hue, startVh, spaceVh]);

  return (
    <div
      ref={wrapperRef}
      className="scroll-hero-wrapper"
      data-animate="true"
      style={{ '--scroll-count': items.length } as React.CSSProperties}
    >
      <header className="scroll-hero-header scroll-fluid">
        <section className="scroll-hero-header-inner">
          <h2 className="scroll-hero-h2">
            <span aria-hidden="true">we&nbsp;</span>
            <span className="scroll-hero-sr-only">we help you grow.</span>
          </h2>
          <ul aria-hidden="true">
            {items.map((word, i) => (
              <li key={i} style={{ '--i': i } as React.CSSProperties}>
                {word}
              </li>
            ))}
          </ul>
        </section>
      </header>

      <style jsx global>{`
        .scroll-hero-wrapper {
          --scroll-start: 45vh;
          --scroll-space: 55vh;
          --scroll-hue: 45;
          --scroll-accent: hsl(var(--scroll-hue) 80% 55%);
          --scroll-font-size-min: 16;
          --scroll-font-size-max: 20;
          --scroll-font-ratio-min: 1.1;
          --scroll-font-ratio-max: 1.33;
          --scroll-font-width-min: 375;
          --scroll-font-width-max: 1500;
          position: relative;
          width: 100%;
          background: black;
          z-index: 0;
        }

        @media (min-width: 768px) {
          .scroll-hero-wrapper {
            --scroll-start: 55vh;
            --scroll-space: 65vh;
          }
        }

        .scroll-fluid {
          --fluid-min: calc(var(--scroll-font-size-min) * pow(var(--scroll-font-ratio-min), var(--scroll-font-level, 0)));
          --fluid-max: calc(var(--scroll-font-size-max) * pow(var(--scroll-font-ratio-max), var(--scroll-font-level, 0)));
          --fluid-preferred: calc((var(--fluid-max) - var(--fluid-min)) / (var(--scroll-font-width-max) - var(--scroll-font-width-min)));
          --fluid-type: clamp(
            calc((var(--fluid-min) / 16) * 1rem),
            calc(((var(--fluid-min) / 16) * 1rem)
              - (((var(--fluid-preferred) * var(--scroll-font-width-min)) / 16) * 1rem)
              + (var(--fluid-preferred) * 100vi)),
            calc((var(--fluid-max) / 16) * 1rem)
          );
          font-size: var(--fluid-type);
        }

        .scroll-hero-sr-only {
          position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
          overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0;
        }

        .scroll-hero-header {
          --scroll-font-level: 4;
          --scroll-font-size-min: 20;
          position: sticky;
          top: calc((var(--scroll-count) - 1) * -1lh);
          line-height: 1.3;
          display: flex;
          align-items: start;
          width: 100%;
          margin-bottom: var(--scroll-space);
          padding: 0 1rem;
          z-index: 1;
        }

        @media (min-width: 768px) {
          .scroll-hero-header {
            --scroll-font-size-min: 24;
            line-height: 1.2;
            padding: 0;
          }
        }

        .scroll-hero-header-inner {
          display: flex;
          width: 100%;
          align-items: start;
          justify-content: center;
          padding-top: calc(var(--scroll-start) - 0.5lh);
        }

        .scroll-hero-h2 {
          position: sticky;
          top: calc(var(--scroll-start) - 0.5lh);
          margin: 0;
          font-family: var(--font-dutch);
          font-weight: 400;
          color: white;
        }

        .scroll-hero-wrapper ul {
          font-family: var(--font-dutch);
          font-weight: 400;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .scroll-hero-wrapper li {
          --dimmed: color-mix(in oklch, white, transparent 80%);
          color: color-mix(in oklch, white, transparent 40%);
        }

        @media (min-width: 768px) {
          .scroll-hero-wrapper li {
            background:
              linear-gradient(
                180deg,
                var(--dimmed) 0 calc(var(--scroll-start) - 0.5lh),
                var(--scroll-accent) calc(var(--scroll-start) - 0.55lh) calc(var(--scroll-start) + 0.55lh),
                var(--dimmed) calc(var(--scroll-start) + 0.5lh)
              );
            background-attachment: fixed;
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }
        }

        /* Grid background */
        .scroll-hero-wrapper::before {
          --size: 45px;
          --line: color-mix(in hsl, white, transparent 85%);
          content: '';
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background:
            linear-gradient(90deg, var(--line) 1px, transparent 1px var(--size))
              calc(var(--size) * 0.36) 50% / var(--size) var(--size),
            linear-gradient(var(--line) 1px, transparent 1px var(--size))
              0% calc(var(--size) * 0.32) / var(--size) var(--size);
          mask: linear-gradient(-20deg, transparent 50%, white);
        }
      `}</style>
    </div>
  );
}
