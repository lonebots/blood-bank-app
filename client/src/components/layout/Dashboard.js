import React, { useEffect, useState } from "react";
import Axios from "axios";


//css
import '../../assets/css/Dashboard.css';

const Dashboard = () => {
  //array of blood unit availbility
  const [bloodTable, setbloodTable] = useState([]);

  //useEffect call
  useEffect(() => {
    Axios.get("http://localhost:3001/home", (req, res) => {}).then(
      (response) => {
        //console.log(response.data);
        setbloodTable(response.data);
      }
    );
  });

  return (
    <div className="dashboard">
      <h1>BLOOD STOCK</h1>
    
      <table id="blood-table">
        <thead>
          <tr>
            <th>Blood Group</th>
            <th>Unit Available</th>
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
    </div>
  );
};

export default Dashboard;
