import { useEffect, useState } from "react";
import { GetPopularMovies, GetPopularTvSeries, GetTopRatedMovies, GetTopRatedSeries } from "./service";
import { useDispatch } from "react-redux";
import { getPopularMovie, getTvSeries } from "../../store/homeMovies";
import PopularMovies from "./components/PopularMovies";
import PopularTvSeries from "./components/PopularTvSeries";
import DefaultLayout from "../../../components/Layout";
import headerImg from "../../assets/header-img.png";
import "./styles/home.css";
import { TvSeries } from "../../store/types";
import MovieCart from "../../../components/MovieCart";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const [topRatedTv, setTopRatedTv] = useState<TvSeries[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<TvSeries[]>([])
  const [randomMovie, setRandomMovie] = useState<TvSeries>();
  const [randomTvSerie, setRandomTvSerie] = useState<TvSeries>();

  useEffect(() => {
    GetPopularMovies()
      .then((movies) => {
        dispatch(getPopularMovie(movies.data.results));
      })
      .catch((error) => {
        console.error(error);
      });
    GetPopularTvSeries()
      .then((series) => {
        dispatch(getTvSeries(series.data.results));
      })
      .catch((error) => {
        console.error(error);
      });
      GetTopRatedMovies().then((series) => {
        setTopRatedMovies(series.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
      GetTopRatedSeries().then((series) => {
        setTopRatedTv(series.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [dispatch]);

  useEffect(() => {
    // Tv series ve popular movies dizileri vote_average değişkeni 8 ve üzeri olacak şekilde filter ediyorum.

    const filteredMovies = topRatedMovies.filter((movie: TvSeries) => {
      const rate = parseInt(movie.vote_average.toFixed(1));
      return rate >= 8;
    });
    const filteredTvSeries = topRatedTv.filter((movie: TvSeries) => {
      const rate = parseInt(movie.vote_average.toFixed(1));
      return rate >= 8;
    });

    // ardından dizilerin 0 ve length aralığında random sayılar belirliyorum.

    const min = 0;
    const moviemax = filteredMovies?.length;
    const tvSeriesmax = filteredTvSeries?.length;
    const randomMovieIndex =
      Math.floor(Math.random() * (moviemax - min + 1)) + min;
    const randomTvSerieIndex =
      Math.floor(Math.random() * (tvSeriesmax - min + 1)) + min;

    // belirlediğim random sayılara göre ürünleri state'e atıyorum.

    const randomMovie = filteredMovies[randomMovieIndex];
    const randomTvSeries = filteredTvSeries[randomTvSerieIndex];
    setRandomMovie(randomMovie);
    setRandomTvSerie(randomTvSeries);
  }, [topRatedMovies, topRatedTv]);

  return (
    <DefaultLayout>
      <header id="home" className="header-container">
        <img src={headerImg} />
        <div className="random-movie">
          {randomMovie ? (
            <Link style={{ textDecoration:"none"}} to={`/movie-detail/${randomMovie?.id}`}>
              <MovieCart data={randomMovie} />
            </Link>
          ) : (
            <></>
          )}
          <div className="header-title">
            <p>Welcome to the</p>
            <h1>World of TV Series & Movies</h1>
          </div>
          {randomTvSerie ? (
            <Link style={{ textDecoration:"none"}} to={`/movie-detail/${randomMovie?.id}`}>
              <MovieCart data={randomTvSerie} />
            </Link>
          ) : (
            <></>
          )}
        </div>
      </header>
      <PopularMovies />
      <PopularTvSeries />
    </DefaultLayout>
  );
};

export default Home;
