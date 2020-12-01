import React, { useState } from "react";
import Axios from 'axios'
//css
import '../../assets/css/EmployeeLogin.css'




const EmployeeLogin = () => {
  const [empUserName, setempUsername] = useState("");
  const [empPassword, setempPassword] = useState("");

const empLoginCheck=()=>{
  Axios.post('http://localhost/login/emp',{
    empUserName:empUserName,
    empPassword:empPassword
  }).then((response)=>{
    if(response.data.empLoginStatus){
      alert(response.data.empLoginStatus);
    }else{
      alert("WELCOME!");
    }
  })
}


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
        <button onClick={empLoginCheck}>Submit</button>
      </form>
    </div>
  );
};

export default EmployeeLogin;
