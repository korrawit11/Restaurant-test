import React from "react";
import "./Navbar.css";
import { AiOutlineBell } from "react-icons/ai";
import { AiOutlineCaretDown } from "react-icons/ai";
import navbar from "./navbar.png";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <h3>
          <AiOutlineBell />
        </h3>
        <img src={navbar} alt="profile" />
        <p>Akkarapol</p>
        <div className="navbar-icon">
         <AiOutlineCaretDown />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
