import React from 'react'
import AdminEstimation from '../components/AdminEstimation'
import Navbar from '../components/Navbar'

function UserQuizzes() {
  return (
    <div>
      <Navbar />
      {/**this is the page of the quizzes of each user */}
      <div className={`mt-[70px] mb-[200px]   bg-white max-w-[1240px] mx-auto rounded-[28px]  shadow-lg pb-8`}>
        <div className=' pt-[40px] mb-[40px]'>
          <p className=' text-center font-Nunito text-2xl font-bold '>Splash</p>
          <p className=' text-center font-Nunito text-lg text-gray-500 '>Splash@gmail.com</p>
        </div>
        {/*content */}
        <div>
          <AdminEstimation />
        </div>
      </div>
    </div>
  )
}

export default UserQuizzes