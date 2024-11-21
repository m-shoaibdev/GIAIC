import HeroSection from "@/components/hero-section";
import HrHeadDivider from "@/components/hrdivider";
import SkinBox from "@/components/skinbox";
import skin1 from "../public/kys01.jpg";
import skin2 from "../public/kys02.jpg";
import skin3 from "../public/kys03.jpg";
import ProductGrid from "@/components/productgrid";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HrHeadDivider leftline={true} text="KNOW YOUR SKIN" rightline={true}/>
      <div className="md:flex justify-between  text-center container mx-auto md:gap-3 my-10">
        <SkinBox src={skin1} alt="Darker skin tones" h2head="Darker skin tones" partext="High amount of melanin, use products containing vitamin C and not contain ingredients that can cause skin irritation, such as alcohol." />
        <SkinBox src={skin2} alt="Acne skin" h2head="Acne skin" partext="Acne is a common skin condition characterized by pimples, blackheads, and whiteheads due to overproduction of oil, clogged hair follicles, and bacterial growth.s" />
        <SkinBox src={skin3} alt="Dry skin/Oily skin" h2head="Dry skin/Oily skin" partext="To keep the skin healthy and hydrated, use a gentle cleanser, moisturize regularly with a thick, oil-based cream." />
      </div>
      {/* Product section */} 
      <div className="bg-lightblue px-4 pt-8 my-5 ">
        <div className="md:flex gap-4 container mx-auto">
          <ProductGrid />
          <div className="md:w-1/2">
            <HrHeadDivider text="PRODUCTS" rightline={true}/>
            <p className="text-xl text-bcolor sm:mr-28 text-justify">
              Good skin care involves keeping your skin clean, moisturized, and protected from the sun.Different skin care products can address these concerns by providing hydration, exfoliation, sun protection, and other benefits. It is important to choose products that are appropriate for your skin type and to follow a regular skin care routine for best results.<br/>
              <a href="#" className="underline text-primary inline-block ml-auto w-full text-right">View all</a>
            </p>
          </div>
        </div>
            <HrHeadDivider leftline={true}  text="Nourish the outer health of your body! " rightline={false} />
      </div>
    </>
  );
}
