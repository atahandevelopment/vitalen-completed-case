/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { GetDetailMovie, GetPersons } from "./service";
import "./styles/detail.css";
import DefaultLayout from "../../../components/Layout";
import { FaArrowCircleLeft } from "react-icons/fa";
import { getLoaderStatus } from "../../store/loader";
import { useDispatch } from "react-redux";
import CrewComponent from "./components/CrewComponent";
import ProductionCompanies from "./components/ProductionCompanies";
import Properties from "./components/Properties";
import Actors from "./components/Actors";
import MovieImage from "./components/MovieImage";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export type Genres = {
  id: number;
  name: string;
};

export type Companies = {
  name: string;
};

export type MovieDetailTypes = {
  production_companies: Companies[];
  id: number;
  overview: string;
  poster_path: string;
  title: string;
  release_date: string;
  genres: Genres[] | undefined;
  popularity: number | undefined;
  first_air_date: string;
  name: string;
  vote_average: number
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

  const point = movieDetail?.vote_average.toFixed(1);

  useEffect(() => {
    GetDetailMovie(id).then((detail) => {
      setMovieDetail(detail.data);
    });
    GetPersons(id).then((detail) => {
      setCrew(detail.data.crew);
      setCast(detail.data.cast);
      dispatch(getLoaderStatus(false));
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
            {/* @ts-ignore */}
            <MovieImage movieDetail={movieDetail} />
            <div className="detail-content">
              <div className="circular-bar">
                <CircularProgressbar
                  minValue={1}
                  maxValue={10}
                  value={Number(`${point}`)}
                  text={`${point}`}
                  styles={{
                    text: {
                      fill: '#FFFFFF',
                      fontSize: '26px',
                      fontWeight: 'bold',
                    },
                    path: {
                      stroke: '#3498db',
                    },
                    trail: {
                      stroke: '#FFFFFF',
                    },
                  }}
                />
              </div>
              <h1 className="head">
                {movieDetail ? title : ""}{" "}
                <span>{`${year ? `(${year})` : ""}`}</span>
              </h1>
              {/* @ts-ignore */}
              <Properties day={day} month={month} year={year} movieDetail={movieDetail}
              />
              <p>{movieDetail ? movieDetail.overview : ""}</p>
              {/* @ts-ignore */}
              <ProductionCompanies movieDetail={movieDetail} />
              <CrewComponent directors={directors} />
            </div>
          </div>
        </div>
      </div>
      <Actors cast={cast} />
    </DefaultLayout>
  );
};

export default Detail;
