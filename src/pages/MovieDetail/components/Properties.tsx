type Companies = {
    name: string;
  };
  
  type Genres = {
      id: number;
      name: string;
    };
    
  
  type MovieDetailTypes = {
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
    };

type Props = {
    day: string;
    month: string;
    year: string;
    movieDetail: MovieDetailTypes;
};

const Properties = (props: Props) => {
    const { day, month, year, movieDetail } = props;
    
  return (
    <div className="properties">
      <span>{`${day}/${month}/${year}`}(RD)</span>
      <span>•</span>
      {movieDetail && movieDetail.genres && movieDetail?.genres.length > 0 ? (
        movieDetail?.genres.map((genre: Genres, i) => {
          return (
            <span className="genres" key={i}>
              {genre ? genre?.name : ""}
            </span>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export default Properties;
