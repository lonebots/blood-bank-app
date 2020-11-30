import React from "react";
import { Link} from "react-router-dom";

import "../../assets/css/Navbar.css";


const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <Link to="/" className="bbms">
          BBMS
        </Link>
        <a href="/reg" className="empLogin">Register</a>
        <a href= "/donate" className="donate">Donate</a>
      </div>
    
    </nav>
  );
};

export default Navbar;
