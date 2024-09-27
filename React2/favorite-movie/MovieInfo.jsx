function MovieInfo({ title, director, year, studio }) {
  return (
    <div>
      <h2>Название: {title}</h2>
      <p>Режиссер: {director}</p>
      <p>Год выпуска: {year}</p>
      <p>Киностудия: {studio}</p>
    </div>
  );
}
