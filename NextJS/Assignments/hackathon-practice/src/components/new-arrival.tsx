import SubTitle from "./subTitle";
import MainHeading from "./main-heading";
import Link from "next/link";
import Image from "next/image";
import Frame1 from "../public/Frame1.png";
import Frame2 from "../public/Frame2.png";
import Frame3 from "../public/Frame3.png";
import Frame4 from "../public/Frame4.png";

export default function NewArrival() {
    return (
        <div className="md:container md:mx-auto p-4 xl:px-10">
            <SubTitle title="Featured" />
            <div className="flex justify-between items-center">
            <div className="flex gap-8 sm:gap-20 items-end">
                <MainHeading title="New Arrival" />
            </div>
            </div>
            {/* grid image frames*/}
            <div className="mt-8 md:mt-14 grid grid-cols-1 lg:grid-cols-4 md:grid-rows-2 gap-8">
                <div className="lg:col-span-2 md:row-span-2 relative">
                    <Image src={Frame1} alt="Frame1" className="object-cover w-full" />
                    <div className="absolute text-white w-72 bottom-6 md:bottom-7 left-8 ">
                        <h4 className="font-semibold font-inter text-2xl">PlayStation 5</h4>
                        <p className="my-2 text-sm">Black and White version of the PS5 coming out on sale.</p>
                        <Link href="/" className="underline font-medium text-base">Shop Now</Link>
                    </div>
                </div>
                <div className="relative lg:col-span-2">
                <Image src={Frame2} alt="Frame2" className="object-cover w-full" />
                    <div className="absolute text-white w-72 bottom-6 left-6 ">
                        <h4 className="font-semibold font-inter text-2xl">Women’s Collections</h4>
                        <p className="my-2 text-sm">Featured woman collections that give you another vibe.</p>
                        <Link href="/" className="underline font-medium text-base">Shop Now</Link>
                    </div>
                </div>
                <div className="relative md:col-span-1">
                <Image src={Frame3} alt="Frame3" className="object-cover w-full" />
                    <div className="absolute text-white w-72 bottom-6 left-6 ">
                        <h4 className="font-semibold font-inter text-2xl">Speakers</h4>
                        <p className="my-2 text-sm">Amazon wireless speakers</p>
                        <Link href="/" className="underline font-medium text-base">Shop Now</Link>
                    </div>
                </div>
                <div className="relative md:col-span-1">
                <Image src={Frame4} alt="Frame4" className="object-cover w-full" />
                    <div className="absolute text-white w-72 bottom-6 left-6 ">
                        <h4 className="font-semibold font-inter text-2xl">Perfume</h4>
                        <p className="my-2 text-sm">GUCCI INTENSE OUD EDP</p>
                        <Link href="/" className="underline font-medium text-base">Shop Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}