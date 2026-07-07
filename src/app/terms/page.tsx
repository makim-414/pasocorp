import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "이용약관",
  description: "PASO Corp 서비스 이용약관",
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black pt-32 pb-24">
        <div className="mx-auto max-w-[800px] px-6 md:px-12">
          <h1 className="text-3xl font-bold text-white mb-2">이용약관</h1>
          <p className="text-sm text-[#666] mb-12">시행일: 2025년 1월 1일</p>

          <div className="space-y-10 text-sm text-[#aaa] leading-relaxed">
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">제1조 (목적)</h2>
              <p>
                이 약관은 주식회사 파소(이하 &quot;회사&quot;)가 운영하는 웹사이트(https://pasocorp.com, 이하 &quot;사이트&quot;)에서
                제공하는 서비스의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">제2조 (정의)</h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>&quot;서비스&quot;라 함은 회사가 사이트를 통해 제공하는 미술품 자문, 갤러리 운영, 아트 컨설팅 등 일체의 서비스를 말합니다.</li>
                <li>&quot;이용자&quot;라 함은 사이트에 접속하여 이 약관에 따라 회사가 제공하는 서비스를 이용하는 자를 말합니다.</li>
                <li>&quot;회원&quot;이라 함은 회사에 개인정보를 제공하여 회원등록을 한 자로서, 회사의 서비스를 계속적으로 이용할 수 있는 자를 말합니다.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">제3조 (약관의 게시 및 변경)</h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>회사는 이 약관의 내용을 이용자가 쉽게 알 수 있도록 사이트 내에 게시합니다.</li>
                <li>회사는 관련 법령을 위반하지 않는 범위에서 이 약관을 개정할 수 있습니다.</li>
                <li>개정 약관은 적용일 7일 이전부터 사이트를 통해 공지하며, 이용자에게 불리한 변경의 경우 30일 이전에 공지합니다.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">제4조 (서비스의 제공)</h2>
              <p>회사는 다음과 같은 서비스를 제공합니다.</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>미술품 투자 자문 서비스</li>
                <li>컬렉션 관리 서비스</li>
                <li>전시 기획 서비스</li>
                <li>미술 시장 분석 서비스</li>
                <li>기타 회사가 정하는 서비스</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">제5조 (서비스 이용)</h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>서비스 이용은 회사의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴, 1일 24시간 운영을 원칙으로 합니다.</li>
                <li>회사는 시스템 점검, 교체 및 고장, 통신두절 등의 사유가 발생한 경우 서비스의 제공을 일시적으로 중단할 수 있습니다.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">제6조 (이용자의 의무)</h2>
              <p>이용자는 다음 행위를 하여서는 안 됩니다.</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>타인의 정보 도용</li>
                <li>회사가 게시한 정보의 변경</li>
                <li>회사가 정한 정보 이외의 정보(프로그램 등) 등의 송신 또는 게시</li>
                <li>회사와 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
                <li>회사 및 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
                <li>기타 불법적이거나 부당한 행위</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">제7조 (저작권의 귀속)</h2>
              <p>
                사이트에 게시된 콘텐츠(텍스트, 이미지, 영상 등)의 저작권은 회사에 귀속됩니다.
                이용자는 회사가 제공하는 서비스를 이용하여 얻은 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 등의 방법으로
                이용하거나 제3자에게 이용하게 할 수 없습니다.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">제8조 (면책조항)</h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.</li>
                <li>회사는 이용자의 귀책사유로 인한 서비스 이용의 장애에 대하여 책임을 지지 않습니다.</li>
                <li>회사는 이용자가 사이트에 게재한 정보, 자료 등의 신뢰도, 정확성에 대하여 책임을 지지 않습니다.</li>
              </ol>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-white mb-3">제9조 (분쟁해결)</h2>
              <ol className="list-decimal list-inside space-y-2">
                <li>회사와 이용자 간에 발생한 분쟁에 관한 소송은 대한민국 법을 준거법으로 합니다.</li>
                <li>회사와 이용자 간의 분쟁에 관한 소송은 서울중앙지방법원을 관할 법원으로 합니다.</li>
              </ol>
            </section>

            <section className="border-t border-border pt-8">
              <p className="text-[#666]">
                본 약관에 대한 문의사항은{" "}
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
