import "./MovieDetails.css";
import { Link, useParams } from "react-router-dom";

import { useContext } from "react";
import { MovieDataContext } from "../../context/Context";

const MovieDetails = () => {
  const { movies, setMovies } = useContext(MovieDataContext);

  const idParams = useParams();
  console.log({ idParams });
  const detailPage = movies.filter((elm) => {
    return elm.title === idParams.title;
  });

  return (
    <>
      <section className="movie-details-container">
        <h1>{detailPage[0].title}</h1>
        <h2>{detailPage[0].year}</h2>
        <h3>{detailPage[0].director}</h3>
        <h3>{detailPage[0].duration}</h3>
        <h3>{detailPage[0].rate}</h3>
        <p>{detailPage[0].genre}</p>
        <Link to="/home">
          <button>BACK</button>
        </Link>
      </section>
    </>
  );
};

export default MovieDetails;
