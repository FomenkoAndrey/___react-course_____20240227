import { Link } from 'react-router-dom'
import { routes, RoutInterface } from '../App.tsx'

const FooterLinks = () => {
  return (
    <footer>
      <ul>
        {routes
          .filter((route: RoutInterface) => route.name !== 'NotFound')
          .map((route: RoutInterface, index: number) => (
            <li key={index}>
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
      </ul>
    </footer>
  )
}

export default FooterLinks
