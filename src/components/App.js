import React from "react";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      selectedOccupation: "",
      selectedState: "",
      occupations: [],
      states: [],
    };

    this.handleChange = this.handleChange.bind(this);
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

  handleChange(e) {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name: this.state.firstName,
      email: this.state.email,
      password: this.state.password,
      occupation: this.state.selectedOccupation,
      state: this.state.selectedState,
    };
    console.log(user);

    axios
      .post("https://frontend-take-home.fetchrewards.com/form", user)
      .then((response) => {
        console.log(response);
      });
  };

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <h4 className="ui dividing header">User Creation Form</h4>

        <div className="field">
          <label>Full Name</label>
          <div className="two fields">
            <div className="field">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </div>
            <div className="field">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </div>
          </div>
        </div>

        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div className="field">
          <label>Password</label>
          <input
            type="text"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </div>

        <div className="field">
          <label>Occupations</label>
          <select
            className="ui fluid dropdown"
            name="selectedOccupation"
            value={this.state.selectedOccupation}
            onChange={this.handleChange}
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
            name="selectedState"
            value={this.state.selectedState}
            onChange={this.handleChange}
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
