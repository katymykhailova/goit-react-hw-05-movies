import { useState, useEffect } from 'react';
import {
  useParams,
  NavLink,
  Route,
  useRouteMatch,
  Switch,
} from 'react-router-dom';
import { fetchMovieDetails } from 'services/apiService';
import Cast from 'views/Cast';
import Reviews from 'views/Reviews';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const { url, path } = useRouteMatch();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function fetchMovies(movieId) {
      try {
        const movie = await fetchMovieDetails(movieId);
        setMovie(movie);
      } catch (error) {
        // toast.error(error.message);
        // setReqStatus('rejected');
      }
    }
    fetchMovies(movieId);
  }, [movieId]);

  return (
    <>
      {movie && (
        <>
          <img src={movie.poster_path} alt={movie.title} />
          <h2>
            {movie.title}
            {movieId}
          </h2>
        </>
      )}
      <NavLink
        exact
        to={`${url}/cast`}
        // className="nav-link"
        // activeClassName="nav-activelink"
      >
        Cast
      </NavLink>

      <NavLink
        to={`${url}/reviews`}
        // className="nav-link"
        // activeClassName="nav-activelink"
      >
        Reviews
      </NavLink>

      <Switch>
        {/* <Route path="/movies/:movieId/cast"> */}
        <Route path={`${path}/cast`}>
          <Cast />
        </Route>
        <Route path={`${path}/reviews`}>
          <Reviews />
        </Route>
      </Switch>
    </>
  );
}
