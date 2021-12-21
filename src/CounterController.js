import React, { useState } from "react";
import CounterView from "./CounterView";

const CounterController = () => {
  const [counter, setstate] = useState(0);

  const Add = (props) => {
    setstate(counter + 1);
  };
  const Sub = (props) => {
    setstate(counter - 1);
  };
  const Reset = (props) => {
    setstate(0);
  };

  return (
    <>
      <CounterView
        viewData={counter}
        addData={Add}
        subData={Sub}
        resetData={Reset}
      />
    </>
  );
};

export default CounterController;
