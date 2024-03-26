import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="navbar__list">
          <li className="navbar__item">
            <NavLink className="navbar__link" to="/">
              Home
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink className="navbar__link" to="/posts">
              Posts
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink className="navbar__link" to="/users">
              Users
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
