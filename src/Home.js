import React from 'react'
import Search from "./Search";
import Movies from "./Movies";
// import { AppContext, useGlobalContextHook } from './Context';
const Home = () => {

  return (
    <div>
        <h1>Rushabh</h1>
        
        <Search/>
        <Movies/>
    </div>
  )
}

export default Home