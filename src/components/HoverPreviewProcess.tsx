"use client";

import { useState, useCallback, useRef, useEffect, useMemo } from "react";
import type React from "react";
import { useLocale } from "@/i18n/LocaleProvider";

function HoverLink({
  previewKey,
  children,
  previewData,
  onHoverStart,
  onHoverMove,
  onHoverEnd,
}: {
  previewKey: string;
  children: React.ReactNode;
  previewData: Record<string, { image: string; title: string; subtitle: string; href: string }>;
  onHoverStart: (key: string, e: React.MouseEvent) => void;
  onHoverMove: (e: React.MouseEvent) => void;
  onHoverEnd: () => void;
}) {
  const data = previewData[previewKey];
  const isExternal = data?.href?.startsWith("http");
  return (
    <a
      href={data?.href || "#"}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="hp-hover-link"
      onMouseEnter={(e) => onHoverStart(previewKey, e)}
      onMouseMove={onHoverMove}
      onMouseLeave={onHoverEnd}
    >
      {children}
    </a>
  );
}

function PreviewCard({
  data,
  position,
  isVisible,
  cardRef,
}: {
  data: { image: string; title: string; subtitle: string } | null;
  position: { x: number; y: number };
  isVisible: boolean;
  cardRef: React.RefObject<HTMLDivElement | null>;
}) {
  if (!data) return null;
  return (
    <div
      ref={cardRef}
      className={`hp-preview-card ${isVisible ? "hp-visible" : ""}`}
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      <div className="hp-preview-card-inner">
        <img src={data.image} alt={data.title} />
        <div className="hp-preview-card-title">{data.title}</div>
        <div className="hp-preview-card-subtitle">{data.subtitle}</div>
      </div>
    </div>
  );
}

