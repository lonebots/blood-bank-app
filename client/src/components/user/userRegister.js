import React, { useState } from "react";
import Axios from "axios";

//css
import "../../assets/css/UserRegister.css";

const UserRegister = () => {
  const [userUserName, setuserUsername] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [userFName, setuserFName] = useState("");
  const [userMail, setuserMail] = useState("");
  const [userPhone, setuserPhone] = useState("");
  const [userPlace, setuserPlace] = useState("");
  const [userAge, setuserAge] = useState("");
  const [userGender, setuserGender] = useState("");
  const [userBloodGroup, setuserBloodGroup] = useState("");

  const submituserRegister = () => {
    const regurl = "http://localhost:3001/reg/usr";
    Axios.post(regurl, {
      userFName: userFName,
      userAge: userAge,
      userGender: userGender,
      userBloodGroup: userBloodGroup,
      userPhone: userPhone,
      userMail: userMail,
      userPlace: userPlace,
      userUserName: userUserName,
      userPassword: userPassword,
    }).then((response) => {
      alert(response.data.message);
    });
  };

  return (
    <div className="user-register">
      <h2>DONAR REGISTER</h2>
      <form className="userReg-form">
        <input
          name="userFName"
          type="text "
          placeholder="Full Name"
          onChange={(e) => {
            setuserFName(e.target.value);
          }}
          required
        />
        <input
          name="userAge"
          type="text "
          placeholder="Age"
          onChange={(e) => {
            setuserAge(e.target.value);
          }}
          required
        />
        <input
          name="userGender"
          type="text "
          placeholder="Gender(M/F)"
          onChange={(e) => {
            setuserGender(e.target.value);
          }}
          required
        />
        <input
          name="userBloodGroup"
          type="text "
          placeholder="Blood Group"
          onChange={(e) => {
            setuserBloodGroup(e.target.value);
          }}
          required
        />
        <input
          name="emailId"
          type="text"
          placeholder="Email Place"
          onChange={(e) => {
            setuserMail(e.target.value);
          }}
          required
        />
        <input
          name="userPhone"
          type="number"
          placeholder="Phone Number"
          onChange={(e) => {
            setuserPhone(e.target.value);
          }}
          required
        />
        <input
          name="userPlace"
          type="text "
          placeholder="Place"
          onChange={(e) => {
            setuserPlace(e.target.value);
          }}
          required
        />
        <input
          name="username"
          type="text "
          placeholder="User Name"
          onChange={(e) => {
            setuserUsername(e.target.value);
          }}
        />
        <input
          name="password"
          type="text "
          placeholder="Password"
          onChange={(e) => {
            setuserPassword(e.target.value);
          }}
        />
        <button onClick={submituserRegister}>REGISTER</button>
      </form>
    </div>
  );
};

export default UserRegister;
