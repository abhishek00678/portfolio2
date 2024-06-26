"use client";
const Projects = ({ github, livelinks }) => {
  return (
    <div
      className="flex flex-wrap justify-center mt-6 bg-gray-100"
      id="projects"
    >
      {/* Heading */}
      <div className="w-full text-center mt-48 md:mt-10">
        <h1 className="text-6xl md:text-6xl font-extralight mb-10">
          Recent Projects
        </h1>
      </div>

      {/* Array to create four cards */}
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="p-10 md:w-1/2">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-5 transition-transform duration-150 transform hover:-translate-y-3">
            <div>
              <h5 className="text-lg font-bold">Task-Management</h5>
              <p className="text-gray-700 mt-2">
                It is a task management system where all user can track their
                own tasks with the status of in-progress, pending, and
                completed.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {/* Access the corresponding live link based on the index */}
                <a
                  href={livelinks[index]}
                  className="btn btn-outline-secondary px-4 py-2 border border-gray-400 text-gray-600 rounded hover:bg-gray-100 transition duration-150"
                >
                  <i className="fas fa-external-link-alt"></i> Live Link
                </a>
                <a
                  href={github}
                  target="_blank"
                  className="btn btn-outline-secondary px-4 py-2 border border-gray-400 text-gray-600 rounded hover:bg-gray-100 transition duration-150"
                >
                  <i className="fab fa-github"></i> Repo
                </a>
              </div>
              <hr className="my-4" />
              <div className="flex flex-wrap items-center">
                <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                  JavaScript: 78.8%
                </span>
                <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                  CSS: 19%
                </span>
                <span className="bg-gray-100 text-gray-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                  HTML: 2.1%
                </span>
              </div>
              <p className="text-gray-600 mt-4">
                <a href={github} target="_blank" className="hover:underline">
                  <i className="fab fa-github"></i> Stars{" "}
                  <span className="bg-gray-800 text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">
                    0
                  </span>
                </a>
                <small className="text-gray-400">
                  Updated on February 5, 2023
                </small>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
