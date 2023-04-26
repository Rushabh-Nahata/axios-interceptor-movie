import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContextHook } from "./Context";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./movie.css";

import { Container, Row, Col } from "react-grid-system";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

const Movie = () => {
  const { movie } = useGlobalContextHook();

  return (
    <>
      <div id="home">
        <div className="movie-container">
        <div className="movie-display">
              {movie.map((current) => {
                const { imdbID, Title, Poster } = current;
                const movieName = Title.substring(0, 15);
                return (
                  <div>
                    {/* <Col sm={4} md={3} lg={2}> */}
                      <NavLink to={`movie/${imdbID}`}>
                        <div className="movie-card">
                          <div className="movie-heading">
                            <h4>
                              {movieName.length >= 15
                                ? `${movieName} ...`
                                : movieName}
                            </h4>
                          </div>
                          <div className="movie-image-holder">
                            <img src={Poster} alt={imdbID} />
                          </div>
                          {/* <button style={{padding:"10px", margin:"10px"}} className="btn btn-primary">Extra details</button> */}
                        </div>
                      </NavLink>
                    {/* </Col> */}
                  </div>
                );
              })}
        </div>
        </div>
      </div>
    </>
  );
};

export default Movie;
