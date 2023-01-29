import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

export const Reviews = () => {
  const { movieId } = useParams();
  const API_KEY = '614b8ef740dcdf4c9fbb2a4f6ff8ca50';
  const BASE_URL = 'https://api.themoviedb.org/3';

  const [coments, setcoments] = useState(null);

  useEffect(() => {
    // loader = true
    const fetchMovieDetails = async () => {
      try {
        const { data } = await axios.get(
          `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
        );
        setcoments(data.results);
      } catch (error) {
        console.log(error);
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
