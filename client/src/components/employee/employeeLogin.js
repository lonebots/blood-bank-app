import React, { useState } from "react";

//css
import '../../assets/css/EmployeeLogin.css'

const EmployeeLogin = () => {
  const [empUserName, setempUsername] = useState("");
  const [empPassword, setempPassword] = useState("");

  return (
    <div className="emp-login">
      <h2>EMPLOYEE LOGIN</h2>
      <form >
        <input
          name="username"
          type="text "
          placeholder="User Name"
          onChange={(e) => {
            setempUsername(e.target.value);
          }}
        />
        <input
          name="password"
          type="text "
          placeholder="password"
          onChange={(e) => {
            setempPassword(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default EmployeeLogin;
