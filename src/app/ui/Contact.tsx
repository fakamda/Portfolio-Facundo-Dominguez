'use client'

import { useState } from "react"
import { MdContentCopy } from "react-icons/md";

const Contact = () => {
  const textToCopy = 'facundodm2010@hotmail.com'
  const [copySuccess, setCopySuccess] = useState(false)
  
  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy)
    .then(() => {
      setCopySuccess(true)
      setTimeout(() => {
        setCopySuccess(false)
      }, 1000);
    })
    .catch((err) => {
      console.error('Failed to copy:', err);
    })
  }

  return (
    <div className="flex flex-col justify-center items-center gap-5 m-20">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Me</h2>
      <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">
        Leave your message and I will contact you back.
      </p>
      <div className="flex flex-col justify-center items-center gap-3 isolate aspect-video sm:w-[460px] min-h-[510px] rounded-xl bg-gray-950/60 shadow-lg ring-1 ring-black/5">
      <h3 className="text-gray-500 text-m">Send an Email to:</h3>
      <div className="font-semibold text-gray-400 flex gap-2 text-m">{textToCopy}<span className="hover:text-gray-300 " onClick={handleCopy}><MdContentCopy /></span></div>
      {copySuccess && <span style={{color: 'green'}}>Copied to clipboard!</span>}
      <h4 className="mb-6 text-gray-500 text-m">or leave your message...</h4>
      <form action="" className="flex flex-col justify-center items-center w-[400px]">
        <label htmlFor="name" className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">Your name</label>
        <input type="text" name="name" id="" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" />
        <label htmlFor="email" className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">Email</label>
        <input type="email" name="" id="" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"/>
        <label htmlFor="message" className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">Message</label>
        <textarea name="message" id="" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light resize-none py-8"></textarea>
      </form>
      <button className="bg-pink-400 px-10 py-3 text-center rounded-xl mt-5">Send</button>
      </div>
      
      <div className="circlePosition sm:w-[900px] w-[300px] h-[200px] bg-gradient-to-r from-orange-300 via-purple-400 to-pink-500 rounded-[100%] sm:translate-x-[45%] absolute z-[-1] blur-[200px]"></div>

    </div>
  )
}

export default Contact