import React from "react";
import "./style.css";
import Button from "./Button";

const Appi = () => {
  return (
    <div className="container">
      <h1>Hello world</h1>
      <Button title="AppStore" />
      <Button title="PlayStore" />
      <Button title="GoogleStore" />
      <Button />

      {/* <button className="button">PlayStore</button>
      <button className="button">AppStore</button> */}
    </div>
  );
};

export default Appi;
