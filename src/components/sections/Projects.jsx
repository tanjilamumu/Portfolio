import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> Full Stack - Cloud Storage Application(Google Drive Clone)</h3>
              <ul className="text-gray-400 mb-4">
                <li>Engineered a Google Drive–style web application that allows users to upload, view, and manage cloud files.</li>
                <li>Built secure authentication flow (sign-up, login, sessions) and dynamic access control.</li>
                <li>Integrated backend storage and database services for efficient data retrieval and scalability.</li>
                <li>Designed responsive layouts and smooth file operations using modern UI frameworks.</li>
                <li>Deployed the app to Vercel for continuous availability.</li>
              </ul>
          
              <div className="flex flex-wrap gap-2 mb-4">
                {["React", "Vite", "TailwindCSS", "Next.js", "TypeScript", "Appwrite", "Vercel"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                   href="https://github.com/tanjilamumu/full-stack-cloud-storage-application"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
                <a
                  href="https://storage-management-solution-omega.vercel.app/sign-in" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Live Demo → (Deployed)
                </a>
                </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Full Stack- Movie App</h3>
              <ul className="text-gray-400 mb-4">
                <li>Developed a full-stack movie application enabling users to search, view, and explore trending movies, as well as manage a personalized favorites list.</li>
                <li>Integrated the application with a public movie API (TMDB) to deliver real-time movie data and dynamic content.</li>
                <li>Built the frontend using React, React Router, and Tailwind/Bootstrap to create a responsive and intuitive user interface.</li>
                <li>Implemented a Node.js backend and utilized Appwrite for user authentication and database management of favorite movies.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {["JavaScript", "React", "appwrite", "ESLint", "TailwindCSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                    href="https://github.com/tanjilamumu/full-stack-movie-App"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                  <a
                  href="https://tkmumu.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  Live Demo → (Deployed)
                </a>

              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">FrontEnd - Tic-Tac-Toe Game</h3>
              <ul className="text-gray-400 mb-4">
                <li>Developed a dynamic two-player Tic-Tac-Toe game</li>
                <li>Automatic win and draw detection using predefined cell combinations.</li>
                <li>Interactive UI built with Bootstrap alerts and CSS transitions</li>
                <li>Efficient DOM manipulation and event handling via jQuery.</li>
                <li>Reset and restart game functionality with state management.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {["JavaScript", "JQuery", "DOM", "Bootstrap", "CSS"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/tanjilamumu/FrontEnd-Tic-Tac-Toe-Game"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>

              </div>
            </div>


            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">FrontEnd- User Management CRUD App</h3>
              <ul className="text-gray-400 mb-4">
                <li>Built a responsive CRUD application using React and MockAPI for managing user records.</li> 
                <li>Implemented state management using React Hooks (useState, useEffect) to handle data flow and component lifecycle efficiently.</li>
                <li>Implemented API integration with Fetch and managed state using React Hooks.</li>    
                <li>Designed modular and reusable React components (Form, Table) to improve scalability and maintain clean architecture.</li>         
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {["JavaScript", "React", "MockAPI", "Node.js"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/tanjilamumu/FrontEnd--User-Management-CRUD-App"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>

              </div>
            </div>





            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Backend - Restaurant Management System</h3>
              <ul className="text-gray-400 mb-4">
                <li>Developed RESTful APIs for managing restaurants, employees, and customers.</li>
                <li>Implemented CRUD operations for each entity using Spring Boot and JPA/Hibernate.</li>
                <li>Integrated MySQL database for secure data storage and retrieval.</li>
                <li>Used Spring Data JPA to simplify database queries and relationships.</li>
                <li>Applied layered architecture (Controller, Service, Repository) for maintainable code structure.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Java", "Spring Boot", "MySQL", "JPA/Hibernate", "Maven"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                    href="https://github.com/tanjilamumu/backend-restaurant-management-system"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </a>

              </div>
            </div>




            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Backend - Database project</h3>
              <ul className="text-gray-400 mb-4">
                <li>Developed a Java-based Project Management System integrated with MySQL to manage projects, materials, categories, and steps efficiently.</li>
                <li>Implemented JDBC for database connectivity and custom exception handling for robust error management.</li>
                <li>Designed normalized relational tables for projects, categories, materials, and steps with proper foreign key constraints.</li>
                <li>Supported full CRUD operations to add, update, view, and delete project details dynamically</li>
                <li>Ensured data integrity and scalability through structured schema design and modular DAO classes.</li>
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Java", "MySQL", "JDBC", "Eclipse"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                    href="https://github.com/tanjilamumu/java-mysql-project"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </a>

              </div>
            </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};