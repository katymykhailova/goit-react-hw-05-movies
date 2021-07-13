import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <NavLink exact to="/" className="nav-link" activeClassName="nav-activelink">
      Home
    </NavLink>

    <NavLink to="/movies" className="nav-link" activeClassName="nav-activelink">
      Movies
    </NavLink>
  </nav>
);

export default Navigation;
