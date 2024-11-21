import Link from "next/link";
export default function Home(){
  return(
      <main>
        <div className="hero-section flex flex-col items-center text-center gap-8 my-20">
          <h6 className="text-[#23A6F0] text-lg font-bold tracking-wide">Welcome</h6>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold md:leading-[80px] tracking-wide">Selling on the <br /> internet like a pro</h1>
          <p className="text-[16px] sm:text-xl tracking-wide font-medium">We know how large objects will act, but things on a <br />
          small scale just do not act that way.</p>
          <div className="flex gap-4 text-sm font-bold tracking-wide">
            <Link href={"/"} className="bg-[#23A6F0] text-white px-9 py-4 rounded ">Get Quote Now</Link>
            <Link href={"/"} className="border border-[#23A6F0] text-[#23A6F0] px-8 py-4 rounded hover:bg-[#23A6F0] hover:text-white transition-all">Learn More</Link>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-between gap-10 my-8">
            <div className="bg-white py-9 px-10">
            <div className="bg-[#FFDCD1] rounded-xl w-[70px] h-[76px] mb-5"></div>
            <h3 className="text-[16px] font-bold text-[#252B42] tracking-wide">training Courses</h3>
            <div className="bg-red-500 h-0.5 w-[50px] my-5"></div>
            <p className="text-[#737373] font-medium tracking-wide md:pr-6 text-base">The gradual accumulation of information about atomic and  small-scale behaviour...</p>
          </div>
            <div className="bg-white py-9 px-10">
            <div className="bg-[#B9EAA8] rounded-xl w-[70px] h-[76px] mb-5"></div>
            <h3 className="text-[16px] font-bold text-[#252B42] tracking-wide">2,769 online courses</h3>
            <div className="bg-red-500 h-0.5 w-[50px] my-5"></div>
            <p className="text-[#737373] font-medium tracking-wide md:pr-6 text-base">The gradual accumulation of information about atomic and  small-scale behaviour...</p>
          </div>
            <div className="bg-[#23A6F0] py-9 px-10 text-white">
            <div className="bg-white rounded-xl w-[70px] h-[76px] mb-5"></div>
            <h3 className="text-[16px] font-bold tracking-wide">training Courses</h3>
            <div className="bg-red-500 h-0.5 w-[50px] my-5"></div>
            <p className="font-medium tracking-wide md:pr-6 text-base">The gradual accumulation of information about atomic and  small-scale behaviour...</p>
          </div>
        </div>
      </main>
  )
}