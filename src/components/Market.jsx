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
      console.log(response);
      if (!response.ok) {
        throw new Error("Error!");
      }
      const json = await response.json();
      setData(json);
    } catch (e) {}
  };

  console.log(data);

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
    <section className='bg-secondary xl:pl-64 lg:pl-36 md:p-5 p-4 min-w-[121%] md:min-w-full md:pt-0 pt-44'>
      <div className='lg:w-4/5 h-auto flex flex-col space-y-8 text-white'>
        <h2 className='text-4xl font-bold'>Market Update</h2>
        <div className='w-full h-full overflow-x-auto'>
          <table className='w-full h-full table-auto'>
            <thead className='w-full min-w-fit text-2xl bg-gradient-to-r from-first to-title rounded-lg'>
              <tr className='w-full font-bold min-w-fit'>
                <td className='min-w-fit text-left p-4 lg:text-xl text-sm'>
                  Coin
                </td>
                <td className='min-w-fit pb-2  lg:text-xl text-sm px-2'>
                  Price
                </td>
                <td className='min-w-fit pb-2 lg:text-xl text-sm px-2'>
                  24h Change
                </td>
                <td className='min-w-fit pb-2 lg:text-xl text-sm px-2'>
                  Market Cap
                </td>
              </tr>
            </thead>
            <tbody className='w-full'>
              {data.map((item) => (
                <tr
                  onLoad={() => setApiLoad(false)}
                  className='border-b border-white/50'>
                  {/* <td> */}
                  {/* <Link
                      onClick={scrollTop}
                      href='#'
                      className='flex flex-row'
                      key={item.id}> */}
                  <td className='flex justify-start items-center space-x-2 p-4 w-40'>
                    <img
                      src={item.image}
                      alt={item.name}
                      className='w-16 h-16'
                    />
                    <span className='text-white'>{item.name}</span>
                  </td>
                  <td>
                    <p>{"$ " + item.current_price.toFixed(2)}</p>
                  </td>
                  <td>
                    <p
                      className={
                        "" +
                        (item.price_change_percentage_24h >= 0
                          ? "green-text"
                          : "red-text")
                      }>
                      {item.price_change_percentage_24h?.toFixed(2) + " %"}
                    </p>
                  </td>
                  <td>
                    <p>{"$ " + numberWithCommas(item.market_cap)}</p>
                  </td>
                  {/* </Link> */}
                  {/* </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Market;
