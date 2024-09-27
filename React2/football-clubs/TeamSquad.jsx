const TeamSquad = (props) => {
  return (
    <div className="team-squad">
      <h2>Current Squad</h2>
      <ul>
        {props.squad.map((player, index) => (
          <li key={index}>
            {player.name} - {player.position}
          </li>
        ))}
      </ul>
    </div>
  );
};