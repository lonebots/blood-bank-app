import React from "react";
//css
import "../../assets/css/UserDash.css";

const UserDashboard = () => {
  //donate function
  const donate = () => {
    alert("WE WILL GET IN TOUCH WITH YOU!");
  };

  const request =()=>{
      window.location='/request'
  }

  // const update=()=>{
    
  // }

  return (
    <div className="user-dash">
      <button onClick={donate}>DONATE</button>
      <button onClick={request}>REQUEST</button>
      {/* <button on onClick={update}>UPDATE</button> */}
    </div>
  );
};
export default UserDashboard;
