import React, { useContext, createContext, useEffect, useState } from "react";
// import axios from "./axiosinstance";
import axiosinstance from "./axiosinstance";
// 21f00cb7
const AppContext = createContext();
// export const API_URL = `http://www.omdbapi.com/?apikey=21f00cb7`;

const Context = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState({
    show: "false",
    msg: " ",
  });

  const [query, setQuery] = useState("titanic");

  useEffect(() => {
    let timeout = setTimeout(() => {
      axiosinstance.get(`?apikey=21f00cb7&s=${query}`).then((res) => {
        console.log(res);
        console.log(res.status);
        if (res.data.Response == "True") {
          setLoading(false);
          // let add=res.Search;
          setMovie(res.data.Search);
          console.log(res.data.Search);
          // console.log(add)
        } else {
          setError({
            show: "true",
            msg: res.error,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });

    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [query]);


  return (
    <AppContext.Provider value={{ isLoading, movie, error, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContextHook = () => {
  return useContext(AppContext);
};

export { AppContext, Context, useGlobalContextHook };
