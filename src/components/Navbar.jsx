import React from 'react'
import github from '../assets/github.png'

const Navbar = () => {
  return (
    <nav className="bg-purple-900 flex items-center justify-between h-15">
        <h1 className ="ml-20 font-bold"><span className="text-white">&lt;</span><span className="text-purple-200">Cred</span><span className=" text-2xl text-white">Lock</span><span className="text-purple-300">/&gt;</span></h1>
        {/* <ul className=" flex gap-4 mr-10">
            <li className="font-semibold text-purple-200">Home</li>
            <li className="font-semibold text-purple-200">Profile</li>
            <li className="font-semibold text-purple-200">Contacts</li>
        </ul> */}
        <div className="flex gap-3 mr-10 border-2 border-purple-100 rounded-md p-2">
            <img  className="w-5 h-5 mt-0.5" src={github} alt="" />
             <p className="font-medium text-purple-100">Github</p>
        </div>
        

    </nav>
  )
}

export default Navbar