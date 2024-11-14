import Image from "next/image";
import logo from "../public/logo.png";
import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="md:container md:mx-auto sm:px-4 lg:px-6 py-2 flex justify-between items-center">
        <div>
          <Link href="/">
            <Image src={logo}
            alt="logo"
            className="w-full h-auto -mb-2"
            />
          </Link>
        </div>
        <nav className="flex items-center text-xl">
          <Link href="/" className="py-2.5 px-3 text-bcolor hover:text-secondary transition duration-300 ">Home</Link>
          <Link href="./about" className="py-2.5 px-3 text-bcolor hover:text-secondary transition duration-300">About</Link>
          <Link href="/product" className="py-2.5 px-3 text-bcolor hover:text-secondary transition duration-300">Product</Link>
          <Link href="./contact" className="py-2.5 px-3 text-bcolor hover:text-secondary transition duration-300">Contact</Link>

        </nav>
        <div>
          <Link href="./login" className="block rounded-lg px-3 py-2.5 text-xl font-semibold text-bcolor hover:bg-gray-50 shadow-sm hover:shadow-md hover:text-primary">Log in
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="inline-block  size-4">
              <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
            </svg></Link>
        </div>
      </div>
    </header>
  );
}