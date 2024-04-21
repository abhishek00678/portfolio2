import Image from "next/image";

const Experience = () => {
  return (
    <div className="h-screen flex flex-col items-center bg-white">
      <h1 className="text-4xl md:text-6xl font-extralight mb-4 mt-10">
        Experience
      </h1>
      <div className="flex flex-wrap justify-center items-start gap-5 md:gap-20 px-4">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-sm md:w-1/2 lg:max-w-lg">
          <Image
            src="/broker-logo.png"
            alt="React Developer"
            width={300}
            height={256}
            className="mx-auto rounded-full" // Ensure image is centered
          />
          <div className="text-center mt-4">
            <h2 className="text-xl md:text-2xl font-light">React Developer</h2>
            <p className="text-gray-600 text-lg md:text-xl mt-4">
              Jan 2020 – Dec 2021
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-sm md:w-1/2 lg:max-w-lg">
          <Image
            src="/broker-logo.png"
            alt="React Developer"
            width={300}
            height={256}
            className="mx-auto rounded-full"
          />
          <div className="text-center mt-4">
            <h2 className="text-xl md:text-2xl font-light">React Developer</h2>
            <p className="text-gray-600 text-lg md:text-xl mt-4">
              Jan 2021 – Dec 2022
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-sm md:w-1/2 lg:max-w-lg">
          <Image
            src="/broker-logo.png"
            alt="React Developer"
            width={300}
            height={256}
            className="mx-auto rounded-full"
          />
          <div className="text-center mt-4">
            <h2 className="text-xl md:text-2xl font-light">React Developer</h2>
            <p className="text-gray-600 text-lg md:text-xl mt-4">
              Jan 2022 – Dec 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
