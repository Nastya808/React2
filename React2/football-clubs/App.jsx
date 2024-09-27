class App extends React.Component {
  state = {
    clubs: [
      {
        name: 'FC Barcelona',
        city: 'Barcelona',
        founded: 1899,
        emblem: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg',
        achievements: {
          cups: 30,
          leagues: 26,
          internationalTitles: 5
        },
        squad: [
          { name: 'Marc-André ter Stegen', position: 'Goalkeeper' },
          { name: 'Sergi Roberto', position: 'Defender' },
          { name: 'Frenkie de Jong', position: 'Midfielder' },
          { name: 'Robert Lewandowski', position: 'Forward' }
        ]
      },
      {
        name: 'Real Madrid',
        city: 'Madrid',
        founded: 1902,
        emblem: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg',
        achievements: {
          cups: 30,
          leagues: 35,
          internationalTitles: 13
        },
        squad: [
          { name: 'Thibaut Courtois', position: 'Goalkeeper' },
          { name: 'David Alaba', position: 'Defender' },
          { name: 'Luka Modric', position: 'Midfielder' },
          { name: 'Karim Benzema', position: 'Forward' }
        ]
      },
      {
        name: 'Paris Saint-Germain',
        city: 'Paris',
        founded: 1970,
        emblem: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg',
        achievements: {
          cups: 14,
          leagues: 10,
          internationalTitles: 0
        },
        squad: [
          { name: 'Gianluigi Donnarumma', position: 'Goalkeeper' },
          { name: 'Achraf Hakimi', position: 'Defender' },
          { name: 'Marco Verratti', position: 'Midfielder' },
          { name: 'Kylian Mbappé', position: 'Forward' }
        ]
      }
    ],
    selectedClubIndex: 0 
  };

  handleClubSelect = (index) => {
    this.setState({ selectedClubIndex: index });
  };

  render() {
    const { clubs, selectedClubIndex } = this.state;
    const selectedClub = clubs[selectedClubIndex];

    return (
      <div className="container">
        <ClubSelector clubs={clubs} onClubSelect={this.handleClubSelect} />
        <div className="club-details">
          <ClubInfo 
            name={selectedClub.name} 
            city={selectedClub.city} 
            founded={selectedClub.founded} 
            emblem={selectedClub.emblem} 
          />
          <ClubAchievements achievements={selectedClub.achievements} />
          <TeamSquad squad={selectedClub.squad} />
        </div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
