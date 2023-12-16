import React, { PropsWithChildren } from "react";

export const RadioGroup = ({ children }) => {
  return (
    <div
      role="radiogroup"
      className="radio-group"
      aria-labelledby="group_heading"
    >
      <h3 id="group_heading" className="radio-title">
        Select a Bank
      </h3>
      {children}
    </div>
  );
};

export const Radio = ({ children, id, name }) => {
  return (
    <>
      <input type="radio" id={id} name={name} checked />
      <label className="radio-label" htmlFor={id}>
        {children}
      </label>
    </>
  );
};
