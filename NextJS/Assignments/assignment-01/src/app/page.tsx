import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import HrHeadDivider from "@/components/hrdivider";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <HrHeadDivider text="KNOW YOUR SKIN"/>
      <div className="flex justify-between items-center">
        <div>a</div>
        <div>b</div>
        <div>c</div>
      </div>
      <HrHeadDivider text="KNOW YOUR SKIN"/>
      <main>
        <h1 className="text-3xl font-oleo font-bold">main</h1>
      </main>
      <footer>
        <h1 className="text-3xl  ">footer</h1>
      </footer>
    </div>
  );
}
