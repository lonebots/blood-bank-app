import React from "react";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/layout/Dashboard";
import UserLogin from "./components/user/UserLogin";
import UserRegister from "./components/user/UserRegister";
import EmployeeLogin from "./components/employee/EmployeeLogin";
import EmployeRegister from "./components/employee/EmployeeRegister";
import Footer from "./components/layout/Footer";
import UserDashboard from './components/user/UserDashboard'
import EmpDashboard from './components/employee/EmpDarshboard'
import 
import Donate from "./components/layout/Donate";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
     <Route exact path="/home" component={Dashboard} />
        <Route exact path="/donate" component={Donate} />
        <Route exact path="/login/usr" component={UserLogin} />
        <Route exact path="/login/emp" component={EmployeeLogin} />
        <Route exact path="/reg/usr" component={UserRegister} />
        <Route exact path="/reg/emp" component={EmployeRegister} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
