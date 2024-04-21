import { ImagesSlider } from "./ui/ImagesSlider";

const Leadership = () => {
  const images = ["img1.png", "img2.png", "img3.png", "img4.png", "img5.png"];

  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-extralight mb-4 mt-10">
          Leadership
        </h1>
      </div>
      <div className="mt-10 flex flex-col md:flex-row p-4 md:p-10">
        {/* Content */}
        <div className="flex flex-wrap justify-center items-center mt-5">
          {/* Textual content */}
          <div className="w-full md:w-1/2 px-4 md:px-16">
            <p className="text-base md:text-lg text-center md:text-left font-extralight">
              As a React developer with leadership experience, I bring technical
              expertise, project management skills, and strong communication
              abilities to the table. I have a proven track record of building
              large-scale applications, optimizing code for performance, and
              implementing best practices. Additionally, I have experience
              leading teams and projects, creating and maintaining project
              plans, managing timelines and budgets, and ensuring timely
              delivery of high-quality work. I excel at communicating
              effectively with team members, stakeholders, and clients, both
              verbally and in writing, and am a skilled listener who can provide
              clear and constructive feedback. I am also passionate about
              mentoring and training other developers to help them develop their
              skills and achieve their goals. With my ability to solve complex
              technical problems and think creatively, I am always up-to-date
              with the latest developments in React and related technologies,
              and am able to innovate and inspire a positive, collaborative work
              environment.
            </p>
          </div>

          {/* Carousel container */}
          <div className="w-full md:w-1/2 px-4 md:px-10 mt-10 md:mt-0">
            <ImagesSlider
              className="h-[30rem] w-full rounded-lg"
              images={images}
            ></ImagesSlider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leadership;
