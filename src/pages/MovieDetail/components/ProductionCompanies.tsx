import { MovieDetailTypes } from "..";

type Props = {
  movieDetail: MovieDetailTypes;
};

const ProductionCompanies = (props: Props) => {
  const { movieDetail } = props;
  return (
    <div className="production-companies">
      <div className="company-name">
        <label>Production Companies</label>
      </div>
      <div className="company-list">
      {movieDetail && movieDetail.production_companies.length > 0 ? (
        movieDetail.production_companies.map(
          (company: { name: string }, index: number) => {
            return <span key={index}>{company.name}</span>;
          }
        )
      ) : (
        <></>
      )}
      </div>
    </div>
  );
};

export default ProductionCompanies;
