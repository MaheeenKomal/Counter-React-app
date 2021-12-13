import React, {useState} from 'react';

const App = () => {
  const state = useState();
  const [counter, setstate] = useState(0);

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
      <div className="container">
        <h2>{counter}</h2>
        <div className="bind">
          <button onClick={Add}>Add</button>
          <button onClick={Sub}>Sub</button>
          <button onClick={Reset}>Reset</button>
          
        </div>
      </div>
    </>
  );
};
export default App;
