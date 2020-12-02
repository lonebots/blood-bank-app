import Axios from "axios";
import React, { useState, useEffect } from "react";

const UpdateStock = () => {
  //variables
  const [unitUpdate, setunitUpdate] = useState(0);
  //array of blood unit availbility
  const [bloodTable, setbloodTable] = useState([]);

  //useEffect call
  useEffect(() => {
    Axios.get("http://localhost:3001/login/emp/ub", (req, res) => {}).then(
      (response) => {
        //console.log(response.data);
        setbloodTable(response.data);
      }
    );
  });
  //updateBloodStock
  const ubStock = (b_id) => {
    Axios.put("http://localhost:3001/login/emp/ub/update",{
      b_id:b_id,
      unitUpdate:unitUpdate,
    }).then(setunitUpdate(""));
  };
  return (
    <div className="dashboard">
      <h1>UPDATE BLOOD STOCK</h1>

      <div className="thead">
        <h2>Blood Group</h2>
        <h2>Unit </h2>
      </div>

      {bloodTable.map((val) => {
        return (
          <div key={val.b_id}>
            {val.blood_group}
            {val.unit}
            <input type="number" onChange={(e)=>{setunitUpdate(e.target.value)}} />
            <button onClick={()=>ubStock(val.b_id)}>UPDATE</button>
          </div>
        );
      })}
    </div>
  );
};

export default UpdateStock;
