import { FaHeart } from "react-icons/fa"; // Import the heart icon from react-icons

const Footer = () => {
  return (
    <div className="bg-gray-100 text-center p-4 mt-4 mb-4">
      <div className="mb-4 text-6xl font-extralight">Get In Touch</div>
      <div className="mb-4 font-extralight text-xl">
        I'm currently looking for full-time React Developer/Frontend Developer
        opportunities! If you know of any positions available, if you have any
        questions, or if you just want to say hi, please feel free to email me
        at,
        <a
          href="mailto:abhishekthakur777191gmail.com"
          className="text-blue-500"
        >
          abhishekthakur777191@gmail.com
        </a>
        .
      </div>
      <div>
        with <FaHeart className="inline text-red-500" /> Abhishek Thakur using
        Next.js
        <FaHeart className="inline text-red-500" />
      </div>
    </div>
  );
};

export default Footer;
