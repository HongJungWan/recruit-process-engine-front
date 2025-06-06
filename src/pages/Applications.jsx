// src/pages/Applications.jsx
import React from 'react'
import Sidebar from '@/components/common/Sidebar'
import Topbar from '@/components/common/Topbar'
import Header from '@/components/common/Header'

const Applications = () => {
  return (
    <div className="h-screen flex flex-col">
      <Topbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-auto bg-neutral-100">
          {/* Header는 동일하게 사용하되, title은 그대로 두고 누구나 “지원서” 탭 활성 상태로 표시 가능 */}
          <Header title="백엔드 개발자 채용" />
          <div className="p-6">
            <h2 className="text-lg font-sans font-semibold">지원서 페이지 (미구현)</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Applications
