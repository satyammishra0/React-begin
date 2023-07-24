import React from "react";

const button = ({ title = "nothing" }) => (
  <div>
    <button className="button">{title}</button>
  </div>
);

export default button;
