import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import { CiLogin } from "react-icons/ci";
import { GoInfo,GoHome } from "react-icons/go";
import { RiUserLine } from "react-icons/ri";

import logo from '../assets/projectlogo.png'
import logo1 from '../assets/logo1.png'

function Navbar() {
    const[nav,setNav]=useState(false);

    const handlenav= () =>{
        setNav(!nav)
    }
  return (
    <div className='  text-[#2E2E2E] flex justify-between items-center h-24 max-w-[1280px] m-auto px-4 my-4'>
        
        <img className=' hidden md:flex cursor-pointer my-auto bg-[#F5F5F5]'  src={logo} alt="Logo image" style={{height:'110px',width:'120px'}}  /> 
        <img className='flex md:hidden cursor-pointer my-auto bg-[#F5F5F5] hover:rotate-12  duration-300'  src={logo1} alt="Logo image" style={{height:'80px',width:'90px'}}  /> 
              
        
        <div className=' flex justify-between'>
        <ul className=' md:flex  hidden '>
            <Link to='/'><li className=' p-4 cursor-pointer hover:text-[#F7C213]  text-xl' >Home</li></Link> 
            <Link to='/about'><li className=' p-4 cursor-pointer hover:text-[#F7C213]  text-xl' >About Us</li></Link> 
            <Link to='/contact'><li className=' p-4 cursor-pointer hover:text-[#F7C213]  text-xl' >Contacts</li></Link> 
            <Link to="/signup"><button className='  items-center md:flex hidden group bg-[#F5F5F5] w-[121px] border-2 border-[#F7C213] rounded-md font-medium my-1 mx-auto px-6 py-3 text-[#F7C213] hover:bg-[#F7C213] hover:text-[#2E2E2E] hover:border-[#2E2E2E] duration-200' >SignUP <span className='group-hover:translate-x-1.5 duration-200'><CiLogin size={24} className=' ml-1' /></span> </button></Link>

        </ul>
        
        </div>
        
        <div onClick={handlenav} className=' cursor-pointer block md:hidden'>
            {nav ? <AiOutlineClose color='#2E2E2E' size={27} /> : <AiOutlineMenu size={27} color='#2E2E2E'/> }    
        </div >
        
        <div className={nav ? ' fixed left-0 top-0 w-[60%] border-r h-full bg-white ease-in-out duration-500' : '  ease-in-out duration-500 fixed left-[-100%]'}>
            
            <img className='flex mx-auto  my-4 cursor-pointer  bg-[white] hover:rotate-12  duration-300'  src={logo1} alt="Logo image" style={{height:'80px',width:'90px'}}  /> 

            <ul className='  uppercase p-4 cursor-pointer' >
            <Link to='/'><li className=' flex justify-between p-4 border-b border-gray-200 hover:bg-[#F5F5F5]  hover:rounded-lg hover:border-[#F7C213] hover:border-[1px] duration-200 text-xl' >Home <span><GoHome className=' my-auto' size={25} /></span> </li></Link> 
            <Link to='/about'><li className=' flex justify-between p-4 border-b border-gray-200 hover:bg-[#F5F5F5]  hover:rounded-lg hover:border-[#F7C213] hover:border-[1px] duration-200 text-xl' >About Us <span><GoInfo className=' my-auto' size={25}/></span></li></Link>
            <Link to='/contact'><li className=' flex justify-between p-4 border-b border-gray-200 hover:bg-[#F5F5F5]  hover:rounded-lg hover:border-[#F7C213] hover:border-[1px] duration-200 text-xl' >Contact <span><RiUserLine className=' my-auto' size={25} /></span></li></Link> 
            <Link to="/signup"  ><button className='flex justify-between group md:flex text-start bg-[white] w-full  rounded-md text-xl  mx-auto px-6 py-3 text-[#F7C213] hover:bg-[#F7C213] hover:text-[#2E2E2E] hover:border-[#2E2E2E] duration-200' >Sign UP <span className='group-hover:translate-x-1.5 duration-200'><CiLogin size={29} className='' /></span></button></Link>
            </ul>
            
        </div>
    </div>
  )
}

export default Navbar
