import React from "react";

const Market = () => {
  return (
    <section className='bg-secondary pl-64'>
      <div className='w-4/5 h-auto flex flex-col space-y-8 text-white'>
        <h2 className='text-4xl font-bold'>Market Update</h2>
        <div className='w-full h-full'>
          <table className='w-auto h-full text-center text-2xl border-separate spacing-y-2 bg-gradient-to-r from-first to-title rounded-lg'>
            <thead>
              <tr>
                <td className='text-left font-semibold w-[20%] p-2'>Coin</td>
                <td className='font-semibold w-[14%] pb-2'>Price</td>
                <td className='font-semibold w-[14%] pb-2'>24h Change</td>
                <td className='font-semibold w-[10%] pb-2'>Market Cap</td>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Market;
