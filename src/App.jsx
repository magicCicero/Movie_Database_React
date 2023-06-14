import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home/Home";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import Loader from "./pages/Loader/Loader";
import moviesData from "./data/data";

// wir importieren den Context
import { MovieDataContext } from "./context/Context";

function App() {
  const [movies, setMovies] = useState(moviesData);

  return (
    <>
      <MovieDataContext.Provider value={{ movies, setMovies }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Loader />} />
            <Route path="/home/" element={<Home />} />
            <Route
              path="/home/moviedetails/:title"
              element={<MovieDetails />}
            />
          </Routes>
        </BrowserRouter>
      </MovieDataContext.Provider>
    </>
  );
}

export default App;
