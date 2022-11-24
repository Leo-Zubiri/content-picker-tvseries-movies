
import { useContext } from "react"
import { ContenidoContext } from "../context/ContenidoProvider"
import { useRouter } from "next/router";

export const Generar = () => {

  const router = useRouter();

  const {modal,setModal,listaContenido,maxItems,
    setTextModal,setTitleModal,
    recommendations,setRecommendations} = useContext(ContenidoContext);

  const handleGenerar = async () => { 
    if(listaContenido.length == 0){
      setTitleModal("Advertencia");
      setTextModal(["Faltan seleccionar elementos"])
      setModal(true);

      return
    }

  

    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept':'application/json',
        'Content-Type': 'application/json',
        
      },
      body: JSON.stringify(listaContenido)
    }

    const url = "http://192.168.100.9:8081/contenido/get-recommendations"
    const res = await fetch(url,requestOptions);
    const data = await res.json()

    setRecommendations(data);
    //console.log(url)
    //console.log(res)
    router.push("recommendations")

  }

  return (
    <div className="mb-0">
    <button className="bg-cyan-900 p-3  border rounded-lg hover:bg-green-700 "
    onClick={handleGenerar}>
        Generar Recomendaciones
    </button>
    </div>
  )
}
