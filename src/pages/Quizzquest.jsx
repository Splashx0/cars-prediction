import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Quizzelement from '../components/Quizzelement';

const questions = [
    {
        title: 'Intérieur du véhicule',
        options: ['Alfa Romeo', 'Audi', 'BMW', 'Chevrolet']
    },
    {
        title: 'Extérieur du véhicule',
        options: ['Excellent', 'Bon', 'Moyen', 'Mauvais']
    },
    {
        title: 'Extérieur du véhicule',
        options: ['Excellent', 'Bon', 'Moyen', 'Mauvais']
    },
    {
        title: 'Extérieur du véhicule',
        options: ['Excellent', 'Bon', 'Moyen', 'Mauvais']
    }
];

function Quizzquest() {
    const [activeOptions, setActiveOptions] = useState(Array(questions.length).fill(null));

    const handleOptionClick = (index, questionIndex) => {
        const newActiveOptions = [...activeOptions];
        newActiveOptions[questionIndex] = index;
        setActiveOptions(newActiveOptions);
    };

    return (
        <div>
            <Navbar />
            {/*hearder */}
            <div className=' mt-[70px] mb-[200px]  sm:h-[650px] bg-white max-w-[1240px] mx-auto rounded-[28px]  shadow-lg  ' >
                <h1 className=' text-center text-3xl text-[#F7C213] font-bold pt-6'>État du véhicule</h1>
                <p className=' text-center  text-lg text-[#5e5e5e] mt-3  '>Indiquez l'état du véhicule</p>
                {/*separator */}
                <div class=" mx-auto w-[80%] mt-5 ">
                    <div class="w-full h-px bg-[#bebebe]"></div>
                </div>
                {/*content */}
                <div className='sm:overflow-y-auto sm:max-h-[425px] scrollbar'>
                    {questions.map((question, questionIndex) => (
                        <div key={questionIndex} className=" mb-4">
                            <h1 className=' text-center text-2xl font-medium text-[#2E2E2E] pt-6 pb-3'>{question.title}</h1>
                            <div className=' flex justify-center mt-[26px] mb-[20px]'>
                                <div className=' grid sm:grid-cols-2 md:grid-cols-4 gap-8  mx-auto w-[60%] sm:w-[75%] '>
                                    {question.options.map((option, index) => (
                                        <div key={index}>
                                            <Quizzelement
                                                index={index}
                                                active={activeOptions[questionIndex] === index}
                                                handleOptionClick={() => handleOptionClick(index, questionIndex)}
                                                text={option}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/*separator */}
                <div class=" mx-auto w-[80%]   ">
                    <div class="w-full h-0 sm:h-px bg-[#bebebe]"></div>
                </div>
                 {/*buttons next/prev */}                           
                <div className= ' pb-6 sm:mt-[30px] mt-[50px] flex justify-between px-16 '>
                    <Link to='/quizz'>
                        <button className=' w-[140px] flex group text-[17px] border-[#2E2E2E] border-[1px] py-2 px-4 rounded-lg text-[#2E2E2E] hover:bg-[#F7C213]  hover:border-[#F7C213] duration-300  font-semibold ' >
                            <span className='  group-hover:-translate-x-1.5 duration-200'><FaArrowLeftLong className='mt-1 mr-[6px]' /></span> Precedent
                        </button>
                    </Link>
                    <button className=' w-[140px] flex group text-[17px] border-[#2E2E2E] border-[1px] py-2 px-4 rounded-lg text-[#2E2E2E] hover:bg-[#F7C213]  hover:border-[#F7C213] duration-300  font-semibold ' >
                        Suivant<span className='  group-hover:translate-x-1.5 duration-200'><FaArrowRightLong className='mt-1 ml-[25px]' /></span>
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Quizzquest;
