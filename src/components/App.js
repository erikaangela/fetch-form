import React from "react";
import Field from "./Field";

const App = () => {
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

      <div className="field">
        <label>Occupation</label>
        <select className="ui fluid dropdown">
          <option value="">Occupation</option>
        </select>
      </div>
      <div className="field">
        <label>State</label>
        <select className="ui fluid dropdown">
          <option value="">State</option>
        </select>
      </div>

      <button className="ui button" type="submit">
        Submit
      </button>
    </form>
  );
};

export default App;
