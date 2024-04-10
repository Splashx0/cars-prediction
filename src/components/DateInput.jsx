import { useContext } from 'react';
import { MyContext } from '../Context';
import 'react-datepicker/dist/react-datepicker.css';

function DateInput({ question }) {
  const { dateAnswers, setDateAnswers } = useContext(MyContext);

  const handleInput = (e) => {
    let copyDateAnswers = { ...dateAnswers }
    copyDateAnswers[question] = e.target.value;
    setDateAnswers(copyDateAnswers)
  }

  return (
    <div >
      <input
        type="date"
        defaultValue={(e) => e.target.value}
        onChange={handleInput}
        placeholder="Select a date"
        className='w-full h-[57px] border-[1px] rounded-[20px] p-2 bg-white cursor-pointer  border-[#2E2E2E] datepicker'
      />
    </div>
  );
}

export default DateInput;
