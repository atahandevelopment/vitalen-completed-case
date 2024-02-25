import { useSelector } from "react-redux";
import { AppStore } from "../../../../store";
import "./style/populartvseries.css";
import MovieCart from "../../../../../components/MovieCart";
import { Link } from "react-router-dom";
import { TvSeries } from "../../../../store/types";

const PopularTvSeries = () => {
  const data = useSelector((state: AppStore) => state.movies.popularTvSeries);
  const fourMovies = data && data.length > 0 ? data : [];
  return (
    <div id="tv-series" className="popular-tv">
      <p>Popular Tv Series</p>
      <div className="movies-field">
        {fourMovies && fourMovies.length > 0 ? (
          fourMovies.map((item: TvSeries, index) => (
            <Link
              style={{ textDecoration: "none" }}
              to={`/movie-detail/${item?.id}`}
              key={index}
            >
              <MovieCart data={item} key={index} />
            </Link>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default PopularTvSeries;
