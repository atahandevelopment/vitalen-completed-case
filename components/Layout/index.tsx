import Navbar from "../Navbar";
import Footer from "../Footer";
import "./styles/index.css";
import { useSelector } from "react-redux";
import { AppStore } from "../../src/store";

type Props = {
  children: React.ReactNode;
};

const DefaultLayout = (props: Props) => {
  const { children } = props;

  const loading = useSelector((state: AppStore) => state.loader.loading);


  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }
  return (
    <div className="container">
      <Navbar />
      <div className="movie-content">{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
