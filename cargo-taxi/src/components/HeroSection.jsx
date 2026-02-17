//HeroSection.jsx
import { Link } from "react-router-dom";
import "../styles/hero.css";

export default function HeroSection() {
  return (
    <section className="hero">
      <h2>Грузовое такси в Бишкеке и Чуйской области</h2>
      <p>Быстро • Надёжно • Доступно</p>
      <Link to="/pricing" className="btn">Заказать сейчас</Link>
    </section>
  );
}
