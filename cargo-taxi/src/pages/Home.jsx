import HeroSection from "../components/HeroSection";
import CarCard from "../components/CarCard";

export default function Home() {
  return (
    <>
      <HeroSection />
      <section className="cars">
        <CarCard title="Porter" price="25" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpxATnfuOeQh6wRP83U1qsLHLGscvIIfPgxw&s" />
        <CarCard title="Sprinter" price="35" img="https://i.ytimg.com/vi/u0tusmfbhq0/hqdefault.jpg" />
        <CarCard title="Большегруз" price="50" img="https://avatars.mds.yandex.net/i?id=434676c718727dd4e2fd749d8aac26aa55599da9-4970622-images-thumbs&n=13" />
      </section>
    </>
  );
}
