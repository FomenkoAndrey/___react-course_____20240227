import { Link } from 'react-router-dom'

const FooterLinks = () => {
  return (
    <footer>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contacts">Contacts</Link>
      </div>
    </footer>
  )
}

export default FooterLinks
