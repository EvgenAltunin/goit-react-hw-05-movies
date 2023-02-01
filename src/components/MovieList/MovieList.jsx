import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieList = ({ movies }) => {
  const location = useLocation();
  if (!movies) {
    return null;
  }

  return (
    <ul style={{ padding: "0 20px" }}>
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

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
