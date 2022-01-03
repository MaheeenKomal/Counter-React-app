import React, { useState } from "react";
import { CounterView } from "../CounterView";

export const CounterViewController = ({ viewModel }) => {
  const [counter, setstate] = useState(viewModel.getData());

  const Add = () => {
    setstate(counter + 1);
  };

  const Sub = () => {
    setstate(counter - 1);
  };

  const Reset = () => {
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
