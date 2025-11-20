import { RevealOnScroll } from "../RevealOnScroll";
import { motion } from "framer-motion";
import profile from '../../assets/profile.png'

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center relative px-4 md:px-16"
    >
      <RevealOnScroll>
        {/* Profile Image with Floating Animation & Gradient Border */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="p-[4px] rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 shadow-lg mb-8 md:mb-0 md:mr-8"
        >
          <img
            src={profile}
            alt="Tanjila"
            className="rounded-full w-56 h-56 object-cover shadow-xl"
          />
        </motion.div>

        {/* Text Content */}
        <div className="text-center md:text-left max-w-lg">
          <h1 className="text-center text-5xl font-bold mb-4">
            Hi, I’m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400">
              Tanjila
            </span>{" "}
            👋
          </h1>

          <p className="text-center text-gray-400 text-lg mb-8 max-w-lg mx-auto ">
            I’m a full-stack developer who loves crafting clean, scalable web
            applications. My goal is to build solutions that offer both
            exceptional performance and a delightful user experience.
          </p>

          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>

            <a
              href="/Portfolio/New Resume.docx"
              target="_blank"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Resume
            </a>


              <a
                href="https://github.com/tanjilamumu" 
                target="_blank"
                rel="noopener noreferrer"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
              >
                GitHub
              </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
