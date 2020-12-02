import Axios from "axios";
import React, { useState, useEffect } from "react";

//css 
import "../../assets/css/UpdateStock.css"


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
    Axios.put("http://localhost:3001/login/emp/ub/update", {
      b_id: b_id,
      unitUpdate: unitUpdate,
    }).then(setunitUpdate(""));
  };
  return (
    <div className="dashboard">
      <h1>UPDATE BLOOD STOCK</h1>
      <div className="table-header">
        <h2>BLOOD GROUP</h2>
        <h2>UNIT</h2>
      </div>
      <div className="table-content">
        {bloodTable.map((val) => {
          return (
            <div className="row" key={val.b_id}>
              <div className="value">{val.blood_group}</div>
              <div className="value">{val.unit}</div>
              <input
                type="number"
                onChange={(e) => {
                  setunitUpdate(e.target.value);
                }}
              />
              <button onClick={() => ubStock(val.b_id)}>UPDATE</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default UpdateStock;
