import React, { useState, useEffect } from "react";

//css
import '../../assets/css/UserLogin.css'

const UserLogin = () => {
  const [userName, setuserName] = useState("");
  const [password, setpasword] = useState("");

  const userLoginSubmit = () => {};

  return (
    <div className="user-login">
      <h2>Login</h2>
      <form>
        <input
          name="username"
          type="text "
          placeholder="User Name"
          onChange={(e) => {
            setuserName(e.target.value);
          }}
        />
        <input
          name="password"
          type="text "
          placeholder="password"
          onChange={(e) => {
            setpasword(e.target.value);
          }}
        />
        <button onClick={userLoginSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default UserLogin;
