import { useSelector } from "react-redux";
import { AppStore } from "../../../../store";
import "./styles/popularmovies.css";
import MovieCart from "../../../../../components/MovieCart";
import { Link } from "react-router-dom";
import { TvSeries } from "../../../../store/types";

const PopularMovies = () => {
  const data = useSelector((state: AppStore) => state.movies.popularMovies);
  const fourMovies = data && data.length > 0 ? data : [];


  return (
    <div id="popular-movies" className="popular-movies">
      <p>Popular Movies</p>
      <div className="movies-field">
        {fourMovies && fourMovies.length > 0 ? (
          fourMovies.map((item: TvSeries, index) => (
            <Link
              style={{ textDecoration: "none" }}
              to={`/movie-detail/${item?.id}`}
              key={index}
            >
              <MovieCart data={item} />
            </Link>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default PopularMovies;
