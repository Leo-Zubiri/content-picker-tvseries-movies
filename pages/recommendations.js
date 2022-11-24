import React from 'react'
import { useEffect } from 'react';
import { ContenidoContext } from '../context/ContenidoProvider'
import { useContext } from 'react'
import { Results } from '../components/Results';
import {Modal} from '../components/Modal'
import { useRouter } from 'next/router';

const recommendations = () => {
    const router = useRouter();
    const {recommendations,modal} = useContext(ContenidoContext);

    useEffect(() => {  
        if(recommendations.length==0) router.push("/")
    },[])


    console.log(recommendations)
  return (
    <div>
        <p className='uppercase text-2xl text-center p-5'>
            Recomendados para ti
        </p>
        <Results contenido={recommendations} />
        {modal && <Modal/>}
    </div>
  )
}

export default recommendations