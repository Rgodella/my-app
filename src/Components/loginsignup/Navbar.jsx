import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assests/logo.png";
import darkMode from "../Assests/Dark-mode.png";
import lightMode from "../Assests/light-mode.png";
import search_light from "../Assests/search_light.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  //Create a useState Variable to store the theme mode

  let [theme, setTheme] = useState("Light");

  const toggleMethod = () => {
    console.log("theme", theme);
    theme === "Light" ? setTheme("Dark") : setTheme("Light");
  };
  return (
    <div>
      <div className="Navbar">
        <img src={logo} alt="" className="Logo"></img>
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              style={{ textDecoration: "none", color: "black" }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/Skills"
              style={{ textDecoration: "none", color: "black" }}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/Projects"
              style={{ textDecoration: "none", color: "black" }}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/Contact"
              style={{ textDecoration: "none", color: "black" }}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="search-box">
          <input type="text" placeholder="Search" className="input" />
          <img src={search_light} alt="" />
        </div>

        <div className="toggle">
          <img
            src={theme === "Light" ? darkMode : lightMode}
            alt=""
            onClick={toggleMethod}
          />
        </div>
      </div>
    </div>
  );
}
