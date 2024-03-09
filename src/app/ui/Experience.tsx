
const Experience = () => {
  return (
    <section className="flex justify-center w-full py-12 md:py-24">
    <div className="container px-4 grid max-w-5xl items-center justify-center gap-4 text-center md:gap-10 md:px-6 lg:gap-16">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h2><div className="circlePosition w-[600px] h-[100px] bg-[#c56bb2] rounded-[100%] absolute z-[-1] translate-x-[35%] blur-[100px]"></div>
        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">
          I've worked at some great places.
        </p>
      </div>
      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold">Coordinador de Telecomunicaciones</h3>
          <p className="text-sm text-gray-500">Telviso</p>
          <p className="text-sm text-gray-500">Jun 2018 - Present </p>
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
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold">Full Stack Developer</h3>
          <p className="text-sm text-gray-500">Freelance</p>
          <p className="text-sm text-gray-500">Oct 2021 - Present</p>
          <p className="text-sm">
          Desarrollo y prototipo nuevas características para diversos proyectos como freelance. Utilizo investigación de usuarios para guiar las decisiones de desarrollo.
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Experience