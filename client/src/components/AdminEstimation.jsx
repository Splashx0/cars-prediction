import { FiPlusCircle } from "react-icons/fi";
import { Link } from 'react-router-dom'
import Modal from "./Modal";
import { useState } from "react";

function AdminEstimation() {
    const Estimations = [{
        name: "Audi R8 Nouveau",
        price: "100 000 TND",
        quizz: "moyen",
        user:"Splash",
        email:"Splash@gmail.com",
        date: "12/05/2023"
    },
    {
        name: "Clio bombé",
        price: "20 000 TND",
        quizz: "moyen",
        user:"chtioui",
        email:"chtioui@gmail.com",
        date: "12/05/2023"
    },
    {
        name: "Mercedes Benz ",
        price: "120 000 TND",
        quizz: "moyen",
        user:"Selim lpatron",
        email:"lpatron@gmail.com",
        date: "12/05/2023"
    },

    ]
    const [modalVisible,setModalVisible] =useState(false);
    
    const handleModal=()=>{
        setModalVisible(!modalVisible);
    }
  return (
    <div className='  flex  '>
    {/**my estimations */}
    <div className='  grid sm:grid-cols-2 md:grid-cols-3 gap-[40px] w-[82%] mx-auto '>
        {Estimations.map((estim, index) => (
            <div key={index} className=' border-2 border-[#2E2E2E] h-[260px] sm:h-[320px] md:h-[350px]  bg-[#ffd54d17]  rounded-[25px] flex '>
                <div className='mx-auto my-auto '>
                    <p className='text-[#2E2E2E] mb-2 text-2xl font-bold  text-center'>{estim.user}</p>
                    <p className='text-center  text-gray-500 mb-2 font-semibold text-[19px]  sm:mb-3'> {estim.email} </p>
                    <p className='text-center text-[#2E2E2E] mb-2 font-semibold text-[20px]  '> {estim.quizz} </p>
                    <p className='text-center text-[#2E2E2E] mb-2 font-bold text-[21px]  '> {estim.name} </p>
                    <p className=' text-[#F7C213] mb-2 font-Nunito font-bold text-[21px] text-center'>{estim.price}</p>
                    <p className=' text-center text-[#2E2E2E] font-semibold text-[19px] font-Nunito'>{estim.date}</p>
                    <div className=' flex justify-center mt-[22px]  '>
                        <button
                         onClick={()=>handleModal()}
                         className='  text-[#f5edd7fd] bg-[#2E2E2E] hover:bg-transparent hover:border-[#2E2E2E] hover:text-[#2E2E2E] font-semibold border-2 border-[#2E2E2E] w-[160px] py-2 rounded-[12px] '>Détails</button>
                    </div>
                </div>
            </div>
        ))}
        
        {modalVisible && <Modal/>}

    </div>

</div>
  )
}

export default AdminEstimation
