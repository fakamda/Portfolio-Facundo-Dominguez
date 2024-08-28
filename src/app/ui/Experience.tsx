import Image from "next/image"
import logoTelviso from '../../assets/images/telviso_logo.jpg'
import logoFullstack from '../../assets/images/full-stack-logo-img.webp'
import frontEndReactImage from '../../assets/images/Frontend React.png'
import javascriptImage from '../../assets/images/Javascript.png'
import desarolloWebImage from '../../assets/images/Desarrollo Web.png'
import PrexLogo from '../../assets/images/Prexlogo.png'
import backendImage from '../../assets/images/Backend.png'
import fullstackImage from '../../assets/images/Full Stack.png'

const Experience = () => {
  return (
    // TESTING EN OTROS DISPOSITIVOS
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
            <h3 className="text-xl font-bold">Telecom. Technical Support Coordinator</h3>
            <div className="flex flex-col justify-center items-center gap-1">
              <Image src={logoTelviso} alt="logo telviso" className="w-16 h-16 rounded-full" />
              <p className="text-md text-gray-400">Telviso</p>
            </div>
            <p className="text-sm text-gray-400">Jun 2018 - Jun 2024 </p>
            <p className="text-sm">
            Experienced telecommunications professional with a strong background in team leadership,
             managing over 15 specialized fiber optics crews, including materials management,
              task coordination, and work certification. Proficient in utilizing ticketing systems
               for accurate and timely work order tracking. Provided remote technical support
                for configuring routers, switches, APs, and OLTs from Huawei and ZTE.
                 Skilled in Cisco, Huawei, ZTE, TP-Link, and Ubiquiti technologies,
                  as well as ADSL/VDSL exchanges, network configuration, and system administration.
                   Expertise in Zabbix, Grafana, Nagios, Docker, Kubernetes, Ubuntu Server, Bash scripting, and SQL.
            </p>
          </div>
          {/* <div className="flex flex-col gap-2">
            <h3 className="text-xl font-bold">Full Stack Developer</h3>
            <div className="flex flex-col justify-center items-center gap-1">
              <Image src={logoFullstack} alt="logo fullstack" className="w-16 h-16 rounded-full" />
              <p className="text-md text-gray-400">Freelance</p>
            </div>
            <p className="text-sm text-gray-400">Oct 2022 - Present</p>
            <p className="text-sm">
              Desarrollo y prototipo nuevas características para diversos proyectos como freelance. Utilizo investigación de usuarios para guiar las decisiones de desarrollo.
            </p>
          </div> */}
          <div className="flex flex-col items gap-2">
            <h3 className="text-xl font-bold">NOC Operator</h3>
            <div className="flex flex-col justify-center items-center gap-1">
              <Image src={PrexLogo} alt="logo fullstack" className="w-16 h-16 object-cover rounded-full" />
              <p className="text-md text-gray-400">Prex</p>
            </div>
            <p className="text-sm text-gray-400">Jun 2024 - Present</p>
            <p className="text-sm">
            Experienced NOC operator with a solid foundation in AWS,
             Docker, Bash scripting, SSH, and virtualization. 
             Proficient in SQL, Zabbix, and EKS,
              with hands-on experience in Cluster-Autoscaler and AWS Ingress.
               Possesses advanced knowledge in Kubernetes,
                Ubuntu Server, Grafana, Datadog, CloudWatch, Opsview, and Jira Service Management.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-bold">Education</h3>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <div className="flex flex-col gap-2">
            <h4 className="text-lg font-bold">Tecnico en Informatica Personal y Profesional</h4>
            <p className="text-sm text-gray-400">E.E.S.T. N#3 Escobar</p>
            <p className="text-sm text-gray-400">Feb 2013 - Nov 2017</p>
            
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-lg font-bold">Full Stack Developer</h4>
            <p className="text-sm text-gray-400">Coderhouse</p>
            <p className="text-sm text-gray-400">Oct 2022 - Oct 2023</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:flex md:flex-row justify-between items-center gap-3">
          <div>
            <Image src={javascriptImage} alt="Front End React Certificate" className="w-72"></Image>
          </div>
          <div>
            <Image src={frontEndReactImage} alt="Front End React Certificate" className="w-72"></Image>
          </div>
          <div>
            <Image src={backendImage} alt="Front End React Certificate" className="w-72"></Image>
          </div>
          <div>
            <Image src={fullstackImage} alt="Front End React Certificate" className="w-72"></Image>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience