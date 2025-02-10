import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="navbar-list">
          <li><a href="#">Accueil</a></li>
          <li><a href="#">Produits</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
      <h1 className="title">LauKuPizza</h1>
      <p className="slogan">Les meilleures pizzas de Belgique même d` Italie </p>
    </header>
  );
}

export default Header;