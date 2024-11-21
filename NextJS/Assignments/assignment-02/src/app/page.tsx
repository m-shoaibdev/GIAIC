import Card from "@/components/Card";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <div className="hero-section flex flex-col items-center text-center gap-8 my-20">
        <h6 className="text-[#23A6F0] text-lg font-bold tracking-wide">
          Welcome
        </h6>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold md:leading-[80px] tracking-wide">
          Selling on the <br className="hidden md:block" /> internet like a pro
        </h1>
        <p className="text-[16px] sm:text-xl tracking-wide font-medium">
          We know how large objects will act, but things on a{" "}
          <br className="hidden md:block" />
          small scale just do not act that way.
        </p>
        <div className="flex gap-4 text-sm font-bold tracking-wide">
          <Link
            href={"/"}
            className="bg-[#23A6F0] text-white px-9 py-4 rounded "
          >
            Get Quote Now
          </Link>
          <Link
            href={"/"}
            className="border border-[#23A6F0] text-[#23A6F0] px-8 py-4 rounded hover:bg-[#23A6F0] hover:text-white transition-all"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-between gap-10 my-8">
        <Card
          title="training Courses"
          description="The gradual accumulation of information about atomic and  small-scale behaviour..."
          boxBgColor="bg-[#FFDCD1]"
        />
        <Card
          title="2,769 online courses"
          description="The gradual accumulation of information about atomic and  small-scale behaviour..."
          boxBgColor="bg-[#B9EAA8]"
        />
        <Card
          cardBgColor="bg-[#23A6F0]"
          title="learning paths"
          line="bg-white"
          description="The gradual accumulation of information about atomic and  small-scale behaviour..."
          titleColor="text-white"
          descriptionColor="text-white"
        />
      </div>
    </main>
  );
}
