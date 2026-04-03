"use client";
import { useState } from "react";
import Link from "next/link";

interface UserInfo {
  name: string;
  email: string;
  phone: string;
}

const mockUser: UserInfo = {
  name: "김태린",
  email: "ktaerin_0213@naver.com",
  phone: "01032038274",
};

export default function UserPage() {
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [editForm, setEditForm] = useState<UserInfo>({ ...mockUser });

  return (
    <div className="max-w-[1000px] mx-auto px-6 md:px-12 py-12">
      <h1
        className="text-3xl md:text-4xl font-light text-white/90 text-center mb-12"
        style={{ fontFamily: "var(--font-noto-serif)" }}
      >
        마이페이지
      </h1>

      {/* My Info - Title + Edit button only, no personal info exposed */}
      <div className="flex items-center justify-between py-6 border-b border-[#1a1a1a]">
        <h2 className="text-lg font-normal text-white/90">내 정보</h2>
        <div className="flex items-center gap-3">
          <button
            onClick={() => { setEditForm({ ...mockUser }); setShowModal(true); setIsEditing(false); setShowDeleteConfirm(false); }}
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

      {/* Modal: View / Edit info + Delete account */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={() => { setShowModal(false); setIsEditing(false); }}>
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
          <div
            className="relative bg-[#0a0a0a] border border-[#2a2a2a] rounded-2xl w-full max-w-md p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => { setShowModal(false); setIsEditing(false); }}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#111] border border-[#2a2a2a] text-[#888] hover:text-white transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 6 6 18" /><path d="m6 6 12 12" />
              </svg>
            </button>

            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-normal text-white/90">내 정보</h2>
              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="text-xs text-[#4ade80] hover:text-[#22c55e] transition-colors"
                >
                  편집
                </button>
              )}
            </div>

            {!isEditing ? (
              /* View mode */
              <div className="space-y-4 mb-6">
                {[
                  { label: "이름", value: mockUser.name },
                  { label: "이메일", value: mockUser.email },
                  { label: "전화번호", value: mockUser.phone },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between py-2 border-b border-[#1a1a1a]">
                    <span className="text-sm text-[#888]">{row.label}</span>
                    <span className="text-sm text-[#e8e8e8]">{row.value}</span>
                  </div>
                ))}
              </div>
            ) : (
              /* Edit mode */
              <>
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
                  onClick={() => setIsEditing(false)}
                  className="w-full py-3 bg-[#4ade80] text-black font-semibold rounded-lg hover:bg-[#22c55e] transition-colors text-sm"
                >
                  저장
                </button>
              </>
            )}

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
