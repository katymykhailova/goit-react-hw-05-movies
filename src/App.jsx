import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AppBar from 'components/AppBar';
import HomePage from 'views/HomePage';
import MovieDetailsPage from 'views/MovieDetailsPage';
import MoviesPage from 'views/MoviesPage';
import NotFoundView from 'views/NotFoundView';

export default function App() {
  return (
    <>
      <AppBar />
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
      <ToastContainer autoClose={3000} />
    </>
  );
}
