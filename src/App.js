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
    </div>
  );
};

export default Appi;
