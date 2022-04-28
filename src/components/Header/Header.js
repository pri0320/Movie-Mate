import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <div>
      <span onClick={() => window.scroll(0, 0)} className="header">
        Movie-Mate
      </span>
    </div>
  );
};

export default Header;
