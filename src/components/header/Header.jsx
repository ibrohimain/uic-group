import React from 'react'
import './header.css'
import logo from '../../assets/uilogo.png'
import { GiEarthAmerica } from 'react-icons/gi'
import { IoCall } from 'react-icons/io5'
import { TfiArrowTopRight } from 'react-icons/tfi'
import { CiPlay1 } from 'react-icons/ci'

const Header = () => {
    return (
        <div className='header_uic_img w-[100%] h-[100vh] mx-auto'>
            <div className=' fixed z-50 bg-[rgba(83,82,82,0.1)] shadow-sm w-[100%]'>
                <div className='w-[85%] h-[100px] mx-auto flex justify-between'>
                    <div className='w-[20%] h-[100%] flex items-center'>
                        <img src={logo} alt="UIC Group logo" className='w-[150px] h-[140px] cursor-pointer' />
                    </div>
                    <ul className='w-[75%] h-[100%] flex justify-between items-center'>
                        <li className='list'>ABOUT US</li>
                        <li className='list'>SERVICES</li>
                        <li className='list'>PORTFOLIO</li>
                        <li className='list'>CAREER</li>
                        <li className='list'>BLOG</li>
                        <li><h2>+998 71 <span className='text-white'>200 70 07</span></h2></li>
                        <li><button className='w-[70px] h-[35px] border rounded-[10px] text-white font-semibold flex items-center justify-center gap-1'><GiEarthAmerica className='text-[20px]' /> EN</button></li>
                    </ul>
                </div>
            </div>
            <div className='w-[100%] h-[450px] flex  uic_ice'>
            </div>
            <div className='w-[100%] h-[100%] flex uic_ice_img'>
                <div className='w-[80%] h-[100%] mx-auto z-50 flex'>
                    <div className='w-[50%] h-[100%] flex flex-col justify-start'>
                        <h2 className='text-[50px] w-[500px] text-white mt-[60px]'>We offer digital solutions</h2>
                        <p className='text-[20px] text-[rgba(169,169,169,0.9)]'>IN ANY DIFFICULTY</p>
                        <div className='flex gap-2 mt-[60px]'>
                            <button className='flex items-center justify-center gap-2 w-[140px] cursor-pointer h-[45px] outline-none rounded-[10px] border-[#26e6a9] font-semibold bg-[#1a8377] text-white'>Portfoliodiv <div className='w-[25px] h-[25px] border rounded-[50%] flex items-center justify-center bg-[#13c5b0] border-[#0bfee2]'><TfiArrowTopRight className='text-[14px] font-semibold' /></div> </button>
                            <button className='flex items-center justify-center gap-2 w-[120px] cursor-pointer h-[45px] outline-none rounded-[10px] border text-white font-semibold'>Call <div className='w-[25px] h-[25px] rounded-[50px] flex items-center justify-center bg-[rgba(209,208,208,0.4)]'><IoCall /></div></button>
                        </div>
                    </div>
                    <div className='w-[50%] h-[100%]'>
                        <div class='w-[100px] h-[100px] border rounded-[50%] absolute top-[65%] left-[45%] text-white font-semibold'>
                            <p>ShowReall</p>
                            <p>ShowReall</p>
                            <p>ShowReall</p>
                        </div>
                        <h2 className='text-[500px] text-[rgb(255,255,255,0.3)]'>uic</h2>

                    </div>
                </div>

            </div>
        </div >
    )
}

export default Header
