import "./MovieItems.css";

const MovieItems = (props) => {
  return (
    <>
      <article className="movie-item">
        <h2>{props.movieName}</h2>
        <h3>{props.movieYear}</h3>
        <h3>{props.movieDuration}</h3>
        <h3>{props.movieRating}</h3>
        {props.movieGenres.map((elm, index) => (
          <p key={index}>{elm}</p>
        ))}
      </article>
    </>
  );
};

export default MovieItems;
