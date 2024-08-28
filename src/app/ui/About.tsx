import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoIosDocument } from "react-icons/io";


const About = () => {
  return (
    <div>
      {/* corregir esto */}
        <div className="flex flex-col justify-center gap-3 xl:w-[600px] md:w-[450px] w-full sm:h-[400px] text-wrap mt-4">
            <h3 className="text-lg font-bold text-pink-400">About me:</h3>
            <p>
              I am a passionate graduate in computer technology with experience as an IT technician
               and currently a student of systems analysis. I have a strong interest in both development
                and infrastructure, appreciating how each discipline contributes to the broader technology landscape.
                 Outside the digital world, I enjoy challenging games and staying fit through physical training.
                  I am constantly looking for new opportunities to expand my skills and make meaningful contributions
                   in both development and infrastructure.
            </p>
            <div className="flex justify-start gap-4 mt-3">
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