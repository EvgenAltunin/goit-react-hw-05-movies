import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'components/FetchApi';
import { useState } from 'react';
import actorImgNotFound from '../../images/actorImgNotFound.png';

export const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);

  useEffect(() => {
    // loader = true
    const fetchMovieDetails = async () => {
      try {
        const data = await API.getMovieCast(movieId);
        setActors(data.cast);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  if (!actors) {
    return null;
  }
  return (
    <ul>
      {actors.map(({ id, profile_path, name, character }) => {
        return (
          <li key={id}>
            <img
              src={
                profile_path
                  ? 'https://image.tmdb.org/t/p/w154' + profile_path
                  : actorImgNotFound
              }
              alt=""
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
};
