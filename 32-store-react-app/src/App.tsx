import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.tsx'
import Home from './pages/Home.tsx'
import Posts from './pages/Posts.tsx'
import Users from './pages/Users.tsx'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
