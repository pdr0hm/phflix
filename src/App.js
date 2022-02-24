import React, { useEffect, useState } from "react";
import "./App.css";
import FeaturedMovie from "./components/FeaturedMovie";
import Header from "./components/Header";
import Movierow from "./components/MovieRow";
import Tmdb from "./Tmdb";

export default function App() {
  const [movieList, setMovieList] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [backgroundHeader, setBackgroundHeader] = useState(false);

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList();
      setMovieList(list);

      let originals = list.filter((i) => i.slug === "originals");
      let randomPick = Math.floor(
        Math.random() * originals[0].items.results.length - 1
      );
      let movie = originals[0].items.results[randomPick];
      let moviePicked = await Tmdb.getMovieInfo(movie.id, "tv");
      setFeaturedMovie(moviePicked);
    };

    loadAll();
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 50) {
        setBackgroundHeader(true);
      } else {
        setBackgroundHeader(false);
      }
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div className="page">
      <Header background={backgroundHeader} />
      {featuredMovie && <FeaturedMovie movie={featuredMovie} />}

      <section className="lists">
        {movieList.map((movie, key) => (
          <Movierow key={key} title={movie.title} items={movie.items} />
        ))}
      </section>

      <footer>
        by Pedro Henrique Marques <br /> Dados pegos de themoviedb.org
      </footer>

      {movieList <= 0 && (
        <div className="loader">
          <img
            src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif"
            alt="Carregando"
          />
        </div>
      )}
    </div>
  );
}
