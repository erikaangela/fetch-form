import React, { useEffect, useState } from "react";
import axios from "axios";

import "../stylesheet.css";

const Form = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    occupation: "",
    state: "",
    occupations: [],
    states: [],
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [submitRequested, setSubmitRequested] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await axios
        .get("https://frontend-take-home.fetchrewards.com/form")
        .then((response) => {
          const { occupations, states } = response.data;

          setFormValues({
            ...formValues,
            occupations: occupations,
            states: states,
          });
        })
        .catch((error) => console.log(error));
    }
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(formValues));
    setSubmitRequested(true);
  };

  useEffect(() => {
    if (Object.values(formErrors).length === 0 && submitRequested) {
      axios
        .post("https://frontend-take-home.fetchrewards.com/form", formValues)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => console.log(error));
    }
  }, [formErrors]);

  const validateForm = (values) => {
    const formErrors = {};
    const validEmailRegex = RegExp(
      /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    );

    if (!values.name) {
      formErrors.name = "Required";
    }
    if (!values.email) {
      formErrors.email = "Required";
    } else if (!validEmailRegex.test(values.email)) {
      formErrors.email = "Format is not a valid email format.";
    }
    if (!values.password) {
      formErrors.password = "Required";
    }
    if (!values.occupation) {
      formErrors.occupation = "Required";
    }
    if (!values.state) {
      formErrors.state = "Required";
    }
    return formErrors;
  };

  return (
    <form className="ui form" onSubmit={handleSubmit}>
      <h3 className="ui dividing header">User Creation Form</h3>

      <div className="field">
        <label>
          Full Name <span className="required">{formErrors.name}</span>
        </label>
        <input
          type="text"
          name="name"
          placeholder="Last Name, First Name (e.g., Smith, John)"
          value={formValues.name}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label>
          Email <span className="required">{formErrors.email}</span>
        </label>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formValues.email}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label>
          Password <span className="required">{formErrors.password}</span>
        </label>
        <input
          type="text"
          name="password"
          placeholder="Password"
          value={formValues.password}
          onChange={handleChange}
        />
      </div>

      <div className="field">
        <label>
          Occupation <span className="required">{formErrors.occupation}</span>
        </label>
        <select
          className="ui fluid dropdown"
          name="occupation"
          value={formValues.occupation}
          onChange={handleChange}
        >
          <option value="">Select an occupation</option>
          {formValues.occupations.map((occupation) => (
            <option value={occupation} key={occupation}>
              {occupation}
            </option>
          ))}
        </select>
      </div>

      <div className="field">
        <label>
          State <span className="required">{formErrors.state}</span>
        </label>
        <select
          className="ui fluid dropdown"
          name="state"
          value={formValues.state}
          onChange={handleChange}
        >
          <option value="">Select a state</option>
          {formValues.states.map((state) => (
            <option value={state.name} key={state.abbreviation}>
              {state.name}
            </option>
          ))}
        </select>
      </div>

      <button className="large ui button" type="submit">
        Register
      </button>

      {Object.values(formErrors).length === 0 && submitRequested ? (
        <div className="ui positive message">
          <i className="close icon"></i>
          <div className="header">Your user registration was successful.</div>
          <p>You may now log-in with the username you have chosen.</p>
        </div>
      ) : null}
    </form>
  );
};

export default Form;
