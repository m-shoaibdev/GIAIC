import Link from "next/link";

export default function LeftRightArrow() {
    return (
        <div className="flex gap-2 items-center justify-center">
                <Link href="#" className="w-8 h-8 md:w-11 md:h-11 bg-neutral-100 rounded-full flex justify-center items-center hover:bg-neutral-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 md:size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /></svg>
                </Link>
                <Link href="#" className="w-8 h-8 md:w-11 md:h-11 bg-neutral-100 rounded-full flex justify-center items-center hover:bg-neutral-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 md:size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /></svg>
                </Link>
        </div>
    );
}