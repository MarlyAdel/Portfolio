import React from "react";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNextdotjs,
  SiJquery,
  SiTailwindcss,
  SiBootstrap,
  SiSass,
  SiGit,
  SiGithub,
  SiVercel,
} from "react-icons/si";
import { RiCodeBoxLine } from "react-icons/ri";
import { motion } from "framer-motion";




export default function Skills() {
  const skills = {
    Languages: [
      { icon: <SiHtml5 className="text-orange-500" />, name: "HTML5" },
      {
        icon: <SiJavascript className="text-yellow-400" />,
        name: "JavaScript (ES6+)",
      },
      { icon: <SiTypescript className="text-blue-500" />, name: "TypeScript" },
    ],
    Frameworks: [
      { icon: <SiReact className="text-cyan-400" />, name: "React" },
      {
        icon: <SiNextdotjs className="text-black dark:text-white" />,
        name: "Next.js",
      },
      { icon: <SiJquery className="text-blue-500" />, name: "jQuery" },
    ],
    Styling: [
      { icon: <SiCss3 className="text-blue-400" />, name: "CSS3" },
      {
        icon: <SiTailwindcss className="text-cyan-500" />,
        name: "Tailwind CSS",
      },
      { icon: <SiBootstrap className="text-purple-500" />, name: "Bootstrap" },
      { icon: <SiSass className="text-pink-400" />, name: "Sass" },
    ],
    Tools: [
      {
        icon: <RiCodeBoxLine className="text-blue-500 dark:text-white" />,
        name: "REST APIs",
      },
      { icon: <SiGit className="text-red-500" />, name: "Git" },
      {
        icon: <SiGithub className="text-gray-800 dark:text-white" />,
        name: "GitHub",
      },
      {
        icon: (
          <div className="w-7 h-7 flex items-center justify-center rounded-full bg-black">
            <svg
              viewBox="0 0 256 256"
              // xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 fill-white"
            >
              <path d="M128 32l96 192H32z" />
            </svg>
          </div>
        ),
        name: "Vercel",
      },
    ],
  };

  return (
    <>
      <section id="skills" className="py-10 mt-16">
        <div className="container mx-auto px-2 md:px-6 sm:px-20 ">
          <motion.div
            className="relative text-center mb-16 "
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            {/* Background big text */}
            <h1 className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-950 opacity-15 tracking-widest dark:text-gray-500">
              SKILLS
            </h1>

            {/* main title */}
            <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl sm:text-4xl font-extrabold text-pink-800 whitespace-nowrap">
              MY SKILLS
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-pink-100 dark:bg-gray-900 p-5 rounded-xl shadow-xl transform hover:scale-105 transition duration-300"
              >
                <h3 className="text-xl font-semibold font-robotoSlab underline mb-4">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {items.map((skill, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="text-2xl">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
