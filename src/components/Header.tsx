import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="header">
      <h1 className="logo">Learn Binary</h1>
      <nav>
        <Link to="/">Learn Decode</Link>
        <Link to="/xor">Learn XOR</Link>
      </nav>
    </div>
  );
};

export default Header;