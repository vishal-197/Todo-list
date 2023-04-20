import React from 'react';
import ReactDOM from 'react-dom/client';
import {Counter} from './Counter';
import "./counter.css";

import {Todo} from './Todo.js';
// import {newli} from "./Todo.js";
// import {livalue} from "./Todo.js";
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <div id="dI">
  <Counter/>
  
{  <Todo />}
 </div> 
);

