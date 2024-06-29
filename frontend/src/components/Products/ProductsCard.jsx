import React from 'react';
import Button from '../Shared/Button';


const ProductsCard = ({ data }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center'>
      {data.map((item) => (
        <div className='group relative' key={item.id}>
          <div className='relative'>
            <img src={item.img} alt={item.title} className='h-[180px] w-[260px] object-cover rounded-md' />
          </div>
          {/* Hover button */}
          <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center hidden group-hover:flex justify-center items-center duration-200'>
            <Button text="Add to cart" bgColor='bg-primary' textColor="text-white" />
          </div>

          <div className='leading-7 mt-2'>
            <h3 className='font-semibold'>{item.title}</h3>
            <p className='font-bold'>Price: ${item.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsCard;
