import { useEffect, Suspense } from 'react';
import {
  LinkStyled,
  Container,
  ImgWrapper,
  Image,
  MainTitle,
  Title,
  Genres,

} from 'pages/MovieDetails/MovieDetails.styled';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import * as API from 'components/FetchApi';
import { useState } from 'react';
import imgNotFound from '../../images/imgNotFound.png';
import { toast } from 'react-toastify';
import { notificationParams } from '../../settings/settings';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      try {
        setIsLoading(true);
        const data = await API.getMovieDetails(movieId);
        setMovie(data);
      } catch (error) {
        console.log(error);
        toast.error(`${error.message}. Try again.`, {
          notificationParams,
        });
      } finally {
        setIsLoading(false);
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
    <Container>
      <LinkStyled to={location.state?.from ?? '/movies'}>← Go back</LinkStyled>
      <div style={{ display: 'flex' }}>
        <ImgWrapper>
          <Image
            src={
              poster_path
                ? 'https://image.tmdb.org/t/p/w300' + poster_path
                : imgNotFound
            }
            alt={original_title}
          />
        </ImgWrapper>
        <div>
          <MainTitle>
            {original_title} ({release_date.slice(0, 4)})
          </MainTitle>
          <p>User Score: {movieUserScore}%</p>
          <Title>Overview</Title>
          <p>{overview}</p>
          <Title>Genres</Title>
          <Genres>
            {movieGenres.map(({ id, name }) => {
              return (
                <li key={id}>
                  <p>{name}</p>
                </li>
              );
            })}
          </Genres>
        </div>
      </div>
      <Title>Additional information</Title>
      <ul>
        <li>
          <Link to={`cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`reviews`}>Reviews</Link>
        </li>
      </ul>
      {isLoading && <Loader />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;
