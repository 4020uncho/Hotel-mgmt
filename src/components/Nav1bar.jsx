import React from 'react'

const Nav1bar = () => {
  return (
    <div>
        <nav className="flex justify-between items-center p-5 bg-white shadow-md">
        <h1 className="text-2xl font-bold">FOMI VIEW HOTEL</h1>
        <div className="space-x-6 hidden md:block">
          <a href="/" className="hover:text-blue-500">Home</a>
          <a href="#rooms" className="hover:text-blue-500">Rooms</a>
          <a href="#about" className="hover:text-blue-500">About</a>
          <a href="#contact" className="hover:text-blue-500">Contact</a>
        </div>
      </nav>
    </div>
  )
}

export default Nav1bar