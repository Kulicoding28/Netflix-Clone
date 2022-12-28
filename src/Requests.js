const key = "f7493be847aea503c217a7a3721e7766";

const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTranding: `
    https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
  requestMovie: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&page=1&include_adult=false`,

  requestUpComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};

export default requests;
