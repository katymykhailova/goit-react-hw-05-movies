import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AppBar from 'components/AppBar';
import { Loader } from 'components//Loader/Loader';

// import HomePage from 'views/HomePage';
// import MovieDetailsPage from 'views/MovieDetailsPage';
// import MoviesPage from 'views/MoviesPage';
// import NotFoundView from 'views/NotFoundView';

const HomePage = lazy(() =>
  import('views/HomePage.jsx' /* webpackChunkName: "home-page" */),
);
const MovieDetailsPage = lazy(() =>
  import(
    'views/MovieDetailsPage.jsx' /* webpackChunkName: "movie-details-page" */
  ),
);
const MoviesPage = lazy(() =>
  import('views/MoviesPage.jsx' /* webpackChunkName: "movies -page" */),
);
const NotFoundView = lazy(() =>
  import('views/NotFoundView.jsx' /* webpackChunkName: "not -found-view" */),
);

export default function App() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
      <ToastContainer autoClose={3000} />
    </>
  );
}
