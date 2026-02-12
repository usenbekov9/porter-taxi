import { useState } from "react";
import "../styles/calculator.css";

const TARIFFS = {
  porter: 25,
  sprinter: 35,
  truck: 50,
};

export default function Calculator() {
  const [car, setCar] = useState("porter");
  const [km, setKm] = useState("");
  const [loader, setLoader] = useState(false);
  const [urgent, setUrgent] = useState(false);

  const total =
    (Number(km) * TARIFFS[car] || 0) +
    (loader ? 500 : 0) +
    (urgent ? 1000 : 0);

  const order = () => {
    if (!km) return alert("Введите расстояние");

    const text = `🚚 Грузовое такси
Машина: ${car}
Км: ${km}
Грузчики: ${loader ? "Да" : "Нет"}
Срочно: ${urgent ? "Да" : "Нет"}
Цена: ${total} сом`;

    window.open(
      `https://wa.me/996555123456?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  };

  return (
    <div className="calculator">
      <h2>Расчёт стоимости</h2>

      <select value={car} onChange={e => setCar(e.target.value)}>
        <option value="porter">Porter — 25 сом/км</option>
        <option value="sprinter">Sprinter — 35 сом/км</option>
        <option value="truck">Большегруз — 50 сом/км</option>
      </select>

      <input
        type="number"
        placeholder="Расстояние (км)"
        value={km}
        onChange={e => setKm(e.target.value)}
      />

      <label>
        <input type="checkbox" onChange={e => setLoader(e.target.checked)} />
        Грузчики (+500)
      </label>

      <label>
        <input type="checkbox" onChange={e => setUrgent(e.target.checked)} />
        Срочно (+1000)
      </label>

      <h3>Итого: {total} сом</h3>
      <button onClick={order}>Заказать в WhatsApp</button>
    </div>
  );
}
