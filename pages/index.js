import { useRouter } from "next/router";
import Seo from "../components/Seo";
import styles from "../styles/Home.module.scss";

const Home = ({ results }) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Seo title="Home" />
      {results?.map((movie) => (
        <div
          className={styles.movie}
          key={movie.id}
          onClick={() =>
            router.push(`/movies/${movie.original_title}/${movie.id}`)
          }
        >
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <h4>{movie.original_title}</h4>
        </div>
      ))}
    </div>
  );
};

export const getServerSideProps = async () => {
  const URL = "http://localhost:3000";
  const { results } = await (await fetch(`${URL}/api/movies`)).json();
  return {
    props: {
      results,
    },
  };
};

export default Home;
