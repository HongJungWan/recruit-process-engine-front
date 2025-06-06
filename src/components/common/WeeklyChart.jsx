import React from 'react'

/**
 * WeeklyChart 컴포넌트
 * - 예시 목적으로 간단한 바 차트 형태로 구현
 * - 실제 차트 라이브러리(recharts 등)를 쓰는 것이 아니고, CSS 기반으로 간단히 구현
 *
 * Props:
 * - data: [{ day: '월', count: 24 }, ...] 형태의 배열
 * - maxCount: 차트 막대 높이 비율 계산을 위한 최대값
 */
const WeeklyChart = ({ data = [], maxCount = 100 }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6 w-full">
      <h3 className="text-sm font-medium text-neutral-500">주간 지원자 수</h3>
      <div className="mt-4 flex items-end justify-between h-40">
        {data.map((item) => {
          // 높이를 0~100% 비율로 계산
          const heightPercent = Math.round((item.count / maxCount) * 100)
          return (
            <div key={item.day} className="flex flex-col items-center w-full">
              <div
                className="bg-primary transition-all"
                style={{ height: `${heightPercent}%`, width: '8px' }}
              />
              <span className="mt-2 text-xs text-neutral-500">{item.day}</span>
              <span className="text-xs text-neutral-600">{item.count}명</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default WeeklyChart
