import React from "react";
import "./styles.css";
import { Route, Routes } from "react-router-dom";
import {connect} from "react-redux"
import HomePage from "./components/HomePage";
import Canditates from "./components/Canditates";
import About from "./components/About";
import UserDetail from "./components/UserDetail";


const App = ()  => {
    return (
    <div className="App">

      <h1>
              <img
          src="https://avatars3.githubusercontent.com/u/60869810?v=4"
          alt="React Dersleri"
        />{" "}
      İnsan Kaynakları / Sizin ile daha ileriye...
      </h1>
    
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/candidates" element={<Canditates/>} />
        <Route path="/candidates/:candidatesname" element={<UserDetail/>} />
        <Route path="/about" element={<About/>} />
        
      </Routes>
    </div>
  );
}


export default connect()(App)


