import { Link } from 'react-router-dom'

const FooterLinks = () => {
  return (
    <div className="footer-links">
      <Link to="/">Home</Link>
      <Link to="/articles">Articles</Link>
      <Link to="/about">About</Link>
      <Link to="/contacts">Contacts</Link>
      <Link to="/login">Login</Link>
      <Link to="/registration">Registration</Link>
    </div>
  )
}

export default FooterLinks
