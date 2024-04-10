import { useContext } from 'react';
import { MyContext } from '../Context';

function QuizzInput({ question }) {

    const { inputAnswers, setInputAnswers } = useContext(MyContext);

    const handleInput = (e) => {
        let copyInputAnswers = { ...inputAnswers }
        copyInputAnswers[question] = e.target.value;
        setInputAnswers(copyInputAnswers)
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
