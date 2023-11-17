import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import btc from "../images/hero/bitcoin.png";
import eth from "../images/hero/ethereum.png";

const Hero = () => {
  return (
    <div>
      <Navbar />
      <div className='w-full h-screen bg-gradient-to-t from-black to-primary'>
        <div className='w-full h-full flex flex-row justify-center items-center'>
          <Image src={btc} width={70} height={70} alt='floating-coin' />
          <div className='text-center uppercase flex flex-col'>
            <div>
              <p className='text-white text-7xl font-bold'>track and trade</p>
            </div>
            <div>
              <p className='text-7xl p-4 font-bold from-blue-900 to-pink-600 bg-gradient-to-r bg-clip-text text-transparent'>
                crypto currencies
              </p>
            </div>
          </div>
          <Image src={eth} width={70} height={70} alt='floating-coin' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
