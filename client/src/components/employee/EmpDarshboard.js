import React, { useEffect, useState } from "react";
import Axios from "axios";

const EmpDashBoard = () => {
  return (
    <div className="emp-dashboard">
      <a href="/login/emp/uh">
        <button>Update Health</button>
      </a>
      <a href="/login/emp/ub">
        <button>Update Blood Stock</button>
      </a>
    </div>
  );
};

export default EmpDashBoard;
