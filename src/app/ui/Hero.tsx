import Image from "next/image"
import fondo from '../../assets/images/JAPAN5.png'
import About from "./About"


const Hero = () => {
  return (
    <div className="mt-6">
      <div className="flex flex-row justify-center items-center gap-6">
        <div className="flex flex-col">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Hola<span className="text-pink-400">.</span> Soy Facundo Dominguez</h2>
          <h3 className="text-4xl">Full Stack Developer</h3>
          {/* <div className="circlePosition w-full h-[200px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-[100%] absolute z-[-1] top-[50%] left-[0%] translate-x-[40%] translate-y-[-200%] blur-[100px]"></div> */}
          <div className="circlePosition w-[600px] h-[200px] bg-gradient-to-r from-orange-300 via-purple-400 to-pink-500 rounded-[100%] absolute z-[-1] blur-[140px]"></div>
          <About />
        </div>
        <Image className=" opacity-90" src={fondo} alt='fondo' />
      </div>
    </div>
  )
}

export default Hero