import React, { useEffect, useState } from "react";
// import { Spinner } from "@material-tailwind/react";
import Navbar from "./Navbar";
import Image from "next/image";
import btc from "../images/hero/bitcoin.png";
import eth from "../images/hero/ethereum.png";
import Link from "next/link";

const Hero = () => {
  const [data, setData] = useState([]);
  const [coinsLoad, setCoinsLoad] = useState(true);

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false
  `;

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error!");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url]);

  return (
    <div>
      <div className='min-w-[121%] md:min-w-full h-screen bg-gradient-to-t from-secondary to-primary'>
        <Navbar />
        <div className='w-auto h-full flex flex-col items-center justify-center space-y-16 md:pt-0 pt-32'>
          <div className='flex flex-row justify-center items-center'>
            <a href='#'>
              <Image
                src={btc}
                width={90}
                height={90}
                alt='floating-coin'
                className='md:block hidden'
              />
            </a>
            <div className='text-center uppercase flex flex-col'>
              <div>
                <p className='text-white lg:text-7xl text-5xl font-bold'>
                  track and trade
                </p>
              </div>
              <div>
                <p className='lg:text-7xl md:text-5xl text-6xl p-4 font-bold from-first to-title bg-gradient-to-r bg-clip-text text-transparent'>
                  crypto currencies
                </p>
              </div>
            </div>
            <Image
              src={eth}
              width={90}
              height={90}
              alt='floating-coin'
              className='md:block hidden'
            />
          </div>
          <a
            href='#'
            className='text-[1.5rem] w-[15rem] h-[4rem] text-center pt-2 bg-gradient-to-t from-first to-title text-white rounded-full transition md:hidden block font-bold'>
            See Prices
          </a>
          <div
            onLoad={() => setCoinsLoad(false)}
            className='flex-row gap-x-28 md:block hidden'>
            {coinsLoad && (
              <span>{/* <Spinner className='h-10 w-10' /> */}</span>
            )}
            {data.map((item) => (
              <Link href={`/coin/${item.id}`} key={item.id}>
                <img
                  src={item?.image}
                  alt={item?.name}
                  width={100}
                  height={100}
                  className='ml-5'
                />
                <p className='text-2xl font-bold text-white mt-4'>
                  {item?.name}
                  <span
                    className={
                      "  " +
                      (item.price_change_percentage_24h <= 0
                        ? "text-red"
                        : "text-green")
                    }>
                    {item?.price_change_percentage_24h?.toFixed(2) + "%"}
                  </span>
                </p>
                <p className='text-2xl text-white text-center font-bold'>
                  {"$ " + numberWithCommas(item.current_price?.toFixed(2))}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
