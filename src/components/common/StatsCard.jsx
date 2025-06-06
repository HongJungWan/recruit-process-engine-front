import React from 'react'
import { formatNumber } from '@/utils/formatNumber'

/**
 * StatsCard 컴포넌트
 * - title: 카드 상단 타이틀 (예: 총 지원자)
 * - value: 숫자 값 (예: 1592)
 * - suffix: 뒤에 붙는 단위나 표시 (예: 명)
 * - subValue: 보조 정보 (예: 합격률 6%)
 * - isPositive: subValue 가 긍정 값일 때 true, 부정 값일 때 false (색상 분기용)
 */
const StatsCard = ({ title, value, suffix = '', subValue = null, isPositive = true }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-neutral-200 p-6 w-full">
      <h3 className="text-sm font-medium text-neutral-500">{title}</h3>
      <div className="mt-2 flex items-baseline space-x-1">
        <span className="text-3xl font-semibold text-neutral-800">
          {formatNumber(value)}
        </span>
        {suffix && <span className="text-lg font-medium text-neutral-600">{suffix}</span>}
      </div>
      {subValue && (
        <div
          className={`mt-2 text-sm font-medium ${
            isPositive ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {subValue}
        </div>
      )}
    </div>
  )
}

export default StatsCard
