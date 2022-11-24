import Image from "next/image"
import { Generar } from "./Generar"


export const Header = () => {
  return (
    <header className="flex flex-col  md:flex-row  items-center justify-between p-3 shadow-2xl sticky top-0 z-10  bg-[#06202A]">
        
        <div className="flex group md:w-1/4">
            <Image 
            className="mr-3 object-contain cursor-pointer hover:animate-bounce"
            src="/img/react.png" 
            width={50} 
            height={50}
            alt="React JS"
            />

            <Image 
            className="mr-3 object-contain cursor-pointer hover:animate-bounce"
            src="/img/spring.png" 
            width={50} 
            height={50}
            alt="Spring Boot"
            />

            <Image 
            className="object-contain cursor-pointer hover:animate-bounce"
            src="/img/weka.png" 
            width={50} 
            height={50}
            alt="Weka"
            />
        </div>

        <div className="md:w-2/4">
            <h1 className="text-center p-4 text-xl">Selecciona 5 elementos de tu preferencia</h1>
        </div>

        <Generar />

    </header>
  )
}
