import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { movieDetailApi } from "../api";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);
  const getMovie = async () => {
    const movieInfo = await movieDetailApi(id);
    console.log(movieInfo);
    setMovie(movieInfo);
    setLoading(false);
  };
  useEffect(getMovie, []);
  return (
    <>
      {loading ? (
        <span>Loading ...</span>
      ) : (
        <div>
          <h1>{movie.title}</h1>
          <img src={movie.medium_cover_image} />
          <p>{movie.description_full}</p>
          <span>런타임 {movie.runtime}</span>
          <span>평점 {movie.rating}</span>
        </div>
      )}
    </>
  );
}

export default Detail;
