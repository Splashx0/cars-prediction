import Car from '../assets/carsvg.svg'
import Fill from '../assets/fill.svg'
import Precise from '../assets/precsie.svg'
import Happy from '../assets/happy.svg'
import { motion } from "framer-motion"

function Steps() {
    return (
        <div className=' w-full py-[6rem]  bg-[#F5F5F5] mb-[100px]'>
            <motion.div
                variants={{
                    start: { opacity: 0, x: -75 },
                    end: { opacity: 1, x: 0 }
                }}
                initial="start"
                whileInView="end"
                transition={{ duration: 0.7, delay: 0.2 }}

                className=' max-w-[1240px] mx-auto  grid md:grid-cols-4 gap-8' >
                <div className=' shadow-md  w-full  flex flex-col p-4 my-4  hover:scale-105 duration-300 cursor-pointer'>
                    <img className=' w-20  mx-auto  bg-[#F5F5F5]' src={Car} alt="/" style={{ height: '240px', width: '230px' }} />
                    <div className=' text-center font-medium '>
                        <p>1. Déterminer l'identité de votre voiture</p>
                    </div>
                </div>

                <div className=' shadow-md w-full  flex flex-col p-4 my-4  hover:scale-105 duration-300 cursor-pointer'>
                    <img className=' w-20  mx-auto  bg-[#F5F5F5]' src={Precise} alt="/" style={{ height: '240px', width: '230px' }} />
                    <div className=' text-center font-medium '>
                        <p>2. Préciser les caractéristiques de votre voiture</p>
                    </div>
                </div>

                <div className=' shadow-md w-full  flex flex-col p-4 my-4  hover:scale-105 duration-300 cursor-pointer'>
                    <img className=' w-20  mx-auto  bg-[#F5F5F5]' src={Fill} alt="/" style={{ height: '240px', width: '230px' }} />
                    <div className=' text-center font-medium '>
                        <p>3. Remplissez un questionnaire afin d'évaluer l'état de votre voiture.</p>
                    </div>
                </div>

                <div className=' shadow-md w-full  flex flex-col p-4 my-4  hover:scale-105 duration-300 cursor-pointer'>
                    <img className=' w-20  mx-auto  bg-[#F5F5F5]' src={Happy} alt="/" style={{ height: '240px', width: '230px' }} />
                    <div className=' text-center font-medium '>
                        <p>4. Recevoir une estimation du prix de votre voiture avec la possibilité de l’évaluer.</p>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Steps