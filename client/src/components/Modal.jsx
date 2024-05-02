import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { MdKeyboardDoubleArrowRight, MdKeyboardDoubleArrowLeft } from "react-icons/md";

export default function Modal() {
    const [open, setOpen] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);

    const cancelButtonRef = useRef(null);
    const details=[
        {
            question:"Marque",
            answer: "AUDI",
        },
        {
            question:"Modele",
            answer: "AUDI",
        },
        {
            question:"Version",
            answer: "BMW",
        },
        {
            question:"Etat general de la voiture",
            answer: "Bon (queleques usures mineures)",
        },
        {
            question:"Nombre de proprietaire",
            answer: "troisieme main",
        },
        {
            question:"Carburant",
            answer: "Essence",
        },
        {
            question:"Historique entretient",
            answer: "Entretien regulier",
        },
        {
            question:"Boite vitesse",
            answer: "Automatique",
        },
        {
            question:"Exterieur de vehicule",
            answer: "Excellent",
        },
    ];

    // Calculate the start and end index of the rows to be displayed
    const startIndex = currentPage * 6;
    const endIndex = Math.min(startIndex + 6, details.length);

    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 0));
    };

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-[#3b3b3b85] bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mt-3  sm:ml-2 sm:mt-0 w-full ">
                                            <div className=' flex'>
                                                <p className=' mx-auto font-Nunito font-semibold text-[20px] text-[#F7C213]'>Détails de l'estimation</p>
                                            </div>
                                            <div className="mt-2">
                                                <table className="table-auto w-full border-collapse ">
                                                    <tbody >
                                                        {details.slice(startIndex, endIndex).map((row, index) => (
                                                            <tr key={index} className='   border-b border-t border-gray-300 hover:bg-[#ffd54d33] cursor-pointer hover:border-white hover:rounded-xl ' >
                                                                <td className=" px-4 py-2 text-[#2E2E2E] text-[16px]  ">{row.question}</td>
                                                                <td className=" px-4 py-2 text-[#2E2E2E] text-[16px]  ">{row.answer}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                                <div className=' flex w-full justify-between mx-auto mt-3  '>
                                                    <MdKeyboardDoubleArrowLeft size={26} className='text-gray-700 cursor-pointer hover:text-[#F7C213]' onClick={handlePrevPage} />
                                                    <MdKeyboardDoubleArrowRight size={26} className='text-gray-700 cursor-pointer hover:text-[#F7C213]' onClick={handleNextPage} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
