import React from 'react'
import { servicesData } from './services'

const Services = () => {
    return (
        <div className='w-[100%] h-[160vh] mx-auto bg-[rgba(13,13,13,0.9)]'>
            <div className='w-[80%] mx-auto'>
                <div>
                    <div className='flex items-center gap-[5px]'>
                        <p className='text-[#40e1bc] text-[20px]'>our</p>
                        <div className='border border-[#525151] w-[40px] h-[1px] mt-[8px]'></div>
                    </div>
                    <h2 className='text-[40px] text-white'>Services</h2>
                </div>
                <div className='grid grid-cols-2 gap-3 mt-[39px]'>
                    {servicesData.map((item, index) => (
                        <div className='w-[600px] h-[200px] rounded-[15px] bg-[rgba(51,51,51,0.5)] leading-6'>
                            <h2 className='text-[34px] ml-[30px] mt-[50px] '>{item.name}</h2>
                            <p className='text-[16px] ml-[30px] mt-[20px] w-[60%] text-[rgba(210,209,209,0.5)] font-semibold'>{item.common_name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services
