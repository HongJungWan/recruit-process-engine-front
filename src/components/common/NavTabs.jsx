import React from 'react'

/**
 * NavTabs 컴포넌트 (재사용 가능한 탭 네비게이션)
 * - tabs: 탭 이름 문자열 배열
 * - active: 현재 활성화된 탭 이름
 * - onChange: 탭 클릭 시 호출되는 콜백 (탭 이름을 인자로 전달)
 */
const NavTabs = ({ tabs, active, onChange }) => {
  return (
    <ul className="flex space-x-6 border-b border-neutral-200">
      {tabs.map((tab) => (
        <li key={tab}>
          <button
            onClick={() => onChange(tab)}
            className={`py-3 text-sm font-medium ${
              active === tab
                ? 'border-b-2 border-primary text-primary'
                : 'text-neutral-500 hover:text-neutral-700'
            }`}
          >
            {tab}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default NavTabs
