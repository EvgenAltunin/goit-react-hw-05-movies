import * as API from 'components/FetchApi';
import { Container, MainTitle } from 'pages/Home/Home.styled';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';

export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const fetchTrendingMovies = async () => {
      try {
        const data = await API.getTrendingMovies();
        setTrendingMovies([...data.results]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchTrendingMovies();
  }, []);

  return (
    <Container>
      <MainTitle>Trending today</MainTitle>
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
      {isLoading && <Loader />}
    </Container>
  );
};
