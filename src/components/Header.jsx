import { NavLink } from 'react-router-dom'
import logo from '../assets/logo-header.png'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <NavLink to="/" className="header-logo-link">
        <img className="header-logo" src={logo} alt="Mica Studio" />
      </NavLink>
      <nav className="header-nav">
        <NavLink to="/">Domov</NavLink>
        <NavLink to="/about">O meni</NavLink>
        <NavLink to="/contact">Kontakt</NavLink>
      </nav>
    </header>
  )
}
