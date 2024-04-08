import React, { useState } from 'react';

function QuizzInput() {
    const [isFocused, setIsFocused] = useState(false);

    const handleInputFocus = () => {
        setIsFocused(true);
    };

    const handleInputBlur = () => {
        setIsFocused(false);      
    };

    return (
        <div>
            <input 
                className='w-full h-[57px] border-[1px] rounded-[20px] p-2 bg-white   border-[#2E2E2E] ' 
                type="text"   
                placeholder='Nombre de Km' 
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
            />
        </div>
    );
}

export default QuizzInput;
