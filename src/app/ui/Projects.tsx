import Image from "next/image"
import proyecto1 from '../../assets/images/japan1.jpg'


const Projects = () => {
  return (
    <section id="projects" className="flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Proyectos</h2>
      <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">
        Some of the projects I've worked.
      </p>
      {/* todo: MAP DEL ARRAY DE LOS PROYECTOS */}
      {/* quizas hacerun slider con los proyectos */}
      {/* COMPLETAR CON LASS FOTOS SUBIDAS */}
      
      <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24 mb-10 xl:w-2/3 lg:w-full">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">

            <div className="w-1/2 p-1 md:p-2 transition duration-500 ease-in-out transform hover:scale-[102%]">
              <div className="relative group">
                <Image
                  src={proyecto1}
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                />
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-500 ease-in-out flex items-center justify-center">
                  <p className="text-white text-center text-lg">Texto que se mostrará al hacer hover</p>
                </div>
              </div>
            </div>

            <div className="w-1/2 p-1 md:p-2 transition duration-500 ease-in-out transform hover:scale-[102%]">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-500 ease-in-out flex items-center justify-center">
                <p className="text-white text-center text-lg">Texto que se mostrará al hacer hover</p>
              </div>
            </div>

            <div className="w-full p-1 md:p-2 transition duration-500 ease-in-out transform hover:scale-[102%]">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-500 ease-in-out flex items-center justify-center">
                <p className="text-white text-center text-lg">Texto que se mostrará al hacer hover</p>
              </div>
            </div>
          </div>
          
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2 transition duration-500 ease-in-out transform hover:scale-[102%]">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-500 ease-in-out flex items-center justify-center">
                <p className="text-white text-center text-lg">Texto que se mostrará al hacer hover</p>
              </div>
            </div>

            <div className="w-1/2 p-1 md:p-2 transition duration-500 ease-in-out transform hover:scale-[102%]">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-500 ease-in-out flex items-center justify-center">
                <p className="text-white text-center text-lg">Texto que se mostrará al hacer hover</p>
              </div>
            </div>

            <div className="w-1/2 p-1 md:p-2 transition duration-500 ease-in-out transform hover:scale-[102%]">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-500 ease-in-out flex items-center justify-center">
                <p className="text-white text-center text-lg">Texto que se mostrará al hacer hover</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>


  )
}

export default Projects

