import React, { useState, useEffect } from "react";
import Axios from 'axios'

//css
import '../../assets/css/UserLogin.css'

const UserLogin = () => {
  const [userUserName, setuserUserName] = useState("");
  const [userPassword, setuserPassword] = useState("");

  const userLoginCheck = () => {
    Axios.post("/login/usr/",{
      userUserName:userUserName,
      userPassword:userPassword,
    }).then((response)=>{
      console.log(response);
    })
  };

  return (
    <div className="user-login">
      <h2>Login</h2>
      <form>
        <input
          name="username"
          type="text "
          placeholder="User Name"
          onChange={(e) => {
            setuserUserName(e.target.value);
          }}
        />
        <input
          name="password"
          type="text "
          placeholder="password"
          onChange={(e) => {
            setuserPassword(e.target.value);
          }}
        />
        <button onClick={userLoginCheck}>Submit</button>
      </form>
    </div>
  );
};

export default UserLogin;
