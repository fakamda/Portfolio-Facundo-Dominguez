import Image from "next/image"
import fondo from '../../assets/JAPAN5.png'
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
        <Image className=" opacity-90" src={fondo} alt='fondo' />
        <div className="circlePosition w-[520px] h-[400px] bg-[#c56bb2] rounded-[100%] absolute z-[-1] top-[50%] left-[50%] translate-x-[9%] translate-y-[-50%] blur-[170px]"></div>
      </div>
    </div>
  )
}

export default Hero