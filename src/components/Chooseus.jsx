import Image from "next/image";
import React from "react";
import hand from "../images/chooseus/choose-main.png";

const Chooseus = () => {
  return (
    <section className='bg-secondary'>
      <div className='flex items-center justify-center p-12'>
        <p className='lg:text-5xl text-6xl font-bold uppercase text-white text-center'>
          Why
          <span className='from-first to-title bg-gradient-to-r bg-clip-text text-transparent'>
            choose us
          </span>
        </p>
      </div>
      <div className='flex lg:flex-row flex-col justify-center items-center'>
        <div className='lg:w-96 h-auto p-14 text-white space-y-12'>
          <div className='border border-gray-600 rounded-xl bg-title/5 p-4'>
            <h2 className='uppercase text-white text-2xl font-bold'>
              connect your wallet
            </h2>
            <p className='text-lg'>
              Use Trust Wallet, Metamask or to connect to the app.
            </p>
          </div>
          <div className='border border-gray-600 rounded-xl bg-title/5 p-4'>
            <h3 className=' text-2xl font-bold'>SELECT YOUR QUANTITY</h3>
            <p className='text-lg'>
              Upload your crypto and set a title, description and price.
            </p>
          </div>
          <div className='border border-gray-600 rounded-xl bg-title/5 p-4'>
            <h3 className=' text-2xl font-bold'>CONFIRM TRANSACTION</h3>
            <p className='text-lg'>
              Earn by selling your crypto on our marketplace.
            </p>
          </div>
        </div>
        <div className='md:block hidden'>
          <Image src={hand} width={350} height={340} />
        </div>
        <div className='md:hidden block'>
          <Image src={hand} width={250} height={240} />
        </div>
        <div className='lg:w-96 h-auto p-14 text-white space-y-12'>
          <div className='border border-gray-600 rounded-xl bg-title/5 p-4'>
            <h3 className='uppercase text-2xl font-bold'>
              receive your own nfts
            </h3>
            <p className='text-lg'>
              Invest all your crypto at one place on one platform.
            </p>
          </div>
          <div className='border border-gray-600 rounded-xl bg-title/5 p-4'>
            <h3 className=' text-2xl font-bold'>TAKE A MARKET TO SELL</h3>
            <p className='text-lg'>
              Invest all your crypto at one place on one platform.
            </p>
          </div>
          <div className='border border-gray-600 rounded-xl bg-title/5 p-4'>
            <h3 className=' text-2xl font-bold'>DRIVE YOUR COLLECTION</h3>
            <p className='text-lg'>
              We make it easy to Discover, Invest and manage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chooseus;
