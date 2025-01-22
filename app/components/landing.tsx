/* eslint-disable @next/next/no-img-element */
import React from "react";
export default function Landing() {
  return (
    <div className=" ">
      <div
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
            <h1 className="text-4xl font-serif text-white font-bold">Riyaj Chaulagain</h1>
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
      </div>

      <div className="text-right">
        {
          "Today, we are here to show our first step of using css. I used 'text-center' alignment to start my heading from the center of my page. And, I used 'text-right'alignment to start my first ltter of second paragraph from right side."
        }
      </div>
      <hr className="border-black p-4 m-8" />
      <div className="pl-7">
        <ul className="list-disc list inside">
          <li className="text-green-600 my-2">Bishow</li>
          <li className="text-violet-400 my-3">Sudhakar</li>
          <li className="text-orange-500 my-5">FSujit</li>
          <li className="text-blue-500 my-9">Riyaj</li>
          <li my-12>Sagar</li>
        </ul>
      </div>
      <div className="flex justify-center flex-col">
        <button className="bg-yellow-400 w-64 rounded-2xl py-2 px-4 border border-gray-950 my-3">
          I am a button
        </button>
        <button className="bg-pink-400 w-64 rounded-2xl py-2 px-4 border border-gray-950 my-3">
          I am a hover button
        </button>
      </div>
      <div className="border border-yellow-400 ">
        Ma yesma kei lekhna jadai xu. yo mero border check garne aauta example
        ho.
      </div>
      <div className="p-7 m-5 bg-green-600">
        I am testing the margin and padding of this text. So, please check my
        padding and margin so that I can do better in my futher projects. Love
        to do this. Tesaile prayas mero jaari xa sathi bhai haru. Jindagi chhoto
        xa so, yei ho time afno life ramro banaune.
      </div>

      <div className="grid , grid-cols-2 p-6 m-5">
        <div className="bg-pink-500 p-4 m-4">this is 1st grid.</div>
        <div className="bg-yellow-400 p-4 m-4"> this is 2nd grid</div>
      </div>
      <div className="text-pink-300 text-2xl font-serif font-bold p-2">
        I just wanna check the font size, color and boldness of the text. all is
        well.
      </div>
      <div className="bg-blue-500 shadow-blue-500/50 shadow-2xl p-4 m-20">
        Yaha border ko shadow dekhane try gardai xu.
      </div>
    </div>
  );
}
