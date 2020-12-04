import Axios from "axios";
import React, { useState, useEffect } from "react";

//css
import "../../assets/css/UpdateStock.css";

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

      <table className="update-blood-table">
        <thead>
          <tr>
            <th>Blood Group</th>
            <th>Unit </th>
          </tr>
        </thead>
        <tbody>
          {bloodTable.map((val) => {
            return (
              <tr key={val.b_id}>
                <td>{val.blood_group}</td>
                <td>{val.unit}</td>
                <input
                  type="number"
                  onChange={(e) => {
                    setunitUpdate(e.target.value);
                  }}
                />
                <button onClick={() => ubStock(val.b_id)}>UPDATE</button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default UpdateStock;
