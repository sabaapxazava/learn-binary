import React from "react";
import { Routes, Route } from "react-router-dom";
import { BinaryDecodePage } from "../pages/BinaryDecodePage";
import { BinaryXorPage } from "../pages/BinaryXorPage";

export const MainRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<BinaryDecodePage />} />
      <Route path="/xor" element={<BinaryXorPage />} />
    </Routes>
  );  
};

export default Routes;
