import { MovieList } from 'components/MovieList/MovieList';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import * as API from 'components/FetchApi';

export const Movies = () => {
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
      } catch (error) {
        console.log(error);
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
