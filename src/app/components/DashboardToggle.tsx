import { useState } from 'react';
import * as Collapsible from '@radix-ui/react-collapsible';
import { ChevronDown } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from 'recharts';

const chartData = [
  { name: '진단 정확성 및 효율성 향상', value: 83 },
  { name: '치료 효과 향상', value: 88 },
  { name: '환자 편의성 향상', value: 82 },
];

const barColors = ['#14B8A6', '#5EEAD4', '#99F6E4'];

const kpiCards = [
  {
    label: '응답 기관',
    value: '65개',
  },
  {
    label: '응답 의료인',
    value: '117명',
  },
  {
    label: '진단 정확성·효율성 향상',
    value: '83%',
  },
  {
    label: '치료 효과 / 환자 편의성',
    value: '88% / 82%',
  },
];

export function DashboardToggle() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible.Root open={isOpen} onOpenChange={setIsOpen}>
      <div className="bg-[#F1F3F5] rounded-[20px] overflow-hidden">
        <Collapsible.Trigger asChild>
          <button
            className="w-full px-10 py-7 flex items-center justify-between hover:bg-[#E8EAED] transition-colors"
            aria-label="Toggle dashboard"
          >
            <div className="text-left">
              <div className="text-[#222222] text-[15px] mb-1.5">
                조사 결과 요약 Dashboard 보기
              </div>
              <div className="text-[13px] text-[#555555]">
                핵심 지표를 간단히 확인할 수 있습니다.
              </div>
            </div>
            <div
              className={`flex items-center justify-center w-9 h-9 rounded-full bg-transparent hover:bg-[#E6FFFA] transition-all duration-200 ${
                isOpen ? 'rotate-180' : ''
              }`}
            >
              <ChevronDown className="w-[18px] h-[18px] text-[#0F766E]" strokeWidth={2} />
            </div>
          </button>
        </Collapsible.Trigger>

        <Collapsible.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
          <div className="px-10 pb-8 pt-2">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-5">
              {kpiCards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-[12px] border border-[#E5E7EB] p-4"
                >
                  <div className="text-[13px] text-[#555555] mb-2">{card.label}</div>
                  <div className="text-[22px] font-semibold text-[#222222]">
                    {card.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              {/* Chart */}
              <div className="lg:col-span-3 bg-white rounded-[12px] border border-[#E5E7EB] p-5">
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={chartData} layout="vertical" margin={{ left: 20, right: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" horizontal={false} />
                    <XAxis type="number" domain={[0, 100]} stroke="#999999" tick={{ fontSize: 12 }} />
                    <YAxis
                      type="category"
                      dataKey="name"
                      stroke="#555555"
                      width={160}
                      tick={{ fontSize: 12 }}
                    />
                    <Bar dataKey="value" radius={[0, 6, 6, 0]} barSize={24}>
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={barColors[index]} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Insight Box */}
              <div className="lg:col-span-2 bg-[#F0FDFA] rounded-[10px] border-l-4 border-[#14B8A6] p-5 flex flex-col justify-center">
                <h4 className="text-[#222222] font-semibold text-[14px] mb-2.5">
                  주요 결과 요약
                </h4>
                <p className="text-[13px] text-[#555555] leading-[1.7]">
                  치료 효과 향상 응답 비율이 가장 높게 나타났으며, 전반적으로 80% 이상의 긍정 응답이 확인되었습니다.
                </p>
              </div>
            </div>
          </div>
        </Collapsible.Content>
      </div>
    </Collapsible.Root>
  );
}