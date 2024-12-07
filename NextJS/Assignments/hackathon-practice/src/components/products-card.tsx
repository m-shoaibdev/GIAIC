import Image from "next/image";
import Link from "next/link";
import product1 from "../public/product1.png";
import StarRating from "./star-rating";

export default function ProductsCard() {
    // const handleRatingChange = (rating: number) => {
    //     // console.log("User selected rating:", rating);
    // };
    return (
        <div className="w-48 md:w-[270px] mx-1 mb-2 flex-shrink-0">
            <Link href="/" className="relative group overflow-hidden block">
                <Image src={product1} alt="product1" className="rounded-md object-cover bg-neutral-100" />
                <span className="text-xs bg-softRed text-white px-2 py-1 rounded absolute top-3 left-3"> -40% </span>
                <div className="flex gap-2 flex-col absolute top-3 right-3">
                    <Link href="#" className="w-8 h-8 bg-white rounded-full flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 hover:stroke-red-500 hover:fill-red-500"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                    </Link>
                    <Link href="#" className="w-8 h-8 bg-white rounded-full flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 hover:text-gray-400"><path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
                    </Link>
                </div>
                <Link href="#" className="absolute  bg-black text-white text-xs sm:text-sm md:text-base font-medium px-4 py-2 w-full text-center rounded-br-md rounded-bl-md  -bottom-12  transition-all duration-300 group-hover:bottom-0 ">Add To Cart</Link>
            </Link>

            <div className="mt-4">
                {/* Products desc */}
                <h4 className="text-sm md:text-base font-medium">HAVIT HV-G92 Gamepad</h4>
                <div className="flex gap-3 my-2">
                    <h4 className="text-sm md:text-base font-medium text-softRed">$120</h4>
                    <h4 className="text-sm md:text-base font-medium line-through opacity-50">$160</h4>
                </div>
                {/* Ratings */}
                <div className="ratings flex gap-2">
                    <StarRating totalStars={5} 
                    // onRatingChange={handleRatingChange}
                     />
                    <h4 className="text-sm font-semibold opacity-50">(88)</h4>
                </div>
            </div>
        </div>
    )
}