import React from "react";
import logo from "../images/logo.svg";
import { data, socialLinks } from "../data.js";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
          {data.map((d) => {
            return (
              <li key={d.id}>
                <a href={d.href} className="nav-link">
                  {" "}
                  {d.text}{" "}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((d) => {
            return (
              <li key={d.id}>
                <a href={d.href} target="_blank" className="nav-icon">
                  <i className={d.classN}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
