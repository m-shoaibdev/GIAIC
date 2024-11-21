import Link from "next/link";

export default  function Header() {
    return(
        <header className="flex justify-between gap-10 items-center py-6 mb-10 ">
        <h3 className="logo text-2xl mr-5 font-bold">BrandName</h3>
        <div className="center-menu md:flex-1 hidden sm:flex gap-6 font-bold text-sm">
          <Link href="/" className="hover:text-[#23A6F0] transition-all">Home</Link>
          <Link href="/" className="hover:text-[#23A6F0] transition-all">Product</Link>
          <Link href="/" className="hover:text-[#23A6F0] transition-all">Pricing</Link>
          <Link href="/" className="hover:text-[#23A6F0] transition-all" >Contact</Link>
        </div>
        <div className="left-menu hidden md:flex gap-10 items-center text-sm font-bold">
          <Link href="/" className="hover:text-[#23A6F0] transition-all">Login</Link>
          <Link href="/" className="bg-[#23A6F0] text-white px-4 py-3 rounded tracking-wider">Join us</Link>
        </div>
        <span className="text-2xl sm:hidden hover:text-[#23A6F0] transition-all hover:cursor-pointer">
        ☰  
        </span>
        </header>
    );
}