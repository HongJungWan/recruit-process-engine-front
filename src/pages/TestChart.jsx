// src/pages/TestChart.jsx
import React from 'react'

export default function TestChart() {
  // 아주 간단하게 막대 하나만 그려 보는 예제
  const data = [10, 20, 0, 15]
  const maxVal = Math.max(...data) // 이 예제에선 20

  return (
    <div className="p-8 bg-neutral-100 h-screen">
      <div className="bg-white border border-neutral-200 rounded-lg p-6">
        <h3 className="text-sm font-medium text-neutral-800 mb-4">
          테스트 차트
        </h3>

        {/* 여기서 h-32를 꼭 줘야 막대가 보입니다. */}
        <div className="flex items-end justify-between h-32">
          {data.map((val, idx) => {
            const pct = maxVal > 0 ? Math.round((val / maxVal) * 100) : 0;
            return (
              <div key={idx} className="flex flex-col items-center w-full">
                {val > 0 ? (
                  <div
                    className="bg-primary transition-all"
                    style={{ height: `${pct}%`, width: '12px' }}
                  />
                ) : (
                  <div className="w-2 h-2 border-2 border-primary rounded-full mb-1" />
                )}
                <span className="mt-2 text-xs text-neutral-500">
                  {val}명
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
