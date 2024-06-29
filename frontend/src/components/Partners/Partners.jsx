import React from 'react';
import brand1 from '../../assets/brand/br-1.png';
import brand2 from '../../assets/brand/br-2.png';
import brand3 from '../../assets/brand/br-3.png';
import brand4 from '../../assets/brand/br-4.png';
import brand5 from '../../assets/brand/br-5.png';

const Partners = () => {
  return (
    <div className="container py-8 mt-10 hidden md:block bg-gray-200 dark:bg-gray-800">
        <div className=''>
            <div className='grid grid-cols-5 gap-3 place-items-center'>
                <img src={brand1} alt="Brand 1" className='w-[80px] dark:invert'/>
                <img src={brand2} alt="Brand 2" className='w-[80px] dark:invert'/>
                <img src={brand3} alt="Brand 3" className='w-[80px] dark:invert'/>
                <img src={brand4} alt="Brand 4" className='w-[80px] dark:invert'/>
                <img src={brand5} alt="Brand 5" className='w-[80px] dark:invert'/>
            </div>
        </div>
    </div>
  );
}

export default Partners;
