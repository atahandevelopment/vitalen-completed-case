import "./styles/cast.css";
import { GoPerson } from "react-icons/go";

export type CharacterInfo = {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  cast_id: number;
  character: string;
  credit_id: string;
  order: number;
};

type Props = {
  data: CharacterInfo;
};

const Cast = (props: Props) => {
  const { data } = props;
  return (
    <div className="cast-cart-container">
      <div className="img-container">
        {data && data.profile_path !== null ? (
          <img
            src={`${import.meta.env.VITE_IMAGE_BASE}${data?.profile_path}`}
          />
        ) : (
          <div className="no-image">
            <GoPerson size={120} />
          </div>
        )}
      </div>
      <div className="info-field">
        <h3>{data?.name}</h3>
        <span>{data?.character}</span>
      </div>
    </div>
  );
};

export default Cast;
