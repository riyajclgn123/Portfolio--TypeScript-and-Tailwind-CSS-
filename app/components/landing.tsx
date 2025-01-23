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
  const fileUrl = '/assets/cv.pdf'; // Make sure your CV is placed in the public folder

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileUrl.split('/').pop();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="font-sans bg-gray-100">
      <section
        id="background"
        className="h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/bg3.jpg')",
        }}
      >
        <div className="relative z-20 flex flex-col sm:flex-row items-center justify-between pt-32 sm:pt-56">
          <div className="w-full sm:w-1/3 flex justify-center mb-6 sm:mb-0">
            <img
              src="assets/ok.JPG"
              alt="RIYAJ Chaulagain"
              className="rounded-full border-8 border-white w-48 sm:w-64"
            />
          </div>

          <div className="w-full sm:w-2/3 text-center sm:text-left px-6 sm:px-0">
            <h1 className="text-3xl sm:text-4xl font-serif text-white font-bold">
              Riyaj Chaulagain
            </h1>
            <p className="text-lg mt-4 sm:mt-6 text-white">
              Welcome to my space! Here, you’ll get a glimpse of my journey—
              my passion for learning, the projects I’ve brought to life, and
              the experiences that have shaped who I am. From designing
              innovative solutions to tackling challenges head-on, this portfolio
              reflects my dedication, creativity, and growth.
            </p>
            <div className="mt-6 sm:mt-8">
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
        id="about"
        className="about flex flex-col sm:flex-row justify-center sm:items-center bg-blue-400 rounded-lg p-6 sm:p-12 mb-8"
      >
        <div className="left w-full sm:w-1/2 mb-6 sm:mb-0 flex justify-center">
          <img
            src="assets/ok.JPG"
            alt="About Me"
            className="w-96 rounded-lg"
          />
        </div>
        <div className="right w-full sm:w-1/2 text-center sm:text-left">
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4">
            Designing Is My Passion
          </h2>
          <p className="text-lg sm:text-xl text-white mb-6">
            Welcome to my space! Here, you’ll get a glimpse of my journey—my
            passion for learning, the projects I’ve brought to life, and the
            experiences that have shaped who I am. Lets create something
            amazing together!
          </p>
          <button
            onClick={handleDownload}
            className="bg-blue-600 text-white py-3 px-8 rounded-lg"
          >
            Download CV
          </button>
        </div>
      </section>

      <section className="skills bg-blue-300 py-8 mb-6" id="skills">
        <div className="text-center mb-6">
          <h2 className="text-4xl font-bold text-white">Skills</h2>
        </div>
        <div className="flex justify-center flex-wrap gap-8">
          <div className="skill-item">
            <FaJava size={50} className="text-white" />
          </div>
          <div className="skill-item">
            <FaPython size={50} className="text-white" />
          </div>
          <div className="skill-item">
            <FaJsSquare size={50} className="text-white" />
          </div>
          <div className="skill-item">
            <FaMicrosoft size={50} className="text-white" />
          </div>
          <div className="skill-item">
            <FaReact size={50} className="text-white" />
          </div>
        </div>
      </section>

      <section className="contact bg-blue-300 py-8 px-4 sm:px-12" id="contact">
        <div className="text-center mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-black">
            Contact Me
          </h2>
        </div>
        <p className="text-xl text-center sm:text-2xl mb-8">
          Feel free to reach out if you have any questions, need assistance, or
          are interested in collaborating. I look forward to hearing from you!
        </p>
        <div className="flex justify-center">
          <a
            href="https://www.linkedin.com/in/riyajchaulagain/"
            className="bg-white text-blue-600 py-3 px-8 rounded-lg text-xl"
          >
            Lets Chat
          </a>
        </div>
      </section>
    </div>
  );
}
