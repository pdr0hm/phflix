const API_KEY = "=438b4ecf8eec30c0942e6c02af822f66";
const API_BASE = "https://api.themoviedb.org/3";

const dataFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

const Tmdb = {
  getHomeList: async () => {
    return [
      {
        slug: "originals",
        title: "Originais do Phflix",
        items: await dataFetch(
          `/discover/tv?with_network=213&language=pt-BR&api_key${API_KEY}`
        ),
      },

      {
        slug: "trending",
        title: "Recomendados",
        items: await dataFetch(
          `/trending/all/week?language=pt-BR&api_key${API_KEY}`
        ),
      },
      {
        slug: "toprated",
        title: "Em alta",
        items: await dataFetch(
          `/movie/top_rated?language=pt-BR&api_key${API_KEY}`
        ),
      },
      {
        slug: "action",
        title: "Ação",
        items: await dataFetch(
          `/discover/movie?with_genres=28&language=pt-BR&api_key${API_KEY}`
        ),
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await dataFetch(
          `/discover/movie?with_genres=35&language=pt-BR&api_key${API_KEY}`
        ),
      },
      {
        slug: "drama",
        title: "Drama",
        items: await dataFetch(
          `/discover/movie?with_genres=18&language=pt-BR&api_key${API_KEY}`
        ),
      },
      {
        slug: "animation",
        title: "Desenho",
        items: await dataFetch(
          `/discover/movie?with_genres=16&language=pt-BR&api_key${API_KEY}`
        ),
      },
      {
        slug: "sciencefiction",
        title: "Ficção Científica",
        items: await dataFetch(
          `/discover/movie?with_genres=878&language=pt-BR&api_key${API_KEY}`
        ),
      },
    ];
  },

  getMovieInfo: async (movieId, type) => {
    let info = {};

    if (movieId) {
      switch (type) {
        case "movie":
          info = await dataFetch(
            `/movie/${movieId}?language=pt-BR&api_key${API_KEY}`
          );
          break;
        case "tv":
          info = await dataFetch(
            `/tv/${movieId}?language=pt-BR&api_key${API_KEY}`
          );
          break;
        // no default
      }
      return info;
    }
  },
};

export default Tmdb;
