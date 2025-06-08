import React, { useState } from "react";
import {
  HiPlus,
  HiX,
  HiSearch,
  HiFilter,
  HiChevronDown,
  HiChevronUp,
} from "react-icons/hi";
import Sidebar from "@/components/common/Sidebar";
import Topbar from "@/components/common/Topbar";
import Header from "@/components/common/Header";

// 예시 승인자 목록 (실제 데이터로 교체)
const AVAILABLE_APPROVERS = [
  { id: 1, name: "표지연", email: "jy.yp@ninehire.com" },
  { id: 2, name: "김지연", email: "jk.kim@ninehire.com" },
  { id: 3, name: "박성호", email: "sh.park@ninehire.com" },
  { id: 4, name: "최민기", email: "mk.choi@ninehire.com" },
  { id: 5, name: "박세은", email: "se.park@ninehire.com" },
];

const Compensation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedApprovers, setSelectedApprovers] = useState([]);

  const addApprover = (approver) => {
    if (!selectedApprovers.find((a) => a.id === approver.id)) {
      setSelectedApprovers([...selectedApprovers, approver]);
    }
  };

  const removeApprover = (id) => {
    setSelectedApprovers(selectedApprovers.filter((a) => a.id !== id));
  };

  const moveUp = (index) => {
    if (index === 0) return;
    const list = [...selectedApprovers];
    [list[index - 1], list[index]] = [list[index], list[index - 1]];
    setSelectedApprovers(list);
  };

  const moveDown = (index) => {
    if (index === selectedApprovers.length - 1) return;
    const list = [...selectedApprovers];
    [list[index + 1], list[index]] = [list[index], list[index + 1]];
    setSelectedApprovers(list);
  };

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else {
      // TODO: 승인 요청 API 호출
      console.log("승인 요청 발송", selectedApprovers);
      // 초기화
      setStep(1);
      setSelectedApprovers([]);
      setIsModalOpen(false);
    }
  };

  const handleBack = () => {
    if (step === 2) setStep(1);
  };

  return (
    <div className="h-screen flex flex-col">
      <Topbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-auto bg-neutral-100">
          <Header title="백엔드 개발자 채용" />

          {/* 검색·필터·정렬 + 처우 산정 버튼 */}
          <div className="p-6 flex items-center bg-white border-b">
            <div className="flex items-center flex-1 space-x-3">
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
                정렬: 최신순 <HiChevronDown className="ml-1" />
              </button>
            </div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="ml-6 inline-flex items-center px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-700"
            >
              <HiPlus className="mr-1" /> 처우 산정
            </button>
          </div>

          {/* 기존 처우 카드 (미구현) */}
          <div className="p-6">
            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4 bg-white">
                <p className="text-sm text-gray-700">
                  [김나인님], 처우 산정 승인 요청의 건
                </p>
                <div className="mt-2 flex items-center text-xs text-gray-500 space-x-4">
                  <span>생성 2024.05.05</span>
                  <span className="text-green-600">승인 대기중</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 모달 */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-[90%] max-w-6xl h-[90vh] rounded-lg overflow-hidden flex flex-col">
            {/* Step Indicator + Close */}
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <div className="flex items-center space-x-6">
                <span
                  className={
                    step === 1
                      ? "text-indigo-600 font-medium text-sm"
                      : "text-indigo-300 text-sm font-medium"
                  }
                >
                  1.&nbsp;처우 산정 작성
                </span>
                <span
                  className={
                    step === 2
                      ? "text-indigo-600 font-medium text-sm"
                      : "text-indigo-300 text-sm font-medium"
                  }
                >
                  2.&nbsp;결재 상신
                </span>
                <div className="h-px flex-1 bg-gray-300" />
              </div>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setStep(1);
                  setSelectedApprovers([]);
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <HiX size={20} />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex flex-1 overflow-auto px-6 py-4 space-x-6">
              {step === 1 ? (
                <>
                  {/* STEP 1 카드 */}
                  <div className="w-1/3 bg-white border border-gray-200 rounded-lg shadow-sm p-6 space-y-4">
                    <h4 className="text-sm font-semibold">
                      STEP 1 - 처우 입력
                    </h4>
                    <div className="space-y-4">
                      <label className="block text-xs font-medium text-gray-700">
                        처우 날짜
                        <input
                          type="date"
                          defaultValue="2024-05-13"
                          className="mt-1 w-full border border-gray-300 rounded px-2 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
                        />
                      </label>
                      <label className="block text-xs font-medium text-gray-700">
                        고용 형태
                        <select className="mt-1 w-full border border-gray-300 rounded px-2 py-1 text-sm">
                          <option>정규직</option>
                          <option>계약직</option>
                          <option>인턴</option>
                        </select>
                      </label>
                      <label className="block text-xs font-medium text-gray-700">
                        연봉 (만원)
                        <input
                          type="number"
                          placeholder="3,000"
                          className="mt-1 w-full border border-gray-300 rounded px-2 py-1 text-sm"
                        />
                      </label>
                      <label className="block text-xs font-medium text-gray-700">
                        근무지
                        <input
                          type="text"
                          defaultValue="부산 연제구"
                          className="mt-1 w-full border border-gray-300 rounded px-2 py-1 text-sm"
                        />
                      </label>
                      <label className="block text-xs font-medium text-gray-700">
                        복지 포인트
                        <input
                          type="text"
                          defaultValue="200만원 별도 지급"
                          className="mt-1 w-full border border-gray-300 rounded px-2 py-1 text-sm"
                        />
                      </label>
                    </div>
                  </div>

                  {/* STEP 2 카드 */}
                  <div className="w-2/3 bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col space-y-4">
                    <h4 className="text-sm font-semibold">
                      STEP 2 - 처우 협의 편집
                    </h4>

                    {/* 이메일 메타 정보 */}
                    <div className="space-y-3">
                      <div className="flex items-center space-x-4">
                        <label className="w-24 text-xs font-medium text-gray-700">
                          보내는 사람
                        </label>
                        <input
                          type="text"
                          value="hr@ninehire.com"
                          className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm"
                        />
                      </div>
                      <div className="flex items-center space-x-4">
                        <label className="w-24 text-xs font-medium text-gray-700">
                          참조
                        </label>
                        <input
                          type="text"
                          placeholder="이메일 선택"
                          className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm"
                        />
                      </div>
                      <div className="flex items-center space-x-4">
                        <label className="w-24 text-xs font-medium text-gray-700">
                          제목
                        </label>
                        <input
                          type="text"
                          placeholder="안녕하세요, [지원자]님"
                          className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm"
                        />
                      </div>
                      <div className="flex items-center space-x-4">
                        <label className="w-24 text-xs font-medium text-gray-700">
                          파일 첨부
                        </label>
                        <input
                          type="file"
                          className="border border-gray-300 rounded px-2 py-1 text-sm"
                        />
                        <span className="text-xs text-gray-500">
                          50MB 이하 · 최대 3개
                        </span>
                      </div>
                    </div>

                    {/* 툴바 */}
                    <div className="flex items-center space-x-2 border-b border-gray-200 pb-2">
                      <button className="text-xs text-gray-600 font-medium">
                        B
                      </button>
                      <button className="text-xs text-gray-600 font-medium">
                        I
                      </button>
                      <button className="text-xs text-gray-600 font-medium">
                        U
                      </button>
                      <button className="text-xs text-gray-600 font-medium">
                        H1
                      </button>
                      <button className="text-xs text-gray-600 font-medium">
                        정렬
                      </button>
                      <button className="text-xs text-gray-600 font-medium">
                        링크
                      </button>
                      <button className="text-xs text-gray-600 font-medium">
                        이미지
                      </button>
                    </div>

                    {/* 에디터 영역 */}
                    <div
                      className="border border-gray-200 rounded p-4 flex-1 overflow-auto text-sm text-gray-700"
                      contentEditable
                      suppressContentEditableWarning
                    >
                      [회사명]에서 아래와 같이 처우안을 제시드립니다.
                      <br />
                      1. 처우
                      <br />
                      &nbsp;&nbsp;a. 포지션: [채용 직책]
                      <br />
                      &nbsp;&nbsp;b. 처우 날짜: [처우 날짜]
                      <br />
                      &nbsp;&nbsp;c. 고용 형태: [고용 형태]
                      <br />
                      &nbsp;&nbsp;d. 연봉: [연봉] 만원
                      <br />
                      &nbsp;&nbsp;e. 근무지: [근무지]
                      <br />
                      &nbsp;&nbsp;f. 복지 포인트: [복지 포인트]
                      <br />
                      …이 사항들은 매년 경영 성과에 따라 지급 여부와 규모가
                      결정되며, 연봉 인상 시에는 입사 시점에 따라 지급율이
                      상이하게 적용될 수 있습니다.
                    </div>
                  </div>
                </>
              ) : (
                <div className="flex-1 flex space-x-6">
                  <div className="w-1/3 bg-white border border-gray-200 rounded-lg shadow-sm p-6">
                    <h4 className="text-sm font-semibold mb-4">승인자 선택</h4>
                    <ul className="space-y-2 overflow-auto max-h-[60vh]">
                      {AVAILABLE_APPROVERS.filter(
                        (a) => !selectedApprovers.find((sel) => sel.id === a.id)
                      ).map((approver) => (
                        <li
                          key={approver.id}
                          onClick={() => addApprover(approver)}
                          className="cursor-pointer px-3 py-2 rounded hover:bg-gray-100 flex justify-between items-center"
                        >
                          <div>
                            <p className="text-sm font-medium">
                              {approver.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {approver.email}
                            </p>
                          </div>
                          <HiPlus className="text-gray-400" />
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="w-2/3 bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col">
                    <h4 className="text-sm font-semibold mb-4">
                      승인 순서 확인
                    </h4>
                    <ul className="space-y-2 overflow-auto flex-1">
                      {selectedApprovers.map((approver, idx) => (
                        <li
                          key={approver.id}
                          className="flex items-center justify-between px-3 py-2 rounded hover:bg-gray-50"
                        >
                          <div>
                            <p className="text-sm font-medium">
                              {idx + 1}. {approver.name}
                            </p>
                            <p className="text-xs text-gray-500">
                              {approver.email}
                            </p>
                          </div>
                          <div className="flex items-center space-x-1">
                            <button
                              onClick={() => moveUp(idx)}
                              disabled={idx === 0}
                            >
                              <HiChevronUp size={16} />
                            </button>
                            <button
                              onClick={() => moveDown(idx)}
                              disabled={idx === selectedApprovers.length - 1}
                            >
                              <HiChevronDown size={16} />
                            </button>
                            <button onClick={() => removeApprover(approver.id)}>
                              <HiX size={16} className="text-red-500" />
                            </button>
                          </div>
                        </li>
                      ))}
                    </ul>
                    {selectedApprovers.length === 0 && (
                      <p className="text-xs text-gray-400 text-center mt-4">
                        오른쪽으로 추가 버튼을 눌러 승인자를 선택하세요.
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* 모달 푸터 */}
            <div className="px-6 py-4 border-t flex justify-end space-x-3">
              {step === 2 && (
                <button
                  onClick={handleBack}
                  className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
                >
                  이전
                </button>
              )}
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  setStep(1);
                  setSelectedApprovers([]);
                }}
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
              >
                취소
              </button>
              <button
                onClick={handleNext}
                className="px-4 py-2 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700"
              >
                {step === 1 ? "다음" : "확인 및 요청"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Compensation;
