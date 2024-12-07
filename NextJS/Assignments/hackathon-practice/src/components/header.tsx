import Link from "next/link";

export default function Header() {
    return (
        <header className="border-b border-black border-opacity-30">
            <div className="topbar bg-black">
                <div className="md:container md:mx-auto p-3 sm:py-3.5 md:text-center text-white text-sm flex justify-between items-center gap-4 xl:px-10">
                    <div className="hidden md:flex lg:flex-1"></div>
                    <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%! <Link href="/" className="underline font-semibold ml-2">Shop Now</Link></p>
                    <Link href="/" className="flex flex-1 justify-end items-center gap-1">English <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4"> <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg></Link>
                </div>
            </div>
            <div className="md:container md:mx-auto px-4 pt-8 pb-3 flex justify-between items-center xl:px-10">
                <h1 className="logo text-2xl font-bold font-inter">Exclusive</h1>
                <div className="nav hidden sm:flex gap-5 lg:gap-12 text-[15px] md:text-base">
                    <Link href={"/"} className="border-b border-black">Home</Link>
                    <Link href={"/"} className="hover:border-b hover:border-black">Contact</Link>
                    <Link href={"/"} className="hover:border-b hover:border-black">About</Link>
                    <Link href={"/"} className="hover:border-b hover:border-black">Sign Up</Link>
                </div>
                <div className="flex gap-3 md:gap-4 items-center">
                    <div className="hidden lg:flex">
                        <input type="text" placeholder="What are you looking for?"  className="bg-[#f5f5f5] px-4 py-[11px] rounded-tl rounded-bl outline-none text-xs" />
                        <button className="bg-[#f5f5f5] text-black pr-4 py-[11px] rounded-tr rounded-br">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 md:size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
                        </button>
                    </div>
                    <button className="lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 md:size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /></svg>
                    </button>
                    <button className="favorites">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 md:size-6 hover:fill-red-500 hover:stroke-red-500">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
                    </button>
                    <button className="cart">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 md:size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>
                    </button>
                    {/* <button className="md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-5 md:size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>
                    </button> */}
                </div>
            </div>
            <div className="nav sm:hidden flex gap-8 text-sm md:text-base justify-center mb-3">
                    <Link href={"/"} className="border-b border-black">Home</Link>
                    <Link href={"/"} className="hover:border-b hover:border-black">Contact</Link>
                    <Link href={"/"} className="hover:border-b hover:border-black">About</Link>
                    <Link href={"/"} className="hover:border-b hover:border-black">Sign Up</Link>
                </div>
        </header>
    );
}