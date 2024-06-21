import React from 'react'
import { bg_wayu, ones, portfolio, wayu, wayutwo } from './portfolio'
import './portfolio.css'
import { RxArrowTopRight } from 'react-icons/rx'

const Portfolio = () => {
    return (
        <div className='w-[100%] h-[140vh] mx-auto bg-[rgba(5,5,5,0.9)]'>
            <div className='w-[80%]  mx-auto'>
                <div className='flex justify-between w-[100%] h-[100px] items-center'>
                    <h1 className='text-[60px] font-semibold text-white'>PORTFOLIO</h1>
                    <div className='flex gap-2'>
                        <button className='buttonone pl-[20px] pr-[20px] h-[50px] border rounded-[10px] text-white font-semibold'>Branding</button>
                        <button className='buttonone pl-[20px] pr-[20px] h-[50px] border rounded-[10px] text-white font-semibold'>Mobile App</button>
                        <button className='buttonone pl-[20px] pr-[20px] h-[50px] border rounded-[10px] text-white font-semibold'>CRM</button>
                        <button className='buttonone pl-[20px] pr-[20px] h-[50px] border rounded-[10px] text-white font-semibold'>Website</button>
                    </div>
                </div>
                <div className='flex'>
                    <div className='w-[50%] relative'>
                        {ones.map((item, index) => (
                            <>
                                <div className='bg_box'></div>
                                <div key={index} className=' w-[98%] h-[400px] relative rounded-[10px]'>
                                    <img src={item.img} alt="" className='rounded-[10px]' />
                                    <div className='absolute top-[5%] left-[5%] z-50'>
                                        <h2 className='text-[24px] text-[white]'>{item.name}</h2>
                                        <p className='text-[20px] text-[rgb(128,128,128,0.7)] font-semibold'>{item.common_name}</p>
                                    </div>
                                </div>
                            </>
                        ))

                        }
                    </div>
                    <div className='w-[50%] flex flex-wrap gap-3'>
                        {portfolio.map((item, index) => (
                            <>
                                <div key={index} className=' rounded-[10px] cursor-pointer w-[290px] h-[191px] relative'>
                                    <div className='bgas'></div>
                                    <img src={item.image} alt="" className='w-[100%] h-[100%] rounded-[12px]' />
                                    <div className='absolute top-[5%] left-[5%] z-20'>
                                        <h2 className='text-white'>{item.name}</h2>
                                        <p className='text-[rgb(164,162,162)] font-semibold'>{item.common_name}</p>
                                    </div>
                                </div>
                            </>
                        ))

                        }
                    </div>
                </div>
                <div className='w-[100%] flex gap-3 mt-[20px]'>
                    <div className='w-[25%] flex flex-col gap-4'>
                        {wayu.map((item, index) => (
                            <div key={index} className='w-[98%] h-[191px]  rounded-[10px] relative'>
                                <div className='bgas'></div>
                                <img src={item.img} alt="" className='rounded-[10px]' />
                                <div className='absolute top-[5%] left-[5%] z-20'>
                                    <h2 className='text-white'>{item.name}</h2>
                                    <p className='text-[rgb(164,162,162)] font-semibold'>{item.common_name}</p>
                                </div>
                            </div>
                        ))

                        }
                    </div>
                    <div className='W-[50%] relative'>
                        {bg_wayu.map((item, index) => (
                            <>
                                <div className='bg_box'></div>
                                <div key={index} className=' w-[98%] h-[400px] relative rounded-[10px]'>
                                    <img src={item.img} alt="" className='rounded-[10px] w-[100%] h-[100%]' />
                                    <div className='absolute top-[5%] left-[5%] z-50'>
                                        <h2 className='text-[24px] text-[white]'>{item.name}</h2>
                                        <p className='text-[20px] text-[rgb(128,128,128,0.7)] font-semibold'>{item.common_name}</p>
                                    </div>
                                </div>
                            </>
                        ))

                        }
                    </div>
                    <div className='w-[25%] flex flex-col gap-4'>
                        {wayutwo.map((item, index) => (
                            <div key={index} className='w-[98%] h-[191px]  rounded-[10px] relative'>
                                <div className='bgas'></div>
                                <img src={item.img} alt="" className='rounded-[10px]' />
                                <div className='absolute top-[5%] left-[5%] z-20'>
                                    <h2 className='text-white'>{item.name}</h2>
                                    <p className='text-[rgb(164,162,162)] font-semibold'>{item.common_name}</p>
                                </div>
                            </div>
                        ))

                        }
                    </div>
                </div>
                <button className='w-[170px] h-[50px] rounded-[10px] mt-[30px] bg-[#33bea0] font-semibold text-white flex items-center justify-center gap-2'>All projects <div className='flex items-center justify-center w-[25px] h-[25px] rounded-[50%] bg-[rgb(204,202,202,0.5)]'><RxArrowTopRight /></div> </button>
            </div>
        </div>
    )
}

export default Portfolio
