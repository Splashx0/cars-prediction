import React, { useState, useRef, useEffect } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";

function Dropdownmodele() {
    const [isOpen, setIsOpen] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [dropdownTop, setDropdownTop] = useState(null);
    const inputRef = useRef(null);
    const dropdownRef = useRef(null);
    const options = ['ALFA ROMEO', 'AUDI', 'BMW', 'CHEVROLET'];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };

    const handleInputFocus = () => {
        setIsFocused(true);
    };

    const handleInputBlur = () => {
        setIsFocused(false);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setSearchText(option);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleWindowClick = (e) => {
            if (!dropdownRef.current?.contains(e.target) && !inputRef.current?.contains(e.target)) {
                setIsOpen(false);
            }
        };

        window.addEventListener('click', handleWindowClick);

        return () => {
            window.removeEventListener('click', handleWindowClick);
        };
    }, []);

    useEffect(() => {
        if (isOpen && inputRef.current && dropdownRef.current) {
            const inputRect = inputRef.current.getBoundingClientRect();
            const dropdownHeight = dropdownRef.current.offsetHeight;
            const spaceBelowInput = window.innerHeight - inputRect.bottom;

            if (spaceBelowInput < dropdownHeight) {
                setDropdownTop(`-${dropdownHeight}px`);
            } else {
                setDropdownTop('100%');
            }
        }
    }, [isOpen]);

    const filteredOptions = options.filter(option =>
        option.toLowerCase().includes(searchText.toLowerCase())
    );
    return (
        <div className="relative">
            <div className="relative">
                <input
                    type="text"
                    placeholder="Choisir votre modele"
                    ref={inputRef}
                    className={`border ${isFocused ? 'border-[#F7C213] ' : 'border-[#2E2E2E]'} w-[400px] sm:w-[500px] border-[1px] h-[57px] rounded-[20px] p-2 focus:outline-none`}
                    onClick={toggleDropdown}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    value={searchText}
                    onChange={handleSearchChange}
                />
                <div className="absolute inset-y-0 left-[370px] sm:left-[470px] flex items-center">
                    <IoMdArrowDropdown className='cursor-pointer' color={isFocused ? '#F7C213' : '#2E2E2E'} />
                </div>
            </div>

            {isOpen && (
                <div
                    ref={dropdownRef}
                    className="absolute top-auto left-0 right-0 bg-white shadow-lg rounded-lg z-20"
                    style={{ top: dropdownTop }}
                >
                    {filteredOptions.map((option, index) => (
                        <div
                            key={index}
                            className="cursor-pointer py-2 px-4 hover:bg-[#f5f5f5fd]"
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
export default Dropdownmodele
