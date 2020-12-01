import Axios from "axios";
import React, { useState, useEffect } from "react";

const UpdateStock = () => {
  //variables
  const [unitUpdate, setunitUpdate] = useState("");
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
  const ubStock = () => {
    Axios.put();
  };
  return (
    <div className="dashboard">
      <h1>UPDATE BLOOD STOCK</h1>

      
       
            <h2>Blood Group</h2>
            <h2>Unit </h2>
         

          {bloodTable.map((val) => {
            return (
              <div key={val.b_id}>
                {" "}
                
                  {val.blood_group}
                  {val.unit}
                
                <input type="number" />
                <button onClick={ubStock}>Update</button>
              </div>
            );
          })}
       
   
    </div>
  );
};

export default UpdateStock;
