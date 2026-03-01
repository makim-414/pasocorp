'use client';

import { useEffect } from 'react';

type ScrollHeroProps = {
  items?: string[];
  hue?: number;
  startVh?: number;
  spaceVh?: number;
};

const PASO_WORDS = [
  'Find.',
  'Analyze.',
  'Curate.',
  'Exhibit.',
  'Evaluate.',
  'Trade.',
  'Consult.',
  'Connect.',
  'Invest.',
  'Grow.',
];

export default function ScrollHeroSection({
  items = PASO_WORDS,
  hue = 45,
  startVh = 50,
  spaceVh = 50,
}: ScrollHeroProps) {
  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = 'dark';
    root.dataset.animate = 'true';
    root.style.setProperty('--scroll-hue', String(hue));
    root.style.setProperty('--scroll-start', `${startVh}vh`);
    root.style.setProperty('--scroll-space', `${spaceVh}vh`);
    return () => {
      delete root.dataset.theme;
      delete root.dataset.animate;
    };
  }, [hue, startVh, spaceVh]);

  return (
    <div
      className="scroll-hero-wrapper"
      style={{ '--scroll-count': items.length } as React.CSSProperties}
    >
      <header className="scroll-hero-header scroll-fluid">
        <section className="scroll-hero-header-inner">
          <h2 className="scroll-hero-sr-only sm:not-sr-only">
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

      <main className="scroll-hero-main">
        <section>
          <p className="scroll-fluid">
            Art meets strategy.<br />
            <a href="#services">Discover PASO →</a>
          </p>
        </section>
      </main>

      <style jsx global>{`
        /* ===== Scroll Hero Section (scoped via .scroll-hero-wrapper) ===== */

        .scroll-hero-wrapper {
          --scroll-start: 50vh;
          --scroll-space: 50vh;
          --scroll-hue: 45;
          --scroll-accent: hsl(var(--scroll-hue) 80% 55%);
          --scroll-font-size-min: 14;
          --scroll-font-size-max: 20;
          --scroll-font-ratio-min: 1.1;
          --scroll-font-ratio-max: 1.33;
          --scroll-font-width-min: 375;
          --scroll-font-width-max: 1500;
          width: 100%;
          background: black;
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

        /* Sticky header */
        .scroll-hero-header {
          --scroll-font-level: 4;
          --scroll-font-size-min: 24;
          position: sticky;
          top: calc((var(--scroll-count) - 1) * -1lh);
          line-height: 1.2;
          display: flex;
          align-items: start;
          width: 100%;
          margin-bottom: var(--scroll-space);
        }

        .scroll-hero-header-inner {
          display: flex;
          width: 100%;
          align-items: start;
          justify-content: center;
          padding-top: calc(var(--scroll-start) - 0.5lh);
        }

        .scroll-hero-header-inner h2 {
          position: sticky;
          top: calc(var(--scroll-start) - 0.5lh);
          margin: 0;
          font-weight: 600;
          color: white;
        }

        .scroll-hero-wrapper ul {
          font-weight: 600;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .scroll-hero-wrapper li {
          --dimmed: color-mix(in oklch, white, transparent 80%);
          background:
            linear-gradient(
              180deg,
              var(--dimmed) 0 calc(var(--scroll-start) - 0.5lh),
              var(--scroll-accent) calc(var(--scroll-start) - 0.55lh) calc(var(--scroll-start) + 0.55lh),
              var(--dimmed) calc(var(--scroll-start) + 0.5lh)
            );
          background-attachment: fixed;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
        }

        /* Bottom section */
        .scroll-hero-main {
          width: 100%;
          height: 100vh;
          position: relative;
          z-index: 1;
          color: black;
        }

        .scroll-hero-main::before {
          content: '';
          position: absolute;
          inset: 0;
          z-index: -1;
          background: #b8960b;
          border-radius: 1rem 1rem 0 0;
        }

        .scroll-hero-main section {
          --scroll-font-level: 4;
          --scroll-font-size-min: 20;
          height: 100%;
          width: 100%;
          display: flex;
          place-items: center;
          justify-content: center;
        }

        .scroll-hero-main section p {
          margin: 0;
          font-weight: 600;
          white-space: nowrap;
          color: black;
          text-align: center;
        }

        .scroll-hero-main section a {
          color: black;
          text-decoration: none;
          text-underline-offset: 0.1lh;
        }

        .scroll-hero-main section a:is(:hover, :focus-visible) {
          text-decoration: underline;
        }

        /* View-timeline animation */
        @supports (animation-timeline: view()) {
          [data-animate='true'] .scroll-hero-main {
            view-timeline: --scroll-section;
          }
          [data-animate='true'] .scroll-hero-main::before {
            transform-origin: 50% 100%;
            scale: 0.9;
            animation: scrollHeroGrow both ease-in-out;
            animation-timeline: --scroll-section;
            animation-range: entry 50%;
          }
          [data-animate='true'] .scroll-hero-main section p {
            position: fixed;
            top: 50%;
            left: 50%;
            translate: -50% -50%;
            animation: scrollHeroReveal both ease-in-out;
            animation-timeline: --scroll-section;
            animation-range: entry 50%;
          }
          @keyframes scrollHeroReveal { from { opacity: 0; } to { opacity: 1; } }
          @keyframes scrollHeroGrow { to { scale: 1; border-radius: 0; } }
        }

        /* Grid background for this section */
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

        .scroll-hero-wrapper {
          position: relative;
          isolation: isolate;
        }
      `}</style>
    </div>
  );
}
