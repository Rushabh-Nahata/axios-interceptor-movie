import './App.css';
import React from 'react'
import {Routes,Route} from "react-router-dom";
import SingleMovies from "./SingleMovies"
import Home from "./Home"



function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home />}/>
         <Route path="movie/:id" element={<SingleMovies />}/>
      </Routes>
   
    </div>
  );
}

export default App;
