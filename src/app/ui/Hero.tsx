import Image from "next/image"
import fondo from '../../assets/JAPAN4.jpg'
import About from "./About"


const Hero = () => {
  return (
    <div className="mt-6">
      <div className="flex flex-row justify-center items-center gap-6">
        <div className="flex flex-col">
          <h2 className="text-4xl font-bold">Hi<span className="text-pink-400">.</span> i'm <span className=" text-rose-300">Facundo Dominguez</span></h2>
          <h3 className="text-4xl">Full Stack Developer</h3>
          <About />
        </div>
        <Image className=" opacity-80" src={fondo} alt='fondo' />
      </div>
    </div>
  )
}

export default Hero