export default function HoverPreviewProcess() {
  const { t, locale } = useLocale();
  const [activePreview, setActivePreview] = useState<{ image: string; title: string; subtitle: string } | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const previewData: Record<string, { image: string; title: string; subtitle: string; href: string }> = useMemo(() => ({
    gallery: { image: "/brands/paso-gallery.png", title: "Paso Gallery", subtitle: t("hpp.gallery.subtitle"), href: "https://pasogallery.com" },
    artcenter: { image: "/brands/paso-artcenter-building.jpg", title: "PASO Art Center", subtitle: t("hpp.artcenter.subtitle"), href: "/brands/paso-art-center" },
    artrader: { image: "/brands/artrader-platform-hd.png", title: "Artrader", subtitle: t("hpp.artrader.subtitle"), href: "https://artrader.io" },
    artledger: { image: "/brands/artledger-consulting.jpg", title: "Artledger Consulting", subtitle: t("hpp.artledger.subtitle"), href: "/brands/artledger-consulting" },
    agency: { image: "/images/projects/twosome/twosome-5.jpg", title: "Paso Agency", subtitle: t("hpp.agency.subtitle"), href: "/brands/paso-agency" },
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [locale]);

  useEffect(() => {
    Object.values(previewData).forEach((data) => {
      const img = new Image();
      img.src = data.image;
    });
  }, [previewData]);

  const updatePosition = useCallback((e: React.MouseEvent) => {
    const cardWidth = 300;
    const cardHeight = 250;
    const offsetY = 20;
    let x = e.clientX - cardWidth / 2;
    let y = e.clientY - cardHeight - offsetY;
    if (x + cardWidth > window.innerWidth - 20) x = window.innerWidth - cardWidth - 20;
    if (x < 20) x = 20;
    if (y < 20) y = e.clientY + offsetY;
    setPosition({ x, y });
  }, []);

  const handleHoverStart = useCallback((key: string, e: React.MouseEvent) => {
    setActivePreview(previewData[key]);
    setIsVisible(true);
    updatePosition(e);
  }, [updatePosition]);

  const handleHoverMove = useCallback((e: React.MouseEvent) => {
    if (isVisible) updatePosition(e);
  }, [isVisible, updatePosition]);

  const handleHoverEnd = useCallback(() => {
    setIsVisible(false);
  }, []);

  const linkProps = (key: string) => ({
    previewKey: key,
    previewData,
    onHoverStart: handleHoverStart,
    onHoverMove: handleHoverMove,
    onHoverEnd: handleHoverEnd,
  });

  return (
    <>
      <style>{`
        .hp-process-section {
          position: relative;
        }
        .hp-text-block {
          font-size: clamp(1.1rem, 2.5vw, 1.5rem);
          line-height: 1.8;
          color: #9a9a9a;
          font-weight: 300;
          letter-spacing: -0.01em;
          max-width: 900px;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .hp-text-block p {
          margin-bottom: 1.2em;
        }
        .hp-hover-link {
          color: #fff;
          font-weight: 600;
          cursor: pointer;
          position: relative;
          display: inline-block;
          transition: color 0.3s ease;
        }
        .hp-hover-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1.5px;
          background: #b8960b;
          transition: width 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .hp-hover-link:hover::after {
          width: 100%;
        }
        .hp-hover-link:hover {
          color: #b8960b;
        }
        .hp-preview-card {
          position: fixed;
          pointer-events: none;
          z-index: 1000;
          opacity: 0;
          transform: translateY(10px) scale(0.95);
          transition: opacity 0.25s ease, transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
          will-change: transform, opacity;
        }
        .hp-preview-card.hp-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .hp-preview-card-inner {
          background: #1a1a1a;
          border-radius: 12px;
          padding: 6px;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.08);
          overflow: hidden;
        }
        .hp-preview-card img {
          width: 280px;
          height: 160px;
          object-fit: cover;
          border-radius: 8px;
          display: block;
        }
        .hp-preview-card-title {
          padding: 10px 8px 4px;
          font-size: 0.85rem;
          color: #fff;
          font-weight: 600;
        }
        .hp-preview-card-subtitle {
          padding: 0 8px 8px;
          font-size: 0.72rem;
          color: #666;
        }
      `}</style>
      <div className="hp-process-section mt-8">
        <div className="hp-text-block">
          {locale === "en" ? (
            <>
              <p>
                We discover emerging artists at <HoverLink {...linkProps("gallery")}>Paso Gallery</HoverLink>, a Seoul hanok that also hosts private sales and rentals, and present 70+ blue-chip works at <HoverLink {...linkProps("artcenter")}>PASO Art Center</HoverLink>.
              </p>
              <p>
                <HoverLink {...linkProps("artrader")}>Artrader</HoverLink> calculates fair prices from 15M+ auction records, and <HoverLink {...linkProps("artledger")}>Artledger Consulting</HoverLink> advises on tax and corporate-collection strategy. <HoverLink {...linkProps("agency")}>Paso Agency</HoverLink> designs sustainable IP value for both brands and artists.
              </p>
            </>
          ) : (
            <>
              <p>
                <HoverLink {...linkProps("gallery")}>Paso Gallery</HoverLink>에서 신진 작가를 발굴하고(프라이빗 세일·공간 대관 운영), <HoverLink {...linkProps("artcenter")}>PASO Art Center</HoverLink>에서 블루칩 작품 70여 점을 상시 전시합니다.
              </p>
              <p>
                <HoverLink {...linkProps("artrader")}>Artrader</HoverLink>의 1,500만 건 옥션 데이터로 적정가를 산출하고, <HoverLink {...linkProps("artledger")}>Artledger Consulting</HoverLink>이 절세와 법인 컬렉션 운용을 자문합니다. <HoverLink {...linkProps("agency")}>Paso Agency</HoverLink>는 브랜드와 작가 양측의 IP 가치를 설계합니다.
              </p>
            </>
          )}
        </div>
      </div>
      <PreviewCard data={activePreview} position={position} isVisible={isVisible} cardRef={cardRef} />
    </>
  );
}
