import React from 'react'
import "./App.css"
import search from "../src/images/search.png"
const Navbar = () => {
  return (
    <div>
      <div className="movie-navbar">
        <h1>Movie- Searcher</h1>
        <div className="movie-image">
            <img src={search} alt={search}/>
        </div>
      </div>
    </div>
  );
}

export default Navbar