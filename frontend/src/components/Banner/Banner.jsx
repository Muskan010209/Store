import React from 'react';

const Banner = ({ data }) => {
  return (
    <div className='min-h-[450px] flex justify-center items-center '>
      <div className='container'>
        <div
          style={{ backgroundColor: data.bgColor }}
          className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl'
        >
          {/* First Column */}
          <div className='p-6 sm:p-8'>
            <p className='text-xl font-bold'>{data.discount}</p>
            <h1 className='text-4xl font-bold'>{data.title}</h1>
            <p className='text-sm'>{data.date}</p>
          </div>

          {/* Second Column */}
          <div className='h-full flex items-center'>
            <img
              src={data.image}
              alt={data.title2}
              className='scale-125 w-[200px] md:w-[250px] object-cover mx-auto drop-shadow-2xl'
            />
          </div>

          {/* Third Column */}
          <div className='flex flex-col justify-center gap-4 p-6 sm:p-8'>
            <h2 className='text-xl font-bold'>{data.title2}</h2>
            <p className='text-3xl sm:text-5xl font-bold'>{data.title3}</p>
            <p className='text-sm tracking-wide loading-5'>{data.title4}</p>
            <div>
                <button style={{color:data.bgColor}} className='bg-white py-2 px-4 rounded-full'>
                Shop Now
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
