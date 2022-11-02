import React from "react";

const Field = ({ label, type, name, placeholder }) => {
  return (
    <div className="field">
      {label ? <label>{label}</label> : null}
      <input type={type} name={name} placeholder={placeholder} />
    </div>
  );
};

export default Field;
