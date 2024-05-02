import React from 'react'
import { ReactTyped } from "react-typed";
import { GoGear } from "react-icons/go";
import { Link } from 'react-router-dom'


function Hero() {
  return (
    <div className=' text-[#2E2E2E] h-[80vh] md:mb-[0px] mb-[-10rem]'>
      <div className=' max-w[800px]  w-full h-[700px] mx-auto text-center flex flex-col justify-center '>
        <p className=' text-[#F7C213] font-bold p-2  text-[30px] lg:text-[35px]'>Un quizz pour estimer le prix de votre véhicule</p>
        <h1 className=' lg:text-7xl md:text-4xl sm:text-6xl text-4xl font-bold md:py-6'>Estimer le prix de votre voiture.</h1>
        <div className=' flex justify-center items-center '>
          <p className=' lg:text-6xl md:text-5xl sm:text-4xl text-xl font-bold py-4'>Nous vous garantie la</p>
          <ReactTyped
            className='md:text-5xl lg:text-6xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-gray-500'
            strings={['Fiablité', 'Simplicité', 'Rapidité']}
            typeSpeed={80}
            backSspeed={120}
            loop
          />
        </div>
        <p className=' md:my-4 md:text-2xl lg:text-3xl text-xl font-bold text-gray-500  '>
          Veuillez remplir le questionnaire pour recevoir un devis pour votre bien.
        </p>
        <Link to='/quizz'>
          <button className=' text-[20px]
           group px-10 flex justify-between border-2
            border-[#F7C213] bg-[#F7C213] 
            w-[210px] rounded-md font-semibold mt-6 mx-auto py-[14px] text-[#2E2E2E] hover:bg-[#F5F5F5] hover:border-2 hover:border-[#2E2E2E]'>
            Commencer
            <span className=' my-auto ml-2'>
              <GoGear size={24} className=' group-hover:rotate-90  ease-in-out duration-700 ' />
            </span>
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Hero
