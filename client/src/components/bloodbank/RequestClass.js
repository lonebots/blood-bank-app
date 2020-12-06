import React, { Component } from "react";

export default class RequestClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bloodGroup: [],
    };
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

  render() {
    const { bloodGroup } = this.state;

    let bloodGroupList =
      bloodGroup.length > 0 &&
      bloodGroup.map((blood, i) => {
        return (
          <option key={i} value={blood.id}>
            {blood.name}
          </option>
        );
      });

    return (
      <div className="request">
        <form>
            <select>
                {bloodGroupList}
            </select>
        </form>
      </div>
    );
  }
}
