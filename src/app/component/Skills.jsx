"use client";
import { useState } from "react";
import ProgressBar from "./ui/ProgressBar";

const Skills = ({ skills, skills2, soft, soft2 }) => {
  const [tech, setTech] = useState("tech");

  const handle1 = (toggle) => {
    setTech(toggle);
  };

  return (
    <div className="container mx-auto px-4 py-8" id="skills">
      <h1 className="text-4xl md:text-6xl font-extralight text-center mb-10 mt-5">
        Skills
      </h1>

      <div className="flex flex-col md:flex-row justify-around items-center mb-8 p-2 mx-4 rounded-sm text-xl md:text-2xl font-extralight border">
        <span
          onClick={() => handle1("tech")}
          className="cursor-pointer block w-full md:w-auto px-4 py-2 text-center hover:bg-gray-100 transition duration-150 ease-in-out"
        >
          Technical Skills
        </span>
        <span
          onClick={() => handle1("soft")}
          className="cursor-pointer block w-full md:w-auto px-4 py-2 text-center hover:bg-gray-100 transition duration-150 ease-in-out mt-2 md:mt-0"
        >
          Soft Skills
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* First set of skills */}
        <div>
          {(tech === "tech" ? skills : soft).map((skill) => (
            <div key={skill.name} className="mb-4">
              <label className="block mb-1">{skill.name}</label>
              <ProgressBar value={skill.level} max={100} />
            </div>
          ))}
        </div>

        {/* Second set of skills */}
        <div>
          {(tech === "tech" ? skills2 : soft2).map((skill) => (
            <div key={skill.name} className="mb-4">
              <label className="block mb-1">{skill.name}</label>
              <ProgressBar value={skill.level} max={100} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
