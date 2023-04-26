import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import "./singlemovie.css"
import axiosinstance from "./axiosinstance";
const SingleMovies = () => {

  const { id } = useParams();
  const [movie, setMovie] = useState("");

useEffect(() => {
  axiosinstance
    .get(`?apikey=21f00cb7&i=${id}`)
    .then((response) => {
      setMovie(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);

  return (
    <div>
      <div id="singlemovie">
        <div className="singlemovie">
          <div className="mainbox">
            <div className="movie-img-holder left">
              <img src={movie.Poster} alt={movie.Country}/>
            </div>
            <div className="single-movie-right">
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
