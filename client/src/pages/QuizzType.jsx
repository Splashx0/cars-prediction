import { useState, useContext, useEffect } from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import medium from '../assets/animated icons/medium.json';
import advanced from '../assets/animated icons/advanced.json';
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';
import { MyContext } from '../Context';
import axios from 'axios';
import Navbar from '../components/Navbar';

function QuizzType() {
    const [activeAnimation, setActiveAnimation] = useState(null);
    const [typeChoice, setTypeChoice] = useState(null);
    const { setQuestions, currentQuizz } = useContext(MyContext);

    const handleClick = (animation) => {
        setActiveAnimation(animation);
        setTypeChoice(animation === 'advanced' ? 'ADVANCED' : 'BASIC');
    };

    const getQuestions = async (typeChoice) => {
        const response = await axios.get(`http://localhost:3001/api/questions/${typeChoice}`);
        const result = await response.data;
        setQuestions(result)
    }
    const quizzUpate = async (id, type) => {
        const response = await axios.patch(`http://localhost:3001/api/quizz/update`, { id, type });
        const result = await response.data;
        console.log(result);
    }

    useEffect(() => {
        if (typeChoice) {
            getQuestions(typeChoice);
            quizzUpate(currentQuizz, typeChoice)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [typeChoice])




    return (
        <div>
            <Navbar />
            <div className=' mt-[70px] mb-[200px] h-[820px]  md:h-[650px] bg-white max-w-[1240px] mx-auto rounded-[28px]  shadow-lg' >
                <h1 className=' text-center text-3xl text-[#F7C213] font-bold pt-6'>De quel type de questionnaire avez-vous besoin ?</h1>
                <p className=' text-center  text-lg text-[#5e5e5e] mt-3  '>Pour commencer, choisissez l'un des quiz suivants</p>
                {/*separator */}
                <div className=" mx-auto w-[80%] my-5 ">
                    <div className="w-full h-px bg-[#bebebe]"></div>
                </div>
                {/*type */}
                <div className=' w-[55%]  mx-auto  mt-[40px] mb-[70px]    grid md:grid-cols-2 gap-8' >

                    <div>
                        <h1 className={`mb-3 text-center text-xl font-semibold text-[#2E2E2E]
                         ${activeAnimation === 'basic' ? 'text-[#F7C213]' : ''}`}
                        >Basic</h1>
                        <div onClick={() => handleClick('basic')}
                            className={`flex justify-center items-center  border-[1px] border-[#2E2E2E] rounded-[25px] cursor-pointer 
                            ${activeAnimation === 'basic' ? 'bg-[#ffd54d33] border-[#F7C213] border-[2px]' : ''} `}
                        >
                            <Lottie
                                className='h-[200px] md:h-[300px] '
                                animationData={medium}
                                loop
                                autoplay
                            />
                        </div>
                    </div>
                    <div>
                        <h1 className={`mb-3 text-center text-xl font-semibold text-[#2E2E2E]
                         ${activeAnimation === 'advanced' ? 'text-[#F7C213]' : ''}`} >Advanced</h1>
                        <div onClick={() => handleClick('advanced')}
                            className={`flex justify-center items-center border-[1px] border-[#2E2E2E] rounded-[25px] cursor-pointer ${activeAnimation === 'advanced' ? 'bg-[#ffd54d33] border-[#F7C213] border-[2px]' : ''}`}
                        >
                            <Lottie
                                className='h-[200px] md:h-[300px]'
                                animationData={advanced}
                                loop
                                autoplay
                            />
                        </div>
                    </div>
                </div>

                <div className=' mt-[70px] flex justify-between px-16 '>
                    <Link to='/' ><button className=' w-[140px] flex group text-[17px] border-[#2E2E2E] border-[1px] py-2 px-4 rounded-lg text-[#2E2E2E] hover:bg-[#F7C213]  hover:border-[#F7C213] duration-300  font-semibold ' ><span className='  group-hover:-translate-x-1.5 duration-200'><FaArrowLeftLong className='mt-1 mr-[6px]' /></span> Precedent</button></Link>
                    <Link to='/quizzquest'>
                        <button className=' w-[140px] flex group text-[17px]
                         border-[#2E2E2E] border-[1px] py-2 px-4 rounded-lg text-[#2E2E2E]
                         hover:bg-[#F7C213]  hover:border-[#F7C213] duration-300  font-semibold ' >
                            Suivant
                            <span className='  group-hover:translate-x-1.5 duration-200'><FaArrowRightLong className='mt-1 ml-[25px]' /></span></button></Link>
                </div>
            </div>
        </div>
    );
}

export default QuizzType;