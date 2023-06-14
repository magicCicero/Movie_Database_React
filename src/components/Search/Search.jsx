import React, { useContext, useState, useEffect } from "react";
import { MovieDataContext } from "../../context/Context";
import "./Search.css";

const Search = () => {
  const { movies, setMovies } = useContext(MovieDataContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [orignalArray, setOriginalArray] = useState(movies);

  const filterByName = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm);
  };

  useEffect(() => {
    if (searchTerm === "") {
      setMovies(orignalArray);
    } else {
      const filteredMovies = orignalArray.filter((movie) =>
        movie.title.toLowerCase().includes(searchTerm)
      );
      setMovies(filteredMovies);
    }
  }, [searchTerm, orignalArray, setMovies]);

  return (
    <section className="search-container">
      <input type="text" onChange={filterByName} />
    </section>
  );
};

export default Search;
