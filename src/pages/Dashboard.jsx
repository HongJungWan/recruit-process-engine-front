import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";
import Sidebar from "@/components/common/Sidebar";
import Topbar from "@/components/common/Topbar";
import Header from "@/components/common/Header";
import StatsCard from "@/components/common/StatsCard";
import { Line, Doughnut } from "react-chartjs-2";
import "chart.js/auto";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("대시보드");

  // 1) 지원자 유입 추이(Line Chart)
  const lineData = {
    labels: ["2024.04.01-2024.04.31", "2024.05.01-2024.05.31"],
    datasets: [
      {
        label: "총 지원자 수",
        data: [208, 211],
        borderColor: "#2E4BF7",
        backgroundColor: "rgba(79, 70, 229, 0.1)",
        tension: 0.4,
      },
      {
        label: "불합격 지원자 수",
        data: [34, 31],
        borderColor: "#F85A47",
        backgroundColor: "rgba(248, 90, 71, 0.1)",
        tension: 0.4,
      },
      {
        label: "합격 지원자 수",
        data: [18, 21],
        borderColor: "#3AC47D",
        backgroundColor: "rgba(58, 196, 125, 0.1)",
        tension: 0.4,
      },
    ],
  };
  const lineOptions = {
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { display: false }, ticks: { color: "#9CA3AF" } },
      y: {
        grid: { borderDash: [4, 4], color: "#E5E7EB" },
        ticks: { display: false },
      },
    },
  };

  // 2) 접수 지원자 수 (Doughnut Chart)
  const doughnutData = {
    labels: [
      "잡코리아",
      "링크드인",
      "채용 홈페이지",
      "사내추천(길나인)",
      "사내추천(배준호)",
      "기타",
    ],
    datasets: [
      {
        data: [44, 28, 13, 8, 8, 8],
        backgroundColor: [
          "#2E4BF7",
          "#F85A47",
          "#3AC47D",
          "#FFD166",
          "#FFCD3C",
          "#A8ABB0",
        ],
        borderWidth: 0,
      },
    ],
  };
  const doughnutOptions = {
    maintainAspectRatio: false,
    cutout: "70%",
    plugins: { legend: { display: false } },
  };
  const totalApplied = doughnutData.datasets[0].data.reduce(
    (sum, x) => sum + x,
    0
  );

  // 3) 우측 통계 카드
  const stats = [
    { title: "총 지원자 수", value: "211명", change: "+3명", changeType: "up" },
    {
      title: "합격 지원자 수",
      value: "21명",
      change: "+3명",
      changeType: "up",
    },
    {
      title: "불합격 지원자 수",
      value: "31명",
      change: "-3명",
      changeType: "down",
    },
  ];

  // 4) 테이블 데이터
  const tableData = [
    {
      source: "잡코리아",
      applied: 44,
      appliedPct: 41,
      appliedRate: "15.3%",
      total: 422,
      totalPct: 30,
    },
    {
      source: "링크드인",
      applied: 28,
      appliedPct: 26,
      appliedRate: "15%",
      total: 219,
      totalPct: 21,
    },
    {
      source: "채용 홈페이지",
      applied: 13,
      appliedPct: 12,
      appliedRate: "9.3%",
      total: 122,
      totalPct: 14,
    },
    {
      source: "사내추천(길나인)",
      applied: 8,
      appliedPct: 7,
      appliedRate: "11.2%",
      total: 102,
      totalPct: 11,
    },
    {
      source: "사내추천(배준호)",
      applied: 8,
      appliedPct: 7,
      appliedRate: "3.5%",
      total: 91,
      totalPct: 11,
    },
    {
      source: "기타",
      applied: 8,
      appliedPct: 7,
      appliedRate: "3.5%",
      total: 121,
      totalPct: 23,
    },
  ];

  return (
    <div className="h-screen flex flex-col">
      <Topbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-auto bg-neutral-100 p-6">
          {/* 탭 헤더 */}
          <Header
            title="대시보드"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          {/* Section 1: 지원자 유입 추이 */}
          <section className="bg-white rounded-lg p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">지원자 유입 추이</h2>
              <div className="flex items-center text-sm text-gray-500">
                <HiSearch className="mr-1" /> 적용 기간: 2024.04.03 - 2024.06.30
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="col-span-2 h-64">
                <Line data={lineData} options={lineOptions} />
              </div>
              <div className="col-span-1 grid grid-rows-3 gap-4">
                {stats.map((stat) => (
                  <StatsCard key={stat.title} {...stat} />
                ))}
              </div>
            </div>
          </section>

          {/* Section 2: 도넛 차트 + 범례 */}
          <section className="bg-white rounded-lg p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">접수 지원자 수</h2>
              <span className="text-sm text-gray-500">
                적용 기간: 2024.04.03 - 2024.06.30
              </span>
            </div>
            <div className="flex flex-col lg:flex-row items-start">
              {/* 차트 */}
              <div className="w-full lg:w-1/2 relative h-64">
                <Doughnut data={doughnutData} options={doughnutOptions} />
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                  <span className="text-xl font-semibold">
                    {totalApplied}명
                  </span>
                  <span className="text-sm text-gray-500">접수 지원자 수</span>
                </div>
              </div>
              {/* 범례 */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center lg:pl-8 mt-6 lg:mt-0">
                {doughnutData.labels.map((label, idx) => (
                  <div
                    key={label}
                    className="flex items-center text-sm text-gray-700 mb-2"
                  >
                    <span
                      className="w-3 h-3 rounded-full mr-2"
                      style={{
                        backgroundColor:
                          doughnutData.datasets[0].backgroundColor[idx],
                      }}
                    />
                    <span className="flex-1">{label}</span>
                    <span className="text-gray-500">
                      {doughnutData.datasets[0].data[idx]}명 (
                      {(
                        (doughnutData.datasets[0].data[idx] / totalApplied) *
                        100
                      ).toFixed(0)}
                      %)
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 3: 테이블 */}
          <section className="bg-white rounded-lg p-6">
            <table className="w-full text-left">
              <thead>
                <tr className="text-sm text-gray-500">
                  <th className="px-4 py-2">지원 경로</th>
                  <th className="px-4 py-2">접수 지원자 수 (비중)</th>
                  <th className="px-4 py-2">접수 지원자 수 비율</th>
                  <th className="px-4 py-2">총 지원자 수 (비중)</th>
                </tr>
              </thead>
              <tbody>
                {tableData.map((row) => (
                  <tr key={row.source} className="border-t">
                    <td className="px-4 py-2 text-sm">{row.source}</td>
                    <td className="px-4 py-2 text-sm">
                      {row.applied}명 ({row.appliedPct}%)
                    </td>
                    <td className="px-4 py-2 text-sm">{row.appliedRate}</td>
                    <td className="px-4 py-2 text-sm">
                      {row.total}명 ({row.totalPct}%)
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
