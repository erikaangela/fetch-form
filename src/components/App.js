import React from "react";
import Field from "./Field";
import Options from "./Options";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      occupations: [],
      states: [],
    };
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

  render() {
    console.log(this.state.occupations);

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
          <label>Test</label>
          <select className="ui fluid dropdown">
            <option value="">Test</option>
            {this.state.occupations.map((occupation) => (
              <option value={occupation}>{occupation}</option>
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
