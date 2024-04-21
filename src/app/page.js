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

const Home = () => {
  return (
    <main>
      <HeroSection />
      <AboutMe id="aboutme" />
      <Experiance id="resume" />
      <Projects id="projects" />
      <Leadership />
      <Skills id="skills" skills={skillsData} skills2={skillsData2} />
      <Footer />
    </main>
  );
};

export default Home;
