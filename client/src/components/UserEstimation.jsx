import { FiPlusCircle } from "react-icons/fi";
import { Link } from 'react-router-dom'


function UserEstimation() {
    const Estimations = [{
        name: "Audi R8 Nouveau",
        price: "100 000 TND",
        quizz: "moyen",
        date: "12/05/2023"
    },
    {
        name: "Clio bombé",
        price: "20 000 TND",
        quizz: "moyen",
        date: "12/05/2023"
    },
    {
        name: "Mercedes Benz ",
        price: "120 000 TND",
        quizz: "moyen",
        date: "12/05/2023"
    },

    ]
    return (
        <div className='  flex mt-[50px] '>
            {/**my estimations */}
            <div className='  grid sm:grid-cols-2 md:grid-cols-3 gap-[50px] w-[85%] mx-auto '>
                {Estimations.map((estim, index) => (
                    <div key={index} className=' h-[260px] sm:h-[320px] md:h-[350px]  bg-[#ffd54d17]  rounded-[25px] flex '>
                        <div className='mx-auto my-auto '>
                            <p className='text-[#2E2E2E] mb-3  sm:mb-5 text-2xl font-bold  text-center'>{estim.name}</p>
                            <p className=' text-[#F7C213] sm:mb-2 font-Nunito font-bold text-[22px] text-center'>{estim.price}</p>
                            <p className='text-center text-[#2E2E2E] mb-2 font-semibold text-[19px]  sm:mb-3'> {estim.quizz} </p>
                            <p className=' text-center text-[#2E2E2E] font-semibold text-[19px] font-Nunito'>{estim.date}</p>
                            <div className=' flex justify-center mt-[20px]  sm:mt-[28px]'>
                                <button className='  text-[#f5edd7fd] bg-[#2E2E2E] hover:bg-transparent hover:border-[#2E2E2E] hover:text-[#2E2E2E] font-semibold border-2 border-[#2E2E2E] w-[160px] py-2 rounded-[12px] '>Détails</button>
                            </div>
                        </div>
                    </div>
                ))}
                <Link to='/quizztype'>
                    <div className='h-[260px] sm:h-[320px] md:h-[350px] bg-[#ffd54d17]  rounded-[25px] border-[3px] border-[#F7C213] flex cursor-pointer'>
                        <div className='mx-auto my-auto '>
                            <p className=' text-center pb-5  text-[#F7C213] text-[24px] font-Nunito font-bold'>Nouvelle estimation</p>
                            <FiPlusCircle className=' mx-auto text-[#F7C213]' size={32} />
                        </div>
                    </div>
                </Link>

            </div>

        </div>
    )
}

export default UserEstimation
