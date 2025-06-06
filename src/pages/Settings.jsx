// src/pages/Settings.jsx
import React from 'react'
import Sidebar from '@/components/common/Sidebar'
import Topbar from '@/components/common/Topbar'
import Header from '@/components/common/Header'

const Settings = () => {
  return (
    <div className="h-screen flex flex-col">
      <Topbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-auto bg-neutral-100">
          <Header title="백엔드 개발자 채용" />
          <div className="p-6">
            <h2 className="text-lg font-sans font-semibold">설정 페이지 (미구현)</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Settings
