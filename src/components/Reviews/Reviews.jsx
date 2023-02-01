import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'components/FetchApi';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { notificationParams } from '../../settings/settings';
import { Loader } from 'components/Loader/Loader';
import {
  List,
  Item,
  Author,
  AuthorName,
} from 'components/Reviews/Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [coments, setcoments] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setIsLoading(true);
        const data = await API.getMovieReviews(movieId);
        setcoments(data.results);
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

  if (!coments) {
    return null;
  }

  return (
    <>
      {coments.length > 0 ? (
        <List>
          {coments.map(({ id, content, author }) => {
            return (
              <Item key={id}>
                <Author>
                  Author: <AuthorName>{author}</AuthorName>
                </Author>
                <p>{content}</p>
              </Item>
            );
          })}
        </List>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}

      {isLoading && <Loader />}
    </>
  );
};

export default Reviews;
