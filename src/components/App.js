import React, { useEffect } from "react";
import Field from "./Field";
import Options from "./Options";
import axios from "axios";

const App = () => {
  const fetchOptions = () => {
    axios
      .get("https://frontend-take-home.fetchrewards.com/form")
      .then((response) => console.log(response.data));
  };

  useEffect(() => {
    fetchOptions();
  }, []);

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

      <Options label="Occupation" />
      <Options label="State" />

      <button className="ui button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default App;
