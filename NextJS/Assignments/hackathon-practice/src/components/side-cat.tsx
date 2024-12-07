import Link from "next/link";

export default function SideCategory() {
    return (
        <div className="lg:border-r border-black border-opacity-30 p-4 lg:px-5  lg:py-8 md:min-w-56">
            <ul className="flex  gap-3 lg:flex-col lg:gap-4 flex-wrap text-sm md:text-base *:border lg:*:border-none *:border-black *:px-3 *:py-1 lg:*:p-0 *:border-opacity-30 *:rounded-xl hover:*:bg-black hover:*:text-white lg:hover:*:bg-transparent lg:hover:*:text-black ">
                <li className="flex lg:justify-between items-center gap-4 lg:gap-10">
                    <Link href="/">Woman's Fashion</Link>
                    <Link href="/"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg></Link>
                </li>
                <li className="flex lg:justify-between items-center gap-4 lg:gap-10">
                    <Link href="/">Men’s Fashion</Link>
                    <Link href="/"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" /></svg></Link>
                </li>
                <li>Electronics</li>
                <li>Home & Lifestyle</li>
                <li>Medicine</li>
                <li>Sports & Outdoor</li>
                <li>Baby’s & Toys</li>
                <li>Groceries & Pets</li>
                <li>Health & Beauty</li>
            </ul>
        </div>
    );
}