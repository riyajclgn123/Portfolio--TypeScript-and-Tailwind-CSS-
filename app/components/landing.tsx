/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import {
  FaJava,
  FaJsSquare,
  FaMicrosoft,
  FaPython,
  FaReact,
} from "react-icons/fa";

export default function Landing() {
  // Path to the file you want to allow users to download
  const fileUrl = '/assets/cv.pdf'; // Make sure your CV is placed in the public folder

  // Handle the download button
  const handleDownload = () => {
    const link = document.createElement('a'); // Create a temporary link
    link.href = fileUrl; // Set the file URL
    link.download = fileUrl.split('/').pop(); // Set a default file name (e.g., cv.pdf)
    document.body.appendChild(link); // Append the link to the DOM
    link.click(); // Simulate a click to trigger download
    document.body.removeChild(link); // Clean up by removing the link
  };

  return (
    <div className=" ">
      <section
        id="background"
        className="h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/bg3.jpg')",
        }}
      >
        <div className="relative z-20 flex flex-col sm:flex-row items-center justify-between pt-56">
          <div className="w-full sm:w-1/3 flex justify-center">
            <img
              src="assets/ok.JPG"
              alt="RIYAJ cHAULAGAIN"
              className="rounded-full border-8 border-white w-48 sm:w-64"
            ></img>
          </div>

          <div className="w-full sm:w-2/3 mt-10 sm:mt-0 text-center sm:text-left">
            <h1 className="text-4xl font-serif text-white font-bold">
              Riyaj Chaulagain
            </h1>
            <p className="text-lg mt-3 p-6 mr-96 text-white font-bold">
              Welcome to my space! Here, you’ll get a glimpse of my journey—my
              passion for learning, the projects I’ve brought to life, and the
              experiences that have shaped who I am. From designing innovative
              solutions to tackling challenges head-on, this portfolio reflects
              my dedication, creativity, and growth. Dive in, explore my work,
              and discover the stories behind each project. Let’s create
              something amazing together!
            </p>

            <div className="mt-8 mb-10 z-50">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-500 rounded-full text-white hover:bg-blue-600 transition duration-300"
              >
                CONTACT ME
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="about flex justify-center object-contain text-bold"
        id="about"
      >
        <div className="content">
          <div className="title">
            <span className="text-4xl flex justify-center mt-5 underline font-mono font-semibold">
              About Me
            </span>
          </div>
          <div className="about-details flex flex-wrap items-center justify-between">
            <div className="left w-full sm:w-1/2 ">
              <img
                src="assets/ok.JPG"
                alt=""
                className="w-96 ml-56 mt-24 mb-24 h-auto rounded-lg mr-56"
              />
            </div>
            <div className="right sm:w-1/2 bg-blue-400 rounded-lg p-32 ">
              <div className="topic font-bold text-4xl object-contain flex justify-center mb-8 ">
                Designing Is My Passion
              </div>
              <p className=" text-1xl text-white ">
                Welcome to my space! Here, you’ll get a glimpse of my journey—my
                passion for learning, the projects I’ve brought to life, and the
                experiences that have shaped who I am. From designing innovative
                solutions to tackling challenges head-on, this portfolio
                reflects my dedication, creativity, and growth. Dive in, explore
                my work, and discover the stories behind each project. Let’s
                create something amazing together!
              </p>
              <div className="button text-black flex justify-center mt-16  ">
                <button onClick={handleDownload}>
                  <a
                    href="#"
                    className="border-black bg-blue-600 p-4 rounded-lg "
                  >
                    Download CV
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className=""></section>

      <section className="relative w-full h-24 bg-blue-300 mb-5 flex justify-center">
        <div className="flex items-center space-x-40 animate-scroll-left-right">
          <div className="relative text-black transform -rotate-90 origin-left text-center p-5 ml-80 bg-white">SKILLS</div>

          <div className="">
            <i className="fab fa-java text-4xl ">
              <FaJava size={40} />
            </i>
          </div>

          <div className="">
            <i className="fab fa-python text-4xl ">
              <FaPython size={40} />
            </i>
          </div>

          <div className="">
            <i className="fab fa-js-square text-4xl ">
              <FaJsSquare size={40} />
            </i>
          </div>

          <div className="">
            <i className="fab fa-microsoft text-4xl ">
              <FaMicrosoft size={40} />
            </i>
          </div>

          <div className="">
            <i className="fab fa-react text-4xl ">
              <FaReact size={40} />
            </i>
          </div>

          <div className="">
            <i className="fab fa-java text-4xl ">
              <FaJava size={40} />
            </i>
          </div>

          <div className="">
            <i className="fab fa-python text-4xl ">
              <FaPython size={40} />
            </i>
          </div>

          <div className="">
            <i className="fab fa-js-square text-4xl ">
              <FaJsSquare size={40} />
            </i>
          </div>

          <div className="">
            <i className="fab fa-microsoft text-4xl ">
              <FaMicrosoft size={40} />
            </i>
          </div>

          <div className="">
            <i className="fab fa-react text-4xl ">
              <FaReact size={40} />
            </i>
          </div>
        </div>
      </section>

      <section
        className="contact bg-blue-300 ml-56 mr-56 pt-5 mb-5 rounded-lg"
        id="contact"
      >
        <div className="content">
          <div className="title">
            <span className="flex justify-center text-4xl text-bold text-black">
              Contact Me
            </span>
          </div>
          <div className="text ml-20 mr-20">
            <div className="topic text-2xl flex justify-center mt-4 mb-7 underline ">
              Have Any Project?
            </div>
            <p className="ml-60 mr-60 text-2xl font-bold">
              Feel free to reach out if you have any questions, need assistance,
              or are interested in collaborating. You can contact me directly
              via the form below, or you can reach me through email or phone for
              quicker responses. I look forward to hearing from you!
            </p>
            <div className="button flex justify-center">
              <button className=" text-2xl bg-white p-3 rounded-lg mb-4 mt-7">
                <a href="https://www.linkedin.com/in/riyajchaulagain/" />
                Lets Chat
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
