import React, { useContext, useState, useEffect } from "react";
import { MovieDataContext } from "../../context/Context";

const GenreButtons = () => {
  const { movies, setMovies } = useContext(MovieDataContext);
  const [genredMovies, setgenredMovies] = useState(movies);
  const [uniqueGenres, setUniqueGenres] = useState([]);

  const uniqueGenresDistinct = Array.from(
    new Set(movies.flatMap((movie) => movie.genre))
  );
  useEffect(() => {
    setUniqueGenres(uniqueGenresDistinct);
  }, []);

  const filterByGenre = (e) => {
    const filteredMovies = genredMovies.filter((movie) =>
      movie.genre.includes(e.target.value)
    );
    setMovies(filteredMovies);
  };

  useEffect(() => {
    setMovies(genredMovies);
  }, [genredMovies, setMovies]);
  return (
    <>
      <section className="filter-container">
        {uniqueGenres.map((item, index) => (
          <button key={index} onClick={filterByGenre} value={item}>
            {item}
          </button>
        ))}
      </section>
    </>
  );
};

export default GenreButtons;
