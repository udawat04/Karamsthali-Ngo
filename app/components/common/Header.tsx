import Link from 'next/link';
import React from 'react'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent border-b border-b-white/10">
      <div className="flex items-center justify-between px-4 py-7">
        <div className="w-[20%]">
          <img
            src="https://html.awaikenthemes.com/aasha/images/logo.svg"
            alt=""
          />
        </div>

        {/* Menu  */}
        <nav className="flex-1 flex justify-evenly text-white text-lg font-semibold">
          <Link href="/">Home</Link>
          <Link href="/">About-Us</Link>
          <Link href="/">Services</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Contact-Us</Link>
        </nav>

        <div className="w-[20%] flex items-center justify-end">
          <button className="bg-[#fad55a] text-[#03352c] text-lg font-semibold px-7 flex gap-x-2 py-3">
            Donate Now{" "}
            <span className='content '>
              <img
                src="https://html.awaikenthemes.com/aasha/images/arrow-primary.svg"
                alt=""
              />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header