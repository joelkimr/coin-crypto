import Link from "next/link";
import React, { useEffect, useState } from "react";

const Market = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState([]);
  const [apiLoad, setApiLoad] = useState(true);

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false
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
      const json = await response.json();
      setData(json);
    } catch (e) {}
  };

  const paginationButtons = [];
  for (let i = 1; i <= 5; i++) {
    paginationButtons.push(
      <button
        key={i}
        onClick={() => setCurrentPage(i)}
        className={i === currentPage ? "activePagi" : ""}>
        {i}
      </button>
    );
  }

  return (
    <section className='bg-secondary xl:pl-64 lg:pl-36 md:p-5 p-4 min-w-[121%] md:min-w-full md:pt-0 pt-44 -mb-1'>
      <div className='lg:w-4/5 h-auto flex flex-col space-y-8 text-white'>
        <h2 className='text-4xl font-bold'>Market Update</h2>
        <div className='w-full h-full overflow-x-auto'>
          {data.length > 0 ? (
            <table className='w-full h-full table-auto'>
              <thead className='w-full min-w-fit text-2xl bg-gradient-to-r from-first to-title rounded-lg'>
                <tr className='w-full font-bold min-w-fit'>
                  <td className='min-w-fit text-left p-4 lg:text-xl text-sm '>
                    Coin
                  </td>
                  <td className='min-w-fit pb-2  lg:text-xl text-sm px-2 text-center'>
                    Price
                  </td>
                  <td className='min-w-fit pb-2 lg:text-xl text-sm px-2 text-center'>
                    24h Change
                  </td>
                  <td className='min-w-fit pb-2 lg:text-xl text-sm px-2 text-center'>
                    Market Cap
                  </td>
                </tr>
              </thead>
              <tbody className='w-full'>
                {data.map((item) => (
                  <tr
                    onLoad={() => setApiLoad(false)}
                    className='border-b border-white/50'>
                    <td className='flex justify-start items-center space-x-2 p-4 w-40'>
                      <img
                        src={item.image}
                        alt={item.name}
                        className='w-10 h-10 md:w-16 md:h-16'
                      />
                      <span className='text-white md:font-bold md:text-2xl'>
                        {item.name}
                      </span>
                    </td>
                    <td>
                      <p className='md:font-bold md:text-2xl text-sm text-center'>
                        {"$" + item.current_price.toFixed(2)}
                      </p>
                    </td>
                    <td>
                      <p
                        className={
                          "" +
                          (item.price_change_percentage_24h >= 0
                            ? "text-red md:font-bold md:text-2xl text-sm text-center"
                            : "text-green md:font-bold md:text-2xl text-sm text-center")
                        }>
                        {item.price_change_percentage_24h?.toFixed(2) + " %"}
                      </p>
                    </td>
                    <td>
                      <p className='md:font-bold md:text-2xl text-sm text-center'>
                        {"$" + numberWithCommas(item.market_cap)}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className='w-full justify-center flex flex-row lg:gap-x-20 md:gap-x-14 gap-x-4 mt-9'>
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
    </section>
  );
};

export default Market;
