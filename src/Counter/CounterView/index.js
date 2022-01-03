export const CounterView = ({ addData, resetData, subData, viewData }) => {
  return (
    <div className="container">
      <h1>Welcome to the Counter App</h1>
      <h2>{viewData}</h2>
      <div className="bind">
        <button onClick={addData}>Add</button>
        <button onClick={subData}>Sub</button>
        <button onClick={resetData}>Reset</button>
      </div>
    </div>
  );
};
