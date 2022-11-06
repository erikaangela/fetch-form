import React from "react";
import Field from "./Field";
// import Options from "./Options";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      occupations: [],
      states: [],
      selectedOccupation: "",
      selectedState: "",
    };

    this.handleOccupationChange = this.handleOccupationChange.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://frontend-take-home.fetchrewards.com/form")
      .then((response) => {
        const { occupations, states } = response.data;
        this.setState({ occupations });
        this.setState({ states });
      });
  }

  handleOccupationChange(e) {
    console.log("occupation selected");
    this.setState({ selectedOccupation: e.target.value });
  }

  handleStateChange(e) {
    console.log("state selected");
    this.setState({ selectedState: e.target.value });
  }

  render() {
    return (
      <form className="ui form">
        <h4 className="ui dividing header">User Creation Form</h4>

        <div className="field">
          <label>Full Name</label>
          <div className="two fields">
            <Field type="text" name="first-name" placeholder="First Name" />
            <Field type="text" name="last-name" placeholder="Last Name" />
          </div>
        </div>

        <Field label="Email" type="text" name="email" placeholder="Email" />
        <Field
          label="Password"
          type="text"
          name="password"
          placeholder="Password"
        />

        {/* <Options label="Occupation" array={this.state.occupations} />
        <Options label="State" /> */}

        <div className="field">
          <label>Occupations</label>
          <select
            className="ui fluid dropdown"
            value={this.state.selectedOccupation}
            onChange={this.handleOccupationChange}
          >
            <option value="">Select an occupation</option>
            {this.state.occupations.map((occupation) => (
              <option value={occupation} key={occupation}>
                {occupation}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label>State</label>
          <select
            className="ui fluid dropdown"
            value={this.state.selectedState}
            onChange={this.handleStateChange}
          >
            <option value="">Select a state</option>
            {this.state.states.map((state) => (
              <option value={state.name} key={state.abbreviation}>
                {state.name}
              </option>
            ))}
          </select>
        </div>

        <button className="ui button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default App;
