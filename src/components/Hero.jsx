import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import btc from "../images/hero/bitcoin.png";
import eth from "../images/hero/ethereum.png";
import Link from "next/link";

const Hero = () => {
  const [data, setData] = useState([]);
  const [coinsLoad, setCoinsLoad] = useState(true);
  const [showPrice, setShowPrice] = useState(false);

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false
  `;

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    if (data.length === 0) {
      fetchData();
    }
  }, [data]);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Error!");
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {}
  };

  return (
    <section>
      <div className='min-w-[121%] md:min-w-full h-screen bg-gradient-to-t from-secondary to-primary -mb-1'>
        <Navbar />
        <div className='w-auto h-full flex flex-col items-center justify-center space-y-16 md:pt-0 pt-32'>
          <div className='flex flex-row justify-center items-center'>
            <a href='#'>
              <Image
                src={btc}
                width={75}
                height={75}
                alt='floating-coin'
                className='md:block hidden animate-bounce'
              />
            </a>
            <div className='text-center uppercase flex flex-col pt-20'>
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
              width={75}
              height={75}
              alt='floating-coin'
              className='md:block hidden animate-bounce'
            />
          </div>
          <button
            onClick={() => setShowPrice(!showPrice)}
            className='text-[1.5rem] w-[14rem] h-[3rem] min-h-[3.5rem] text-center bg-gradient-to-t from-first to-title text-white rounded-full transition md:hidden block font-bold'>
            {showPrice ? <p>Hide Prices</p> : <p>See Prices</p>}
          </button>
          <div
            onLoad={() => setCoinsLoad(false)}
            className={`flex md:flex-row lg:gap-x-20 md:gap-x-14 gap-x-3 m-9 ${
              showPrice ? " " : " hidden md:flex"
            }`}>
            {data.length > 0 ? (
              data.map((item) => (
                <Link href={`/coin/${item.id}`} key={item.id}>
                  <img
                    src={item?.image}
                    alt={item?.name || "coins"}
                    className='ml-5 md:w-20 md:h-20 w-16 h-16'
                  />
                  <p className='lg:text-2xl md:text-lg text-sm font-bold text-white mt-4'>
                    {item?.name}&nbsp;
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
                  <p className='md:text-2xl text-base text-white text-center font-bold'>
                    {"$ " + numberWithCommas(item.current_price?.toFixed(2))}
                  </p>
                </Link>
              ))
            ) : (
              <div className='flex flex-row lg:gap-x-20 md:gap-x-14 gap-x-4'>
                {Array.from({ length: 4 }).map((_item, i) => (
                  <div
                    className='w-10 h-10 bg-title/25 animate-pulse rounded-full'
                    key={i}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
