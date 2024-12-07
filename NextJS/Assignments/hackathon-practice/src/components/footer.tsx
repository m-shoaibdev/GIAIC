import Link from "next/link";

export default function Footer() {
    return (
        <footer className="pt-20 overflow-hidden bg-black text-white mt-10">
            <div className="md:container md:mx-auto p-4 xl:px-10 border-b border-gray-900 pb-16 text-sm md:text-base">
                <div className="flex flex-col sm:flex-row gap-11 sm:gap-5 md:gap-16">
                    <div className="flex flex-col gap-2 md:gap-3.5 mr-10">
                        <h3 className="font-bold text-2xl font-inter">Exclusive</h3>
                        <h3 className="font-medium text-xl">Subscribe</h3>
                        <Link className="hover:text-gray-200 text-base" href="#">
                        Get 10% off your first order
                        </Link>
                    </div>
                    <div className="flex flex-col gap-2 md:gap-3.5 w-48">
                        <h3 className="font-medium text-xl">Product</h3>
                        <Link className="hover:text-gray-200 text-base" href="#">
                        111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.
                        </Link>
                        <Link className="hover:text-gray-200 text-base" href="#">
                        exclusive@gmail.com
                        </Link>
                        <Link className="hover:text-gray-200 text-base" href="#">
                        +88015-88888-9999
                        </Link>
                    </div>
                    <div className="flex flex-col gap-2 md:gap-3.5">
                        <h3 className="font-medium text-xl">Account</h3>
                        <Link className="hover:text-gray-200 text-base" href="#">
                        My Account
                        </Link>
                        <Link className="hover:text-gray-200 text-base" href="#">
                        Login / Register
                        </Link>
                        <Link className="hover:text-gray-200 text-base" href="#">
                        Cart
                        </Link>
                        <Link className="hover:text-gray-200 text-base" href="#">
                        Wishlist
                        </Link>
                        <Link className="hover:text-gray-200 text-base" href="#">
                        Shop
                        </Link>
                    </div>
                    <div className="flex flex-col gap-2 md:gap-3.5">
                        <h3 className="font-medium text-xl">Quick Link</h3>
                        <Link className="hover:text-gray-200 text-base" href="#">
                        Privacy Policy
                        </Link>
                        <Link className="hover:text-gray-200 text-base" href="#">
                        Terms Of Use
                        </Link>
                        <Link className="hover:text-gray-200 text-base" href="#">
                        FAQ
                        </Link>
                        <Link className="hover:text-gray-200 text-base" href="#">
                        Contact
                        </Link>
                    </div>
                    <div className="flex flex-col gap-2 md:gap-3.5">
                        <h3 className="font-medium text-xl">Download App</h3>
                        <Link className="hover:text-gray-200 text-base" href="#">

                        </Link>
                    </div>
                    
                </div>
            </div>
            <div>
                <p className="text-center my-5 text-sm md:text-base tracking-wide px-4">
                    © 2024 Exclusive. | Build with ❤️ by Muhammad Shoaib
                </p>
            </div>
        </footer>
    );
}
