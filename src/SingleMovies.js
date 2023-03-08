import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { useGlobalContextHook } from "./Context";
import { API_URL } from "./Context";
import "./singlemovie.css"
const SingleMovies = () => {

  const { id } = useParams();

  // const [isLoading, setLoading] = useState(true);
  const [movie, setMovie] = useState("");


  useEffect(() => {
    let timeout = setTimeout(() => {
      getData(`${API_URL}&i=${id}`);
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [id]);

  const getData = async (url) => {
    // isLoading(true);
    try {
      // console.log(url);
      const respose = await fetch(url);
      const res = await respose.json();
      console.log(res);
      if (res.Response == "True") { 
        setMovie(res);
        // console.log(res.Search);
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

  console.log(id);

  return (
    <div>
      <div id="singlemovie">
        <div className="singlemovie">
          <div className="mainbox">
            <div className="movie-img-holder left">
              <img src={movie.Poster} alt={movie.Country}/>
            </div>
            <div className="right">
              <h4><span>Title of the Movie </span>: {movie.Title}</h4>
              <h4><span>Director</span> : {movie.Director}</h4>
              <h4><span>Country </span>: {movie.Country}</h4>
              <h4><span>Language </span>: {movie.Language}</h4>
              <h4><span>Released date</span> : {movie.Released}</h4>
              <h4><span>IMDB Rating </span>: {movie.imdbRating}</h4>
              <h4><span>Number of People voted </span>: {movie.imdbVotes}</h4>
              {/* <h4>Number of People voted: {movie.imdbVotes}</h4> */}

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovies;
