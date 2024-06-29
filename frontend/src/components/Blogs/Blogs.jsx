import React from 'react';
import Heading from '../Shared/Heading';
import Img1 from '../../assets/blogs/blog-1.jpg';
import Img2 from '../../assets/blogs/blog-2.jpg';
import Img3 from '../../assets/blogs/blog-3.jpg';

const Blogdata = [
    {
        id: 1,
        title: "How to choose the perfect smartwatch",
        subtitle: "When choosing a smartwatch, consider your primary needs, such as fitness tracking, connectivity, or lifestyle features. Prioritize key features like battery life, display quality, and available apps, and set a budget that balances your desired features and affordability.",
        published: "Jan 6, 2024 by Rishi",
        image: Img1,
    },
    {
        id: 2,
        title: "How to choose the perfect gadget",
        subtitle: "Choosing the perfect gadget involves considering your specific needs, researching compatibility, and evaluating key features. First, identify your primary use cases, such as productivity, entertainment, or fitness. Next, ensure the gadget is compatible with your existing devices and ecosystem.",
        published: "May 30, 2024 by Tumpa",
        image: Img2,
    },
    {
        id: 3,
        title: "How to choose the perfect laptop",
        subtitle: "When choosing a laptop, consider your primary needs, such as portability, performance, or budget. Prioritize key features like processor speed, RAM, storage capacity, and display quality, and set a budget that balances your desired features and affordability.",
        published: "Jan 6, 2024 by Rishi",
        image: Img3,
    },
];

const Blogs = () => {
    return (
        <div className=''>
            <div className="container">
                <Heading title="Recent News" subtitle="Explore Our Blogs" />

                {/* Blogs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
                    {/* Blogs Card */}
                    {Blogdata.map((data) => (
                        <div key={data.id} className='bg-white dark:bg-gray-900' >
                            <div className=" rounded-2xl mb-2 overflow-hidden">
                            <img src={data.image} alt={data.title} className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500 " />

                            </div>
                            <div className="space-y-2">
                            <p className="text-gray-500 text-xs">{data.published}</p>

                                <h3 className="font-bold line-clamp-1">{data.title}</h3>
                                <p className="text-gray-700 text-sm line-clamp-2 dark:text-gray-400 ">{data.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
