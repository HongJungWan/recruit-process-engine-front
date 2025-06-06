import React from 'react'

/**
 * Topbar 컴포넌트
 * - 화면 최상단 글로벌 네비게이션 바
 * - 왼쪽: “Recruit Peocess Engine” (드롭다운 표시)
 * - 중앙: 채용 관리, 인재풀, 템플릿, 멤버, 설정 메뉴
 * - 오른쪽: 아이콘(헤드폰, 물음표, 알림) + 사용자 아바타+이름
 */
const Topbar = () => {
  const navItems = ['채용 관리', '인재풀', '템플릿', '멤버', '설정']

  return (
    <div className="flex items-center justify-between bg-white px-6 py-2 border-b border-neutral-200">
      {/* 왼쪽: 로고 텍스트 + ▼ */}
      <div className="flex items-center space-x-1 cursor-pointer">
        <span className="text-lg font-sans font-semibold text-neutral-800">
          Recruit Peocess Engine
        </span>
        <span className="text-sm text-neutral-500">▼</span>
      </div>

      {/* 중앙: 네비게이션 메뉴 */}
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((label) => (
          <button
            key={label}
            className="text-sm text-neutral-600 font-sans hover:text-neutral-800"
          >
            {label}
          </button>
        ))}
      </div>

      {/* 오른쪽: 이모지 아이콘 + 사용자 아바타+이름 */}
      <div className="flex items-center space-x-4">
        <button className="text-neutral-600 hover:text-neutral-800 text-xl">
          🎧
        </button>
        <button className="text-neutral-600 hover:text-neutral-800 text-xl">
          ❓
        </button>
        <button className="text-neutral-600 hover:text-neutral-800 text-xl">
          🔔
        </button>

        {/* 사용자 아바타 + 이름 */}
        <div className="flex items-center space-x-1 cursor-pointer">
          <div className="h-8 w-8 bg-neutral-300 rounded-full" />
          <span className="text-sm font-sans text-neutral-800">김</span>
        </div>
      </div>
    </div>
  )
}

export default Topbar
