import React from "react";

const App = () => {
  return (
    <form className="ui form">
      <h4 className="ui dividing header">User Creation Form</h4>

      <div className="field">
        <label>Full Name</label>
        <div className="two fields">
          <div className="field">
            <input type="text" name="first-name" placeholder="First Name" />
          </div>
          <div className="field">
            <input type="text" name="last-name" placeholder="Last Name" />
          </div>
        </div>
      </div>
      <div className="field">
        <label>Email</label>
        <input type="text" name="email" placeholder="Email" />
      </div>
      <div className="field">
        <label>Password</label>
        <input type="text" name="password" placeholder="Password" />
      </div>
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
