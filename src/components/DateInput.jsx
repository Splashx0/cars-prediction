import React, { useState } from 'react';

import 'react-datepicker/dist/react-datepicker.css';

function DateInput() {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (event) => {
      setSelectedDate(event.target.value);
    };

  return (
    <div >
        <input
      type="date"
      value={selectedDate}
      onChange={handleDateChange}
      placeholder="Select a date"
      className='w-full h-[57px] border-[1px] rounded-[20px] p-2 bg-white cursor-pointer  border-[#2E2E2E] datepicker' 
    />
    </div>
  );
}

export default DateInput;
