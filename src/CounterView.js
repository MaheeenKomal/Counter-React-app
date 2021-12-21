import React from "react";
import "./index.css";
const CounterView = (props) => {
  return (
    <>
      <div className="container">
        <h1>Welcome to the Counter App</h1>
        <h2>{props.viewData}</h2>
        <div className="bind">
          <button onClick={props.addData}>Add</button>
          <button onClick={props.subData}>Sub</button>
          <button onClick={props.resetData}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default CounterView;
