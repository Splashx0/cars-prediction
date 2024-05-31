import React from 'react'
import Lottie from 'lottie-react';
import LoadingCar from '../assets/animated icons/loading.json'

function Load() {
    return (
        <div className='flex fixed inset-0 z-50 bg-[#e7e3e344] backdrop-filter backdrop-blur-[5px] '>

            <Lottie
                className='m-auto h-[220px] w-[220px]'
                animationData={LoadingCar}
                loop
                autoplay
            />
        </div>
    )
}

export default Load