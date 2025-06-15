import React from "react";
import { NavLink } from "react-router-dom";

const recruitList = [
  "UI/UX 디자이너 채용",
  "백엔드 개발자 채용",
  "프론트엔드 개발자 채용",
  "운영팀 QA/DevOps",
  "UX 리서처 채용",
];

/**
 * Sidebar 컴포넌트
 * - “채용 만들기” 버튼만 보라색(primary)으로 유지
 * - 나머지 채용 항목은 연한 회색(neutral-100) 배경으로 고정
 *   (활성화 여부와 상관없이 모두 동일한 스타일)
 */
const Sidebar = () => {
  return (
    <div className="w-64 bg-white border-r border-neutral-200 flex flex-col">
      {/* 상단: "채용 만들기" 버튼 (보라색) */}
      <div className="px-6 py-6">
        <button className="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-indigo-600 transition">
          채용 만들기
        </button>
      </div>

      {/* 참여중인 채용 리스트 (연한 회색 고정) */}
      <div className="flex-1 overflow-auto px-2">
        <h3 className="px-4 text-sm font-sans font-semibold text-neutral-500 uppercase mb-2">
          참여중인 채용
        </h3>
        <ul className="space-y-1">
          {recruitList.map((item) => (
            <li key={item}>
              {/* NavLink 대신 단순 div로 변경하여 모든 항목을 연한 회색으로 고정 */}
              <div className="flex items-center px-4 py-2 text-sm font-sans font-medium bg-neutral-100 text-neutral-700 rounded-l-full hover:bg-neutral-200">
                {item}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
