import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



function Footer() {
  return (
    <div  className=' bg-[#2E2E2E] w-full py-[6rem] px-4 '>
        <div  className=' mx-auto w-[300px] text-[#F5F5F5] flex justify-between items-center '>
        <FaFacebook className='   hover:-translate-y-2 cursor-pointer duration-200' size={36} />
        <FaXTwitter className='  hover:-translate-y-2 cursor-pointer duration-200' size={36} />
        <FaInstagram className='  hover:-translate-y-2 cursor-pointer duration-200'  size={36}/>
        <FaGithub className='  hover:-translate-y-2 cursor-pointer duration-200' size={36} />
        <FaLinkedin className='  hover:-translate-y-2 cursor-pointer duration-200' size={36} /> 
        </div>
        <p className=' text-[#F5F5F5] text-center my-7 text-xl font-light'>   &copy; 2024 Carsale.com</p>
      
    </div>
  )
}

export default Footer
