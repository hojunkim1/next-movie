import { useEffect, useState } from "react";
import Seo from "../components/Seo";
import styles from "../styles/Home.module.scss";

const Home = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const { results } = await (await fetch("/api/movies")).json();
    setMovies(results);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={styles.container}>
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
        <div className={styles.movie} key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
};

export default Home;
