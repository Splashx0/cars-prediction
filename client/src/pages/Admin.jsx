import React, { useState, useContext } from 'react'
import Accounts from '../components/Accounts'
import AdminQuizz from '../components/AdminQuizz'
import AdminInfo from '../components/AdminInfo'
import { MyContext } from '../Context'
import Navbar from '../components/Navbar'
function Admin() {
    const { user } = useContext(MyContext);

    const [monCompte, setmonCompte] = useState(true);
    const [Utilisateurs, setUtilisateurs] = useState(false);
    const [Quizz, setQuizz] = useState(false);
    const handlecompte = () => {
        setmonCompte(true);
        setUtilisateurs(false);
        setQuizz(false);

    }

    const handleutilisateur = () => {
        setmonCompte(false);
        setUtilisateurs(true);
        setQuizz(false);

    }
    const handlequizz = () => {
        setmonCompte(false);
        setUtilisateurs(false);
        setQuizz(true);

    }
    return (
        <div>
            <Navbar />
            <div className={`mt-[70px] mb-[200px]   bg-white max-w-[1240px] mx-auto rounded-[28px]  shadow-lg pb-8`}>
                <div className='    mx-auto w-[35%]  flex justify-between items-center  '>
                    <p onClick={handlecompte} className={` text-xl text-[#2E2E2E]  font-semibold  mt-[35px] cursor-pointer hover:text-[#F7C213] hover:underline  `}>Mon compte</p>
                    <p onClick={handleutilisateur} className={` text-xl text-[#2E2E2E]  font-semibold  mt-[35px] cursor-pointer hover:text-[#F7C213] hover:underline  `}>Utilisateurs</p>
                    <p onClick={handlequizz} className={` text-xl text-[#2E2E2E]  font-semibold  mt-[35px] cursor-pointer hover:text-[#F7C213] hover:underline  `}>Quizz</p>
                </div>

                {/*content */}
                {monCompte && <AdminInfo />}
                {Utilisateurs && <Accounts />}
                {Quizz && <AdminQuizz />}

            </div>
        </div>
    )
}

export default Admin