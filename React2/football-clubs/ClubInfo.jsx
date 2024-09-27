const ClubInfo = (props) => {
  return (
    <div className="club-info">
      <h1>{props.name}</h1>
      <p>City: {props.city}</p>
      <p>Founded: {props.founded}</p>
      <img src={props.emblem} alt={`${props.name} Emblem`} width="100" />
    </div>
  );
};