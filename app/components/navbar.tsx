import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
export default function Navbar() {
  return (
    <>
    <nav>
      <div className="navbar flex items-center justify-between w-full bg-blue-700">
       <div className="logo font-bold text-white text-3xl my-3 ml-5"><a href="#">Portfolio.</a></div>
         <ul className="menu flex justify-center">
          <li className="mx-9 text-white hover:text-black font-serif text-2xl"><a href="#home">Home</a></li>
          <li className="mx-9 text-white hover:text-black font-serif text-2xl"><a href="#about">About</a></li>
          <li className="mx-9 text-white hover:text-black font-serif text-2xl"><a href="#skills">Skills</a></li>
          <li className="mx-9 text-white hover:text-black font-serif text-2xl"><a href="#services">Services</a></li>
          <li className="mx-9 text-white hover:text-black font-serif text-2xl"><a href="#contact">Contact</a></li>
         </ul>
       <div className="flex items-end mr-7">
        <a href="https://www.facebook.com/riyaj.chaulagain" target="_blank" className="text-white p-4 hover:text-black transition duration-200" ><FaFacebook size ={40} /></a>
        <a href="https://www.linkedin.com/in/riyajchaulagain/" target="_blank" className="text-white p-4 hover:text-black transition duration-200" ><FaLinkedin size ={40} /></a>
       </div>
      </div>
    </nav> 
    </>
  );
}
