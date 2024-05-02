<<<<<<< HEAD:src/pages/Profile.jsx
import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import User_info from '../components/User_info'
import User_Estim from '../components/User_Estim';

function Profile() {
    const [profileselect,setprofileselect] =useState(true);
    const [estimselect,setestimselect] = useState(false);
    const handleProfile=()=>{
        setprofileselect(true);
        setestimselect(false);
    }
    const handleEstim=()=>{
        setprofileselect(false);
        setestimselect(true);
    }
  return (
    <div>
            <Navbar />
            <div className= {`mt-[70px] mb-[200px] ${profileselect ? 'pb-[30px]':'pb-[50px]'}   bg-white max-w-[1240px] mx-auto rounded-[28px]  shadow-lg`}>
                <div className=' w-[350px] flex  ml-[70px] justify-between  '>
                    <p onClick={handleProfile} className={ ` text-xl text-[#2E2E2E]  font-semibold  mt-[35px] cursor-pointer hover:text-[#F7C213] hover:underline  ${profileselect ?'text-[#F7C213] underline':''}`}>Mon profil</p>
                    <p onClick={handleEstim} className={ ` text-xl text-[#2E2E2E]  font-semibold  mt-[35px] cursor-pointer hover:text-[#F7C213] hover:underline  ${estimselect ?'text-[#F7C213] underline':''}`}>Mes Estimations</p>
                </div>
                
                {/*con */}
                {profileselect ? <User_info/> : <User_Estim/> }
            </div>
            <Footer />
        </div>
  )
=======
import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import UserInfo from '../components/UserInfo'
import UserEstimation from '../components/UserEstimation';

function Profile() {
    const [profileselect, setprofileselect] = useState(true);
    const [estimselect, setestimselect] = useState(false);
    const handleProfile = () => {
        setprofileselect(true);
        setestimselect(false);
    }
    const handleEstim = () => {
        setprofileselect(false);
        setestimselect(true);
    }
    return (
        <div>
            <Navbar />
            <div className={`mt-[70px] mb-[200px] ${profileselect ? 'pb-[30px]' : 'pb-[50px]'}   bg-white max-w-[1240px] mx-auto rounded-[28px]  shadow-lg`}>
                <div className=' w-[350px] flex  ml-[70px] justify-between  '>
                    <p onClick={handleProfile} className={` text-xl text-[#2E2E2E]  font-semibold  mt-[35px] cursor-pointer hover:text-[#F7C213] hover:underline  ${profileselect ? 'text-[#F7C213] underline' : ''}`}>Mon profil</p>
                    <p onClick={handleEstim} className={` text-xl text-[#2E2E2E]  font-semibold  mt-[35px] cursor-pointer hover:text-[#F7C213] hover:underline  ${estimselect ? 'text-[#F7C213] underline' : ''}`}>Mes Estimations</p>
                </div>

                {/*con */}
                {profileselect ? <UserInfo /> : <UserEstimation />}
            </div>
            <Footer />
        </div>
    )
>>>>>>> 8e9c108ac78b342796a423ef8cb45f3a3cd4e720:client/src/pages/Profile.jsx
}

export default Profile
