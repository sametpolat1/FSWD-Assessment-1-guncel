import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { createStore, applyMiddleware} from "redux";
import {conditates} from "./reducers"
import {Provider} from "react-redux"
import thunk from "redux-thunk";


const initialState={}

const allEnhancers = applyMiddleware(thunk);
const myStore = createStore(conditates,initialState, allEnhancers);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Provider store ={myStore}>
    <Router>
      <App />
    </Router>
    </Provider>
  </React.StrictMode>,
  rootElement
);
