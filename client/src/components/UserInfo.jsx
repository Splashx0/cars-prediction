import { useEffect, useState, useContext } from 'react'

import { MyContext } from '../Context';
function UserInfo() {
    const { user } = useContext(MyContext);



    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('user', JSON.stringify(user));
        // Here you can update your `infos` array or make an API call to update the user information
    }

    return (
        <div className='   w-full  mx-auto  mt-[40px]  ' >
            {/**header */}
            <p className=' ml-[40px]  text-[20px]'>Mes informations</p>
            {/*separator */}
            <div className=" ml-7  w-[340px] my-2 ">
                <div className=" h-px bg-[#bebebe]"></div>
            </div>
            {/**info fields */}
            <form onSubmit={handleSubmit}>
                <div className='grid md:grid-cols-2  md:gap-20 w-[80%]  ml-[40px] mt-6'>
                    <div>
                        <div className=' flex flex-col '>
                            <label className=' font-semibold text-lg text-[#2E2E2E] ml-2' >Nom complet</label>
                            <input className=' mt-3 mb-3 w-[100%] h-[52px] border-[1px] rounded-[16px] border-[#2E2E2E] font-Nunito p-2 bg-[#f3f3f3]' type="text" placeholder='Entrer votre nom complet' name='nom' value={user.name} />
                            <label className=' font-semibold text-lg text-[#2E2E2E] ml-2' >E-mail</label>
                            <input className=' mt-3 mb-3 w-[100%] h-[52px] border-[1px] rounded-[16px] border-[#2E2E2E] font-Nunito p-2 bg-[#f3f3f3]' type="Email" placeholder='Entrer votre Email' name='email' value={user.email} />
                            <label className=' font-semibold text-lg text-[#2E2E2E] ml-2' >Numéro de téléphone</label>
                            <input className=' mt-3 mb-3 w-[100%] h-[52px] border-[1px] rounded-[16px] border-[#2E2E2E] font-Nunito p-2 bg-[#f3f3f3]' type="text" placeholder='Entrer votre numéro de téléphone' name='numero' value={"12345678"} />
                        </div>
                    </div >
                    <div className=' flex flex-col'>
                        <label className=' font-semibold text-lg text-[#2E2E2E] ml-2' >Governorat</label>
                        <input className=' mt-3 mb-3 w-[100%] h-[52px] border-[1px] rounded-[16px] border-[#2E2E2E] font-Nunito p-2 bg-[#f3f3f3]' type="text" placeholder='Entrer votre governorat' name='governorat' value={"Sousse"} />
                        <label className=' font-semibold text-lg text-[#2E2E2E] ml-2' >Ville</label>
                        <input className=' mt-3 mb-3 w-[100%] h-[52px] border-[1px] rounded-[16px] border-[#2E2E2E] font-Nunito p-2 bg-[#f3f3f3]' type="text" placeholder='Entrer votre ville' name='ville' value={"Sahloul"} />
                        <label className=' font-semibold text-lg text-[#2E2E2E] ml-2' >Adresse</label>
                        <input className=' mt-3 mb-3 w-[100%] h-[52px] border-[1px] rounded-[16px] border-[#2E2E2E] font-Nunito p-2 bg-[#f3f3f3]' type="text" placeholder='Entrer votre adresse' name='adresse' value={"Sahloul"} />
                    </div>
                </div>
                <div className='flex ml-[40px] md:ml-0 justify-center md:justify-start w-[80%]'>
                    <button className='  mt-[20px] md:ml-[50px] text-[17px]  flex justify-center border-2 border-[#F7C213] bg-[#F7C213] w-[180px] rounded-[10px] font-medium   py-[9px] text-[#2E2E2E] hover:bg-[#F5F5F5] hover:border-2 hover:border-[#2E2E2E]' type='submit'>Sauvegarder</button>
                </div>
            </form>





        </div >

    )
}

export default UserInfo
