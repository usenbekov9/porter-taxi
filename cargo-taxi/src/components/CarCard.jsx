export default function CarCard({ title, price, img  }) {
  return (
    <div onClick={() => window.location.href = "/pricing"} className="car-card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{price} сом/км</p>
    </div>
  );
}
