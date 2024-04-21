"use client";
import Link from "next/link";

import { FaGithub, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SparklesCore } from "./ui/SparklesCore";
import { TypewriterEffect } from "./ui/TypewriterEffect";

import "./HeroSection.css"; // Assuming you store your CSS here

const HeroSection = () => {
  const words = [
    { text: "Passionate", className: "text-white text-2xl" },
    { text: "about", className: "text-white text-2xl" },
    { text: "changing", className: "text-white text-2xl" },
    { text: "the", className: "text-white text-2xl" },
    { text: "world", className: "text-white text-2xl" },
    { text: "with", className: "text-white text-2xl" },
    { text: "technology", className: "text-white text-2xl" },
  ];

  return (
    <div
      className="relative animated-gradient bg-gray-900 text-white min-h-screen w-full"
      id="home"
    >
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="absolute inset-0 z-0"
        particleColor="#FFFFFF"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center mb-4 font-thin">
          ABHISHEK THAKUR
        </h1>
        <div className="mt-0">
          <TypewriterEffect words={words} className="mb-20 font-thin" />
        </div>

        <div className="flex justify-center mb-4">
          <Link
            href="https://github.com/abhishek00678/"
            className="text-white hover:text-gray-300 mr-4"
          >
            <FaGithub className="w-16 h-16" />
          </Link>
          <Link
            href="https://www.instagram.com/a_abhishek_thakur_004/"
            className="text-white hover:text-gray-300 mr-4"
          >
            <FaFacebook className="w-16 h-16" />
          </Link>
          <Link
            href="www.linkedin.com/in/abhishek-thakur-434a3519a"
            className="text-white hover:text-gray-300 mr-4"
          >
            <FaLinkedin className="w-16 h-16" />
          </Link>
          <Link
            href="https://www.instagram.com/a_abhishek_thakur_004/"
            className="text-white hover:text-gray-300"
          >
            <FaInstagram className="w-16 h-16" />
          </Link>
        </div>
        <Link href="#aboutme">
          <button className="bg-white text-gray-800 text-sm sm:text-base py-3 px-6 mt-4 sm:mt-8 rounded-lg">
            More About Me
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
