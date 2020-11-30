import React, { useState } from "react";

const EmployeeLogin = () => {
  const [empUserName, setempUsername] = useState("");
  const [empPassword, setempPassword] = useState("");

  return (
    <div className="emp-login">
      <h2>Login</h2>
      <form className="container">
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
