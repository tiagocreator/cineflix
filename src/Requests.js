import { tmdbAccessKey as key } from './personalKeys';

const requests = {
  reqPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  reqTop: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  reqTrend: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
  reqAction: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&include_adult=true&include_video=false&page=1&with_genres=28`,
  reqAdventure: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&include_adult=true&include_video=false&page=1&with_genres=12`,
  reqComedy: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&include_adult=true&include_video=false&page=1&with_genres=35`,
  reqHorror: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&include_adult=true&include_video=false&page=1&with_genres=27`,
  reqDocumentary: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&include_adult=true&include_video=false&page=1&with_genres=99`,
};

export default requests;
