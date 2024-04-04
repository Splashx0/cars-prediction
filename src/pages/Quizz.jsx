import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Dropdown from '../components/Dropdown'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Dropdownmodele from '../components/Dropdownmodele';
import Dropdownversion from '../components/Dropdownversion';


function Quizz() {

  return (
    <div>
        <Navbar/>
        <div className=' mt-[70px] mb-[200px] h-[680px] sm:h-[650px] bg-white max-w-[1240px] mx-auto rounded-[28px]  shadow-lg' >
            <h1 className=' text-center text-3xl text-[#F7C213] font-bold pt-6'>Identification</h1>
            <p className=' text-center  text-lg text-[#5e5e5e] mt-3  '>Identifiez précisément le véhicule que vous souhaitez estimer</p>
            {/*separator */}
            <div class=" mx-auto w-[80%] my-5 ">
                <div class="w-full h-px bg-[#bebebe]"></div>
            </div>
            <div>
              <h1 className=' text-center text-2xl font-medium text-[#2E2E2E] py-3'>Marque</h1>
              <div className=' flex justify-center  w-[60%]  mx-auto'>
                <Dropdown />
              </div>
            </div>
            <div className=' mt-9'>
              <h1 className=' text-center text-2xl font-medium text-[#2E2E2E] py-3'>Modele</h1>
              <div className=' flex justify-center  w-[60%]  mx-auto'>
                <Dropdownmodele />
              </div>
            </div>
            <div className=' mt-9'>
              <h1 className=' text-center text-2xl font-medium text-[#2E2E2E] py-3'>Version</h1>
              <div className=' flex justify-center  w-[60%]  mx-auto'>
                <Dropdownversion />
              </div>
            </div>
            <div className=' mt-[70px] flex justify-between px-16 '>
             <Link to='/quizztype'><button className=' w-[140px] flex group text-[17px] border-[#2E2E2E] border-[1px] py-2 px-4 rounded-lg text-[#2E2E2E] hover:bg-[#F7C213]  hover:border-[#F7C213] duration-300  font-semibold ' ><span className='  group-hover:-translate-x-1.5 duration-200'><FaArrowLeftLong className='mt-1 mr-[6px]' /></span> Precedent</button></Link>
              <button className=' w-[140px] flex group text-[17px] border-[#2E2E2E] border-[1px] py-2 px-4 rounded-lg text-[#2E2E2E] hover:bg-[#F7C213]  hover:border-[#F7C213] duration-300  font-semibold ' > Suivant<span className='  group-hover:translate-x-1.5 duration-200'><FaArrowRightLong className='mt-1 ml-[25px]' /></span></button>
            </div>
        </div>
        <Footer/>
      
    </div>
  )
}

export default Quizz
