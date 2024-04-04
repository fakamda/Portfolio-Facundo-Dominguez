import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";


const About = () => {
  return (
    <div>
      {/* corregir esto */}
        <div className="flex flex-col justify-center gap-3 xl:w-[600px] md:w-[450px] w-full sm:h-[400px] text-wrap mt-4">
            <h3 className="text-lg font-bold text-pink-400">Sobre mi:</h3>
            <p>Soy un apasionado graduado en tecnología informática con experiencia como técnico en informática y actualmente estudiante de análisis en sistemas. Mi fascinación por el desarrollo fullstack se combina con un profundo interés en las telecomunicaciones, explorando cómo la tecnología conecta y transforma nuestro mundo. Fuera del mundo digital, disfruto sumergirme en juegos desafiantes y mantenerme en forma a través del entrenamiento físico. Busco constantemente nuevas oportunidades para expandir mis habilidades y contribuir al emocionante campo de la tecnología. </p>
            {/* cargar cv y redes sociales */}
            <div className="flex justify-start gap-4">
              <Link href={"https://www.linkedin.com/in/facundo-dominguez-6557bb24b/"} target="_blank" className="flex justify-center items-center py-2 px-4 border-2 rounded-md gap-2">
                LinkedIn
                <FaLinkedin /> 
              </Link>
              <Link href={"https://github.com/fakamda"} target="_blank" className="flex justify-center items-center py-2 px-4 border-2 rounded-md gap-2">
                GitHub
                <FaGithub />
              </Link>
              <Link href={"https://drive.google.com/file/d/1NSSCF6Zyq51DgK6i07e6SqHsFxO9OUTu/view?usp=sharing"} target="_blank" className="py-2 px-4 border-2 rounded-md flex justify-center items-center gap-2">
              Resume
              <IoIosDocument />
            </Link>
            </div>

        </div>
    </div>
  )
}

export default About