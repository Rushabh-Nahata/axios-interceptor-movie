import React from 'react'
import Search from "./Search";
import Navbar from "./Navbar";
import Movie from "./Movie";
// import { Navbar } from 'react-bootstrap';
// import { AppContext, useGlobalContextHook } from './Context';
const Home = () => {

  return (
    <div>
        {/* <h1>Rushabh</h1>
         */}
        <Navbar/>
        <Search/>
        <Movie/>
    </div>
  )
}

export default Home