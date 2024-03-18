'use client'

import Link from "next/link"
import { useState } from "react"
import { MdMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [isClick, setIsClick] = useState(false)
  const toggleNavbar = (): void => {
    setIsClick(!isClick)
  }

  return (
    <>
      <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href={'/'} className="text-white">Facudev<span className='text-pink-400'>.</span></Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 items-center space-x-10">
                {/* <Link href={'/'} className="text-white hover:text-pink-400">Home</Link> */}
                <Link href={'#experience'} className="text-white hover:text-pink-400">Experience</Link>
                <Link href={'#projects'} className="text-white hover:text-pink-400">Projects</Link>
                <Link href={'#tools'} className="text-white hover:text-pink-400">Techs</Link>
                <Link href={'#contact'} className="text-white hover:text-pink-400">Contact</Link>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button className="inline-flex items-center text-xl justify-center p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-1 rocus:ring-inset focus:ring-white" onClick={toggleNavbar}>
                {isClick ? (
                  <MdClose />
                ) : (
                  <MdMenu />
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center gap-2">
            <Link href={'/'} className="text-white hover:text-pink-400">Experience</Link>
            <Link href={'/'} className="text-white hover:text-pink-400">Projects</Link>
            <Link href={'/'} className="text-white hover:text-pink-400">Techs</Link>
            <Link href={'/'} className="text-white hover:text-pink-400">Contact</Link>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar