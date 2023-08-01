import React from "react";
import "./App.css";

// import RightSide from "./components/RigtSide/RightSide";

import MainDash from "./components/MainDash/MainDash";
import Sidebar from "./components/Sidebar";
import {Routes , Route } from 'react-router-dom'
import Services from './components/Service/Service'
import Message from './components/Message/Message'
import Order from './components/Order/Order'


function App() {
  return (
    <>
    <div className="App">
      <div className="AppGlass">
        <Sidebar />
        <Routes>
          <Route path = "/" element = {<MainDash/>}></Route>
          <Route path = "/services" element = {<Services/>}></Route>
          <Route path = "/messages" element = {<Message/>}></Route>
          <Route path = "/orders" element = {<Order/>}></Route>
        </Routes>

        
      </div>
    </div>
    </>
  );
}

export default App;
