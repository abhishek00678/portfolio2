"use client";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent text-black fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-6 ml-2 flex justify-between items-center  text-lg lg:text-xl  ">
        <Link href="#home">
          <Logo />
        </Link>
        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute bg-transparent top-8 w-full left-0 z-20 lg:static lg:block mx-4 font-extralight`}
        >
          <ul className="lg:flex lg:items-center">
            <li className="p-2 lg:p-4">
              <Link href="#projects">
                <span>Projects</span>
              </Link>
            </li>
            <li className="p-2 lg:p-4">
              <Link href="https://drive.google.com/file/d/1197_J2JrBuS2yBi3tY6Vz4Rqj_WwWiOZ/view?usp=sharing">
                <span>Resume</span>
              </Link>
            </li>
            <li className="p-2 lg:p-4">
              <Link href="#skills">
                <span>Skills</span>
              </Link>
            </li>
            <li className="p-2 lg:p-4">
              <Link href="#aboutme">
                <span>About</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
