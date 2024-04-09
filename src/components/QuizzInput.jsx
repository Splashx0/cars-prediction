import React, { useState } from 'react';

function QuizzInput({question}) {
    
    
        const [answer,setAnswer]=useState({})
            const handleInput = (e)=>{
            setAnswer({[question] :e.target.value})
            console.log(answer)
        }
    return (
        <div>
            <input 
                className='w-full h-[57px] border-[1px] rounded-[20px] p-2 bg-white   border-[#2E2E2E] ' 
                type="text"   
                placeholder='Nombre de Km'
                onChange={handleInput}
            />
        </div>
    );
}

export default QuizzInput;
