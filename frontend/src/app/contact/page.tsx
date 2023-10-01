"use client"

import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [msg, setMsg] = useState("")
  const onSubmit = (e: any) => {
    e.preventDefault()
    alert('Your Query has been sent')
    setName("");
    setEmail("");
    setMsg("");
  }

  return (
    <>

      <section className="text-gray-600 body-font relative ">
        <div className="container px-5 py-1 mx-auto" >
          <div className="flex flex-col text-center w-full mb-12" >
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">We would love to hear from you!</p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto" >
            <form className="flex flex-wrap -m-2" onSubmit={onSubmit}>
              <div className="p-2 w-1/2" >
                <div className="relative" >
                  <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                  <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>
              <div className="p-2 w-1/2" >
                <div className="relative" >
                  <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                  <input type="email" id="email" name="email"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full" >
                <div className="relative" >
                  <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                  <textarea id="message" name="message"
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}

                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" defaultValue={""} />
                </div>
              </div>
              <div className="p-2 w-full" >
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" type="submit">Button</button>
              </div>
            </form>
          </div>
        </div>
      </section>

    </>
  )
};

export default Contact;

