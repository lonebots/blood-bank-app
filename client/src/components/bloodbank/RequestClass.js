import React, { Component } from "react";
import Axios from 'axios'

export default class RequestClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bloodGroup: [],
      
    };
 this.selectBlood=this.selectBlood.bind(this);  
 this.request=this.request.bind(this);
  }
 

  componentDidMount() {
    this.setState({
      bloodGroup: [
        { id: "A+ve", name: "A+ve" },
        { id: "A-ve", name: "A-ve" },
        { id: "B+ve", name: "B+ve" },
        { id: "B-ve", name: "B-ve" },
        { id: "AB+ve", name: "AB+ve" },
        { id: "AB-ve", name: "AB-ve" },
        { id: "O+ve", name: "O+ve" },
        { id: "O-ve", name: "O-ve" },
        { id: "PNull", name: "PNull" },
      ],
    });
  }

selectBlood=(e)=>{
  var index=e.target.value;
    //let blood=e.targ;
    return(index);
   // console.log(`blood : ${blood}`);
}

  request=()=>{
   
    console.log("blood :"+this.selectBlood)
    alert("hahahaah")
  }

  render() {
    const { bloodGroup } = this.state;

    let bloodGroupList =
      bloodGroup.length > 0 &&
      bloodGroup.map((blood, i) => {
        return (
          <option key={i} value={blood.name}>
            {blood.name}
          </option>
        );
      });

    return (
      <div className="request">
        <form>
            <select onChange={this.selectBlood}>
                {bloodGroupList}
            </select>
            <input type="number" placeholder="UNIT"/>
            <button onClick={this.request} >REQUEST</button>
        </form>
      </div>
    );
  }
}
