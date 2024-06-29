import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import Button from '../Shared/Button';

const Popup = ({ orderPopup, handleOrderPopup }) => {
    return (
        orderPopup && (
            <div className='h-screen w-screen fixed top-0 left-0 bg-black/50 backdrop-blur-sm flex justify-center items-center'>
                <div className='w-[250px] rounded-md p-4 shadow-md bg-white dark:text-white duration-200 relative'>
                    {/* Header Section */}
                    <div className='flex items-center justify-between'>
                        <h1 className='text-bold '>Order Now</h1>
                        <IoCloseOutline onClick={handleOrderPopup} className='text-2xl cursor-pointer' />
                    </div>
                    {/* Form Section */}
                    <div className='mt-4'>
                        <input type='text' placeholder='Name' className='form-input'/>
                        <input type='text' placeholder='Email' className='form-input'/>
                        <input type='text' placeholder='Address' className='form-input'/>
                        <input type='text' placeholder='Phone' className='form-input'/>
                        <div className='flex justify-center'>
                        <Button text="Order Now" bgColor={'bg-primary'} textColor={'text-white'}/>

                        </div>

                    </div>
                </div>
            </div>
        )
    );
};

export default Popup;
