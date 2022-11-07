import React, { useState } from "react";

const Field = ({ label, type, name, placeholder }) => {
  const [value, setValue] = useState("");

  return (
    <div className="field">
      {label ? <label>{label}</label> : null}
      <input type={type} name={name} placeholder={placeholder} value={value} />
    </div>
  );
};

export default Field;
