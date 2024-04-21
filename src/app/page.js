import React from "react";
import HeroSection from "./component/HeroSection";
import AboutMe from "./component/AboutMe";
import Experiance from "./component/Experiance";
import Projects from "./component/Projects";
import Leadership from "./component/Leadership";
import Skills from "./component/Skills";
import Footer from "./component/Footer";

const skillsData = [
  { name: "React", level: 85 },
  { name: "Next.js", level: 75 },
  { name: "JavaScript", level: 90 },
  // Add more skills as needed
];

const skillsData2 = [
  { name: "Express", level: 85 },
  { name: "MongoDb", level: 75 },
  { name: "Node", level: 90 },
  // Add more skills as needed
];

const softSkills = [
  { name: "hey", level: 85 },
  { name: ".js", level: 75 },
  { name: "ht", level: 90 },
  // Add more skills as needed
];

const softSkills2 = [
  { name: "ht", level: 85 },
  { name: "jt", level: 75 },
  { name: "jw", level: 90 },
  // Add more skills as needed
];

const livelink = [
  "https://mail-box-client-delta.vercel.app/",
  "https://crypto-app-one-mocha.vercel.app/coins",
  "https://portfolio-abhi-b6ps.vercel.app/#skills",
  "https://portfolio2-ten-xi.vercel.app/",
];

const repoLink = "https://github.com/abhishek00678?tab=repositories";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <AboutMe />
      <Experiance />
      <Projects github={repoLink} livelinks={livelink} />
      <Leadership />
      <Skills
        skills={skillsData}
        skills2={skillsData2}
        soft={softSkills}
        soft2={softSkills2}
      />
      <Footer />
    </main>
  );
};

export default Home;
