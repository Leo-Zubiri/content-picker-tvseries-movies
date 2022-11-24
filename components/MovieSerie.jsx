import { useState,useContext } from "react";
import Image from "next/image";

import {ContenidoContext} from '../context/ContenidoProvider'


export const MovieSerie = ({media}) => {

    const [isSelected, setIsSelected] = useState(false);

    const {listaContenido, setListaContenido,maxItems,
    setModal,setTitleModal,setTextModal} = useContext(ContenidoContext);

    const {numInstancia,contenido} = media;

    const {image_url,title} = contenido;

    const handleSelection = () => { 

      if(isSelected){
        setListaContenido(listaContenido.filter(elm => elm !== media))
        setIsSelected(false)
        return
      }

      if(listaContenido.length == maxItems) {
        setTitleModal("Advertencia");
        setTextModal(["   ¡Ya se han seleccionado el total de elementos!"]);
        setModal(true);
        return
      }

      setListaContenido([...listaContenido,media])
      setIsSelected(true);
      
    }

    const handleInfo = () => { 
      setTitleModal(title);
      setTextModal(Object.values(contenido));
      setModal(true);
    }

  return (
    <div className="p-3 relative ">
       
        <Image 
        className={`object-fill rounded-lg border h-full ${isSelected && "border-lime-500 border-4 scale-105 "}` }
        src={image_url} 
        width={200} 
        height={300} 
        alt={title}
        onClick={handleSelection}/>

        <button className="top-5 right-5 absolute bg-cyan-900 p-1 rounded 
        opacity-80 z-7 hover:bg-cyan-800"
        onClick={handleInfo}
        >
          +info
        </button>
        
    </div>
  )
}
