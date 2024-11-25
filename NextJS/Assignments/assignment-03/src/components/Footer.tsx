import Image from "next/image";
import Logo from "../public/Logo.png";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="pt-20 overflow-hidden">
            <div className="md:container md:mx-auto p-4 border-b border-[#2E4E73] pb-16 text-sm md:text-base">
                <div className="flex flex-col sm:flex-row gap-11 sm:gap-5  md:gap-10 ">
                    <div className="flex flex-col gap-3.5 lg:flex-1 lg:mr-5">
                    <Image src={Logo} alt="logo" className=""/>
                    <p>Whitepace was created for the new ways we live and work. We make a better workspace around the world</p>
                    </div>
                    <div className="flex flex-col gap-2 md:gap-3.5 flex-1 lg:-mr-40 lg:ml-20">
                        <h3 className="font-bold text-lg">Product</h3>
                        <Link href="#" className="hover:text-[#FFE492]">Overview</Link>
                        <Link href="#" className="hover:text-[#FFE492]">Pricing</Link>
                        <Link href="#" className="hover:text-[#FFE492]">Customer stories</Link>
                    </div>
                    <div className="flex flex-col gap-2 md:gap-3.5 flex-1  lg:-mr-40 lg:ml-8">
                        <h3 className="font-bold text-lg">Resources</h3>
                        <Link href="#" className="hover:text-[#FFE492]">Blog</Link>
                        <Link href="#" className="hover:text-[#FFE492]">Guides & tutorials</Link>
                        <Link href="#" className="hover:text-[#FFE492]">Help center</Link>
                    </div>
                    <div className="flex flex-col gap-2 md:gap-3.5 flex-1 lg:-mr-40 lg:ml-5">
                        <h3 className="font-bold text-lg">Company</h3>
                        <Link href="#" className="hover:text-[#FFE492]">About us</Link>
                        <Link href="#" className="hover:text-[#FFE492]">Careers</Link>
                        <Link href="#" className="hover:text-[#FFE492]">Media kit</Link>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-center my-5 text-sm md:text-base tracking-wide">© 2024 Whitepace LLC. | Build with ❤️ by Muhammad Shoaib</p>
            </div>
        </footer>
    );
}