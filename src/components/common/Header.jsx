import React from 'react'
import { NavLink } from 'react-router-dom'

/**
 * Header 컴포넌트
 * - 콘텐츠 최상단: 채용명(타이틀) + 탭(대시보드, 지원자 관리, 처우 관리, 오퍼 관리, 설정)
 * - NavLink를 사용하여 클릭 시 실제 라우트가 변경되도록 구현
 */
const Header = ({ title }) => {
  // 각 탭이 연결될 경로를 설정합니다.
  const tabs = [
    { label: '대시보드', path: '/dashboard' },
    { label: '지원자 관리', path: '/candidates' },
    { label: '처우 관리', path: '/compensation' },
    { label: '오퍼 관리', path: '/offer' },
    { label: '설정', path: '/settings' },
  ]

  return (
    <div className="bg-white px-6 py-4 border-b border-neutral-200 flex items-center">
      {/* 채용명 타이틀 */}
      <h1 className="text-2xl font-sans font-semibold text-neutral-800 mr-8">
        {title}
      </h1>

      {/* 하위 탭 네비게이션 (NavLink 사용) */}
      <nav>
        <ul className="flex space-x-8">
          {tabs.map((tab) => (
            <li key={tab.path}>
              <NavLink
                to={tab.path}
                className={({ isActive }) =>
                  `text-sm font-sans font-medium pb-2 ${
                    isActive
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-neutral-500 hover:text-neutral-700'
                  }`
                }
              >
                {tab.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default Header
