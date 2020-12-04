import React from "react";
//css
import "../../assets/css/UserDash.css";

const UserDashboard = () => {
  //donate function
  const donate = () => {
    alert("WE WILL GET IN TOUCH WITH YOU!");
  };

  return (
    <div className="user-dash">
      <button onClick={donate}>DONATE</button>
      <button>REQUEST</button>
    </div>
  );
};
export default UserDashboard;
