import React from 'react';
import { FaCartArrowDown, FaHeadphonesAlt, FaWallet, FaCheckCircle } from 'react-icons/fa';

const ServiceData = [
  {
    id: 1,
    icon: <FaCartArrowDown className='text-4xl md:text-5xl text-primary' />,
    title: 'Free Shipping',
    description: 'Free Shipping On All Orders',
  },
  {
    id: 2,
    icon: <FaHeadphonesAlt className='text-4xl md:text-5xl text-primary' />,
    title: '24/7 Support',
    description: 'Contact Us 24 Hours A Day, 7 Days A Week',
  },
  {
    id: 3,
    icon: <FaWallet className='text-4xl md:text-5xl text-primary' />,
    title: 'Money Back Guarantee',
    description: '30 Days Money Back Guarantee',
  },
  {
    id: 4,
    icon: <FaCheckCircle className='text-4xl md:text-5xl text-primary' />,
    title: 'Secure Payment',
    description: '100% Secure Payment With 256-Bit Encryption',
  },
];

const Services = () => {
  return (
    <div className='services-section'>
      <div className='container mt-8 md:mt-10'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8'>
          {ServiceData.map((data) => (
            <div key={data.id} className='flex flex-col items-center sm:flex-row gap-4'>
              {data.icon}
              <div className='service-item text-center sm:text-left'>
                <div className='text-sm font-semibold'>{data.title}</div>
                <div className='text-xs md:text-sm  text-gray-600'>{data.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
