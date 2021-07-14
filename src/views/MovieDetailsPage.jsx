import { useState, useEffect, lazy, Suspense } from 'react';
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
import NotFoundView from 'views/NotFoundView';
import { Loader } from 'components//Loader/Loader';

const Cast = lazy(() =>
  import('views/Cast.jsx' /* webpackChunkName: "cast-page" */),
);
const Reviews = lazy(() =>
  import('views/Reviews.jsx' /* webpackChunkName: "reviews-page" */),
);

// import Cast from 'views/Cast';
// import Reviews from 'views/Reviews';

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
