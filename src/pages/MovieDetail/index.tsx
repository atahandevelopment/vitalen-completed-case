import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetDetailMovie, GetPersons } from "./service";
import "./styles/detail.css";
import DefaultLayout from "../../../components/Layout";
import { FaArrowCircleLeft } from "react-icons/fa";
import Cast, { CharacterInfo } from "../../../components/Cast";
import { getLoaderStatus } from "../../store/loader";
import { useDispatch } from "react-redux";

type Genres = {
  id: number;
  name: string;
};

type MovieDetailTypes = {
  id: number;
  overview: string;
  poster_path: string;
  title: string;
  release_date: string;
  genres: Genres[] | undefined;
  popularity: number | undefined;
  first_air_date: string;
  name: string;
};

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [movieDetail, setMovieDetail] = useState<MovieDetailTypes>();
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);
  const [directors, setDirectors] = useState([]);
  const title =
    movieDetail && movieDetail.title
      ? movieDetail.title
      : movieDetail && movieDetail.name;
  const date =
    movieDetail && movieDetail.release_date
      ? movieDetail.release_date.split("-")
      : movieDetail && movieDetail.first_air_date.split("-");
  const year = date && date[0];
  const month = date && date[1];
  const day = date && date[2];
  useEffect(() => {
    GetDetailMovie(id).then((detail) => {
      setMovieDetail(detail.data);
    });
    GetPersons(id).then((detail) => {
      setCrew(detail.data.crew);
      setCast(detail.data.cast);
      dispatch(getLoaderStatus(false))
    });
  }, [id, dispatch]);

  const handleGoBack = () => {
    dispatch(getLoaderStatus(true));
    setTimeout(() => {
      navigate("/");
    }, 500);
  };

  useEffect(() => {
    const director = crew.filter(
      (c: { department: string }) => c.department === "Directing"
    );
    setDirectors(director);
  }, [crew]);


  return (
    <DefaultLayout>
      <div className="detail-container">
        <div className="detail-field">
          <div className="btn-field">
            <button className="back-button" onClick={handleGoBack}>
              <FaArrowCircleLeft
                className="back-icon"
                size={24}
                color="#FFFFFF"
              />
            </button>
          </div>
          <div className="info">
            <div className="image-container">
              {movieDetail ? (
                <img
                  src={`${import.meta.env.VITE_IMAGE_BASE}${
                    movieDetail?.poster_path
                  }`}
                />
              ) : (
                <></>
              )}
            </div>
            <div className="detail-content">
              <h1 className="head">
                {movieDetail ? title : ""}{" "}
                <span>{`${year ? `(${year})` : ""}`}</span>
              </h1>{" "}
              <div className="properties">
                <span>{`${day}/${month}/${year}`}(RD)</span>
                <span>•</span>
                {movieDetail &&
                movieDetail.genres &&
                movieDetail?.genres.length > 0 ? (
                  movieDetail?.genres.map((genre: Genres, i) => {
                    return (
                      <span className="genres" key={i}>
                        {genre.name}
                      </span>
                    );
                  })
                ) : (
                  <></>
                )}
              </div>
              <p>{movieDetail ? movieDetail.overview : ""}</p>
              <div className="crew-field">
                {directors && directors.length > 0 ? (
                  directors.map(
                    (director: { name: string; job: string }, index) => {
                      return (
                        <div className="directors" key={index}>
                          <span>{director ? director?.name : ""}</span>
                          <span>{director ? director?.job : ""}</span>
                        </div>
                      );
                    }
                  )
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="actor-header">
        <h3>
          <em>Actors</em>
        </h3>
      </div>
      <div className="cast-field">
        {cast && cast.length > 0 ? (
          cast.map((cast: CharacterInfo, index: number) => (
            <Cast key={index} data={cast} />
          ))
        ) : (
          <></>
        )}
      </div>
    </DefaultLayout>
  );
};

export default Detail;
