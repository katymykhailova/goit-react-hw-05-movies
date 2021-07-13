import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Pagination } from '@material-ui/lab';
import { fetchMoviesSearchQuery, fetchNormalizer } from 'services/apiService';
import SearchForm from 'components/SearchForm';
import MovieList from 'components/MovieList';

import React from 'react';

export default function HomePage() {
  const [movies, setMovies] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [totalPages, setTotalPages] = useState(10);

  const location = useLocation();
  const history = useHistory();
  const page = new URLSearchParams(location.search).get('page') ?? 1;

  const onChangePage = (event, page) => {
    history.push({ ...location, search: `page=${page}` });
  };

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    async function fetchMovies(searchQuery) {
      try {
        const popularMoviesData = await fetchMoviesSearchQuery(
          searchQuery,
          page,
        );
        const popularMovies = await popularMoviesData.results;
        const movies = await fetchNormalizer(popularMovies);
        setTotalPages(popularMoviesData.total_pages);
        setMovies(movies);
      } catch (error) {
        // toast.error(error.message);
        // setReqStatus('rejected');
      }
    }
    fetchMovies(searchQuery);
  }, [page, searchQuery]);

  const handleFormSubmit = searchQuery => {
    setSearchQuery(searchQuery);
    // setPage(1);
    setMovies([]);
  };

  return (
    <>
      <SearchForm onSubmit={handleFormSubmit} />
      {movies && <MovieList movies={movies} />}
      <Pagination
        count={totalPages}
        onChange={onChangePage}
        page={Number(page)}
        showFirstButton
        showLastButton
        size="large"
      />
    </>
  );
}
