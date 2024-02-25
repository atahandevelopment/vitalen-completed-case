type Props = {
  directors: { name: string; job: string }[];
};

const CrewComponent = (props: Props) => {
  const { directors } = props;
  return (
    <div className="crew-field">
      <div className="crew-header">
        <span>Crew</span>
      </div>
      <div className="crew-list">
        {directors && directors.length > 0 ? (
          directors.map((director: { name: string; job: string }, index) => {
            return (
              <div className="directors" key={index}>
                <span>{director ? director?.name : ""}</span>
                <span>{director ? director?.job : ""}</span>
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default CrewComponent;
