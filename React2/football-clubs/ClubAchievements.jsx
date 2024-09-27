const ClubAchievements = (props) => {
  return (
    <div className="club-achievements">
      <h2>Achievements</h2>
      <p>Cups: {props.achievements.cups}</p>
      <p>Leagues: {props.achievements.leagues}</p>
      <p>International Titles: {props.achievements.internationalTitles}</p>
    </div>
  );
};