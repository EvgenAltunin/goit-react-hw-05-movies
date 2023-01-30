import * as API from 'components/FetchApi';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    // loader = true
    const fetchTrendingMovies = async () => {
      try {
        const data = await API.getTrendingMovies();
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
      <ul>
        {trendingMovies.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};
