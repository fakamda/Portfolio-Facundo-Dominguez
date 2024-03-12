import Contact from "./ui/Contact"
import Experience from "./ui/Experience"
import Projects from "./ui/Projects"
import Navbar from "./ui/Navbar"
import Hero from "./ui/Hero"
import Tools from "./ui/Tools"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Projects/>
      <Tools />
      <Contact />
    </>
  )
}
