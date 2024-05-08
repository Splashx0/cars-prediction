import { useState, useContext } from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import Quizzelement from '../components/Quizzelement';
import QuizzInput from '../components/QuizzInput';
import DateInput from '../components/DateInput';
import Dropdown from '../components/Dropdown';
import { MyContext } from '../Context';
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';

function Quizzquest() {

    const [activeOptions, setActiveOptions] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 3;
    const navigate = useNavigate();
    const { optionAnswers, setOptionAnswers, questions } = useContext(MyContext);

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
                navigate('/quizztype'); //quizz
                return prevPage;
            }
        });
    };

    const [selectedMarque, setSelectedMarque] = useState(null);

    const { data: marques } = useQuery({
        queryKey: ['marques'],
        queryFn: async () => {
            const response = await axios.get('http://localhost:3001/api/cars/marques');
            return await response.data;
        }
    });

    const { data: modeles } = useQuery({
        queryKey: ['modeles', selectedMarque],
        queryFn: async () => {
            if (selectedMarque) {
                const response = await axios.get(`http://localhost:3001/api/cars/${selectedMarque}`);
                return await response.data;
            }
        }
    });


    const renderQuestion = (question, questionIndex) => {
        switch (question.t) {
            case "option":
                return (
                    <div key={questionIndex} className="mb-4">
                        <h1 className='text-center text-2xl font-medium text-[#2E2E2E] pt-6 pb-3 mb-3'>{question.question}</h1>
                        <div className={`grid sm:grid-cols-2 md:grid-cols-${question.options.length} gap-8 mx-auto w-[60%] sm:w-[75%]`} >
                            {question.options.map((option, index) => (
                                <div key={index}>
                                    <Quizzelement
                                        index={index}
                                        active={activeOptions[questionIndex] === index}
                                        handleOptionClick={() => handleOptionClick(index, questionIndex, question.question, option)}
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
                        <h1 className='text-center text-2xl font-medium text-[#2E2E2E] pt-6 pb-3 mb-3'>{question.question}</h1>
                        <DateInput question={question.question} />
                    </div>
                );
            case "input":
                return (
                    <div key={questionIndex} className='mb-3 w-[60%] mx-auto'>
                        <h1 className='text-center text-2xl font-medium text-[#2E2E2E] pt-6 pb-3 mb-3'>{question.question}</h1>
                        <QuizzInput question={question.question} />
                    </div>
                );
            case "dropdown":
                return (
                    <div key={questionIndex}>
                        <h1 className=' text-center text-2xl font-medium text-[#2E2E2E] pt-6 pb-3 mb-3'>{question.question}</h1>
                        <div className=' flex justify-center  w-[60%]  mx-auto mb-3'>
                            <Dropdown
                                data={question.question === "Marque" ? marques : modeles}
                                setSelectedMarque={setSelectedMarque}
                                placehold={question.question}
                                options={question.options}
                                question={question.question} />
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div>
            {/*hearder */}
            <div className=' mt-[70px] mb-[200px]  sm:h-[650px] bg-white max-w-[1240px] mx-auto rounded-[28px]  shadow-lg  ' >
                <h1 className=' text-center text-3xl text-[#F7C213] font-bold pt-6'>État du véhicule</h1>
                <p className=' text-center  text-lg text-[#5e5e5e] mt-3  '>Indiquez l'état du véhicule</p>
                {/*separator */}
                <div className=" mx-auto w-[80%] mt-5 ">
                    <div className="w-full h-px bg-[#bebebe]"></div>
                </div>
                {/*content */}
                <div className='sm:overflow-y-auto sm:max-h-[425px] scrollbar'>
                    {questions?.slice(currentPage * itemsPerPage, currentPage * itemsPerPage + itemsPerPage).map((question, questionIndex) => (
                        renderQuestion(question, questionIndex)
                    ))}
                </div>
                <div className="mx-auto w-[80%]">
                    <div className="w-full h-0 sm:h-px bg-[#bebebe]"></div>
                </div>
                <div className='pb-6 sm:mt-[30px] mt-[50px] flex justify-between px-16'>
                    <button onClick={handlePreviousPage} className='w-[140px] flex group text-[17px] border-[#2E2E2E] border-[1px] py-2 px-4 rounded-lg text-[#2E2E2E] hover:bg-[#F7C213]  hover:border-[#F7C213] duration-300 font-semibold ' >
                        <span className='group-hover:-translate-x-1.5 duration-200'>
                            <FaArrowLeftLong className='mt-1 mr-[6px]' />
                        </span>
                        Precedent
                    </button>
                    <button onClick={handleNextPage} className='w-[140px] flex group text-[17px] border-[#2E2E2E] border-[1px] py-2 px-4 rounded-lg text-[#2E2E2E] hover:bg-[#F7C213]  hover:border-[#F7C213] duration-300 font-semibold ' >
                        Suivant<span className='group-hover:translate-x-1.5 duration-200'><FaArrowRightLong className='mt-1 ml-[25px]' /></span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Quizzquest;
