import React, { useEffect } from "react";
import axios from "axios";

const Options = ({ label }) => {
  return (
    <div className="field">
      <label>{label}</label>
      <select className="ui fluid dropdown">
        <option value="">{label}</option>
      </select>
    </div>
  );
};

export default Options;
