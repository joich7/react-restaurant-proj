import React from "react";
//import { Link } from "react-router-dom";
import logo from "../images/ainc-logo.png";
export default function Navbar() {
  return (
    <div className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <div className="navbar-header">
          <img src={logo} style={{ width: "90px" }} alt="awesome inc picture" />
          <p
            style={{
              color: "white",
              fontSize: "40px",
              marginTop: "30px",
              display: "inline-block",
              fontWeight: "200px",
              fontFamily: "Tilt Warp",
            }}
          >
            BOOTCAMP BRUNCHIN
          </p>
        </div>
      </div>
    </div>
  );
}

// <ul className="nav navbar-nav">
// <li>
//   <Link to={"home"}>Home</Link>
// </li>
// <li>
//   <Link to={"menu"}>Menu</Link>
// </li>
// </ul>
