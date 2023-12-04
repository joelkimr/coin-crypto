import React from "react";

const Market = () => {
  return (
    <section className='bg-secondary xl:pl-64 lg:pl-36 md:p-5 p-4 min-w-[121%] md:min-w-full md:pt-0 pt-28'>
      <div className='lg:w-4/5 h-auto flex flex-col space-y-8 text-white'>
        <h2 className='text-4xl font-bold'>Market Update</h2>
        <div className='w-full h-full'>
          <table className='w-full h-full text-center text-2xl border-separate spacing-y-2 bg-gradient-to-r from-first to-title rounded-lg'>
            <thead>
              <tr className='flex flex col justify-around items-center'>
                <td className='text-left font-semibold w-[20%] p-2'>Coin</td>
                <td className='font-semibold w-[14%] pb-2'>Price</td>
                <td className='font-semibold w-[14%] pb-2 hidden md:block lg:text-xl md:text-base'>
                  24h Change
                </td>
                <td className='font-semibold w-[14%] pb-2 hidden md:block lg:text-xl md:text-base'>
                  Market Cap
                </td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Market;
