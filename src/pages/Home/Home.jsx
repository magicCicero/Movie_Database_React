import { useEffect, useState } from "react";
import "./Home.css";
import MovieItems from "../../components/MovieItems/MovieItems";
import FilterButtons from "../../components/FilterButtons/FilterButtons";
import { useContext } from "react";
import { MovieDataContext } from "../../context/Context";
import Search from "../../components/Search/Search";
import { Link } from "react-router-dom";
import GenreButtons from "../../components/GenreButtons/GenreButtons";

const Home = () => {
  const { movies, setMovies } = useContext(MovieDataContext);

  return (
    <>
      <h1>Home</h1>
      <Search />
      <GenreButtons></GenreButtons>
      <FilterButtons></FilterButtons>
      <h2>Results {movies.length}</h2>
      <section className="movie-list-container">
        {movies.map((item, index) => (
          <div className="movie-item-outer-container" key={index}>
            <Link to={`/home/moviedetails/${item.title}`}>
              <MovieItems
                key={index}
                movieName={item.title}
                movieYear={item.year}
                movieDirector={item.director}
                movieDuration={item.duration}
                movieRating={item.rate}
                movieGenres={item.genre}
              />
            </Link>
          </div>
        ))}
      </section>
    </>
  );
};

export default Home;
