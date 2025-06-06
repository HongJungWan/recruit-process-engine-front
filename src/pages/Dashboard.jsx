// src/pages/Dashboard.jsx
import React, { useState } from 'react'
import Sidebar from '@/components/common/Sidebar'
import Topbar from '@/components/common/Topbar'
import Header from '@/components/common/Header'
import StatsCard from '@/components/common/StatsCard'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('대시보드')

  const weeklyData = [
    { day: '일요일', count: 18 },
    { day: '월요일', count: 24 },
    { day: '화요일', count: 7  },
    { day: '수요일', count: 11 },
    { day: '목요일', count: 17 },
    { day: '금요일', count: 0  },
    { day: '토요일', count: 3  },
  ]
  const maxCount = Math.max(...weeklyData.map(d => d.count)) // → 24

  // 통계값 예시
  const totalApplicants = 1592
  const inProgress = 52
  const accepted = 32
  const rejected = 1238
  const acceptRate = totalApplicants > 0
    ? ((accepted / totalApplicants) * 100).toFixed(1)
    : 0
  const rejectRate = totalApplicants > 0
    ? ((rejected / totalApplicants) * 100).toFixed(1)
    : 0

  return (
    <div className="h-screen flex flex-col">
      <Topbar />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <div className="flex-1 flex flex-col overflow-auto bg-neutral-100">
          <Header
            title="백엔드 개발자 채용"
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />

          {activeTab === '대시보드' && (
            <div className="p-6 flex flex-col space-y-6">
              {/* 섹션 제목 */}
              <section>
                <h2 className="text-xl font-sans font-semibold text-neutral-800">
                  지원자
                </h2>
                <p className="text-sm text-neutral-500 mt-1">
                  지원자 현황을 확인합니다.
                </p>
              </section>

              {/* ─── 차트 + 통계 카드 영역 ─── */}
              <section className="grid grid-cols-3 gap-6">
                {/* ─── 왼쪽: 주간 지원자 유입 그래프 카드 ─── */}
                <div className="col-span-2 bg-white rounded-lg shadow-sm border border-neutral-200 p-6">
                  {/* 카드 상단: 제목 + 날짜 네비게이션 */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-sans font-medium text-neutral-800">
                      주간 지원자 유입 그래프
                    </h3>
                    <div className="flex items-center space-x-2 text-xs text-neutral-500">
                      <button className="hover:text-neutral-700" type="button">
                        ◀
                      </button>
                      <span>2021.09.27 ~ 2021.10.04</span>
                      <button className="hover:text-neutral-700" type="button">
                        ▶
                      </button>
                    </div>
                  </div>

                  {/* 신규 지원자 뱃지 */}
                  <div className="mt-3">
                    <span className="inline-block px-2 py-1 bg-neutral-100 rounded-md text-xs font-medium text-neutral-700">
                      신규 지원자 12명
                    </span>
                  </div>

                  {/*
                    ─────────────────────────────
                    ⚠️ 차트 바가 보이지 않는 가장 흔한 원인은,
                       막대를 감싸는 부모에 “고정 높이(h-32)”만 있고,
                       자식이 “flex-1 flex items-end”처럼 바닥에 붙도록
                       구현되지 않았기 때문입니다.

                    아래와 같이 “flex h-32 space-x-4”로 래퍼를 만들고,
                    내부에서 “flex-1 flex items-end” 구조로 바닥을 맞추면
                    Percent(%)가 부모(h-32)의 크기를 기준으로 계산됩니다.
                    ─────────────────────────────
                  */}
                  <div className="mt-6 flex h-32 space-x-4">
                    {weeklyData.map((item) => {
                      // ex) 18/24 → 75, 24/24 → 100, 0/24 → 0, 11/24 → 46 …
                      const heightPercent =
                        maxCount > 0
                          ? Math.round((item.count / maxCount) * 100)
                          : 0

                      return (
                        <div
                          key={item.day}
                          className="flex-1 flex flex-col items-center"
                        >
                          {/* ─── “flex-1 flex items-end” 래퍼를 꼭 추가 ─── */}
                          <div className="flex-1 flex items-end">
                            {item.count > 0 ? (
                              <div
                                className="bg-primary transition-all"
                                style={{
                                  height: `${heightPercent}%`,
                                  width: '8px',
                                }}
                              />
                            ) : (
                              <div className="w-2 h-2 border-2 border-primary rounded-full mb-1" />
                            )}
                          </div>

                          {/* 요일 + 숫자 레이블 (막대 밑) */}
                          <span className="mt-2 text-xs text-neutral-500">
                            {item.day}
                          </span>
                          <span className="mt-1 text-xs font-medium text-neutral-800">
                            {item.count}명
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* ─── 오른쪽: 통계 카드 4개 ─── */}
                <div className="col-span-1 flex flex-col space-y-6">
                  <StatsCard
                    title="총 지원자"
                    value={totalApplicants}
                    suffix="명"
                  />
                  <StatsCard
                    title="진행중"
                    value={inProgress}
                    suffix="명"
                  />
                  <StatsCard
                    title="합격"
                    value={accepted}
                    suffix="명"
                    subValue={`합격률 ${acceptRate}%`}
                    isPositive={true}
                  />
                  <StatsCard
                    title="불합격"
                    value={rejected}
                    suffix="명"
                    subValue={`불합격률 ${rejectRate}%`}
                    isPositive={false}
                  />
                </div>
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
