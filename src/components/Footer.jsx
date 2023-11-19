import Image from "next/image";
import React from "react";
import Foot from "../images/footer/footer-bg.png";
import { IoLogoTwitter } from "react-icons/io";
import { TbBrandDiscordFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <section className='bg-secondary'>
      <div className='flex justify-center relative '>
        <Image src={Foot} />
        <div className='absolute space-y-4 top-64'>
          <div className='flex flex-row space-x-9 text-white justify-center text-4xl'>
            <div>
              <IoLogoTwitter />
            </div>
            <div>
              <TbBrandDiscordFilled />
            </div>
          </div>
          <div className='flex flex-row text-white space-x-9 justify-center'>
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
