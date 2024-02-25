import "./styles/card.css";
import { TvSeries } from "../../src/store/types";

type Props = {
  data: TvSeries;
};

const MovieCart = (props: Props) => {
  const { data } = props;
  return (
    <div className="cart-container">
      <div className="score">
        <p> {data?.vote_average.toFixed(1)} / 10</p>
      </div>
      <div className="img-container">
        <img src={`${import.meta.env.VITE_IMAGE_BASE}${data?.poster_path}`} />
        <div className="movie-name-container">
          <p className="movie-name">{data?.title || data?.name}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCart;
