import Cast, { CharacterInfo } from '../../../../components/Cast';

type Props = {
    cast: CharacterInfo[];
}

const Actors = (props: Props) => {
    const {cast} = props;
  return (
    <>
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
    </>
  )
}

export default Actors