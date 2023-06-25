import React, { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
import logo from "../../assets/logo.svg";
import "./navbar.css";
const Menu = () => (
  <ul className="gpt3__navbar-links">
    <li>
      <a href="#home">Home</a>
    </li>
    <li>
      <a href="#wgpt3">What is GPT3?</a>
    </li>
    <li>
      <a href="#possibility">Open AI</a>
    </li>
    <li>
      <a href="#features">Case Studies </a>
    </li>
    <li>
      <a href="#blog">Library</a>
    </li>
  </ul>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(null);
 
  return (
    <nav className="gpt3__navbar section__padding">
      <div className = "gpt3__navbar-content  ">
      <div className="gpt3__navbar-logo_container">
        <img src={logo} alt="gpt3__navbar-logo" />
      </div>
      <div className="gpt3__navbar-links_container ">
        <Menu />
      </div>
      <div className="gpt3__navbar-sign">
        <a className=" sign-in" href="/">
          Sign in
        </a>
        <button type="button" className="text-white bg-accent">
          Sign up
        </button>
      </div>

      <div className="gpt3__navbar-menu">
        { toggleMenu === null && <RiMenu3Line
          className="menu__open"
          color="hsl(0 0% 100%)"
          size={27}
          onClick={() => {
            setToggleMenu("open");
          }}
        />}
        
        <div className={toggleMenu ? "gpt3__navbar-menu-toggle open" : "gpt3__navbar-menu-toggle"}>
          <RiCloseLine
            className="menu__close"
            color="hsl(0 0% 100%)"
            size={27}
            onClick={() => {
              setToggleMenu(null);
            }}
          />
          <Menu />
          <div className="gpt3__navbar-sign">
            <a className=" sing-in" href="/">
              Sign in
            </a>
            <button type="button" className="bg-accent text-white">
              Sign up
            </button>
            <div />
          </div>
        </div>
      </div>

  </div>
    </nav>
  );
};
export default Navbar;
