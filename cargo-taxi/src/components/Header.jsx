//Header.jsx
import { href, Link } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <h1 onClick={() => window.location.href = "/"}>PORTER <span>TAXI</span></h1>
      <nav>
        <Link to="/">Главная</Link>
        <Link to="/pricing">Расчёт</Link>
        <Link to="/contacts">Контакты</Link>
      </nav>
    </header>
  );
}
