import React, { useState, useEffect } from "react";
import Axios from "axios";

//css
import '../../assets/css/HandleRequest.css'

const HandleRequest = () => {
  //Variables
  const [RequestTable, setRequestTable] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/login/emp/hr").then((response) => {
      if (response) {
        setRequestTable(response.data);
      } else {
        alert("error in retrieving request table");
      }
    });
  });


  //
  const serveRequest=()=>{
        Axios.delete("http://localhost:3001/login/emp/hr/accept").then((response)=>{
            if(response.data.message){
                alert(response.data.message);
            }
        })
  }
  return (
    <div className="handle-request">
      <h1>REQUEST TABLE</h1>
      <table className="req-table">
        <thead>
          <th>REQ-ID</th>
          <th>BLOOD GROUP</th>
          <th>UNIT</th>
        </thead>
        <tbody>
          {RequestTable.map((request, i) => {
            return (
              <tr key={i}>
                <td>{request.req_id}</td>
                <td>{request.blood_group}</td>
                <td>{request.unit}</td>
                <button onClick={()}>ACCEPT/SERVE</button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HandleRequest;