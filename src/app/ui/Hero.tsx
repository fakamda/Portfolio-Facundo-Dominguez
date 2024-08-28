import Image from "next/image"
import fondo from '../../assets/images/JAPAN5.png'
import About from "./About"


const Hero = () => {
  return (
    <div className="mt-6">
      <div className="flex sm:flex-row flex-col justify-center items-center gap-6 md:justify-between lg:justify-center md:mx-10 mx-5">
        <div className="flex flex-col">
        <h2 className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-6xl">Hi<span className="text-pink-400">.</span></h2>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mt-1">I'm Facundo Dominguez</h2>
          <h3 className="text-2xl mt-2">Full Stack Developer - Infraestructure Issuer</h3>
          {/* <div className="circlePosition w-full h-[200px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-[100%] absolute z-[-1] top-[50%] left-[0%] translate-x-[40%] translate-y-[-200%] blur-[100px]"></div> */}
          <div className="circlePosition sm:w-[600px] w-[300px] h-[200px] bg-gradient-to-r from-orange-300 via-purple-400 to-pink-500 rounded-[100%] absolute z-[-1] blur-[140px]"></div>
          <About />
        </div>
        <Image className=" xl:w-[700px] md:w-[450px] opacity-90" src={fondo} alt='fondo' />
      </div>
    </div>
  )
}

export default Hero