import React from 'react'
import { useGlobalContextHook } from './Context'
import "./search.css"

const Search = () => {

  const {query,setQuery,error} = useGlobalContextHook();

  return (
    <div>
      <div className="search">
        <input
          type="text"
          placeholder="Enter a Movie Name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <p>{error.show && error.msg}</p>
    </div>
  );
}

export default Search