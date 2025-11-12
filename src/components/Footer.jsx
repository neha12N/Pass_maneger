import React from 'react'
import heart from '../assets/heart.png'
const Footer = () => {
  return (
    <footer className="bg-purple-900 flex flex-col items-center justify-center w-full">
         <h1 className ="font-bold"><span className="text-white">&lt;</span><span className="text-purple-200">Cred</span><span className=" text-2xl text-white">Lock</span><span className="text-purple-300">/&gt;</span></h1>
         <div className="flex ml-2 text-purple-50">Created with<img className="mx-2 "width="20px" height="20"src={heart} alt="" />by Neha</div>
    </footer>
  )
}

export default Footer