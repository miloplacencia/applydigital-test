import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();

  const isLinkActive = (path: string) => location.pathname === path;

  return (
    <nav>
      <Link to="/" className={isLinkActive("/") ? "active" : ""}>
        All
      </Link>
      <Link
        to="/favorites"
        className={isLinkActive("/favorites") ? "active" : ""}
      >
        My faves
      </Link>
    </nav>
  );
}
