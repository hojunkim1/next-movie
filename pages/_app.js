import Navbar from "../components/Navbar";
import "../styles/app.scss";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
