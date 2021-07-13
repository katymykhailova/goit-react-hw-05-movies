import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Pagination } from '@material-ui/lab';
import { toast } from 'react-toastify';
import { fetchMoviesSearchQuery, fetchNormalizer } from 'services/apiService';
import SearchForm from 'components/SearchForm';
import MovieList from 'components/MovieList';
import { Loader } from 'components/Loader/Loader';

import React from 'react';

export default function MoviesPage() {
  const [movies, setMovies] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [reqStatus, setReqStatus] = useState('idle');

  const location = useLocation();
  const history = useHistory();
  const page = new URLSearchParams(location.search).get('page') ?? 1;
  const searchQuery = new URLSearchParams(location.search).get('query') ?? '';

  const onChangePage = (event, page) => {
    history.push({ ...location, search: `page=${page}&query=${searchQuery}` });
  };

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    async function fetchMovies(searchQuery) {
      try {
        setReqStatus('pending');
        const popularMoviesData = await fetchMoviesSearchQuery(
          searchQuery,
          page,
        );
        const popularMovies = await popularMoviesData.results;
        const movies = await fetchNormalizer(popularMovies);
        setTotalPages(popularMoviesData.total_pages);
        setMovies(movies);
        setReqStatus('resolved');
      } catch (error) {
        setReqStatus('rejected');
        toast.error(error.message);
      }
    }
    fetchMovies(searchQuery);
  }, [page, searchQuery]);

  useEffect(() => {
    function scrollTo() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    scrollTo();
  }, [movies]);

  const handleFormSubmit = searchQuery => {
    history.push({
      ...location,
      search: `page=${1}&query=${searchQuery}`,
    });
    setMovies([]);
  };

  return (
    <>
      {reqStatus === 'pending' && <Loader />}
      <SearchForm onSubmit={handleFormSubmit} />
      {movies && <MovieList movies={movies} />}
      {reqStatus === 'resolved' && (
        <Pagination
          className="pagination"
          count={totalPages}
          onChange={onChangePage}
          page={Number(page)}
          showFirstButton
          showLastButton
          size="large"
        />
      )}
    </>
  );
}
