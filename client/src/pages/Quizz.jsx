import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Dropdown from '../components/Dropdown'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';



function Quizz() {
  const options = ['ALFA ROMEO', 'AUDI', 'BMW', 'CHEVROLET'];

  return (
    <div>
      <Navbar />
      <div className=' mt-[70px] mb-[200px] pb-[30px] bg-white max-w-[1240px] mx-auto rounded-[28px]  shadow-lg' >
        <h1 className=' text-center text-3xl text-[#F7C213] font-bold pt-6'>Identification</h1>
        <p className=' text-center  text-lg text-[#5e5e5e] mt-3  '>Identifiez précisément le véhicule que vous souhaitez estimer</p>
        {/*separator */}
        <div className=" mx-auto w-[80%] mt-5 ">
          <div className="w-full h-px bg-[#bebebe]"></div>
        </div>
        {/**content */}
        <div>
          <h1 className=' text-center text-2xl font-medium text-[#2E2E2E] pt-6 pb-3'>Marque</h1>
          <div className=' flex justify-center  w-[60%]  mx-auto'>
            <Dropdown placehold="Marque" options={options} question={"Marque"} />
          </div>
        </div>
        <div >
          <h1 className=' text-center text-2xl font-medium text-[#2E2E2E] pt-6 pb-3'>Modele</h1>
          <div className=' flex justify-center  w-[60%]  mx-auto'>
            <Dropdown placehold="Modele" options={options} question={"Modele"} />
          </div>
        </div>
        <div >
          <h1 className=' text-center text-2xl font-medium text-[#2E2E2E] pt-6 pb-3'>Version</h1>
          <div className=' flex justify-center  w-[60%]  mx-auto'>
            <Dropdown placehold="Version" options={options} question={"Version"} />
          </div>
        </div>
        <div className=' mt-[70px] flex justify-between px-16 '>
          <Link to='/quizztype'><button className=' w-[140px] flex group text-[17px] border-[#2E2E2E] border-[1px] py-2 px-4 rounded-lg text-[#2E2E2E] hover:bg-[#F7C213]  hover:border-[#F7C213] duration-300  font-semibold ' ><span className='  group-hover:-translate-x-1.5 duration-200'><FaArrowLeftLong className='mt-1 mr-[6px]' /></span> Precedent</button></Link>
          <Link to='/quizzquest'><button className=' w-[140px] flex group text-[17px] border-[#2E2E2E] border-[1px] py-2 px-4 rounded-lg text-[#2E2E2E] hover:bg-[#F7C213]  hover:border-[#F7C213] duration-300  font-semibold ' > Suivant<span className='  group-hover:translate-x-1.5 duration-200'><FaArrowRightLong className='mt-1 ml-[25px]' /></span></button></Link>
        </div>
      </div>
      <Footer />

    </div>
  )
}

export default Quizz
