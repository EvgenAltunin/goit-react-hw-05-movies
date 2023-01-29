import { useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import imgNotFound from '../../images/imgNotFound.png';


export const MovieDetails = () => {
  const API_KEY = '614b8ef740dcdf4c9fbb2a4f6ff8ca50';
  const BASE_URL = 'https://api.themoviedb.org/3';
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    // loader = true
    const fetchMovieDetails = async () => {
      try {
        const { data } = await axios.get(
          `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`
        );
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  if (!movie) {
    return null;
  }

  const { genres, vote_average, original_title, overview, poster_path, release_date } = movie;

  const movieGenres = [...genres];
  const movieUserScore = Math.round(vote_average * 10);

  return (
    <main>
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
          <h3>{original_title}</h3>
          <p>{release_date.slice(0, 4)}</p>
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
