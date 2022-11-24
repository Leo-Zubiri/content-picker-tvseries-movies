import {createContext,useState} from 'react'

export const ContenidoContext = createContext();

export const ContenidoProvider = ({children}) => {

    const [listaContenido, setListaContenido] = useState([]);
    const [maxItems, setMaxItems] = useState(5);
    const [modal, setModal] = useState(false);
    const [titleModal, setTitleModal] = useState([""]);
    const [textModal, setTextModal] = useState([""]);
    const [recommendations, setRecommendations] = useState([]);
    

  return (
        <ContenidoContext.Provider value={{
          listaContenido,setListaContenido,maxItems,
          modal,setModal,
          titleModal,setTitleModal,
          textModal,setTextModal,
          recommendations,setRecommendations
        }}>
            {children}
        </ContenidoContext.Provider>
    )
}