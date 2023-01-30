import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as API from 'components/FetchApi';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { notificationParams } from '../../settings/settings';

const Reviews = () => {
  const { movieId } = useParams();
  const [coments, setcoments] = useState(null);

  useEffect(() => {
    // loader = true
    const fetchMovieDetails = async () => {
      try {
        const data = await API.getMovieReviews(movieId);
        setcoments(data.results);
      } catch (error) {
        console.log(error);
        toast.error(`${error.message}. Try again.`, {
          notificationParams,
        });
      }
    };
    fetchMovieDetails();
  }, [movieId]);

  if (!coments) {
    return null;
  }

  return (
    <ul>
      {coments.map(({ id, content, author }) => {
        return (
          <li key={id}>
            <p>Author: {author}</p>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
