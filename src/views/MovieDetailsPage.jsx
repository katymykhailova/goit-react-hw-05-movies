import { useState, useEffect } from 'react';
import {
  useParams,
  NavLink,
  Route,
  useRouteMatch,
  Switch,
} from 'react-router-dom';
import { toast } from 'react-toastify';
import { fetchMovieDetails } from 'services/apiService';
import MovieDetails from 'components/MovieDetails';
import Cast from 'views/Cast';
import Reviews from 'views/Reviews';
import NotFoundView from 'views/NotFoundView';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [reqStatus, setReqStatus] = useState('idle');
  const { url, path } = useRouteMatch();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovies(movieId) {
      try {
        setReqStatus('pending');
        const movie = await fetchMovieDetails(movieId);
        setMovie(movie);
        setReqStatus('resolved');
      } catch (error) {
        setReqStatus('rejected');
        toast.error(error.message);
      }
    }
    fetchMovies(movieId);
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <MovieDetails movie={movie} />
        </>
      )}
      <NavLink
        exact
        to={`${url}/cast`}
        className="movie-link"
        activeClassName="movie-activelink"
      >
        Cast
      </NavLink>

      <NavLink
        to={`${url}/reviews`}
        className="movie-link"
        activeClassName="movie-activelink"
      >
        Reviews
      </NavLink>

      <Switch>
        <Route path={`${path}/cast`}>
          <Cast />
        </Route>
        <Route path={`${path}/reviews`}>
          <Reviews />
        </Route>
      </Switch>
      {reqStatus === 'rejected' && <NotFoundView />}
    </>
  );
}
