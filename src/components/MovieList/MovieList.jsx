import { Link } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  return (
    <ul>
      {movies.length !== 0 &&
        movies.map(({ id, title }) => {
          return (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          );
        })}
    </ul>
  );
};
