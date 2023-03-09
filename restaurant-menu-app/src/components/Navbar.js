import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar navbar-expand-sm bg-dark navbar-dark">
      <div className="container-fluid">
        <div className="navbar-header">
          <img
            src="https://d33wubrfki0l68.cloudfront.net/218e45ef934f5059b768a6efba8ffd07bfdccb8d/a2818/images/logos/ainc-logo-horizontal-white-text.png"
            style={{ width: "200px" }}
            alt="awesome inc picture"
          />
          <span>BOOTCAMP BRUNCHIN</span>
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
