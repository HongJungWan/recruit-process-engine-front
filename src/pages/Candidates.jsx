// src/pages/Candidates.jsx
import React from 'react'
import Sidebar from '@/components/common/Sidebar'
import Topbar from '@/components/common/Topbar'
import Header from '@/components/common/Header'
import {
  HiSearch,
  HiFilter,
  HiChevronDown,
  HiRefresh,
  HiViewBoards,
  HiDownload,
} from 'react-icons/hi'

const Candidates = () => {
  const columns = [
    {
      id: 'received',
      title: '접수',
      count: 17,
      showAddButton: true,
      items: [
        {
          id: 1,
          name: '김선우',
          source: '채용 홈페이지',
          time: '방금',
          tags: ['#서류 평가'],
        },
        {
          id: 2,
          name: '김진수',
          source: '잡코리아',
          time: '1일 전',
          tags: [],
        },
        {
          id: 3,
          name: '이석진',
          source: '원티드',
          time: '1일 전',
          tags: ['#해외 연수'],
        },
      ],
    },
    {
      id: 'negotiation',
      title: '처우 협의',
      count: 4,
      showAddButton: false,
      items: [
        {
          id: 4,
          name: '하늘이',
          source: '채용 홈페이지',
          time: '2일 전',
          tags: ['#처우 협의 일정'],
        },
        {
          id: 5,
          name: '김신우',
          source: '잡코리아',
          time: '2일 전',
          tags: ['#처우 협의 완료'],
        },
        {
          id: 6,
          name: '민윤기',
          source: '채용 홈페이지',
          time: '2023.11.08',
          tags: [],
        },
      ],
    },
    {
      id: 'offer',
      title: '오퍼 레터',
      count: 2,
      showAddButton: false,
      items: [
        {
          id: 7,
          name: '박진섭',
          source: '잡코리아',
          time: '방금',
          tags: [],
        },
        {
          id: 8,
          name: '김민지',
          source: '채용 홈페이지',
          time: '1일 전',
          tags: ['#1차 거절'],
        },
        {
          id: 9,
          name: '정지원',
          source: '사내 추천',
          time: '2일 전',
          tags: ['#2차 거절'],
        },
      ],
    },
  ]

  return (
    <div className="h-screen flex flex-col">
      <Topbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-auto bg-neutral-100">
          <Header title="백엔드 개발자 채용" />

          {/* 검색·필터·정렬·칸반 설정 바 */}
          <div className="flex items-center flex-wrap gap-3 px-6 py-4 bg-white border-b border-gray-200">
            {/* 검색 */}
            <div className="relative flex-1 max-w-md">
              <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="이름 또는 이메일, 연락처로 검색"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>

            {/* 필터 */}
            <button className="flex items-center px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
              <HiFilter className="mr-1" /> 필터
            </button>

            {/* 정렬 */}
            <button className="flex items-center px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
              정렬: 최신순 <HiChevronDown className="ml-1" />
            </button>

            {/* 칸반 보기 설정 */}
            <button className="flex items-center px-3 py-2 bg-white border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
              <HiViewBoards className="mr-1" /> 칸반 보기 설정
            </button>

            {/* 우측 새로고침 / 내보내기 */}
            <div className="ml-auto flex items-center space-x-4">
              <button className="flex items-center text-gray-500 hover:text-gray-700">
                <HiRefresh className="mr-1" />
                방금 전 업데이트
              </button>
              <button className="p-2 text-gray-500 hover:text-gray-700">
                <HiDownload />
              </button>
            </div>
          </div>

          {/* 칸반 보드 */}
          <div className="p-6 flex-1 overflow-x-auto">
            <div className="flex space-x-6 min-w-max">
              {columns.map(col => (
                <div
                  key={col.id}
                  className="w-80 flex-shrink-0 bg-white rounded-lg shadow-sm flex flex-col"
                >
                  {/* Header */}
                  <div className="px-4 py-3 border-b border-gray-200 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-gray-700">
                      {col.title}
                    </h3>
                    <span className="text-xs font-medium text-gray-500">
                      {col.count}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-4 flex-1 overflow-y-auto space-y-4">
                    {col.showAddButton && (
                      <button
                        type="button"
                        className="w-full h-10 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-md text-gray-500 hover:bg-gray-50"
                      >
                        + 지원자 직접 추가
                      </button>
                    )}

                    {col.items.map(item => (
                      <div
                        key={item.id}
                        className="bg-white border border-gray-200 rounded-md p-4 shadow-sm space-y-2"
                      >
                        <div className="text-sm font-medium text-gray-800">
                          {item.name}
                        </div>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{item.source}</span>
                          <span>{item.time}</span>
                        </div>
                        {item.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 text-xs">
                            {item.tags.map(tag => (
                              <span
                                key={tag}
                                className="px-1.5 py-0.5 bg-gray-100 rounded"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Candidates
