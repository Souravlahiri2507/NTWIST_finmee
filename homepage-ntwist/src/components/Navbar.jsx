import React from "react";
import "../css/nav.css";
import { AiFillCaretDown } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex-container">
      {/* Company logo */}
      <div className="logo">
        <a href="/">
          <img
            src="https://ntwist.com/wp-content/uploads/2021/12/ntwistlight.png"
            alt="Company Logo"
          />
        </a>
      </div>
      {/* Nav menu items */}
      <div className="nav-menu-lg">
        <div className="nav-item">
          <a href="/">Home</a>
        </div>
        <div className="nav-item-dropdown nav-item">
          Industries
          <AiFillCaretDown />
          <div className="nav-item-dropdown-content">
            <a href="/project/sustainability-assistant">Sustainability</a>
            <br />
            <a href="/metal-mining">Mineral Processing</a>
            <br />
            <a href="/mine-to-mill-to-mine-optimization">
              Mine-To-Mill-To-Mine Optimization
            </a>
            <br />
            <a href="/oil-gas">Oil & Gas</a>
          </div>
        </div>
        <div className="nav-item">
          <a href="/ai-software">
            <span className="nav-item-text">AI Software</span>
          </a>
        </div>

        <div className="nav-item">
          <a href="/blog">
            <span className="nav-item-text">Blog</span>
          </a>
        </div>

        <div className="nav-item">
          <a href="/contact-us">
            <span className="nav-item-text">Contact Us</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
