import React from "react";
import { Routes, Route } from "react-router-dom";
import { BinaryDecodePage } from "../pages/BinaryDecodePage";
import { BinaryXorPage } from "../pages/BinaryXorPage";
import { useScore } from "../context/ScoreContext";
import { BinaryAndPage } from "../pages/BinaryAndPage";

export const MainRoutes: React.FC = () => {
  const { score } = useScore();

  return (
    <>
      <p className="score">Score: {score}</p>
      <Routes>
        <Route path="/" element={<BinaryDecodePage />} />
        <Route path="/xor" element={<BinaryXorPage />} />
        <Route path="/and" element={<BinaryAndPage />} />
      </Routes>
    </>
  );
};

export default Routes;
