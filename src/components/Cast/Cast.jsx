import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'components/FetchApi';
import { useState } from 'react';
import actorImgNotFound from '../../images/actorImgNotFound.png';
import { toast } from 'react-toastify';
import { notificationParams } from '../../settings/settings';
import { Loader } from 'components/Loader/Loader';
import {
  List,
  Name,
  Character,
  Item,
  TextWrapper,
} from 'components/Cast/Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        const data = await API.getMovieCast(movieId);
        setActors(data.cast);
      } catch (error) {
        console.log(error);
        toast.error(`${error.message}. Try again.`, {
          notificationParams,
        });
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  if (!actors) {
    return null;
  }

  return (
    <>
      {actors.length > 0 ? (
        <List>
          {actors.map(({ id, profile_path, name, character }) => {
            return (
              <Item key={id}>
                <img
                  src={
                    profile_path
                      ? 'https://image.tmdb.org/t/p/w154' + profile_path
                      : actorImgNotFound
                  }
                  alt=""
                />
                <TextWrapper>
                  <Name>{name}</Name>
                  <Character>
                    Character: <br />
                    {character}
                  </Character>
                </TextWrapper>
              </Item>
            );
          })}
        </List>
      ) : (
        <p>We don't have information about cast of this movie.</p>
      )}

      {isLoading && <Loader />}
    </>
  );
};

export default Cast;
