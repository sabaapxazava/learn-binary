import React, { ReactNode } from "react";
import Header from "./Header";
import "../styles/Layout.css";
import { ScoreProvider } from "../context/ScoreContext";
interface LayoutProps {
  children: ReactNode;
}
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ScoreProvider>
      <div className="layout">
        <Header />
        <main>{children}</main>
      </div>
    </ScoreProvider>
  );
};

export default Layout;
