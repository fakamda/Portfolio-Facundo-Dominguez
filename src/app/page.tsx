import About from "./ui/About"
import Contact from "./ui/Contact"
import Experience from "./ui/Experience"
import Projects from "./ui/Projects"
import Navbar from "./ui/Navbar"
import Hero from "./ui/Hero"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Experience />
      <Projects/>
      <Contact />
    </>
  )
}
