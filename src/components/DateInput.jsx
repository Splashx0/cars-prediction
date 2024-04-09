import React, { useEffect, useState } from 'react';

import 'react-datepicker/dist/react-datepicker.css';

function DateInput({question}) {
    const [selectedDate, setSelectedDate] = useState('');
    const [answer,setAnswer]=useState({})

    const handleInput = (e)=>{
      
      setSelectedDate(e.target.value)
      
  }
  useEffect(()=>{
    setAnswer({[question] :selectedDate})
    
  },[selectedDate])  
  console.log(answer);
  

  return (
    <div >
        <input
      type="date"
      value={selectedDate}
      onChange={handleInput}
      placeholder="Select a date"
      className='w-full h-[57px] border-[1px] rounded-[20px] p-2 bg-white cursor-pointer  border-[#2E2E2E] datepicker'   
    />
    </div>
  );
}

export default DateInput;
