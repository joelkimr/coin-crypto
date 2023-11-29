import React from "react";
import Image from "next/image";
import btc from "../images/hero/bitcoin.png";
import eth from "../images/hero/ethereum.png";

const Join = () => {
  return (
    <section className='bg-secondary min-w-[121%] md:min-w-full'>
      <div className='flex flex-row justify-center items-center p-32 space-x-8'>
        <div>
          <Image
            src={btc}
            width={80}
            height={80}
            alt='floating-coin'
            className='md:block hidden'
          />
        </div>
        <div>
          <p className='text-6xl text-white font-bold text-center'>
            JOIN US VIA
          </p>
          <p className='from-first to-title bg-gradient-to-r bg-clip-text text-transparent text-6xl font-bold text-center'>
            DISCORD
          </p>
          <p className='text-white text-lg mt-4 text-center'>
            Invest and manage all your crypto at one place
          </p>
        </div>
        <div>
          <Image
            src={eth}
            width={80}
            height={80}
            alt='floating-coin'
            className='md:block hidden'
          />
        </div>
      </div>
      <div className='text-center'>
        <button
          href='#'
          className='w-56 h-14 text-center pt-2 text-xl bg-gradient-to-r from-first to-title text-white rounded-full transition font-semibold'>
          Join via Discord
        </button>
      </div>
    </section>
  );
};

export default Join;
