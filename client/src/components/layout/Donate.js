import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import UserRegister from "../user/userRegister";
import UserLogin from "../user/userLogin";

//css
import "../../assets/css/Donate.css";

const Donate = () => {
  return (
    <div className="donate">
      <Link to="/reg/usr">
        <button>REGISTER</button>
      </Link>
      <Link to="/login/usr">
        <button>LOGIN</button>
      </Link>

      <Routes>
        <Route path="/reg/usr" component={UserRegister} />
        <Route path="/login/usr" component={UserLogin} />
      </Routes>
    </div>
  );
};

export default Donate;
