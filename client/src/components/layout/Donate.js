import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import UserRegister from "../user/UserRegister";
import UserLogin from "../user/UserLogin";

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

      <Switch>
        <Route path="/reg/usr" component={UserRegister} />
        <Route path="/login/usr" component={UserLogin} />
      </Switch>
    </div>
  );
};

export default Donate;
