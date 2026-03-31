import { DashboardToggle } from './components/DashboardToggle';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      <div className="max-w-[1100px] mx-auto px-8 py-16">
        {/* Main Title Section */}
        <h1 className="text-[26px] font-bold text-[#222222] mb-6 leading-[1.4]">
          의·한 협진 의료인 대상 만족도 요구도 조사연구
        </h1>

        {/* Description Paragraph */}
        <div className="mb-8 space-y-5 text-[15px] text-[#555555] leading-[1.8]">
          <p>
            의·한 협진 의료인 대상 만족도 요구도 조사연구는 의·한 협진 시범사업에
            참여한 의료인들의 협진 관련 진료 경험을 바탕으로 시범사업에 대한
            만족도와 요구에 대한 목소리를 듣는 조사입니다.
          </p>
          <p>
            협진 추조에 대한 평가, 진료 경험에서 확인된 진단, 치료의 효율성과
            환자의 편의, 소속 기관의 편의 등의 다면적 항목에 대한 조사를 통해
            시범사업의 질을 검정하는 중요한 요소입니다.
          </p>
        </div>

        {/* Blue-tinted Information Card */}
        <div className="bg-[#E9F2F4] rounded-[20px] px-10 py-9 mb-6">
          <h2 className="text-[18px] font-semibold text-[#222222] mb-4 leading-[1.5]">
            협진을 수행한 의료인들의 만족도는 어떻게 나타났을까요?
          </h2>
          <p className="text-[15px] text-[#555555] leading-[1.8]">
            2023년 4단계 시범사업에 참여하고 있는 75개 참여 의료기관 중 65개
            기관에서 117명의 의료인을 대상으로 의·한 협진 시범사업의 만족도 및
            요구도 조사를 수행하였습니다. 약 83% 에서 의·한 협진 시범사업을 통해
            의·한 협진의 진단 정확성 및 효율성이 향상되었다고 응답하였습니다. 또한
            치료 효과와 환자 편의성이 향상되었다고 응답한 비율도 각각 약 88%, 82%인
            것으로 나타났습니다.
          </p>
        </div>

        {/* Dashboard Toggle Component */}
        <div className="mb-6">
          <DashboardToggle />
        </div>

        {/* Gray Compact Box */}
        <div className="bg-[#F1F3F5] rounded-[20px] px-10 py-9 mb-20">
          <p className="text-[15px] text-[#555555] leading-[1.8]">
            이 외 협진 진료기능과 상황, 대상 의료기관의 범위, 환자 부담 등에 대한
            다양한 의견을 수집하였으며 자세한 내용은 추후 보고서와 출판물로 공개될
            예정입니다.
          </p>
        </div>

        {/* Next Section */}
        <div>
          <h2 className="text-[26px] font-bold text-[#222222] mb-6 leading-[1.4]">
            의·한 협진 원가 추정 및 수가 타당성 연구
          </h2>
          <div className="text-[15px] text-[#555555] space-y-5 leading-[1.8]">
            <p>
              의·한 협진의 원가 추정 및 수가 타당성연구는 의·한협진 시범사업이 본
              사업으로 연결되는데 중요한 자료가 되는 연구입니다.
            </p>
            <p>
              본 연구는 1) 4단계 시범사업 기관에서 협진을 경험한 환자를 대상으로 한
              최대지불의사비용 등에 대한 조사 2) 의료기관의 대표자를 대상으로 하여
              협진을 시행하는 의료 인력의 업무량과 의료기관에서 협진 인프라를
              구축 운영하기 위한 진료비용 등을 실측 조사를 통해
              이루어지겠습니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}