import { useState, useEffect } from "react";
import Movie from "../components/Movie";
import { movieApi } from "../api";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState();
  const getMovies = async () => {
    const json = await movieApi();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(getMovies, []);
  return (
    <div>
      {loading ? <span>Loading ...</span> : null}
      {movies?.map((movie) => (
        <Movie
          id={movie.id}
          key={movie.id}
          title={movie.title}
          imgUrl={movie.medium_cover_image}
          summary={movie.summary}
          genres={movie.genres}
        />
      ))}
    </div>
  );
}

export default Home;
