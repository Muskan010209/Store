import React from 'react';
import { FaInstagram, FaLinkedin, FaFacebookF, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Services",
        link: "/#services",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
];

const Footer = () => {
    return (
        <div className='dark:bg-gray-950'>
            <div className='container'>
                <div className='grid md:grid-cols-3 pb-20 pt-5'>
                    <div className='py-8 px-4'>
                        <a href='#' className='text-primary/90 font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>
                            Store
                        </a>
                        <p className='text-gray-600 lg:pr-24 pt-3 dark:text-white/70'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                        <p className='text-gray-600 mt-4 font-semibold'>Powered by Muskan</p>
                    </div>

                    <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                        <FooterLinkSection title="Important Links" links={FooterLinks} />
                        <FooterLinkSection title="Quick Links" links={FooterLinks} />
                        <CompanyAddress />
                    </div>
                </div>
            </div>
        </div>
    );
};

const FooterLinkSection = ({ title, links }) => (
    <div className='py-8 px-4'>
        <h1 className='text-xl font-bold sm:text-left mb-3'>{title}</h1>
        <ul className='space-y-3'>
            {links.map((link, index) => (
                <li key={index} className='text-gray-600'>
                    <a href={link.link} className='hover:underline'>{link.title}</a>
                </li>
            ))}
        </ul>
    </div>
);

const CompanyAddress = () => (
    <div className='py-8 px-4 col-span-2 sm:col-auto'>
        <div >
            <div className='flex items-center gap-3'>
            <FaLocationArrow className='text-primary' />

                <p className='text-gray-600 dark:text-white/70'>Uttam Nagar, Delhi (110059)</p>
            </div>
            <div className='flex items-center gap-3 mt-6'>
                <FaMobileAlt className='text-primary'/>
                <p className='text-gray-600 dark:text-white/70'>+91 9876654209</p>
            </div>
            <div className='flex items-center gap-3 mt-6'>
                <a href='#'>
                    <FaInstagram className='text-3xl hover:text-primary duration-300'/>
                </a>
                <a href='#'>
                    <FaFacebookF className='text-3xl hover:text-primary duration-300'/>
                </a>
                <a href='#'>
                    <FaLinkedin className='text-3xl hover:text-primary duration-300'/>
                </a>
            </div>
        </div>
    </div>
);

export default Footer;
