import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home.tsx'
import About from './components/About.tsx'
import Contacts from './components/Contacts.tsx'
import NotFound from './components/NotFound.tsx'
import Menu from './components/Menu.tsx'
import FooterLinks from './components/FooterLinks.tsx'
import { ComponentType } from 'react'
import Admin from './components/Admin.tsx'

export interface RoutInterface {
  path: string
  component: ComponentType
  name: string
}

export const routes: RoutInterface[] = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/about', component: About, name: 'About' },
  { path: '/contacts', component: Contacts, name: 'Contacts' },
  { path: '/admin', component: Admin, name: 'Admin' }, // 'Admin' is not in the menu and footer links
  { path: '*', component: NotFound, name: 'NotFound' }
]

const App = () => {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        {routes.map((route: RoutInterface, index: number) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
      </Routes>
      <FooterLinks />
    </BrowserRouter>
  )
}

export default App
