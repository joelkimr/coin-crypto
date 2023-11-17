import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoLogoTwitter } from "react-icons/io";
import { TbBrandDiscordFilled } from "react-icons/tb";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

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
        className={`flex flex-row bg-transparent items-center justify-evenly py-5 px-12 fixed top-0 w-full text-white z-50${
          sticky ? "shadow-xl !bg-black" : ""
        }`}>
        <Link href='/'>
          <p onClick={goTop} className='text-2xl font-bold'>
            COINCRYPTO
          </p>
        </Link>
        <ul className='w-96  flex flex-row justify-around text-lg'>
          <Link href='#'>Home</Link>
          <Link href='#'>Market</Link>
          <Link href='#'>Choose Us</Link>
          <Link href='#'>Join</Link>
        </ul>
        <div className='flex flex-row items-center justify-center text-xl cursor-pointer gap-x-4'>
          <IoLogoTwitter />
          <TbBrandDiscordFilled />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
