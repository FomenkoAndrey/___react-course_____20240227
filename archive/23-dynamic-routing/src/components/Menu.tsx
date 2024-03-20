import { NavLink } from 'react-router-dom'
import { routes, RoutInterface } from '../App.tsx'

const Menu = () => {
  return (
    <nav>
      <ul>
        {routes
          .filter((route: RoutInterface) => route.name !== 'NotFound')
          .map((route: RoutInterface, index: number) => (
            <li key={index}>
              <NavLink to={route.path}>{route.name}</NavLink>
            </li>
          ))}
      </ul>
    </nav>
  )
}

export default Menu
