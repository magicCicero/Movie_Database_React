import { useContext } from "react";
import { MovieDataContext } from "../../context/Context";
import "./FilterButtons.css";

const FilterButtons = () => {
  const { movies, setMovies } = useContext(MovieDataContext);

  const sortByDateAscending = () => {
    const sortedMovies = [...movies].sort((a, b) => a.year - b.year);
    setMovies(sortedMovies);
  };

  const sortByDateDescending = () => {
    const sortedMovies = [...movies].sort((a, b) => b.year - a.year);
    setMovies(sortedMovies);
  };

  const sortByBestRate = () => {
    const sortedMovies = [...movies].sort((a, b) => b.rate - a.rate);
    setMovies(sortedMovies);
  };

  const sortByNameAscending = () => {
    const sortedMovies = [...movies].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    setMovies(sortedMovies);
  };

  const sortByNameDescending = () => {
    const sortedMovies = [...movies].sort((a, b) =>
      b.title.localeCompare(a.title)
    );
    setMovies(sortedMovies);
  };

  return (
    <section className="filter-container">
      <button onClick={sortByDateAscending}>Sort by Date Ascending</button>
      <button onClick={sortByDateDescending}>Sort by Date Descending</button>
      <button onClick={sortByBestRate}>Best Rate</button>
      <button onClick={sortByNameAscending}>A - Z</button>
      <button onClick={sortByNameDescending}>Z - A</button>
    </section>
  );
};

export default FilterButtons;
