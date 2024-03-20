import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/pages/Home.tsx'
import About from './components/pages/About.tsx'
import Contacts from './components/pages/Contacts.tsx'
import NotFound from './components/pages/NotFound.tsx'
import Layouts from './components/Layouts.tsx'
import Login from './components/auth/Login.tsx'
import Registration from './components/auth/Registration.tsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
