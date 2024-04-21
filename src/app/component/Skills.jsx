import ProgressBar from "./ui/ProgressBar";

const Skills = ({ skills, skills2 }) => {
  return (
    <div className="container mx-auto px-4 py-8" id="skills">
      <h1 className="text-6xl font-extralight text-center  mb-10 mt-5">
        Skills
      </h1>
      <div className="grid grid-cols-2 gap-8">
        {/* First set of skills */}
        <div>
          {skills.map((skill) => (
            <div key={skill.name} className="mb-4">
              <label className="block mb-1">{skill.name}</label>
              <ProgressBar value={skill.level} max={100} />
            </div>
          ))}
        </div>

        {/* Second set of skills */}
        <div>
          {skills2.map((skill) => (
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
