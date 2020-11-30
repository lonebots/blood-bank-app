import React from "react";
import { Link } from "react-router-dom";

import "../../assets/css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <a href="/home">BBMS</a>
      <a href="/donate">DONATE</a>
    </nav>
  );
};

export default Navbar;
