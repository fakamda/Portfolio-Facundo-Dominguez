import Image from "next/image"
import logoTelviso from '../../assets/images/telviso_logo.jpg'
import logoFullstack from '../../assets/images/full-stack-logo-img.webp'

const Experience = () => {
  return (
    <section id="experience" className="flex justify-center w-full py-12 md:py-24">
      <div className="container px-4 grid max-w-5xl items-center justify-center gap-4 text-center md:gap-10 md:px-6 lg:gap-16">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h2>
          <div className="circlePosition sm:w-[600px] w-[300px] h-[100px] bg-[#c56bb2] rounded-[100%] absolute z-[-1] sm:translate-x-[35%] blur-[100px]"></div>
          <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">
            I've worked at some great places.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">Coordinador de Telecomunicaciones</h3>
            <div className="flex flex-col justify-center items-center gap-1">
              <Image src={logoTelviso} alt="logo telviso" className="w-16 h-16 rounded-full" />
              <p className="text-md text-gray-400">Telviso</p>
            </div>
            <p className="text-sm text-gray-400">Jun 2018 - Present </p>
            <p className="text-sm">
              Coordinar y proveer soporte a los Técnicos
              de Telecomunicaciones.
              Configuración de Terminales ONT en OLT,
              Routers, Switches, Repetidores WI-FI
              Tecnologías Cisco, Huawei, ZTE, TP-Link.
              Gestión Administrativa de ordenes de
              trabajo, Troubleshooting, Certificación.
              Seguimiento en Sistema de Tickets.
              Supervisión en Campo.

            </p>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">Full Stack Developer</h3>
            <div className="flex flex-col justify-center items-center gap-1">
              <Image src={logoFullstack} alt="logo fullstack" className="w-16 h-16 rounded-full" />
              <p className="text-md text-gray-400">Freelance</p>
            </div>
            <p className="text-sm text-gray-400">Oct 2022 - Present</p>
            <p className="text-sm">
              Desarrollo y prototipo nuevas características para diversos proyectos como freelance. Utilizo investigación de usuarios para guiar las decisiones de desarrollo.
            </p>
          </div>
          {/* TODO: CERTIFICADOS Y ESTUDIOS. */}
        </div>
      </div>
    </section>
  )
}

export default Experience