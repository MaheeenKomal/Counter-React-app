import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Detail from './Detail';
import App from './App';

// const dte = new Date().toLocaleDateString();
// const tme = new Date().toLocaleTimeString();
// const name = 'Maheen Komal';
// const storepic =
//   'https://images.unsplash.com/photo-1593642634443-44adaa06623a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80';

ReactDOM.render(
  <>
    <Detail />
    <App />
    {/* <h1 contentEditable="true">{`The developer name is ${name}`}</h1>
    <h1>today date is = {dte}</h1>
    <h1>today time is = {tme}</h1>
    <div className="bind">
      <img className="imgData" src={storepic} alt="missing" />
      <img className="imgData" src={storepic} alt="missing" />
      <img className="imgData" src={storepic} alt="missing" />
    </div> */}
  </>,
  document.getElementById('root')
);
