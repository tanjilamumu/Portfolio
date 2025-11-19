import { RevealOnScroll } from "../RevealOnScroll";



export const About = () => {
  const frontendSkills = [
    "HTML",
    "CSS",
    "React",
    "Vite",
    "JavaScript",
    "TypeScript",
    "TailwindCSS",
    "BootStrap",
    "DOM",
    "Responsive Web Design",
    "API Integration"

    
  ];

  const backendSkills = ["Node.js", "Java (Spring Boot)", "AWS", "MySQL", "MongoDB", "RESTful APIs", "CRUD Operations", "File Handling & Error Handling", ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong> B.S. in Software Development</strong> - DeVry University
                  (2023-2025) - GPA- 4.00
                </li>
              </ul>

              <h3 className="text-xl font-bold mt-6 mb-4">🎓 Certifications</h3>
<ul className="list-disc list-inside text-gray-300 space-y-2">
  <li>
    <strong>Frontend Development Bootcamp</strong> – Completed an intensive
    program covering HTML, CSS, JavaScript, React, and responsive design.
    <br />
    <a
      href="/certificates/frontend-bootcamp.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:underline text-sm"
    >
      View Certificate →
    </a>
  </li>
  <li>
  <strong>Backend Development Bootcamp</strong> – Hands-on experience with
    Node.js, JavaScript, SpringBoot, MySQL and RESTful APIs.
    <br />
    <a
      href="/tanjila-mumu/images/backendcertificate.png"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:underline text-sm"
    >
      View Certificate →
    </a>
  </li>
</ul>

            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold mb-2">
                    Technical Support Specialist – J and Z Food Mart and Super Market, Bronx, NY
                    <span className="text-gray-400 font-normal"> | December 2024 – Present</span>
                  </h4>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>Troubleshoot and resolve hardware, software, and network issues, maintaining accurate records to ensure smooth IT operations.</li>
                    <li>Install, configure, and maintain systems and devices, while training users and creating documentation to improve efficiency and minimize downtime.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};