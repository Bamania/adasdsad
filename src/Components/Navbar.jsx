import React from 'react'
import logo from "../images/logo_eaze.png"

export const Navbar = () => {
  return (
    <>
  <div className="">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-blue-500">
            <img src={logo} alt="Logo" className="h-8 font-gilroy w-8 inline-block mr-2" />
            EAZEPLACE
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <div className="flex items-center text-gray-700 hover:text-blue-500">
            <a className='flex flex-col items-center font-gilroy' href="#join">Join as Professor</a>
            <span className="ml-1 font-gilroy text-blue-500"> (Beta)</span>
          </div>
          <a href="#pricing" className="text-gray-700 hover:text-blue-500 font-gilroy">Pricing</a>
          <a href="#about" className="text-gray-700 hover:text-blue-500 font-gilroy">About Us</a>
        
        <div className="flex items-center space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 font-gilroy">Sign In</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 font-gilroy">Sign Up</button>
        </div>
      </div></div>
    </div>
    
    
    
    </>
  )
}
