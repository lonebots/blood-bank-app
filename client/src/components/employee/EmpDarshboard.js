import React, { useEffect, useState } from "react";
import Axios from "axios";

//css
import '../../assets/css/EmpDashboard.css'

const EmpDashBoard = () => {
  return (
    <div className="emp-dashboard">
      <a href="/login/emp/uh">
        <button>UPADATE HEALTH</button>
      </a>
      <a href="/login/emp/ub">
        <button>UPDATE BLOOD STOCK</button>
      </a>
    </div>
  );
};

export default EmpDashBoard;
