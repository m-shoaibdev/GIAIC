import Image from "next/image";
import Logo from "../public/Logo.png";
import Link from "next/link";

export default function Header() {
    return(
        <header>
            <div className="md:container md:mx-auto p-4 md:my-3 flex justify-between items-center">
                <div className="flex-1">
                    <Image src={Logo} alt="logo" className="w-40 md:w-auto"/>
                </div>
                <nav className="hidden flex-1 sm:flex justify-between text-sm md:text-[16px] lg:text-lg">
                    <ul className="flex sm:gap-6 md:gap-8">
                        <Link href="#" className="hover:text-[#FFE492]">Products</Link>
                        <Link href="#" className="hover:text-[#FFE492]">Solutions</Link>
                        <Link href="#" className="hover:text-[#FFE492]">Resources</Link>
                        <Link href="#" className="hover:text-[#FFE492]">Pricing</Link>
                    </ul>
                    <ul className="ml-6 xl:ml-0">
                        <Link href="#"className="bg-[#FFE492] text-background rounded-lg px-3 py-2 lg:px-9 lg:py-4">Login</Link>
                    </ul>
                </nav>
                <div className="sm:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                    </svg>
                </div>
            </div>
        </header>
    );
}