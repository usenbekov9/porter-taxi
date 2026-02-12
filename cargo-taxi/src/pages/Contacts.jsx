import { Phone } from "lucide-react";

export default function Contacts() {
  return (
    <div className="contacts">
      <h2>Контакты</h2>
      <p><Phone color="#ff0000" /> +996 555 123 456</p>
      <iframe
        src="https://maps.google.com/maps?q=Bishkek&output=embed"
        width="100%"
        height="500"
      ></iframe>
    </div>
  );
}
