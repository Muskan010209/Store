import React from 'react'
import { IoMdSearch } from 'react-icons/io'
import { FaCaretDown, FaShoppingCart } from 'react-icons/fa'
import DarkMode from './DarkMode' 
const MenuLinks = [
    { id: 1, link: "Home", path: "/#" },
    { id: 2, link: "About", path: "/#about" },
    { id: 3, link: "Shop", path: "/#shop" },
    { id: 4, link: "Blogs", path: "/#blog" },
]

const DropdownLinks=[
    {id:1, link:"Trending Products", path:"/#"},
    {id:2, link:"Best Selling", path:"/#"},
    {id:3, link:"Top Rated", path:"/#"},
]

const Navbar = ({handleOrderPopup}) => {
    return (
        <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
            <div className='py-4'>
                <div className='container mx-auto flex items-center justify-between'>
                    <a href='#' className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>Store</a>

                    {/* Menu Items */}
                    <div className='hidden lg:block'>
                        <ul className='flex items-center gap-4'>
                            {MenuLinks.map((data) => (
                                <li key={data.id}>
                                    <a href={data.path} className='inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200'>{data.link}</a>
                                </li>
                            ))}
                            {/* Dropdown */}

                            <li className='relative cursor-pointer group'>
                                <a href='#' className='flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2'>Quick Links
                                    <span>
                                        <FaCaretDown className='group-hover:rotate-180 duaration-300' />
                                    </span>
                                </a>

                                {/* Dropdown Links */}

                                <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text-white'>
                                <ul className='space-y-2'>
                                        {DropdownLinks.map((data) => (
                                            <li key={data.id}>
                                                <a className="text-gray-500 hover:bg-primary/20 rounded-md font-semibold dark:hover:text-white duration-200" href={data.path}>{data.link}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </li>





                        </ul>
                    </div>

                    {/* Right Section */}
                    <div className='flex items-center gap-4 ml-auto'>
                        <div className='relative group hidden sm:block'>
                            <input type='text' placeholder='search' className='search-bar' />
                            <IoMdSearch className='text-xl text-gray-500 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-0 duration-200' />
                        </div>

                        {/* Order-button Section */}
                        <button className='relative p-3' onClick={handleOrderPopup}>
                            <FaShoppingCart className='text-xl text-gray-600 dark:text-gray-400' />
                            <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs'>
                                4
                            </div>
                        </button>

                        {/* Dark mode Section */}
                        <div>
                            <DarkMode />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
