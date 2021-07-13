import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Pagination } from '@material-ui/lab';
import { fetchTrendingMovies, fetchNormalizer } from 'services/apiService';
import MovieList from 'components/MovieList';

export default function HomePage() {
  const [movies, setMovies] = useState(null);
  const [totalPages, setTotalPages] = useState(10);

  const location = useLocation();
  const history = useHistory();
  const page = new URLSearchParams(location.search).get('page') ?? 1;

  const onChangePage = (event, page) => {
    history.push({ ...location, search: `page=${page}` });
  };

  useEffect(() => {
    async function fetchMovies(page) {
      try {
        const trendinMoviesData = await fetchTrendingMovies(page);
        const trendinMovies = await trendinMoviesData.results;
        const movies = await fetchNormalizer(trendinMovies);
        setTotalPages(trendinMoviesData.total_pages);
        setMovies(movies);
      } catch (error) {
        // toast.error(error.message);
        // setReqStatus('rejected');
      }
    }
    fetchMovies(page);
  }, [page]);

  return (
    <>
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
