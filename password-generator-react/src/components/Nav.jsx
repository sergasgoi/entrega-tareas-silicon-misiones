import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav className="menu">

      <NavLink
        to="/"
        className={({ isActive }) => isActive ? "menu-activo" : ""}
      >
        Generador
      </NavLink>

      <NavLink
        to="/listado"
        className={({ isActive }) => isActive ? "menu-activo" : ""}
      >
        Listado
      </NavLink>

    </nav>
  )
}

export default Nav