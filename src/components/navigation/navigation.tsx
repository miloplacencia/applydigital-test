import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav>
      <Link to="/">All</Link>
      <Link to="/favorites">My faves</Link>
    </nav>
  );
}
