import React, { useEffect, useState } from "react";
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
    <div className='w-full h-screen bg-gradient-to-t from-secondary to-primary'>
      <Navbar />
         <div className='w-auto h-full flex flex-col items-center justify-center space-y-16'>
        <div className='flex flex-row justify-center items-center'>
          <Image src={btc} width={80} height={80} alt='floating-coin' />
          <div className='text-center uppercase flex flex-col'>
            <div>
              <p className='text-white text-8xl font-bold'>track and trade</p>
            </div>
            <div>
              <p className='text-8xl p-4 font-bold from-first to-title bg-gradient-to-r bg-clip-text text-transparent'>
                crypto currencies
              </p>
            </div>
          </div>
          <Image src={eth} width={80} height={80} alt='floating-coin' />
        </div>
        
      <div onLoad={() => setCoinsLoad(false)} className='flex flex-row gap-x-28'>
        {coinsLoad}
        {data.map((item) => (
          <Link href={`/coin/${item.id}`} key={item.id}>
            <img src={item?.image} alt={item?.name} width={100} height={100} className='ml-5'/>
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
