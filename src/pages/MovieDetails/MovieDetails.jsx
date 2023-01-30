import { useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import * as API from 'components/FetchApi';
import { useState } from 'react';
import imgNotFound from '../../images/imgNotFound.png';

export const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    // loader = true
    const fetchTrendingMovies = async () => {
      try {
        const data = await API.getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrendingMovies();
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const {
    genres,
    vote_average,
    original_title,
    overview,
    poster_path,
    release_date,
  } = movie;

  const movieGenres = [...genres];
  const movieUserScore = Math.round(vote_average * 10);

  return (
    <main>
      <Link to={location.state?.from ?? '/movies'}>← go back</Link>
      <div style={{ display: 'flex' }}>
        <div>
          <img
            src={
              poster_path
                ? 'https://image.tmdb.org/t/p/w300' + poster_path
                : imgNotFound
            }
            alt={original_title}
          />
        </div>
        <div>
          <h3>
            {original_title} ({release_date.slice(0, 4)})
          </h3>
          <p>User Score: {movieUserScore}%</p>
          <h4>Overview</h4>
          <p>{overview}</p>
          <h4>Genres</h4>
          <ul>
            {movieGenres.map(({ id, name }) => {
              return (
                <li key={id}>
                  <p>{name}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <p>Additional information</p>
      <ul>
        <li>
          <Link to={`cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`reviews`}>Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};
