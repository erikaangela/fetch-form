import React from "react";
import axios from "axios";

// const validateForm = (errors) => {
//   let valid = true;
//   Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
//   return valid;
// };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      selectedOccupation: "",
      selectedState: "",
      occupations: [],
      states: [],
      errors: {},
      submitRequested: false,
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
      })
      .catch((error) => console.log(error));
  }

  handleChange(e) {
    const { name, value } = e.target;

    this.setState({ ...this.state, [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const submitRequested = true;

    this.setState({ submitRequested });

    const user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      occupation: this.state.selectedOccupation,
      state: this.state.selectedState,
    };

    const errors = this.validateForm(user);

    this.setState({ errors });

    if (
      Object.keys(this.state.errors).length === 0 &&
      this.state.submitRequested
    ) {
      axios
        .post("https://frontend-take-home.fetchrewards.com/form", user)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log(error));
    }
  };

  validateForm(values) {
    const errors = {};
    const validEmailRegex = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );
    if (!values.name) {
      errors.name = "Name is required.";
    }
    if (!values.email) {
      errors.email = "Email is required.";
    } else if (!validEmailRegex.test(values.email)) {
      errors.email = "Format is not a valid email format.";
    }
    if (!values.password) {
      errors.password = "Password is required.";
    }
    if (!values.occupation) {
      errors.occupation = "Occupation is required.";
    }
    if (!values.state) {
      errors.state = "State is required.";
    }
    return errors;
  }

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <h4 className="ui dividing header">User Creation Form</h4>

        <div className="field">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter first and last name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <p>{this.state.errors.name}</p>
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
        <p>{this.state.errors.email}</p>

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
          <label>Occupation</label>
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
