import React, { useState, useContext, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { IoIosArrowDropdown } from "react-icons/io";
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { BiSend } from "react-icons/bi";
import { BiSolidSend } from "react-icons/bi";
import { MyContext } from '../Context';





function Price() {

  const { dropdownAnswers, optionAnswers, dateAnswers, inputAnswers } = useContext(MyContext);
  const [allAnswersList, setAllAnswersList] = useState([]);

  const combineAnswersToList = (answers) => {
    const allAnswers = [];
    Object.entries(answers).forEach(([question, answer]) => {
      allAnswers.push({ question, answer });
    });
    return allAnswers;
  };

  useEffect(() => {
    const allAnswers = [];
    allAnswers.push(...combineAnswersToList(dropdownAnswers));
    allAnswers.push(...combineAnswersToList(optionAnswers));
    allAnswers.push(...combineAnswersToList(dateAnswers));
    allAnswers.push(...combineAnswersToList(inputAnswers));
    setAllAnswersList(allAnswers);
  }, [dropdownAnswers, optionAnswers, dateAnswers, inputAnswers]);
  console.log(allAnswersList);

  const [currentPage, setCurrentPage] = useState(1);
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);
  const rowsPerPage = 6;
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = allAnswersList.slice(indexOfFirstRow, indexOfLastRow);
  const totalPages = Math.ceil(allAnswersList.length / rowsPerPage);

  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const handleLiked = () => {
    setLiked(!liked);
    setDisliked(false);
  }
  const handleDisliked = () => {
    setDisliked(!disliked);
    setLiked(false);
  }
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const toggleDetailsVisibility = () => {
    setIsDetailsVisible(!isDetailsVisible);
  };

  return (
    <div>
      <Navbar />
      {/* content */}
      <div className={`mt-[70px]   bg-white max-w-[1000px] mx-auto ${isDetailsVisible ? 'rounded-t-[28px]' : 'rounded-[28px]'}   shadow-lg  `}>
        {/* header */}
        <div className='flex flex-col  '>
          <p className='  mt-[30px] mx-auto font-Nunito font-bold text-[27px] text-[#F7C213] '>32011 TND - 32869 TND</p>
          <p className=' mt-[15px] mx-auto font-Nunito font-semibold text-[24px] text-[#2E2E2E]'>Car Name and model</p>
          <p className=' group hover:text-[#F7C213] cursor-pointer mt-[10px] mx-auto font-Nunito font-semibold text-[20px] text-[#2E2E2E]  flex  mb-3' onClick={toggleDetailsVisibility}>view car details <span className=' ml-3 pt-[6px] group-hover:color-[#F7C213]'><IoIosArrowDropdown /></span></p>
        </div>
      </div>
      {isDetailsVisible && (
        <div className=' bg-white max-w-[1000px] mx-auto rounded-b-[28px]  shadow-lg' >
          {/**separator */}
          <div className=" mx-auto w-[60%] lg:w-[40%] pt-3">
            <div className="w-full h-px bg-[#bebebe]"></div>
          </div>
          {/* table */}
          <div className=" w-[80%] lg:w-[60%] mx-auto px-4 py-8">
            <div className="overflow-x-auto">
              <table className="table-auto w-full border-collapse ">
                <tbody>
                  {currentRows.map((item, index) => (
                    <tr key={index} className=' border-b border-t border-gray-300 hover:bg-[#ffd54d33] cursor-pointer hover:border-white hover:rounded-xl ' >
                      <td className=" font-Nunito px-4 py-4 ">{item.question}</td>
                      <td className=" font-Nunito px-4 py-4 ">{item.answer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {/* next and prev */}
              <div className=' flex w-full justify-between mx-auto mt-3  '>
                <MdKeyboardDoubleArrowLeft size={26} className='text-gray-700 cursor-pointer hover:text-[#F7C213]' onClick={prevPage} />
                <MdKeyboardDoubleArrowRight size={26} className='text-gray-700 cursor-pointer hover:text-[#F7C213]' onClick={nextPage} />
              </div>
            </div>
          </div>
        </div>
      )}
      {/**rate us /comment */}
      <div className=' mt-[30px]  mb-[200px]  bg-white max-w-[1000px] mx-auto rounded-[28px]  shadow-lg  ' >
        <div className='flex  flex-col '>
          <h1 className=' mt-6 mx-auto font-Nunito font-bold text-[24px] text-[#2E2E2E]'>How was ur experience at Carsale</h1>
          {/**like/dislike buttons */}
          <div className=' justify-between w-[150px] my-9 mx-auto flex'>
            <div
              onClick={handleDisliked}
              className={`group rounded-full h-[55px] w-[55px] flex cursor-pointer border-2 border-[#2E2E2E] hover:border-[#2E2E2E] hover:bg-[#F7C213]  ${disliked ? 'bg-[#F7C213]' : ''}`}>
              <BiDislike size={28} className={` m-auto  group-hover:hidden ${disliked ? 'hidden' : 'flex'}`} /><BiSolidDislike size={28} className={`m-auto group-hover:flex text-[#2E2E2E] ${disliked ? 'flex' : 'hidden'}`} />
            </div>
            <div
              onClick={handleLiked}
              className={` group rounded-full h-[55px] w-[55px] flex cursor-pointer border-2 border-[#2E2E2E] hover:border-[#2E2E2E] hover:bg-[#F7C213] ${liked ? 'bg-[#F7C213]' : ''}`}>
              <BiLike size={28} className={`' m-auto group-hover:hidden ${liked ? 'hidden' : 'flex'}`} /><BiSolidLike size={28} className={`m-auto group-hover:flex text-[#2E2E2E] ${liked ? 'flex' : 'hidden'}`} />
            </div>
          </div>
          <p className=' mx-auto font-Nunito font-medium text-[18px] text-[#5e5e5e] w-[50%]  text-center'>Your opinion is very valuable . Please let us know what you think to help us improve our website</p>
          <textarea name="comment" id="" cols="30" rows="5" className=' mx-auto w-[400px] border-2 border-[#2E2E2E] rounded-lg mt-7' placeholder='Leave us a comment'></textarea>
          <button className=' items-center group flex justify-center hover:bg-[#F7C213] hover:border-[#F7C213] mt-5 mb-4 rounded-lg h-[40px] text-lg font-Nunito mx-auto font-semibold border-2 border-[#2E2E2E] w-[130px]'>submit <span className='flex  ml-2'><BiSend size={19} className=' flex group-hover:hidden' /><BiSolidSend size={19} className=' hidden group-hover:flex' /></span></button>
        </div>

      </div>


      <Footer />
    </div>
  )
}

export default Price;
