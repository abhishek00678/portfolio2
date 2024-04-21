import React from "react";
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
    <div className="relative animated-gradient bg-gray-900 text-white min-h-screen">
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
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-center mb-20">
          ABHISHEK THAKUR
        </h1>
        <TypewriterEffect words={words} className="mb-20" />

        <div className="flex justify-center mb-4">
          <a
            href="https://github.com/yourusername"
            className="text-white hover:text-gray-300 mr-4"
          >
            <FaGithub className="w-16 h-16" />
          </a>
          <a
            href="https://facebook.com/yourusername"
            className="text-white hover:text-gray-300 mr-4"
          >
            <FaFacebook className="w-16 h-16" />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            className="text-white hover:text-gray-300 mr-4"
          >
            <FaLinkedin className="w-16 h-16" />
          </a>
          <a
            href="https://instagram.com/yourusername"
            className="text-white hover:text-gray-300"
          >
            <FaInstagram className="w-16 h-16" />
          </a>
        </div>
        <button className="bg-white text-gray-800 text-sm sm:text-base py-3 px-6 mt-4 sm:mt-8 rounded-lg">
          More About Me
        </button>
      </div>
    </div>
  );
};

export default HeroSection;