"use client";
import { useState } from "react";
import ProgressBar from "./ui/ProgressBar";

const Skills = ({ skills, skills2, soft, soft2 }) => {
  const [tech, setTech] = useState("tech");

  const handle1 = (toggel) => {
    setTech(toggel);
  };

  return (
    <div className="container mx-auto px-4 py-8" id="skills">
      <h1 className="text-6xl font-extralight text-center  mb-10 mt-5">
        Skills
      </h1>

      <div className="flex justify-around items-center mb-8 p-2 mx-4 rounded-sm text-2xl font-extralight border">
        <span
          onClick={() => handle1("tech")}
          className="cursor-pointer  px-[20%] py-2 hover:bg-gray-100 transition duration-150 ease-in-out"
        >
          Technical Skills
        </span>
        <span
          onClick={() => handle1("soft")}
          className="cursor-pointer px-[20%] py-2 hover:bg-gray-100 transition duration-150 ease-in-out"
        >
          Soft Skills
        </span>
      </div>

      <div className="grid grid-cols-2 gap-8 ">
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
