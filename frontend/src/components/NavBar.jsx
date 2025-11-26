import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const isFav = pathname === "/favorites";

  return (
    <nav className="navbar">
      {/* Título */}
      <div className="text-2xl font-bold hover:scale-105 transition-all duration-300 self-center">
        <Link to="/">Movie Catalog</Link>
      </div>

      {/* Links */}
      <div className="flex gap-4 text-lg justify-center md:justify-end">
        <Link
          to="/"
          className={`navbar-link ${isHome && "navbar-link--active"}`}
        >
          Home
        </Link>
        <Link
          to="/favorites"
          className={`navbar-link ${isFav && "navbar-link--active"}`}
        >
          Favorites
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
