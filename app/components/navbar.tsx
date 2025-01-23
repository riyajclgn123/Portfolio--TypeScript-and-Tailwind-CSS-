import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';
export default function Navbar() {
  return (
    <>
    <nav>
      <div className="navbar flex items-center justify-between w-full bg-gray-700 p-4">
       <div className="logo font-bold text-white text-3xl"><a href="#">Portfolio.</a></div>
         <ul className="menu flex sm:flex-row flex-col items-center sm:space-x-9 space-y-4 sm:space-y-0 ${
            isMenuOpen ? 'block' : 'hidden'">
          <li className=" text-white hover:text-black font-serif text-2xl"><a href="#home">Home</a></li>
          <li className=" text-white hover:text-black font-serif text-2xl"><a href="#about">About</a></li>
          <li className=" text-white hover:text-black font-serif text-2xl"><a href="#skills">Skills</a></li>
          <li className=" text-white hover:text-black font-serif text-2xl"><a href="#experience">Experience</a></li>
          <li className=" text-white hover:text-black font-serif text-2xl"><a href="#contact">Contact</a></li>
         </ul>
       <div className="hidden sm:flex items-center space-x-4">
        <a href="https://www.facebook.com/riyaj.chaulagain" target="_blank" className="text-white p-4 hover:text-black transition duration-200" ><FaFacebook size ={40} /></a>
        <a href="https://www.linkedin.com/in/riyajchaulagain/" target="_blank" className="text-white p-4 hover:text-black transition duration-200" ><FaLinkedin size ={40} /></a>
        <a href="https://github.com/riyajclgn123" target="_blank" className="text-white p-4 hover:text-black transition duration-200" ><FaGithub size ={40} /></a>
       </div>
      </div>
    </nav> 
    </>
  );
}
