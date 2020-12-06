import React, { useEffect, useState } from "react";
import Axios from "axios";

import "../../assets/css/Request.css";

const Request = () => {
  //variables
  const [bloodTable, setbloodTable] = useState([]);
  var [bloodGroup, setbloodGroup] = useState("");
  const [requestUnit, setrequestUnit] = useState(0);

  //useEffect call
  useEffect(() => {
    Axios.get("http://localhost:3001/home").then((response) => {
      //console.log(response.data);
      setbloodTable(response.data);
    });
  });

  const requestBlood = () => {
    // Axios.post("http://localhost:3001/request", {
    //   bloodGroup: bloodGroup,
    //   requestUnit: requestUnit,
    // });
    bloodGroup=document.getElementById("bloodgroup").value
    console.log("blood group : " +bloodGroup);
    alert("hahahahahaaha")
  };

  return (
    <div className="request">
      <h3>REQUEST BLOOD</h3>
      <table className="blood-table">
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
              </tr>
            );
          })}
        </tbody>
      </table>
      <form>
        <select id="bloodgroup" onChange={setbloodGroup(document.getElementById("bloodgroup"))}>
          <option value="A+ve">A+ve</option>
          <option value="A-ve">A-ve</option>
          <option value="B+ve">B+ve</option>
          <option value="B-ve">B-ve</option>
          <option value="AB+ve">AB+ve</option>
          <option value="AB-ve">AB-ve</option>
          <option value="O+ve">O+ve</option>
          <option value="O-ve">O-ve</option>
          <option value="PNUll">P Null</option>
          
        </select>
        <input type="number" placeholder="UNITS" onChange={(e)=>{setrequestUnit(e.target.value )}} />
        <button onClick={requestBlood}>REQUEST</button>
      </form>
    </div>
  );
};
export default Request;
