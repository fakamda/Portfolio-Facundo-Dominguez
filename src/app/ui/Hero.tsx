import Image from "next/image"
import fondo from '../../assets/JAPAN5.png'
import About from "./About"


const Hero = () => {
  return (
    <div className="mt-6">
      <div className="flex flex-row justify-center items-center gap-6">
        <div className="flex flex-col">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Hola<span className="text-pink-400">.</span> Soy Facundo Dominguez</h2>
          <h3 className="text-4xl">Full Stack Developer</h3>
          <div className="circlePosition w-[600px] h-[200px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-[100%] absolute z-[-1] top-[50%] left-[0%] translate-x-[40%] translate-y-[-200%] blur-[100px]"></div>
          <About />
        </div>
        <Image className=" opacity-90" src={fondo} alt='fondo' />
        {/* <div className="circlePosition w-[520px] h-[400px] bg-[#c56bb2] rounded-[100%] absolute z-[-1] top-[50%] left-[50%] translate-x-[9%] translate-y-[-50%] blur-[170px]"></div> */}
      </div>
    </div>
  )
}

export default Hero