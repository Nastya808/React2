function App() {
  const [movie, setMovie] = React.useState({
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    studio: "Paramount Pictures",
    poster: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg"
  });

  return (
    <div className="app-container">
      <h1>Мой любимый фильм</h1>
      <MovieInfo 
        title={movie.title} 
        director={movie.director} 
        year={movie.year} 
        studio={movie.studio}
      />
      <MoviePoster poster={movie.poster} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
