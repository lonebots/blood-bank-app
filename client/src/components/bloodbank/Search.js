import React from "react";
import Axios from "axios";

//css
import "../../assets/css/Search.css";
//image
import bdrop from "../../assets/img/bdrop.png";

const Search = () => {
  return (
    <form class="search">
      <input type="text" placeholder="PLACE" name="search" />
      <select name="bloodgroup">
        <option style={{ color: "red", fontWeight: "bolder" }} value="A+ve">
          A +ve
        </option>
        <option style={{ color: "red", fontWeight: "bolder" }} value="A-ve">
          A -ve
        </option>
        <option style={{ color: "red", fontWeight: "bolder" }} value="B+ve">
          B +ve
        </option>
        <option style={{ color: "red", fontWeight: "bolder" }} value="B-ve">
          B -ve
        </option>
        <option style={{ color: "red", fontWeight: "bolder" }} value="AB+ve">
          AB +ve
        </option>
        <option style={{ color: "red", fontWeight: "bolder" }} value="AB-ve">
          AB -ve
        </option>
        <option style={{ color: "red", fontWeight: "bolder" }} value="O+ve">
          O +ve
        </option>
        <option style={{ color: "red", fontWeight: "bolder" }} value="O-ve">
          O -ve
        </option>
        <option style={{ color: "red", fontWeight: "bolder" }} value="PNull">
          P Null
        </option>
      </select>
      <button type="submit">
        <i class="fa fa-search"></i>
      </button>
    </form>
  );
};

export default Search;
