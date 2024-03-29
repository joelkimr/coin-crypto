import Image from "next/image";
import React from "react";
import Foot from "../images/footer/footer-bg.png";
import { IoLogoTwitter } from "react-icons/io";
import { TbBrandDiscordFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <section className='bg-secondary min-w-[121%] md:min-w-full md:h-screen lg:h-auto h-56'>
      <div className='flex justify-center relative '>
        <Image src={Foot} className='lg:block hidden' />
        <div className='absolute space-y-4 md:top-64 top-28'>
          <div className='flex flex-row space-x-9 text-white justify-center md:text-4xl text-2xl'>
            <div>
              <IoLogoTwitter />
            </div>
            <div>
              <TbBrandDiscordFilled />
            </div>
          </div>
          <div className='flex flex-row text-white space-x-9 justify-center '>
            <div>
              <a href='#'>Privacy</a>
            </div>
            <div>
              <a href='#'>Terms of Use</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
