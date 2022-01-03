import React, { useState, useEffect } from "react";
import CounterView from "./CounterView";
import ViewModel from "./ViewModel";

// const getData = (props) => {
//   let data = localStorage.getItem("Data");
//   console.log(data);
//   if (data) {
//     return JSON.parse(localStorage.getItem("Data"));
//   } else {
//     return 0;
//   }
// };
const CounterController = () => {
  const [counter, setstate] = useState(getData());

  const Add = (props) => {
    setstate(counter + 1);
  };
  const Sub = (props) => {
    setstate(counter - 1);
  };
  const Reset = (props) => {
    setstate(0);
  };
  useEffect(() => {
    localStorage.setItem("Data", JSON.stringify(counter));
  }, [counter]);

  return (
    <>
      <CounterView
        viewData={counter}
        addData={Add}
        subData={Sub}
        resetData={Reset}
      />
      <ViewModel getData={Add} removeData={Sub} resetData={Reset} />
    </>
  );
};

export default CounterController;
