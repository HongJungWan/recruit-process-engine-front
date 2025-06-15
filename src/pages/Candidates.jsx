import React, { useState } from "react";
import Sidebar from "@/components/common/Sidebar";
import Topbar from "@/components/common/Topbar";
import Header from "@/components/common/Header";
import {
  HiSearch,
  HiFilter,
  HiChevronDown,
  HiRefresh,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi";

const Candidates = () => {
  // 필터 탭 데이터
  const filterTabs = [
    { id: "all", label: "#전체", count: 58 },
    { id: "applied", label: "#지원 완료", count: 31 },
    { id: "reviewCompleted", label: "#검토 완료", count: 17 },
    { id: "screeningCompleted", label: "#스크리닝 완료", count: 9 },
    { id: "techInterviewCompleted", label: "#기술 면접 완료", count: 5 },
    { id: "compensationCompleted", label: "#처우 완료", count: 3 },
    { id: "offerCompleted", label: "#오퍼 완료", count: 2 },
  ];
  const [activeTab, setActiveTab] = useState("all");

  // 더미 테이블 데이터
  const rows = [
    {
      id: 1,
      name: "박진섭",
      email: "p.spark@gmail.com",
      position: "백엔드 개발자 채용",
      status: "1차 인터뷰",
      hrManager: "홍정완", // 인사담당자
      source: "원티드", // 지원 경로
      appliedDate: "2일 전", // 지원일
      tags: ["#오퍼 완료"], // 태그
    },
    {
      id: 2,
      name: "김민지",
      email: "m.lee@gmail.com",
      position: "프론트엔드 개발자 채용",
      status: "서류합격",
      hrManager: "트럼프",
      source: "원티드",
      appliedDate: "1일 전",
      tags: ["#검토 완료"],
    },
    {
      id: 3,
      name: "정지원",
      email: "j.jeong@gmail.com",
      position: "UX 리서치 채용",
      status: "지원 완료",
      hrManager: "일론머스크",
      source: "사람인",
      appliedDate: "3일 전",
      tags: ["#지원 완료"],
    },
  ];

  return (
    <div className="h-screen flex flex-col">
      <Topbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-auto bg-neutral-100">
          <Header title="백엔드 개발자 채용" />

          {/* 툴바 */}
          <div className="flex items-center flex-wrap gap-3 px-6 py-4 bg-white border-b border-gray-200">
            <div className="relative flex-1 max-w-md">
              <HiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="이름 또는 이메일, 연락처로 검색"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <button className="flex items-center px-3 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
              <HiSearch className="mr-1" /> 검색
            </button>
            <button className="flex items-center px-3 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
              <HiFilter className="mr-1" /> 필터
            </button>
            <button className="flex items-center px-3 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
              정렬: 최신순 <HiChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="ml-auto flex items-center space-x-4">
              <button className="flex items-center text-gray-500 hover:text-gray-700">
                <HiRefresh className="mr-1" /> 방금 전 업데이트
              </button>
            </div>
          </div>

          {/* 필터 탭 */}
          <div className="px-6 py-3 bg-white border-b border-gray-200">
            <div className="flex space-x-4 overflow-x-auto">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-shrink-0 px-3 py-1 text-sm font-medium rounded-full border transition-colors duration-150 ${
                    activeTab === tab.id
                      ? "bg-indigo-600 text-white border-indigo-600"
                      : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {tab.label} {tab.count}
                </button>
              ))}
            </div>
          </div>

          {/* 데이터 테이블 */}
          <div className="p-6 flex-1 overflow-auto flex flex-col">
            <table className="min-w-full bg-white border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 border-b text-center w-12">
                    <input type="checkbox" />
                  </th>
                  <th className="px-4 py-3 border-b text-left text-sm font-semibold text-gray-700 cursor-pointer">
                    이름 / 이메일 <HiChevronDown className="inline h-4 w-4" />
                  </th>
                  <th className="px-4 py-3 border-b text-left text-sm font-semibold text-gray-700 cursor-pointer">
                    지원 포지션 <HiChevronDown className="inline h-4 w-4" />
                  </th>
                  <th className="px-4 py-3 border-b text-left text-sm font-semibold text-gray-700 cursor-pointer">
                    지원자 상태 <HiChevronDown className="inline h-4 w-4" />
                  </th>
                  <th className="px-4 py-3 border-b text-left text-sm font-semibold text-gray-700 cursor-pointer">
                    인사담당자 <HiChevronDown className="inline h-4 w-4" />
                  </th>
                  <th className="px-4 py-3 border-b text-left text-sm font-semibold text-gray-700 cursor-pointer">
                    지원 경로 <HiChevronDown className="inline h-4 w-4" />
                  </th>
                  <th className="px-4 py-3 border-b text-left text-sm font-semibold text-gray-700 cursor-pointer">
                    지원일 <HiChevronDown className="inline h-4 w-4" />
                  </th>
                  <th className="px-4 py-3 border-b text-left text-sm font-semibold text-gray-700 cursor-pointer">
                    태그 <HiChevronDown className="inline h-4 w-4" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3 border-b text-center">
                      <input type="checkbox" />
                    </td>
                    <td className="px-4 py-3 border-b">
                      <div className="text-sm font-medium text-gray-800">
                        {row.name}
                      </div>
                      <div className="text-xs text-gray-500">{row.email}</div>
                    </td>
                    <td className="px-4 py-3 border-b text-sm text-gray-700">
                      {row.position}
                    </td>
                    <td className="px-4 py-3 border-b text-sm text-gray-700">
                      {row.status}
                    </td>
                    <td className="px-4 py-3 border-b text-sm text-gray-700">
                      {row.hrManager}
                    </td>
                    <td className="px-4 py-3 border-b text-sm text-gray-700">
                      {row.source}
                    </td>
                    <td className="px-4 py-3 border-b text-sm text-gray-700">
                      {row.appliedDate}
                    </td>
                    <td className="px-4 py-3 border-b">
                      {row.tags.length > 0 ? (
                        row.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-2 py-0.5 mr-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                          >
                            {tag}
                          </span>
                        ))
                      ) : (
                        <span className="text-xs text-gray-400">-</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* 페이지네이션 */}
            <div className="flex justify-center items-center space-x-2 mt-6">
              <button className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100">
                <HiChevronLeft className="h-5 w-5 text-gray-600" />
              </button>
              <button className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center">
                1
              </button>
              <button className="w-8 h-8 rounded-full text-gray-600 hover:bg-gray-100 flex items-center justify-center">
                2
              </button>
              <button className="w-8 h-8 rounded-full text-gray-600 hover/bg-gray-100 flex items-center justify-center">
                3
              </button>
              <button className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-100">
                <HiChevronRight className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Candidates;
