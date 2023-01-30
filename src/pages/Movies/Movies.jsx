import { lazy } from 'react';
// import { MovieList } from 'components/MovieList/MovieList';
// import { Searchbar } from 'components/Searchbar/Searchbar';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as API from 'components/FetchApi';
import { toast } from 'react-toastify';
import { notificationParams } from '../../settings/settings';

const MovieList = lazy(() => import('components/MovieList/MovieList'));
const Searchbar = lazy(() => import('components/Searchbar/Searchbar'));

const Movies = () => {
  const [recivedMovies, setRecivedMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  const handleSearchQueryChange = value => {
    setSearchParams({ query: value });
  };

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    const fetchMovieByName = async () => {
      try {
        const data = await API.getMovieByName(searchQuery);
        setRecivedMovies(data.results);

        if (data.total_results === 0) {
          toast.error('No movies found. Try again.', { notificationParams });
          return;
        }
      } catch (error) {
        console.log(error);
        toast.error(`${error.message}. Try again.`, {
          notificationParams,
        });
      }
    };
    fetchMovieByName();
  }, [searchQuery]);

  return (
    <main>
      <Searchbar onFormSubmit={handleSearchQueryChange} />
      <MovieList movies={recivedMovies} />
    </main>
  );
};

export default Movies;
