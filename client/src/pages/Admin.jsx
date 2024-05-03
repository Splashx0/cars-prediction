import React from 'react'
import Accounts from '../components/Accounts'

function Admin() {
  return (
    <div>
      <div className={`mt-[70px] mb-[200px]  h-[1000px] bg-white max-w-[1240px] mx-auto rounded-[28px]  shadow-lg`}>
                <div className=' w-[700px] flex  ml-[70px] justify-between  '>
                    <p  className={` text-xl text-[#2E2E2E]  font-semibold  mt-[35px] cursor-pointer hover:text-[#F7C213] hover:underline  `}>Détails</p>
                    <p  className={` text-xl text-[#2E2E2E]  font-semibold  mt-[35px] cursor-pointer hover:text-[#F7C213] hover:underline  `}>Mon compte</p>
                    <p  className={` text-xl text-[#2E2E2E]  font-semibold  mt-[35px] cursor-pointer hover:text-[#F7C213] hover:underline  `}>Utilisateurs</p>
                    <p  className={` text-xl text-[#2E2E2E]  font-semibold  mt-[35px] cursor-pointer hover:text-[#F7C213] hover:underline  `}>Quizz</p>
                </div>

                {/*content */}
                <div>
                    <Accounts/>
                </div>
                
                
            </div>
    </div>
  )
}

export default Admin
