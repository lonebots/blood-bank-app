import React, { useState } from "react";
import Axios from "axios";

import "../../assets/css/EmployeeRegister.css";

const EmployeeRegister = () => {
  const [empUserName, setempUsername] = useState("");
  const [empPassword, setempPassword] = useState("");
  const [empName, setempName] = useState("");
  const [empMail, setempMail] = useState("");
  const [empPhone, setempPhone] = useState("");
  const [empAddress, setempAddress] = useState("");

  const submitEmployeeRegister = () => {
    //post-url
    const regurl = "http://localhost:3001/reg/emp";
    //post-req
    Axios.post(regurl, {
      empName: empName,
      empMail: empMail,
      empPhone: empPhone,
      empAddress: empAddress,
      empUserName: empUserName,
      empPassword: empPassword,
    }).then((response) => {
      alert(response.data.message);
    });
  };

  return (
    <div className="emp-register">
      <h2>EMP Register</h2>
      <form className="empReg-form">
        <input
          name="empName"
          type="text "
          placeholder="Full Name"
          onChange={(e) => {
            setempName(e.target.value);
          }}
          required
        />
        <input
          name="emailId"
          type="text"
          placeholder="Email Address"
          onChange={(e) => {
            setempMail(e.target.value);
          }}
          required
        />
        <input
          name="empPhone"
          type="number"
          placeholder="Phone Number"
          onChange={(e) => {
            setempPhone(e.target.value);
          }}
          required
        />
        <input
          name="empAddress"
          type="text "
          placeholder="Address"
          onChange={(e) => {
            setempAddress(e.target.value);
          }}
          required
        />
        <input
          name="username"
          type="text"
          placeholder="User Name"
          onChange={(e) => {
            setempUsername(e.target.value);
          }}
        />
        <input
          name="password"
          type="text "
          placeholder="Password"
          onChange={(e) => {
            setempPassword(e.target.value);
          }}
        />
        <button onClick={submitEmployeeRegister}>Register</button>
      </form>
    </div>
  );
};

export default EmployeeRegister;
