import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="site-header">
      <div className="header-container">
        <h1 className="logo">Mon Portfolio SI</h1>
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/projects">Projets</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
