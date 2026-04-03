"use client";
import { useState } from "react";
import Link from "next/link";

interface UserInfo {
  name: string;
  email: string;
  phone: string;
}

interface OwnedArtwork {
  title: string;
  artist: string;
  purchaseDate: string;
  purchasePrice: number;
  currentPrice: number;
  currency: string;
}

const mockUser: UserInfo = {
  name: "김태린",
  email: "ktaerin_0213@naver.com",
  phone: "01032038274",
};

const mockArtworks: OwnedArtwork[] = [
  { title: "Live Forever", artist: "에밀리 매 스미스", purchaseDate: "2024.03", purchasePrice: 480000, currentPrice: 520000, currency: "KRW" },
  { title: "Dialogue", artist: "이우환", purchaseDate: "2023.11", purchasePrice: 1850000000, currentPrice: 2100000000, currency: "KRW" },
  { title: "Pumpkin", artist: "쿠사마 야요이", purchaseDate: "2024.01", purchasePrice: 2300000000, currentPrice: 2150000000, currency: "KRW" },
  { title: "Waterdrops", artist: "김창열", purchaseDate: "2023.08", purchasePrice: 1200000000, currentPrice: 1350000000, currency: "KRW" },
];

function formatPrice(price: number): string {
  if (price >= 100000000) {
    const eok = price / 100000000;
    return `₩${eok % 1 === 0 ? eok.toFixed(0) : eok.toFixed(1)}억`;
  }
  return `₩${price.toLocaleString()}`;
}

function PriceChange({ purchase, current }: { purchase: number; current: number }) {
  const diff = current - purchase;
  const pct = ((diff / purchase) * 100).toFixed(1);
  const isUp = diff > 0;
  const isDown = diff < 0;

  return (
    <div className={`flex items-center gap-1 text-sm font-semibold ${isUp ? "text-[#ef4444]" : isDown ? "text-[#4ade80]" : "text-[#888]"}`}>
      {isUp && (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l-8 8h5v8h6v-8h5z" /></svg>
      )}
      {isDown && (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 20l8-8h-5V4H9v8H4z" /></svg>
      )}
      {!isUp && !isDown && <span>—</span>}
      <span>{isUp ? "+" : ""}{pct}%</span>
    </div>
  );
}

