import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoLogoTwitter } from "react-icons/io";
import { TbBrandDiscordFilled } from "react-icons/tb";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobile, setMobile] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const goTop = () => {
    window.scrollTo({
      top: (0, 0),
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav
        className={`flex flex-row bg-transparent items-center md:justify-evenly justify-between py-5 px-12 fixed top-0 w-full text-white z-50${
          sticky ? "shadow-3xl !bg-secondary" : ""
        }`}>
        <Link href='/'>
          <p onClick={goTop} className='text-3xl font-bold'>
            COINCRYPTO
          </p>
        </Link>
        <ul className='w-96 space-x-6 ml-9 flex-row justify-around text-xl font-bold md:block hidden'>
          <Link href='#' className='hover:text-purple-700'>
            Home
          </Link>
          <Link href='#' className='hover:text-purple-700'>
            Market
          </Link>
          <Link href='#' className='hover:text-purple-700'>
            Choose Us
          </Link>
          <Link href='#' className='hover:text-purple-700'>
            Join
          </Link>
        </ul>
        <div className='flex flex-row items-center justify-center text-xl cursor-pointer gap-x-4'>
          <IoLogoTwitter className='hover:text-blue-400' />
          <TbBrandDiscordFilled className='hover:text-black/90' />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
