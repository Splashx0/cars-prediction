import { useState, useContext, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import Quizzelement from '../components/Quizzelement';
import QuizzInput from '../components/QuizzInput';
import DateInput from '../components/DateInput';
import Dropdown from '../components/Dropdown';
import { questions } from '../assets/Questions';
import { MyContext } from '../Context';
import Load from '../components/Load';


function Quizzquest() {
    const [activeOptions, setActiveOptions] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 4;
    const navigate = useNavigate();
    const { optionAnswers, setOptionAnswers } = useContext(MyContext);
    const[isLoading,setIsLoading] = useState(false);
    useEffect(()=>{
        setIsLoading(false);
    },[])
    const handleLoading=()=>{
        setIsLoading(!isLoading);
        console.log(isLoading)
    }

    const handleOptionClick = (index, questionIndex, question, option) => {
        let newActiveOptions = [...activeOptions];
        newActiveOptions[questionIndex] = index;
        setActiveOptions(newActiveOptions);

        let optionsCopy = { ...optionAnswers }
        optionsCopy[question] = option
        setOptionAnswers(optionsCopy)

    };

    const handleNextPage = () => {
        setCurrentPage((prevPage) => {
            // Check if there are more questions
            if ((prevPage + 1) * itemsPerPage < questions.length) {
                setActiveOptions(Array(questions.length).fill(null));
                return prevPage + 1;
            } else {
                // If no more questions, navigate to "/quizz"
                navigate('/price');
                return prevPage;
            }
        });
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => {
            if (prevPage > 0) {
                return prevPage - 1;
            } else {
                // If on the first page, navigate to "/quizzquest2"
                navigate('/quizz');
                return prevPage;
            }
        });
    };

    const renderQuestion = (question, questionIndex) => {
        switch (question.type) {
            case "option":
                return (
                    <div key={questionIndex} className="mb-4">
                        <h1 className='text-center text-2xl font-medium text-[#2E2E2E] pt-6 pb-3 mb-3'>{question.title}</h1>
                        <div className={`grid sm:grid-cols-2 md:grid-cols-${question.options.length} gap-8 mx-auto w-[60%] sm:w-[75%]`} >
                            {question.options.map((option, index) => (
                                <div key={index}>
                                    <Quizzelement
                                        index={index}
                                        active={activeOptions[questionIndex] === index}
                                        handleOptionClick={() => handleOptionClick(index, questionIndex, question.title, option)}
                                        text={option}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case "date":
                return (
                    <div key={questionIndex} className='mb-3 w-[60%] mx-auto'>
                        <h1 className='text-center text-2xl font-medium text-[#2E2E2E] pt-6 pb-3 mb-3'>{question.title}</h1>
                        <DateInput question={question.title} />
                    </div>
                );
            case "input":
                return (
                    <div key={questionIndex} className='mb-3 w-[60%] mx-auto'>
                        <h1 className='text-center text-2xl font-medium text-[#2E2E2E] pt-6 pb-3 mb-3'>{question.title}</h1>
                        <QuizzInput question={question.title} />
                    </div>
                );
            case "dropdown":
                return (
                    <div key={questionIndex}>
                        <h1 className=' text-center text-2xl font-medium text-[#2E2E2E] pt-6 pb-3 mb-3'>{question.title}</h1>
                        <div className=' flex justify-center  w-[60%]  mx-auto'>
                            <Dropdown placehold={question.title} options={question.options} question={question.title} />
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div>
            <Navbar />
            {/*hearder */}
            <div className=' mt-[70px] mb-[200px]  bg-white max-w-[1240px] mx-auto rounded-[28px]  shadow-lg  ' >
                <h1 className=' text-center text-3xl text-[#F7C213] font-bold pt-6'>État du véhicule</h1>
                <p className=' text-center  text-lg text-[#5e5e5e] mt-3  '>Indiquez l'état du véhicule</p>
                {/*separator */}
                <div className=" mx-auto w-[80%] mt-5 ">
                    <div className="w-full h-px bg-[#bebebe]"></div>
                </div>
                {/*content */}
                <div className='sm:overflow-y-auto sm:max-h-[425px] scrollbar'>
                    {questions.slice(currentPage * itemsPerPage, currentPage * itemsPerPage + itemsPerPage).map((question, questionIndex) => (
                        renderQuestion(question, questionIndex)
                    ))}
                </div>
                <div className="mx-auto w-[80%]">
                    <div className="w-full h-0 sm:h-px bg-[#bebebe]"></div>
                </div>
                <div className='pb-6 sm:mt-[30px] mt-[50px] flex justify-between px-16'>
                    <button onClick={handlePreviousPage} className='w-[140px] flex group text-[17px] border-[#2E2E2E] border-[1px] py-2 px-4 rounded-lg text-[#2E2E2E] hover:bg-[#F7C213]  hover:border-[#F7C213] duration-300 font-semibold ' >
                        <span className='group-hover:-translate-x-1.5 duration-200'><FaArrowLeftLong className='mt-1 mr-[6px]' /></span> Precedent
                    </button>
                    <button onClick={handleNextPage} className='w-[140px] flex group text-[17px] border-[#2E2E2E] border-[1px] py-2 px-4 rounded-lg text-[#2E2E2E] hover:bg-[#F7C213]  hover:border-[#F7C213] duration-300 font-semibold ' >
                        Suivant<span className='group-hover:translate-x-1.5 duration-200'><FaArrowRightLong className='mt-1 ml-[25px]' /></span>
                    </button>
                </div>
                
                <button onClick={handleLoading} className=' py-3 w-[200px] bg-[#c4eb59] rounded-xl hover:bg-white hover:border-[#c4eb59] hover:border-2'>Blur</button>
            </div>
            {isLoading && <Load/>}
            <Footer />
            
        </div>
    )
}

export default Quizzquest;
