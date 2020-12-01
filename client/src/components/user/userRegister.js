import React,{useState,useEffect} from 'react'
import Axios from 'axios'

const UserRegister=()=>{
  const [userUserName, setuserUsername] = useState("");
  const [userPassword, setuserPassword] = useState("");
  const [userFName, setuserFName] = useState("");
  const [userMail, setuserMail] = useState("");
  const [userPhone, setuserPhone] = useState("");
  const [userAddress, setuserAddress] = useState("");
  const [userAge,setuserAge]=useState("");
  const[userGender,setuserGender]=useState("");

  const submituserloyeeRegister = () => {
    const regurl = "http://localhost:3001/reg/usr";
    Axios.post(regurl, {
      useFName: userFName,
      userAge:userAge,
      userGender:userGender,
      userMail: userMail,
      userPhone: userPhone,
      userAddress: userAddress,
      userUserName: userUserName,
      userpasword:userPassword,
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
            name="emailId"
            type="text"
            placeholder="Email Address"
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
            name="userAddress"
            type="text "
            placeholder="Address"
            onChange={(e) => {
              setuserAddress(e.target.value);
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
          <button onClick={submituserloyeeRegister}>REGISTER</button>
        </form>
      </div>
    );
}

export default UserRegister;