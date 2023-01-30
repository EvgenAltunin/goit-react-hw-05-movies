import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const location = useLocation();
  if (!movies) {
    return null;
  }

  return (
    <ul>
      {movies.map(({ id, title, release_date }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title} ({release_date.slice(0, 4)})
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
