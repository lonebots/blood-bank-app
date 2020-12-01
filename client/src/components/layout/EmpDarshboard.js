import React, { useEffect, useState } from "react";
import Axios from "axios";

const EmpDashBoard = () => {
  return (
    <div className="emp-dashboard">
      <a href="/login/emp/uh">Update Health</a>
      <a href="/login/emp/ub">Update Blood Stock</a>
    </div>
  );
};

export default EmpDashBoard;
