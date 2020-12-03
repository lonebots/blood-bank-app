import React, { useState, useEffect } from "react";
import Axios from "axios";
//css
import "../../assets/css/UpdateHealth.css";

const UpdateHealth = () => {
  var [userId, setuserId] = useState("");
  const [searchList, setsearchList] = useState([]);
  const [data,setdata]=useState("");

  //search for blood
  useEffect(() => {
    Axios.post("http://localhost:3001/login/emp/uh", {
      userId: userId,
    }).then((response) => {
      setsearchList(response.data);
    });
  });

//updateData
const updateData=()=>{

}


  //returning
  return (
    <div className="search">
      {" "}
      <form>
        <input
          type="text"
          placeholder="USER ID"
          name="userId"
          onChange={(e) => {
            setuserId(e.target.value);
          }}
          required
        />
      </form>
      <table className="blood-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone </th>
            <th>Place</th>
            <th>BloodGroup</th>
          </tr>
        </thead>
        <tbody>
          {searchList.map((val) => {
            return (
              <tr key={val.b_id}>
                <td>{val.userFName}</td>
                <td>{val.userPhone}</td>
                <td>{val.userPlace}</td>
                <td>{val.userBloodGroup}</td>
                <br />
                <input
                  type="number"
                  onChange={(e) => {
                    setdata(e.target.value);
                  }}
                />
                <button onClick={() => updateData(val.b_id)}>UPDATE</button>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default UpdateHealth;
