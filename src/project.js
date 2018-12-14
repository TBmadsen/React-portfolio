import React from "react";
import ReactDOM from "react-dom";

export default class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headline: "Dette er en overskrift"
    };
  }

  render() {
    return (
      <div>
        <h2 className="test">{this.state.headline}</h2>
      </div>
    );
  }
}
