import Link from "next/link";
import React from "react";

const Header = () => {
  return (
<header className="text-gray-600 body-font border-1 border-solid border-b-[#e5e7eb] ">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center" >
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
      <span className="ml-3 text-xl">Techblocks</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link className="mr-5 hover:text-gray-900 cursor-pointer hover:border-b-2 hover:border-[#7e22ce] transition-all duration-[2ms]" href="/">Home</Link>
      <Link className="mr-5 hover:text-gray-900 cursor-pointer hover:border-b-2 hover:border-[#7e22ce] transition-all duration-[2ms]" href="/tutorials">Tutorials</Link>
      <Link className="mr-5 hover:text-gray-900 cursor-pointer hover:border-b-2 hover:border-[#7e22ce] transition-all duration-[2ms]" href="/blog">Blog</Link>
      <Link className="mr-5 hover:text-gray-900 cursor-pointer hover:border-b-2 hover:border-[#7e22ce] transition-all duration-[2ms]" href="/contact">Contact Us</Link>
    </nav>
  </div>
</header>
  )
};

export default Header;

