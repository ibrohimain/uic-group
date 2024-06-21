import React from 'react'
import './footer.css'
import { FaBehance, FaDribbble, FaFacebook, FaFacebookF, FaLinkedinIn, FaTelegramPlane, FaYelp } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { PiInstagramLogo } from 'react-icons/pi'
import { LiaLinkedin } from 'react-icons/lia'
import { SiTrustpilot } from 'react-icons/si'
import { BiPhone } from 'react-icons/bi'
import logo from '../../assets/uilogo.png'
import { IoIosArrowRoundUp } from 'react-icons/io'

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className='w-[100%] h-[85vh] mx-auto bg-[rgba(13,13,13,0.9)]'>
            <div className='w-[80%] h-[100%] mx-auto border border-[#060505]'>
                <div className='mt-[70px] w-[100%] h-[280px] rounded-[10px] bg-[rgba(219,218,218,0.1)] flex justify-between items-center'>
                    <div className='w-[60%]'>
                        <h2 className='ml-[30px] text-[44px] text-white w-[600px] leading-[50px]'>You can also be among this team :)</h2>
                        <p className='ml-[30px] text-[17px] text-[rgb(255,255,255,0.3)] font-semibold w-[680px] mt-[35px]'>Do you want to grow with us? Now prove to us that you need it! Become an integral part of the team</p>
                    </div>
                    <div className='flex justify-start items-center w-[40%] h-[100%]'>
                        <ul className='flex flex-col gap-5'>
                            <li className='cursor-pointer hover:text-[#60f4af] flex items-center gap-2 text-[white] text-[24px]'><div className='w-[30px] h-[1px] border border-[rgb(255,255,255,0.3)]'></div>   Flutter developer</li>
                            <li className='cursor-pointer hover:text-[#60f4af] flex items-center gap-2 text-[white] text-[24px]'><div className='w-[30px] h-[1px] border border-[rgb(255,255,255,0.3)]'></div>UI/UX design</li>
                            <li className='cursor-pointer hover:text-[#60f4af] flex items-center gap-2 text-[white] text-[24px]'><div className='w-[30px] h-[1px] border border-[rgb(255,255,255,0.3)]'></div>AI engineer</li>
                            <li className='cursor-pointer hover:text-[#60f4af] flex items-center gap-2 text-[white] text-[24px]'><div className='w-[30px] h-[1px] border border-[rgb(255,255,255,0.3)]'></div>HR manager</li>
                        </ul>
                    </div>
                </div>
                <div className='border-b border-[rgb(158,158,158,0.2)] w-[100%] h-[200px] flex relative'>
                    <div>
                        <ul className='flex gap-5 mt-[50px]'>
                            <li className='text-[18px] font-semibold text-[#939393] [transition:0.3s] hover:text-white'>ABOUT US</li>
                            <li className='text-[18px] font-semibold text-[#939393] [transition:0.3s] hover:text-white'>SERVICES</li>
                            <li className='text-[18px] font-semibold text-[#939393] [transition:0.3s] hover:text-white'>PORTFOLIO</li>
                            <li className='text-[18px] font-semibold text-[#939393] [transition:0.3s] hover:text-white'>CAREER</li>
                            <li className='text-[18px] font-semibold text-[#939393] [transition:0.3s] hover:text-white'>BLOG</li>
                        </ul>
                        <ul className='flex gap-3 mt-[20px]'>
                            <li className='slider'><FaFacebookF /></li>
                            <li className='slider'><BsTwitter /></li>
                            <li className='slider'><PiInstagramLogo /></li>
                            <li className='slider'><FaTelegramPlane /></li>
                            <li className='slider'><FaLinkedinIn /></li>
                            <li className='slider'><FaBehance /></li>
                            <li className='slider'><FaDribbble /></li>
                            <li className='slider'><SiTrustpilot /></li>
                            <li className='slider'><FaYelp /></li>
                            <li className='cursor-pointer text-[#767676] flex items-center gap-2 text-[18px] '><div className='text-[22px] font-semibold text-white w-[30px] h-[30px] rounded-[50%] bg-[rgb(128,128,128,0.2)] pb-[2px] flex justify-center items-center'>@</div>info@uic.group</li>
                            <li className='cursor-pointer text-[#767676] flex items-center gap-2 text-[18px] '><div className='text-[22px] font-semibold text-white w-[30px] h-[30px] rounded-[50%] bg-[rgb(128,128,128,0.2)] pt-[2px] flex justify-center items-center'><BiPhone /></div> +998 71 200 70 07</li>
                        </ul>
                    </div>
                    <div onClick={scrollToTop} className='w-[50px] h-[50px] rounded-[50%] border flex items-center justify-center text-[white] absolute left-[90%] top-[20%] cursor-pointer'>
                        <IoIosArrowRoundUp className='text-[30px]' />
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <div><p className='text-[rgba(173,173,173,0.8)] text-[18px]'>© UIC GROUP 2024</p></div>
                    <div>
                        <img src={logo} alt="UILogo" className='w-[120px] h-[120px]' />
                    </div>
                    <form action="" className='w-[600px] h-[45px] rounded-[10px] border-[rgb(207,206,206,0.3)] border flex items-center cursor-pointer '>
                        <div className='w-[90%] h-[100%] flex items-center justify-center text-[rgb(255,255,255,0.5)] font-semibold'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.29292 5.2071L9.79292 8.7071C9.91541 8.82918 10.0674 8.91744 10.2342 8.96328C10.4009 9.00913 10.5767 9.01099 10.7444 8.9687C10.9121 8.9264 11.0659 8.84138 11.191 8.72193C11.316 8.60248 11.408 8.45267 11.4579 8.2871L12.9579 3.2871C13.0098 3.11418 13.0138 2.93045 12.9696 2.75541C12.9255 2.58037 12.8348 2.42054 12.7071 2.29289C12.5795 2.16524 12.4197 2.07453 12.2446 2.03037C12.0696 1.98622 11.8858 1.99027 11.7129 2.0421L6.71292 3.5421C6.54773 3.59251 6.39835 3.68473 6.27926 3.80982C6.16017 3.93491 6.07539 4.08863 6.03315 4.2561C5.99091 4.42357 5.99262 4.59911 6.03813 4.76572C6.08364 4.93233 6.17141 5.08436 6.29292 5.2071Z" fill="white" fill-opacity="0.6"></path>
                                <path d="M4.96009 8.15717C3.25209 9.65817 3.00809 12.3252 4.41209 14.1252C5.82609 15.9372 8.40209 16.2322 10.1681 14.7832L15.0481 10.7792C15.2669 10.5994 15.5197 10.4655 15.7914 10.3854C16.063 10.3053 16.3481 10.2806 16.6294 10.3129C16.9108 10.3452 17.1828 10.4337 17.4293 10.5733C17.6758 10.7128 17.8916 10.9005 18.0641 11.1252C18.8131 12.0852 18.6811 13.5252 17.7711 14.3252L16.7281 15.2412C16.3191 15.6012 16.2721 16.2312 16.6221 16.6512C16.9721 17.0712 17.5881 17.1192 17.9971 16.7592L19.0401 15.8432C20.7481 14.3412 20.9931 11.6772 19.5871 9.87517C18.1751 8.06517 15.5951 7.76917 13.8311 9.21717L8.95109 13.2212C8.73236 13.4012 8.4796 13.5354 8.2079 13.6156C7.9362 13.6959 7.65112 13.7206 7.36965 13.6883C7.08819 13.656 6.81611 13.5674 6.56965 13.4277C6.32318 13.288 6.10737 13.1001 5.93509 12.8752C5.18809 11.9172 5.31909 10.4752 6.22809 9.67517L6.77009 9.26017C7.17909 8.90017 7.23009 8.27017 6.88009 7.85017C6.79787 7.75061 6.69649 7.66858 6.58196 7.60895C6.46743 7.54932 6.34209 7.51331 6.21338 7.50305C6.08466 7.49279 5.9552 7.50849 5.83267 7.54922C5.71014 7.58996 5.59705 7.65489 5.50009 7.74017L4.96009 8.15717Z" fill="white" fill-opacity="0.6"></path>
                                <path d="M10 19C10 18.2044 10.3161 17.4413 10.8787 16.8787C11.4413 16.3161 12.2044 16 13 16C13.7956 16 14.5587 16.3161 15.1213 16.8787C15.6839 17.4413 16 18.2044 16 19C16 19.7956 15.6839 20.5587 15.1213 21.1213C14.5587 21.6839 13.7956 22 13 22C12.2044 22 11.4413 21.6839 10.8787 21.1213C10.3161 20.5587 10 19.7956 10 19Z" fill="white" fill-opacity="0.6"></path>
                            </svg>
                            Tashkent city.shayxontoxur district.Adkham Rakhmat street -15/1
                        </div>
                        <button className=' w-[9%] h-[80%] bg-[rgb(196,195,195,0.3)] rounded-[10px] text-white font-semibold'>map</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Footer