export default function MyPage() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [editForm, setEditForm] = useState<UserInfo>({ ...mockUser });

  return (
    <div className="max-w-[1000px] mx-auto px-6 md:px-12 py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-[#111] border border-[#2a2a2a] rounded-lg text-sm text-[#888] hover:text-[#4ade80] hover:border-[#4ade80]/30 transition-all"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6" />
        </svg>
        뒤로가기
      </Link>

      <h1 className="text-3xl font-light text-white/90 mb-10" style={{ fontFamily: "var(--font-noto-serif)" }}>마이페이지</h1>

      {/* My Info - Summary */}
      <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-6 mb-10">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-normal text-white/90">내 정보</h2>
          <div className="flex items-center gap-3">
            <button
              onClick={() => { setEditForm({ ...mockUser }); setShowEditModal(true); }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#111] border border-[#2a2a2a] rounded-lg text-sm text-[#888] hover:text-[#4ade80] hover:border-[#4ade80]/30 transition-all"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 3a2.85 2.85 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
              </svg>
              수정
            </button>
            <button className="px-4 py-2 bg-[#111] border border-[#2a2a2a] rounded-lg text-sm text-[#888] hover:text-white hover:border-[#555] transition-all">
              로그아웃
            </button>
          </div>
        </div>
        <p className="text-sm text-[#888]">
          <span className="text-[#e8e8e8]">{mockUser.name}</span>
          <span className="mx-2 text-[#333]">&middot;</span>
          {mockUser.email}
        </p>
      </div>

      {/* Purchase History */}
      <div className="mb-10">
        <h2 className="text-lg font-normal text-white/90 mb-6">내 컬렉션</h2>
        <div className="space-y-4">
          {mockArtworks.map((art, i) => (
            <div key={i} className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-5 hover:border-[#2a2a2a] transition-colors">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                {/* Thumbnail */}
                <div className="w-20 h-20 shrink-0 bg-[#111] rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="1">
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="m21 15-5-5L5 21" />
                  </svg>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-medium text-[#e8e8e8]">{art.title}</h3>
                  <p className="text-xs text-[#666] mt-0.5">{art.artist}</p>
                  <p className="text-[10px] text-[#555] mt-1">구매일: {art.purchaseDate}</p>
                </div>

                {/* Prices */}
                <div className="flex items-center gap-6 md:gap-10">
                  <div className="text-right">
                    <p className="text-[10px] text-[#555] uppercase tracking-wider mb-1">구매가</p>
                    <p className="text-sm text-[#888]">{formatPrice(art.purchasePrice)}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-[#555] uppercase tracking-wider mb-1">현재 시세</p>
                    <p className="text-sm text-[#e8e8e8] font-semibold">{formatPrice(art.currentPrice)}</p>
                  </div>
                  <div className="text-right min-w-[70px]">
                    <p className="text-[10px] text-[#555] uppercase tracking-wider mb-1">변동</p>
                    <PriceChange purchase={art.purchasePrice} current={art.currentPrice} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={() => setShowEditModal(false)}>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div
            className="relative bg-[#0a0a0a] border border-[#2a2a2a] rounded-2xl w-full max-w-md p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowEditModal(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#111] border border-[#2a2a2a] text-[#888] hover:text-white transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" /><path d="m6 6 12 12" />
              </svg>
            </button>

            <h2 className="text-lg font-normal text-white/90 mb-6">내 정보 수정</h2>

            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-xs text-[#888] mb-1.5">이름</label>
                <input
                  type="text"
                  value={editForm.name}
                  onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                  className="w-full bg-[#111] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-[#e8e8e8] focus:outline-none focus:border-[#4ade80]/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-[#888] mb-1.5">이메일</label>
                <input
                  type="email"
                  value={editForm.email}
                  onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                  className="w-full bg-[#111] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-[#e8e8e8] focus:outline-none focus:border-[#4ade80]/50 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs text-[#888] mb-1.5">전화번호</label>
                <input
                  type="tel"
                  value={editForm.phone}
                  onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                  className="w-full bg-[#111] border border-[#2a2a2a] rounded-lg px-4 py-3 text-sm text-[#e8e8e8] focus:outline-none focus:border-[#4ade80]/50 transition-colors"
                />
              </div>
            </div>

            <button
              onClick={() => setShowEditModal(false)}
              className="w-full py-3 bg-[#4ade80] text-black font-semibold rounded-lg hover:bg-[#22c55e] transition-colors text-sm"
            >
              저장
            </button>

            {/* Delete Account */}
            <div className="mt-8 pt-6 border-t border-[#1a1a1a]">
              {!showDeleteConfirm ? (
                <button
                  onClick={() => setShowDeleteConfirm(true)}
                  className="text-sm text-[#ef4444]/70 hover:text-[#ef4444] transition-colors"
                >
                  회원탈퇴
                </button>
              ) : (
                <div className="bg-[#1a0a0a] border border-[#ef4444]/20 rounded-lg p-4">
                  <p className="text-sm text-[#ef4444] font-medium mb-2">정말 탈퇴하시겠습니까?</p>
                  <p className="text-xs text-[#888] mb-4">
                    탈퇴 시 모든 정보와 구매 내역이 영구적으로 삭제되며 복구할 수 없습니다.
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setShowDeleteConfirm(false)}
                      className="flex-1 py-2 bg-[#111] border border-[#2a2a2a] rounded-lg text-sm text-[#888] hover:text-white transition-colors"
                    >
                      취소
                    </button>
                    <button className="flex-1 py-2 bg-[#ef4444]/10 border border-[#ef4444]/30 rounded-lg text-sm text-[#ef4444] hover:bg-[#ef4444]/20 transition-colors">
                      탈퇴하기
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
