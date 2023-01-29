import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import actorImgNotFound from '../../images/actorImgNotFound.png';

export const Cast = () => {
  const { movieId } = useParams();
  const API_KEY = '614b8ef740dcdf4c9fbb2a4f6ff8ca50';
  const BASE_URL = 'https://api.themoviedb.org/3';

  const [actors, setActors] = useState(null);

  useEffect(() => {
    // loader = true
    const fetchMovieDetails = async () => {
      try {
        const { data } = await axios.get(
          `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
        );
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
  const {} = actors;

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
