"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const closeDropdown = () => setIsOpen(false);
    return (
<div className="bg-base-100">
  <div className="navbar md:container md:mx-auto px-3.5">
  <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={toggleDropdown}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        {
          isOpen &&(
            <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><Link href="/" onClick={closeDropdown}>Home</Link></li>
        <li><Link href="/blogs" onClick={closeDropdown}>Blog</Link></li>
        <li><Link href="#" onClick={closeDropdown}>About</Link></li>
        <li><Link href="#" onClick={closeDropdown}>Contact</Link></li>
      </ul>
          )
        }
        
      </div>
      <Link href="/" className="text-3xl font-bold text-[#f61600]">BlogSpot</Link>
    </div>
  <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1 space-x-2">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/blogs">Blog</Link></li>
        <li><Link href="#">About</Link></li>
        <li><Link href="#">Contact</Link></li>
      </ul>
    </div>

  <div className="navbar-end">
  <label className="flex cursor-pointer gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path
      d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>
  <input type="checkbox" value="dark" className="toggle theme-controller" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
</label>

    {/* <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><Link href="">Settings</Link></li>
        <li><Link href="">Logout</Link></li>
      </ul>
    </div> */}
  </div>
  </div>
</div>
    );
}