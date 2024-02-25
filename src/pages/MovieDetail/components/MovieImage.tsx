import { MovieDetailTypes } from "..";

type Props = {
  movieDetail: MovieDetailTypes;
};

const MovieImage = (props: Props) => {
  const { movieDetail } = props;
  return (
    <div className="image-container">
      {movieDetail ? (
        <img
          src={`${import.meta.env.VITE_IMAGE_BASE}${movieDetail?.poster_path}`}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default MovieImage;
