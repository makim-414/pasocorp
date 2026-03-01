"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import type React from "react";

const previewData: Record<string, { image: string; title: string; subtitle: string }> = {
  gallery: {
    image: "/brands/paso-gallery.jpg",
    title: "Paso Gallery",
    subtitle: "신진작가 발굴 · 전시 · 아트 MD",
  },
  artcenter: {
    image: "/brands/paso-artcenter-building.jpg",
    title: "PASO Art Center",
    subtitle: "상설전시 · 아트 살롱 · 커뮤니티",
  },
  artrader: {
    image: "/brands/artrader-platform.jpg",
    title: "Artrader",
    subtitle: "1,500만+ 거래 데이터 기반 시세 분석",
  },
  artledger: {
    image: "/brands/artledger-consulting.jpg",
    title: "Artledger Consulting",
    subtitle: "미술품 절세 · 법인 자문 · Private Sale",
  },
  agency: {
    image: "/brands/paso-agency.jpg",
    title: "Paso Agency",
    subtitle: "캐릭터 IP · B2B 아트 프로젝트",
  },
};

function HoverLink({
  previewKey,
  children,
  onHoverStart,
  onHoverMove,
  onHoverEnd,
}: {
  previewKey: string;
  children: React.ReactNode;
  onHoverStart: (key: string, e: React.MouseEvent) => void;
  onHoverMove: (e: React.MouseEvent) => void;
  onHoverEnd: () => void;
}) {
  return (
    <span
      className="hp-hover-link"
      onMouseEnter={(e) => onHoverStart(previewKey, e)}
      onMouseMove={onHoverMove}
      onMouseLeave={onHoverEnd}
    >
      {children}
    </span>
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
  const [activePreview, setActivePreview] = useState<{ image: string; title: string; subtitle: string } | null>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    Object.values(previewData).forEach((data) => {
      const img = new Image();
      img.src = data.image;
    });
  }, []);

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
          color: #888;
          font-weight: 300;
          letter-spacing: -0.01em;
          max-width: 520px;
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
          <p>
            어떤 작품이 좋을까? <HoverLink {...linkProps("gallery")}>파소 갤러리</HoverLink>에서 검증된 신진작가의 작품을 직접 만나보세요. 더 넓은 시야가 필요하다면, <HoverLink {...linkProps("artcenter")}>PASO Art Center</HoverLink>의 상설전에서 국내외 이머징 작가들의 흐름을 한눈에 읽을 수 있습니다.
          </p>
          <p>
            마음에 드는 작품을 찾았다면, <HoverLink {...linkProps("artrader")}>Artrader</HoverLink>에서 1,500만 건의 거래 데이터로 실거래가와 적정 매입가를 확인하세요. 매입 후 세금 처리와 절세 전략은 <HoverLink {...linkProps("artledger")}>Artledger Consulting</HoverLink>이 설계합니다. 법인 컬렉션 구축부터 Private Sale까지, 미술 자산의 모든 여정을 PASO가 함께합니다.
          </p>
        </div>
      </div>
      <PreviewCard data={activePreview} position={position} isVisible={isVisible} cardRef={cardRef} />
    </>
  );
}
