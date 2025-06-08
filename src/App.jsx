// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "@/pages/Dashboard";
import Candidates from "@/pages/Candidates";
import Compensation from "@/pages/Compensation";
import Offer from "@/pages/Offer";

function App() {
  return (
    <div className="flex h-screen">
      {/*
       flex 컨테이너 안에서 실제 페이지들이
       flex-1으로 부모의 남은 가로 공간을 꽉 채우도록
       감싸줄 래퍼를 하나 더 둡니다.
     */}
      <div className="flex-1 flex flex-col">
        <Routes>
          {/* 기본 경로 → /dashboard로 리다이렉트 */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          {/* 라우트 정의 */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/candidates" element={<Candidates />} />
          <Route path="/compensation" element={<Compensation />} />
          <Route path="/offer" element={<Offer />} />

          {/* 그 외 경로는 다시 대시보드로 */}
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
