import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description: "PASO Corp 개인정보처리방침",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black pt-32 pb-24">
        <div className="mx-auto max-w-[800px] px-6 md:px-12">
          <h1 className="text-3xl font-bold text-white mb-2">개인정보처리방침</h1>
          <p className="text-sm text-[#666] mb-12">시행일: 2025년 1월 1일</p>

          <div className="space-y-10 text-sm text-[#aaa] leading-relaxed">
            <section>
              <p>
                주식회사 파소(이하 &quot;회사&quot;)는 「개인정보 보호법」에 따라 이용자의 개인정보를 보호하고
                이와 관련한 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">제1조 (개인정보의 처리 목적)</h2>
              <p>회사는 다음의 목적을 위하여 개인정보를 처리합니다.</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li><strong className="text-white">서비스 제공:</strong> 미술품 자문, 전시 안내, 문의 접수 등</li>
                <li><strong className="text-white">회원 관리:</strong> 본인 확인, 서비스 이용 및 제한, 분쟁 조정</li>
                <li><strong className="text-white">마케팅 활용:</strong> 전시 안내, 뉴스레터 발송 (동의 시)</li>
                <li><strong className="text-white">사이트 운영:</strong> 접속 통계, 서비스 개선</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">제2조 (수집하는 개인정보 항목)</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse mt-2">
                  <thead>
                    <tr className="border-b border-[#333]">
                      <th className="text-left py-2 pr-4 text-white font-medium">구분</th>
                      <th className="text-left py-2 pr-4 text-white font-medium">수집 항목</th>
                      <th className="text-left py-2 text-white font-medium">수집 방법</th>
                    </tr>
                  </thead>
                  <tbody className="text-[#aaa]">
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4">문의 접수</td>
                      <td className="py-2 pr-4">이름, 이메일, 전화번호, 문의 내용</td>
                      <td className="py-2">웹 양식</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4">뉴스레터</td>
                      <td className="py-2 pr-4">이메일</td>
                      <td className="py-2">구독 신청</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-2 pr-4">자동 수집</td>
                      <td className="py-2 pr-4">IP 주소, 쿠키, 방문 기록, 접속 환경</td>
                      <td className="py-2">자동 생성</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">제3조 (개인정보의 보유 및 이용기간)</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>회원 탈퇴 시까지 (단, 관계 법령에 따라 보존 필요 시 해당 기간)</li>
                <li>문의 접수: 처리 완료 후 3년</li>
                <li>전자상거래 관련 기록: 5년 (전자상거래법)</li>
                <li>접속 로그: 3개월 (통신비밀보호법)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">제4조 (개인정보의 제3자 제공)</h2>
              <p>
                회사는 이용자의 개인정보를 제1조에서 명시한 목적 범위 내에서만 처리하며,
                이용자의 동의 없이 제3자에게 제공하지 않습니다.
                다만, 법령에 의한 경우는 예외로 합니다.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">제5조 (개인정보 처리의 위탁)</h2>
              <p>
                회사는 원활한 서비스 제공을 위하여 필요한 경우 개인정보 처리 업무를 외부에 위탁할 수 있으며,
                위탁 시 관련 법령에 따라 수탁자를 관리·감독합니다.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">제6조 (이용자의 권리·의무)</h2>
              <p>이용자는 다음의 권리를 행사할 수 있습니다.</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>개인정보 열람 요구</li>
                <li>오류 등이 있을 경우 정정 요구</li>
                <li>삭제 요구</li>
                <li>처리정지 요구</li>
              </ul>
              <p className="mt-2">
                위 권리 행사는 서면, 이메일 등을 통해 가능하며, 회사는 이에 대해 지체 없이 조치합니다.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">제7조 (쿠키의 사용)</h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>
                  <strong className="text-white">쿠키란?</strong> 웹사이트가 이용자의 브라우저에 저장하는 작은 텍스트 파일로,
                  이용자의 접속 환경과 이용 패턴을 분석하여 서비스를 개선하는 데 사용됩니다.
                </li>
                <li>
                  <strong className="text-white">사용 목적:</strong> 방문 빈도 분석, 서비스 이용 통계, 맞춤형 콘텐츠 제공
                </li>
                <li>
                  <strong className="text-white">쿠키 거부:</strong> 이용자는 브라우저 설정을 통해 쿠키 저장을 거부할 수 있습니다.
                  다만, 쿠키 저장을 거부할 경우 일부 서비스 이용에 어려움이 있을 수 있습니다.
                </li>
              </ol>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">제8조 (개인정보의 안전성 확보 조치)</h2>
              <p>회사는 개인정보의 안전성 확보를 위해 다음과 같은 조치를 취하고 있습니다.</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>개인정보 접근 권한 관리</li>
                <li>개인정보의 암호화</li>
                <li>접속 기록의 보관 및 위·변조 방지</li>
                <li>보안 프로그램 설치 및 주기적 갱신</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">제9조 (개인정보 보호책임자)</h2>
              <div className="bg-[#111] rounded-lg p-4 space-y-1">
                <p><strong className="text-white">개인정보 보호책임자</strong></p>
                <p>성명: 김민성</p>
                <p>직위: 대표이사</p>
                <p>연락처: +82 2 925 3631</p>
                <p>이메일: info@pasogallery.com</p>
              </div>
            </section>

            <section className="border-t border-border pt-8">
              <p className="text-[#666]">
                본 방침에 대한 문의사항은{" "}
                <Link href="/contact" className="text-white underline underline-offset-4 hover:text-[#b8960b] duration-150">
                  문의하기
                </Link>
                를 통해 연락해 주시기 바랍니다.
              </p>
              <p className="text-[#555] mt-4">
                주식회사 파소 | 사업자등록번호: 877-25-00849 | 대표: 김민성
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
