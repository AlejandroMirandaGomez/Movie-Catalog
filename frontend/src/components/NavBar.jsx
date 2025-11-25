import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      {/* Título */}
      <div className="text-2xl font-bold hover:scale-105 transition-all duration-300 self-center">
        <Link to="/">Movie Catalog</Link>
      </div>

      {/* Links */}
      <div className="flex gap-4 text-lg justify-center md:justify-end">
        <Link to="/" className="navbar-link">
          Home
        </Link>
        <Link to="/favorites" className="navbar-link">
          Favorites
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
