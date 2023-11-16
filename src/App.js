/* 
-------------------------------------------------------------------------------------------
                                      Sivleen Kaur
                                      (A00474480)
                                    React assignment
-------------------------------------------------------------------------------------------
*/

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import AboutMe from "./pages/AboutMe"
import MyTown from "./pages/MyTown"

function App() {
  
  const Navigation = () => {
    
    return (
      <nav className="navigationBar">
        <div className="navigationLink">
          <a href="/"> About Me </a>
        </div>
        <div className="navigationLink">
          <a href="/myTown"> My Town </a>
        </div>
      </nav>);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path = '/' element = {<AboutMe />} />
          <Route path = '/myTown' element = {<MyTown />} />
        </Routes>
      </BrowserRouter>
    </div> 
  );
}

export default App;
