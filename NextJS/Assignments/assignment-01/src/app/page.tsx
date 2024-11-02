import Header from "@/components/header";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <main>
        <h1 className="text-3xl font-oleo font-bold">main</h1>
      </main>
      <footer>
        <h1 className="text-3xl  ">footer</h1>
      </footer>
    </div>
  );
}
