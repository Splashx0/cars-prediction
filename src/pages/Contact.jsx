import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import lights from '../assets/lights1.jpg'
import { RxEnvelopeClosed } from "react-icons/rx";
import { RxEnvelopeOpen } from "react-icons/rx";


function Contact() {
  return (
    <div>
        <Navbar/>
        <div className=' flex'>
            <div className=' flex md:w-[90%] '>
                <img className='  h-[75%] hidden md:flex shadow-2xl border-[#e7e7e7] rounded-[30px] w-[90%] border-[15px] mx-auto my-12 ' src={lights} alt="" />
            </div>

            <div className=' w-full h-screen flex justify-center md:justify-start items-center p-4  '>
                <form className=' flex flex-col sm:w-[400px] md:w-[350px] lg:w-[500px] w-full '>
                    <div className=' pb-8'>
                        <p className=' text-4xl font-bold  text-[#2E2E2E]'>Contact Us</p>
                        <p className='text-xl font-medium  text-[#2E2E2E]  mt-4'>Dont hesitate to send a message if you have some questions or you encountered some issues</p>
                    </div>
                    <label className=' ml-1 font-medium' htmlFor='name'>Name</label>
                    <input className=' my-2 p-2 border-2 rounded-lg border-[#2E2E2E]' type="text" placeholder='Name' name='name'/> 
                    <label className=' mt-4 ml-1 font-medium' htmlFor='name'>Email</label>
                    <input className=' my-1 p-2 border-2 rounded-lg border-[#2E2E2E]' type="text" placeholder='Email' name='email'/>   
                    <label className=' mt-4 ml-1 font-medium' htmlFor='name'>Message</label>
                    <textarea className=' my-1 p-2 border-2 rounded-lg border-[#2E2E2E]' name="message"  rows="10" placeholder='Message'></textarea>
                    <button className=' group text-[17px] font-bold  flex justify-center border-2 border-[#F7C213] bg-[#F7C213] sm:w-[400px] md:w-[350px] lg:w-[500px] rounded-md  mt-3  py-[8px] text-[#2E2E2E] hover:bg-[#F5F5F5] hover:border-2 hover:border-[#2E2E2E]'>Send a Message <span className=' flex'><RxEnvelopeClosed className=' flex group-hover:hidden ml-3 ' size={23}/><RxEnvelopeOpen className=' hidden group-hover:flex ml-3 ' size={23} /></span> </button>
                </form>
            </div>
        </div>

        <Footer />
      
    </div>
  )
}

export default Contact
