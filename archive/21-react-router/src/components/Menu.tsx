import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'link activeLink' : 'link')}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({ isActive }) => (isActive ? 'link activeLink' : 'link')}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contacts" className={({ isActive }) => (isActive ? 'link activeLink' : 'link')}>
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
