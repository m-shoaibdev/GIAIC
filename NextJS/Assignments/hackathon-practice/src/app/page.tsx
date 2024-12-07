import SideCategory from "@/components/side-cat";
import HeroSlide from "@/components/hero-slide";
import FlashSales from "@/components/flash-sales";
import BestSelling from "@/components/best-selling";
import BrowseByCaterogy from "@/components/browse-by-cat";
import ExploreProducts from "@/components/explore-products";
import Image from "next/image";
import banner from "../public/enhance.png";
import Button from "@/components/button";
import NewArrival from "@/components/new-arrival";

export default function Home() {
  return (
    <>
      <div className="md:container md:mx-auto flex  gap-4 flex-col-reverse lg:flex-row xl:px-10 mb-10">
        <SideCategory />
        <HeroSlide />
      </div>
      <FlashSales />
      <div className="md:container md:mx-auto px-4 bg-black bg-opacity-30 h-[1px] my-10"></div>
      <BrowseByCaterogy />
      <div className="md:container md:mx-auto px-4 bg-black bg-opacity-30 h-[1px] my-10"></div>
      <BestSelling />
      <div className="md:container md:mx-auto p-4 xl:px-10 my-5">
        <div className="relative flex justify-center items-center">
        <Image src={banner} alt="banner" className="object-cover" />
          <div className="absolute bottom-3.5 left-4 md:bottom-20 md:left-16">
          <Button title="Buy Now!" bgColor="bg-[#00FF66]" />
          </div>
        </div>
      </div>
      <ExploreProducts />
      <NewArrival />
    </>
  );
}
