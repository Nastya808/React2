const ClubSelector = (props) => {
    return (
      <div className="club-selector">
        <h2>Select a Football Club</h2>
        <ul>
          {props.clubs.map((club, index) => (
            <li key={index}>
              <button onClick={() => props.onClubSelect(index)}>
                {club.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  };