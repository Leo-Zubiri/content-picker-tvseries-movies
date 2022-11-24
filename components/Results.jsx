import { useEffect } from "react"
import { MovieSerie } from "./MovieSerie"

export const Results = ({contenido}) => {


  return (
    <div className="container z-0">
      <div className=" flex flex-wrap  justify-center w-screen">
        {
            contenido.map(media => (<MovieSerie media={media} key={media.contenido._id} />))
        }
      </div>
    </div>

  )
}

