'use client'

import { useState } from "react"
import { MdContentCopy } from "react-icons/md";

const Contact = () => {
  const textToCopy = 'facundo.dominguez.dev@gmail.com'
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

  async function handleSubmit(event: any) {
    event.preventDefault()

    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      message: String(event.target.message.value)
    }
    const res = await fetch('/api/contact', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
    if(res.ok){
      console.log('Message sent successfully')
      
      event.target.name.value = ''
      event.target.email.value = ''
      event.target.message.value = ''
    }
    if(!res.ok) {
      console.log("error sending message")
    }
  }

  return (
    <section id="contact" className="flex flex-col justify-center items-center gap-5 m-20">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Me</h2>
      <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">
        Leave your message and I will contact you back.
      </p>
      <div className="flex flex-col justify-center items-center gap-3 isolate aspect-video sm:w-[460px] w-screen min-h-[550px] rounded-xl bg-gray-950/60 shadow-lg ring-1 ring-black/5">
        <h3 className="text-gray-500 text-m">Send an Email to:</h3>
        <div className="font-semibold text-gray-400 flex gap-2 text-m">{textToCopy}<span className="hover:text-gray-300 " onClick={handleCopy}><MdContentCopy /></span></div>
        {copySuccess && <span style={{ color: 'green' }}>Copied to clipboard!</span>}
        <h4 className="mb-6 text-gray-500 text-m">or leave your message...</h4>

        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center w-[400px]">
          <label htmlFor="name" className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">Your name</label>
          <input type="text" name="name" id="name" required minLength={3} maxLength={150} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" />
          <label htmlFor="email" className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">Email</label>
          <input type="email" name="email" id="email" autoComplete="off" required minLength={5} maxLength={150} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" />
          <label htmlFor="message" className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed xl:text-base/relaxed dark:text-gray-400">Message</label>
          <textarea name="message" id="message" required minLength={10} maxLength={600} rows={4} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light resize-none py-8"></textarea>
          <button type="submit" className="bg-pink-500 px-10 py-3 text-center rounded-xl mt-5">Send</button>
        </form>
      </div>

      <div className="circlePosition sm:w-[900px] md:w-[400px] xl:w-[700px] w-[300px] h-[200px] bg-gradient-to-r from-orange-300 via-purple-400 to-pink-500 rounded-[100%] sm:translate-x-[35%] translate-y-[-100%] absolute z-[-1] blur-[140px] md:blur-[200px]"></div>

    </section>
  )
}

export default Contact