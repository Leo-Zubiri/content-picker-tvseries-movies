import React, { useContext } from 'react'
import { ContenidoContext } from '../context/ContenidoProvider'

export const Modal = ({text,title}) => {

  const {modal,setModal,textModal,titleModal} = useContext(ContenidoContext);

  const handleClick = () => {  
    setModal(false);
  }

  return (
    <div className='rounded shadow-md h-screen w-full fixed z-20
    left-0 top-0 flex bg-black bg-opacity-90 justify-center items-center'>


       <div className="bg-[#06202A] md:w-3/5 w-4/5 rounded container">
        <div className="border-b px-4 py-2 border-gray-500">
            <h3 className='w-100 text-center uppercase text-sm font-bold '>{titleModal}</h3>
        </div>

        <div className="overflow-auto items-center flex flex-col justify-center p-3">

          
          {
            textModal.map(elm => <p className='' key={elm}>{elm}</p>)
          }

        </div>

        <div className="flex justify-end items-center w-100 p-3">
            <button onClick={handleClick} className='bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-xs'>
                OK
            </button>
        </div>

       </div>

    </div>
  )
}
