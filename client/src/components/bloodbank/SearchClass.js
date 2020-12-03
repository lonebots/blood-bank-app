import React, { Component } from "react";
import Axios from "axios";
//import setSearchList from './SetSearchLists'

export default class SearhClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: true,
      place: "",
      blood: "",
      searchList: [],
    };
  }
  //
  setPlace = (e) => {
    this.setState({
      place: e.target.value,
    });
  };

  //
  setBlood = (e) => {
    this.setState({
      blood: e.target.value,
    });
  };
  setsearchList = (result) => {};
  //search for blood

  render() {
    const searchBlood = () => {
      Axios.post("http://localhost:3001/home/search", {
        place: this.state.place,
        blood: this.state.blood,
      }).then((response) => {
        if (response.data.message) {
          alert(response.data.message);
        } else {
          this.setState({
            result: true,
            searchList:response.data
          });
        
      };
      })};

    return (
      <form className="search">
        <input
          type="text"
          placeholder="PLACE"
          name="place"
          onChange={this.setPlace}
        />
        <input
          type="text"
          placeholder="BLOOD GROUP"
          name="bloodGroup"
          onChange={this.setBlood}
        />

        <button onClick={searchBlood}>
          <i className="fa fa-search"></i>
        </button>
      </form>
    );
  }
}
