import Seo from "../components/Seo";
import styles from "../styles/Home.module.scss";

const Home = ({ results }) => {
  return (
    <div className={styles.container}>
      <Seo title="Home" />
      {results?.map((movie) => (
        <div className={styles.movie} key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
};

export const getServerSideProps = async () => {
  const API_KEY = "7f27b1d063c7623f5afd27eaab09690f";
  const { results } = await (
    await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
  ).json();
  return {
    props: {
      results,
    },
  };
};

export default Home;
