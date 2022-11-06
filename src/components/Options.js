import React from "react";

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  // function mapping options based on inputed list
  mapOptions() {
    return this.props.array.map((item) => {
      <option value="">label</option>;
    });
  }

  // pass data back to App.js
  render() {
    return (
      <div className="field">
        <label>{this.props.label}</label>
        <select className="ui fluid dropdown" value={this.state.value}>
          <option value="">{this.props.label}</option>
          {/* {this.mapOptions} */}
        </select>
      </div>
    );
  }
}

export default Options;
