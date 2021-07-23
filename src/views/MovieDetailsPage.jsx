import { useState, useEffect, lazy, Suspense } from 'react';
import {
  useParams,
  NavLink,
  Route,
  useRouteMatch,
  Switch,
  useHistory,
  useLocation,
} from 'react-router-dom';
import { toast } from 'react-toastify';
import { CgArrowLeftR } from 'react-icons/cg';
import { fetchMovieDetails } from 'services/apiService';
import MovieDetails from 'components/MovieDetails';
import NotFoundView from 'views/NotFoundView';
import Button from 'components/Button';
import { Loader } from 'components//Loader/Loader';

const Cast = lazy(() =>
  import('views/Cast.jsx' /* webpackChunkName: "cast-page" */),
);
const Reviews = lazy(() =>
  import('views/Reviews.jsx' /* webpackChunkName: "reviews-page" */),
);

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [reqStatus, setReqStatus] = useState('idle');
  const { url, path } = useRouteMatch();
  const [movie, setMovie] = useState(null);
  const history = useHistory();
  const location = useLocation();

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

  const handleGoBack = () => {
    const { state } = location;
    if (state) {
      history.push(location.state.from);
      return;
    }
    history.push({
      pathname: '/movies',
    });
  };

  return (
    <>
      <Button onClick={handleGoBack} aria-label="go back">
        <CgArrowLeftR size={16} />
        Go back
      </Button>
      {movie && (
        <>
          <MovieDetails movie={movie} />
        </>
      )}
      <NavLink
        exact
        to={{
          pathname: `${url}/cast`,
          state: { from: location?.state?.from },
        }}
        className="movie-link"
        activeClassName="movie-activelink"
      >
        Cast
      </NavLink>

      <NavLink
        to={{
          pathname: `${url}/reviews`,
          state: { from: location?.state?.from },
        }}
        className="movie-link"
        activeClassName="movie-activelink"
      >
        Reviews
      </NavLink>

      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path={`${path}/cast`}>
            <Cast />
          </Route>
          <Route path={`${path}/reviews`}>
            <Reviews />
          </Route>
        </Switch>
      </Suspense>
      {reqStatus === 'rejected' && <NotFoundView />}
    </>
  );
}
