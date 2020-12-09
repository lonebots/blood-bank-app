import React from "react";

//css
import "../../assets/css/EmpDashboard.css";

const EmpDashBoard = () => {
  return (
    <div className="emp-dashboard">
      <a href="/login/emp/uh">
        <button>UPDATE HEALTH</button>
      </a>
      <a href="/login/emp/ub">
        <button>UPDATE BLOOD STOCK</button>
      </a>
      <a href="/login/emp/hr">
        <button>HANDLE REQUEST</button>
      </a>
    </div>
  );
};

export default EmpDashBoard;
