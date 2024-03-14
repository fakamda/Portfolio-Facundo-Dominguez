
const Navbar = () => {
  return (
    <nav className="flex justify-around mt-4">
        <div className='font-bold text-xl'>
            Facudev<span className='text-pink-400'>.</span>
        </div>
        <ul className="flex flex-row justify-center items-center gap-8">
            <li className="font-semibold text-white hover:text-pink-400 rounded-md py-2 px-4">Experience</li>
            <li className="font-semibold text-white hover:text-pink-400 rounded-md py-2 px-4">Projects</li>
            <li className="font-semibold text-white hover:text-pink-400 rounded-md py-2 px-4">Contact Me</li>
        </ul>
    </nav>
  )
}

export default Navbar