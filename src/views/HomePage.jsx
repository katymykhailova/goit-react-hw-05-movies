import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Pagination } from '@material-ui/lab';
import { toast } from 'react-toastify';

import { fetchTrendingMovies, fetchNormalizer } from 'services/apiService';
import MovieList from 'components/MovieList';
import { Loader } from 'components/Loader/Loader';

export default function HomePage() {
  const [movies, setMovies] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [reqStatus, setReqStatus] = useState('idle');

  const location = useLocation();
  const history = useHistory();
  const page = new URLSearchParams(location.search).get('page') ?? 1;

  const onChangePage = (event, page) => {
    history.push({ ...location, search: `page=${page}` });
  };

  useEffect(() => {
    async function fetchMovies(page) {
      try {
        setReqStatus('pending');
        const trendinMoviesData = await fetchTrendingMovies(page);
        const trendinMovies = await trendinMoviesData.results;
        const movies = await fetchNormalizer(trendinMovies);
        setTotalPages(trendinMoviesData.total_pages);
        setMovies(movies);
        setReqStatus('resolved');
      } catch (error) {
        toast.error(error.message);
        setReqStatus('rejected');
      }
    }

    fetchMovies(page);
  }, [page]);

  useEffect(() => {
    function scrollTo() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    scrollTo();
  }, [movies]);

  return (
    <>
      {reqStatus === 'pending' && <Loader />}
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
