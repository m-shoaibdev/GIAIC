import Image from "next/image";
// import React from "react";
// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import upto10 from "../public/upto10.png";
export default function HeroSlide() {
    return (
        <>
    {/* <Carousel 
      showArrows={true} 
      autoPlay={true} 
      infiniteLoop={true} 
      interval={3000} 
      showThumbs={false} 
      showStatus={false}
    >
      <div>
        
        <p className="legend">Slide 1 Caption</p>
      </div>
      <div>
        
        <p className="legend">Slide 2 Caption</p>
      </div>
      <div>
       
        <p className="legend">Slide 3 Caption</p>
      </div>
    </Carousel> */}
        <div className="mt-5 lg:mt-10 px-4 lg:px-6">
        <Image src={upto10} alt="upto10" className="w-auto  object-cover"/>
        </div>

        </>
    );
}