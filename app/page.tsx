import { Book } from "@/components/Book";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { GiftCard } from "@/components/GiftCard";
import { Hero } from "@/components/Hero";
import { Horses } from "@/components/Horses";
import { Intro } from "@/components/Intro";
import { Nav } from "@/components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Intro />
        <Experience />
        <Horses />
        <GiftCard />
        <Gallery />
        <Book />
      </main>
      <Footer />
    </>
  );
}
