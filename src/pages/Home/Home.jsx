import { MovieList } from 'components/MovieList/MovieList';
// import { getTrendingMovies } from 'components/FetchApi';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  // const API_KEY = '614b8ef740dcdf4c9fbb2a4f6ff8ca50';
  useEffect(() => {
    // loader = true
    const fetchTrendingMovies = async () => {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=614b8ef740dcdf4c9fbb2a4f6ff8ca50`
        );

        setTrendingMovies([...data.results]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrendingMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <h2>Trending today</h2>
      <MovieList movies={trendingMovies}></MovieList>
    </main>
  );
};
