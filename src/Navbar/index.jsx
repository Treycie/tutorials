import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-white p-4 shadow-lg'>
    <div className="container mx-auto flex justify-items-start">
      <div className="text-current"></div>
      <div className="hidden md:flex space-x-10">
        <a href="#" className="text-current relative group">
          Dashboard
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#" className="text-current relative group">
          Statistik
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#" className="text-current relative group">
          Product
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#" className="text-current relative group">
          Customer
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#" className="text-current relative group">
          Review
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
        <a href="#" className="text-current relative group">
          Settings
          <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>
    </div>
  </nav>
  )
}

export default Navbar;





















