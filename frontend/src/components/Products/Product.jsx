import React from 'react';
import Heading from '../Shared/Heading';
import ProductsCard from '../Products/ProductsCard';

import Img1 from '../../assets/product/p-1.jpg';
import Img2 from '../../assets/product/p-2.jpg';
import Img3 from '../../assets/product/p-3.jpg';
import Img4 from '../../assets/product/p-9.jpg';
import Img5 from '../../assets/product/p-5.jpg';
import Img6 from '../../assets/product/p-7.jpg';
import Img7 from '../../assets/product/p-5.jpg';
import Img8 from '../../assets/product/p-2.jpg';

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Boat Headphone",
    price: 1000,
    aosDelay: 0,
  },
  {
    id: 2,
    img: Img2,
    title: "Watch",
    price: 450,
    aosDelay: 0.2,
  },
  {
    id: 3,
    img: Img3,
    title: "Boat Headphone",
    price: 1300,
    aosDelay: 0.4,
  },
  {
    id: 4,
    img: Img4,
    title: "Watch",
    price: 1100,
    aosDelay: 0.6,
  },
  {
    id: 5,
    img: Img5,
    title: "Boat Headphone",
    price: 1900,
    aosDelay: 0.8,
  },
  {
    id: 6,
    img: Img6,
    title: "Watch",
    price: 1500,
    aosDelay: 1,
  },
  {
    id: 7,
    img: Img7,
    title: "Boat Headphone",
    price: 800,
    aosDelay: 1.2,
    },
    {
        id: 8,
        img: Img8,
        title: "Watch",
        price:1200,
        aosDelay: 1.4,
        },
];

const Product = () => {
  return (
    <div className='container'>
      <Heading title='Our Products' subtitle='Explore Our Products' />
      <ProductsCard data={ProductsData} />
    </div>
  );
};

export default Product;
