import Proptypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, title, imgUrl, summary, genres }) {
  return (
    <div>
      <Link to={`/movies/${id}`}>
        <h2>{title}</h2>
      </Link>
      <img src={imgUrl} />
      <p>{summary}</p>
      {genres?.map((genre) => (
        <li key={(id, genre)}>{genre}</li>
      ))}
    </div>
  );
}

Movie.propTypes = {
  id: Proptypes.number.isRequired,
  title: Proptypes.string.isRequired,
  imgUrl: Proptypes.string.isRequired,
  summary: Proptypes.string.isRequired,
  genres: Proptypes.arrayOf(Proptypes.string).isRequired,
};
export default Movie;
