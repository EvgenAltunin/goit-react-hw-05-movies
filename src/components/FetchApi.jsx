import axios from 'axios';
const API_KEY = '614b8ef740dcdf4c9fbb2a4f6ff8ca50';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

// export function getTrendingMovies() {
//     return axios.get(`/trending/all/day?api_key=${API_KEY}`);
// }



    //   try {
//       const response = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
//       console.log(response);
//       return response
//   } catch (error) {
//     console.log(error);
//     }
// }

// export async function getMovieByName(searchQuery) {
//   const response = await axios.get(
//     `/search/movie?query=${searchQuery}&api_key=${API_KEY}&language=en-US`
//   );
//   console.log(response.data);
//   return response.data;
// }

// export async function getMovieDetails(id) {
//   const response = await axios.get(
//     `/${id}?api_key=${API_KEY}&language=en-US`
//   );
//   console.log(response.data);
//   return response.data;
// }

// export async function getMovieCast(id) {
//   const response = await axios.get(
//     `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
//   );
//   console.log(response.data);
//   return response.data;
// }

// export async function getMovieReviews(id) {
//   const response = await axios.get(
//     `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
//   );
//   console.log(response.data);
//   return response.data;
// }
