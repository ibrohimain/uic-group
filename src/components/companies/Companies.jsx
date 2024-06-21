import React from 'react'
import { companies } from './companies'

const Companies = () => {
    return (
        <div className='w-[100%] h-[120vh] mx-auto bg-[rgba(1,1,1,0.9)]'>
            <div className='w-[80%] h-[100%] mx-auto'>
                <div className='pt-[80px]'>
                    <p className='text-[16px] font-semibold text-[#4af0e2] '>OUR PARTNERS</p>
                    <h2 className='text-[40px] font-semibold text-white'>Companies that believe in us</h2>
                </div>
                <div className='grid grid-cols-5 gap-5 mt-[40px]'>
                    {companies.map((item, index) => (
                        <div className='w-[230px] h-[120px] rounded-[7px] bg-[rgba(138,138,138,0.1)] flex items-center justify-center filter grayscale-[100%] hover:grayscale-0 [transition:0.3s]'>
                            <img src={item.image} alt="" className='w-[170px] h-[100px] ' />
                        </div>
                    ))

                    }
                </div>
            </div>
        </div>
    )
}

export default Companies
