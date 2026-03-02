import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <header className="main-header">
      <nav className="main-nav">
        <Link className="main-nav-link" to="/">
          Panel
        </Link>
        <Link className="main-nav-link" to="/clients">
          Klienci
        </Link>
      </nav>
    </header>
  );
};

export default Sidebar;
