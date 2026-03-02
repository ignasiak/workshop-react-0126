import { Link, NavLink, Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <header className="main-header">
        <Link className="brand-link" to="/">
          MiniCRM
        </Link>
        <nav className="main-nav">
          <NavLink className="main-nav-link" to="/">
            Panel
          </NavLink>
          <NavLink className="main-nav-link" to="/clients">
            Klienci
          </NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
