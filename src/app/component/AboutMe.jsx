import Image from "next/image"; // Using Next.js Image component for optimized images
import { SparklesCore } from "./ui/SparklesCore";
import Link from "next/link";

const AboutMe = () => {
  return (
    <div
      id="aboutme"
      className="flex flex-col md:flex-row justify-center items-center bg-gray-200 py-8"
      style={{ minHeight: "70vh" }}
    >
      <div className="w-full md:w-3/10 mb-10 md:mb-0 flex justify-center">
        <div className="rounded-full overflow-hidden">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="absolute inset-0 z-0"
            particleColor="#FFFFFF"
          />

          <Image
            src="/abhi.jpg" // Replace with the path to your profile image
            alt="Profile"
            width={400} // Set appropriate size
            height={256} // Set appropriate size
            className="object-cover"
          />
        </div>
      </div>
      <div className="w-full md:w-7/10 md:ml-20 px-10">
        <h2
          className="text-2xl mb-12 text-center font-sans font-light"
          style={{ fontSize: "55px" }}
        >
          About Me
        </h2>
        <p
          className="text-lg mb-4 text-center font-sans font-light"
          style={{ fontSize: "22px" }}
        >
          My name is Abhishek Thakur . I’m a under-graduate of 2019 from Shri
          Vaishnav Institute at Indore with a degree in Bechelor of Electronics
          & Communication. I'm most passionate about giving back to the
          community, and my goal is to pursue this passion within the field of
          software engineering. In my free time, I like working on open-source
          projects.
        </p>
        <div className="flex justify-center">
          <Link href="https://drive.google.com/file/d/1197_J2JrBuS2yBi3tY6Vz4Rqj_WwWiOZ/view?usp=sharing">
            <button className="bg-gray-200 hover:bg-gray-600 text-black border-2 rounded-lg border-gray-500 font-bold py-4 px-8 flex items-center justify-center">
              Resume
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
