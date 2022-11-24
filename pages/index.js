import Head from "next/head"
import { Header } from "../components/Header"
import { Results } from "../components/Results"
import { Modal } from "../components/Modal"

import { useContext } from "react"
import { ContenidoContext } from "../context/ContenidoProvider"

export default function Home({contenido}) {
  const {modal,setModal,textModal,titleModal} = useContext(ContenidoContext);
  return (
    <>
      <Head>
        <title>Recommendation System</title>
      </Head>

      <Header/>

      <Results contenido={contenido}/>

      {modal && <Modal text={textModal} title={titleModal}/>}
    </>
  )
}


export async function getServerSideProps(){

  const url = `${process.env.API_URL}/contenido/get-content`
  
  const response = await fetch(url);
  const result = await response.json();

  return {
      props:{ 
          contenido: result,
      }
  }
}

