"use client";
import Image from "next/image";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import React from "react";

export default function Home() {
  return (
    <>
      <div className="navbar shadow-lg shadow-gray-800 bg-[#e64833]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About me</a>
              </li>
              <li>
                <a>Projects</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Portfolio</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About me</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-[#94AEAD] text-black">Resume</a>
        </div>
      </div>

      <div id="home" className="w-full h-screen text-center relative">
        <div className="absolute z-10 w-full h-screen">
          <div className="w-full h-full mx-auto p-4 flex justify-center items-center relative">
            <div className="text-center">
              <h3 className="py-4 text-5xl text-white font-bold">
                <span className="text-orange-600">Hi!</span> I'm Nekruz Ashrapov
                .
              </h3>
              <h1 className="md:text-[50px] text-[30px] text-white">
                Software Developer from{" "}
                <span className="text-orange-600">New York</span>.
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-screen">
        <div className="card card-side bg-[#94AEAD] shadow-xl">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h3 className="text-orange-600">About Me</h3>
            <h2 className="card-title text-black">
              I love everything about tech
            </h2>
            <p className="text-black">
              This should be anything about you, your values and your goals.
            </p>
            <div className="card-actions justify-end">
              <button className="btn text-black bg-[#FBE9D0]">My resume</button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8 text-orange-600">My Projects</h2>
        <div className="flex justify-center space-x-6 pb-32">
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Portfolio Website
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>
                This is a portfolio website built using Next.js and JavaScript
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">TypeScript</div>
                <div className="badge badge-outline">HTML</div>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Chatbot AI</h2>
              <p>This is a chatbot AI application</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Next.js</div>
                <div className="badge badge-outline">Tailwind</div>
              </div>
            </div>
          </div>
          <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Tic Tac Toe</h2>
              <p>AI Tic Tac Toe Game Application</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Python</div>
                <div className="badge badge-outline">iTerm2</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
