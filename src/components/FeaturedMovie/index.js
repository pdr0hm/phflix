import React from "react";
import "./style.css";

export default function FeaturedMovie({ movie }) {
  let releaseYear = new Date(movie.first_air_date);
  let genres = [];

  movie.genres.map((genre) => {
    genres.push(genre.name);
  });

  let description = movie.overview;
  if (description.length > 400) {
    description = description.substring(0, 400) + "..";
  }

  return (
    <section
      className="featured"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{movie.name}</div>
          <div className="featured--info">
            <div className="featured--rating">{movie.vote_average}</div>
            <div className="featured--year">{releaseYear.getFullYear()}</div>
            <div className="featured--seasons">
              {movie.number_of_seasons} temporada
              {movie.number_of_seasons === 1 ? "" : "s"}
            </div>
          </div>
          <div className="featured--description">{description}</div>
          <div className="featured--buttons">
            <a href={`/watch/${movie.id}`} className={"button--watch"}>
              &#9658; Assistir
            </a>
            <a href={`/list/add/${movie.id}`} className={"button--info"}>
              + Mais informações
            </a>
          </div>
          <div className="featured--genres">Gêneros: {genres.join(", ")}</div>
        </div>
      </div>
    </section>
  );
}
