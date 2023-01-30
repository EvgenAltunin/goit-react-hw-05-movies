import axios from 'axios';
const API_KEY = '614b8ef740dcdf4c9fbb2a4f6ff8ca50';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function getTrendingMovies() {
    const response = await axios.get(`/trending/movie/day?api_key=${API_KEY}`);
    return response.data;
}

export async function getMovieByName(query) {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${query}`
  );
  return response.data;
}

export async function getMovieDetails(id) {
  const response = await axios.get(
    `/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
}

export async function getMovieCast(id) {
  const response = await axios.get(
    `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
}

export async function getMovieReviews(id) {
  const response = await axios.get(
    `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return response.data;
}
