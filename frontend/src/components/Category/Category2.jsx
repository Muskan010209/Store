import React from 'react'
import Image2 from '../..//assets/category/vr.png'
import Image1 from '../..//assets/category/gaming.png'
import Image3 from '../..//assets/category/speaker.png'
import Button from '../Shared/Button'



const Category = () => {
    return (
        <div className='py-8'>
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    {/*first column*/}
                    <div className=' col-span-2 py-10 pl-5 bg-gradient-to-br from-gray-400/50 to-gray-300 text-white rounded-3xl relative h-[320px] flex items-end'>
                        <div className=''>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-gray-400'>Enjoy</p>
                                <p className='text-2xl font-semibold mb=[2px]'>With</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Gaming Zone</p>
                                <Button text="Browse" bgColor={"bg-primary"} textColor={"text-white"} />
                            </div>
                        </div>
                        <img src={Image1} alt="Image1" className='w-[250px] absolute top-1/2 -translate-y-1/2 -right-0' />

                    </div>

                    {/*second column*/}

                    <div className='py-10 pl-5 bg-gradient-to-br from-brandGreen/90 to-brandGreen/70 text-white rounded-3xl relative h-[320px] flex items-start'>
                        <div className=''>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-gray-400'>Enjoy</p>
                                <p className='text-2xl font-semibold mb=[2px]'>With</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Earphone</p>
                                <Button text="Browse" bgColor={"bg-white"} textColor={"text-brandGreen"} />
                            </div>
                        </div>
                        <img src={Image2} alt="Image1" className='w-[320px] absolute bottom-0' />

                    </div>
                    {/*third column*/}
                    <div className='py-10 pl-5 bg-gradient-to-br from-brandBlue to-brandBlue/70 text-white rounded-3xl relative h-[320px] flex items-start'>
                        <div className=''>
                            <div className='mb-4'>
                                <p className='mb-[2px] text-gray-400'>Enjoy</p>
                                <p className='text-2xl font-semibold mb=[2px]'>With</p>
                                <p className='text-4xl xl:text-5xl font-bold opacity-40 mb-2'>Gadget</p>
                                <Button text="Browse" bgColor={"bg-white"} textColor={"text-brandBlue"} />
                            </div>
                        </div>
                        <img src={Image3} alt="Image1" className='w-[200px] absolute  right-0 bottom-0' />

                    </div>


                </div>
            </div>
        </div>
    )
}

export default Category