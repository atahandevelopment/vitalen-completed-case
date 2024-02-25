import Navbar from "../Navbar";
import Footer from "../Footer";
import "./styles/index.css";

type Props = {
  children: React.ReactNode;
};

const DefaultLayout = (props: Props) => {
  const { children } = props;

  return (
    <div className="container">
      <Navbar />
      <div className="movie-content">{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
