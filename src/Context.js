import React, { useContext, createContext, useEffect, useState } from "react";
import axios from "axios";
// 21f00cb7
const AppContext = createContext();
export const API_URL = `http://www.omdbapi.com/?apikey=21f00cb7`;

const AppProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState({
    show: "false",
    msg: " ",
  });

  const [query, setQuery] = useState("titanic");

  useEffect(() => {
    let timeout = setTimeout(() => {
      getData(`${API_URL}&s=${query}`);
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [query]);

  const getData = async (url) => {
    // isLoading(true);
    try {
      // console.log(url);
      const respose = await fetch(url);
      const res = await respose.json();
      console.log(res);
      if (res.Response == "True") { 
        setMovie(res.Search);
        console.log(res.Search);
        setLoading(false);
        setError({
          show: false,
          msg: "",
        });
      } else {
        setError({
          show: true,
          msg: data.Error,
        });
      }
    } catch (err) {
      console.log("Error Ocured " + err);
    }
  };

  return (
    <AppContext.Provider value={{ isLoading, movie, error, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContextHook = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContextHook };

// function getData () {
// axios.get(API_URL)
//      .then(res=>{
//         console.log(res.data.Response);
//          console.log(res.status);
//          if(res.data.Response == "True") {
//             setLoading(false);
//             // let add=res.Search;
//             setMovie(res.data.Search);
//             console.log(res.data.Search);
//             // console.log(add)
//          }

//          else{
//             setError({
//                 show:"true",
//                 msg:res.error
//             })
//          }
//      })
//      .catch(err=>{
//          console.log(err)
//      })
//     }

//     useEffect(() => {
//         getData();
//     }, []);
