import React, { useState } from "react";
import Axios from 'axios'

//css
import "../../assets/css/Search.css";
//image
import bdrop from "../../assets/img/bdrop.png";

const Search = () => {
  //variables
  var [place, setplace] = useState("");
  var [blood, setblood] = useState("");
  const [searchList, setsearchList] = useState([]);

  //search for blood
const searchBlood =()=>{
    Axios.post("http://localhost:3001/home/search",{
      place:place,
      blood:blood,
    }).then(
     (response)=>{
       if(response.data.message){
         alert(response.data.message)
       }else{
         setsearchList(response.data);
       }
     }
    );
}
 
  //returning
  return (
    <form className="search">
      <input
        type="text"
        placeholder="PLACE"
        name="place"
        onChange={(e) => {
          setplace(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="BLOOD GROUP"
        name="bloodGroup"
        onChange={(e) => {
          setblood(e.target.value);
        }}
      />

      <button onClick={searchBlood}>
        <i className="fa fa-search">
          <a href="/home/search">s</a>
        </i>
      </button>
    </form>
  );
};

export default Search;
