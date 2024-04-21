"use client";
import Image from "next/image"; // Importing the Next.js Image component for optimized images

const Experience = () => {
  return (
    <div className="h-screen flex flex-col items-center bg-white">
      <h1 className="text-6xl font-extralight  mb-4 mt-10">Experience</h1>
      <div className="flex flex-wrap justify-center items-start gap-10 md:gap-20">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-4 max-w-sm w-full md:w-1/2  lg:max-w-lg">
          <Image
            src="/broker-logo.png"
            alt="React Developer"
            width={300}
            height={256}
            className="rounded-full"
          />
          <div className="text-center mt-4">
            <h2 className="text-2xl font-light">React Developer</h2>
            <p className="text-gray-600 text-xl mt-4">Aug 2020 – May 2022</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-4 max-w-sm w-full md:w-1/2 lg:max-w-lg">
          <Image
            src="/broker-logo.png"
            alt="React Developer"
            width={300}
            height={256}
            className="rounded-full"
          />
          <div className="text-center mt-4">
            <h2 className="text-2xl font-light">React Developer</h2>
            <p className="text-gray-600 text-xl mt-4">Aug 2020 – May 2022</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-4 max-w-sm w-full md:w-1/2 lg:max-w-lg">
          <Image
            src="/broker-logo.png"
            alt="React Developer"
            width={300}
            height={256}
            className="rounded-full"
          />
          <div className="text-center mt-4">
            <h2 className="text-2xl font-light">React Developer</h2>
            <p className="text-gray-600 text-xl mt-4">Aug 2020 – May 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
