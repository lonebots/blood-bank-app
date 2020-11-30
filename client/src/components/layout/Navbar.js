import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import UserLogin from "../user/UserLogin";
import EmployeeLogin from "../employee/EmployeeLogin";
import  EmployeRegister from '../employee/EmployeeRegister'


import "../../assets/css/Navbar.css";
import EmployeeRegister from "../employee/EmployeeRegister";

const Navbar = () => {
  return (
    <nav className="nav.nav-wrapper grey darken -3">
      <div className="container">
        <Link to="/" className="bbms">
          BBMS
        </Link>
        <Link to="/emp/reg/" className="empLogin">RegisterEmp</Link>
      </div>
      <Switch>
        <Route path="/emp/reg" component={EmployeeRegister}/>
      </Switch>
    </nav>
  );
};

export default Navbar;
