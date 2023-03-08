import React from "react";
import { NavLink } from "react-router-dom";
import { useGlobalContextHook } from "./Context";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./movies.css";

import { Container, Row, Col } from "react-grid-system";
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

const Movies = () => {
  const { movie } = useGlobalContextHook();

  // if (isLoading) {
  //   return (
  //     <section className="movie-section ">
  //       <div className="loading">Loading....</div>;
  //     </section>
  //   );
  // }

  return (
    <>
      <div className="gridd">
        <Container>
          <Row>
            {movie.map((current) => {
          
              const { imdbID, Title, Poster } = current;
              const movieName=  Title.substring(0,15);
              return (
                <div>
                  <Col sm={4} md={3} lg={2}>
                    <NavLink to={`movie/${imdbID}`}>
                      <div className="cardd">
                        <div className="heading">
                          <h6>{movieName.length >=15 ? `${movieName} ...` :movieName}</h6>
                        </div>
                        <div className="image-holder">
                          <img src={Poster} alt={imdbID} />
                        </div>
                        {/* <button style={{padding:"10px", margin:"10px"}} className="btn btn-primary">Extra details</button> */}
                      </div>
                    </NavLink>
                  </Col>
                </div>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Movies;

{
  /* <section id="movies">
  {movie.map((current, index) => {
    const { imdbID, Title, Poster } = current;
    return (
     
          <div className="cardd" key={imdbID}>
            <div className="cardd-info">
              <h2>{Title}</h2>
              <div className="image-holder">
                <img src={Poster} alt={imdbID} />
              </div>
            </div>
          </div>
       
      </NavLink>
    );
  })}
</section>; */
}

// <section id="education">
//       <Container>
//         <Row>
//           {movie.map((current) => {
//             const { imdbID, Title, Poster } = current;
//             return (
//               <div className="education">
//                 <NavLink to={"movie/${imdbID}"}>
//                   <Col sm={6} md={4} lg={3} xxl={2}>
//                     <div className="box key={imdbID}">
//                       <h7>{Title}</h7>
//                       <div className="image-holder">
//                         <img src={Poster} alt={imdbID} className="school" />
//                       </div>
//                     </div>
//                   </Col>
//                 </NavLink>
//               </div>
//             );
//           })}
//         </Row>
//       </Container>
//     </section>
//   );
// };
