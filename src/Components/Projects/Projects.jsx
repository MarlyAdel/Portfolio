import React from 'react'
import { FaEye, FaCode } from "react-icons/fa";
 import project1 from "../../assets/images/Group 1.png"
 import project2 from "../../assets/images/Group 2.png";
 import project3 from "../../assets/images/Group 3.png";
 import project4 from "../../assets/images/Group 4.png";
 import project5 from "../../assets/images/Group 5.png";
 import project6 from "../../assets/images/Gr 9.png";
 import project7 from "../../assets/images/Group 7.png";
 import project8 from "../../assets/images/Group 8.png";
 import project9 from "../../assets/images/Group 9.png";
 import project10 from "../../assets/images/Group 10.png";
 import project11 from "../../assets/images/Group 11.png";
 import project12 from "../../assets/images/Group 12.png";
import { motion } from "framer-motion";


export default function Projects() {

  const projects = [
    {
      title: "FrechCart",
      image: project1,
      live: "https://ecommerce-fresh-cart-eight.vercel.app/",
      code: "https://github.com/MarlyAdel/Ecommerce-FreshCart",
      tools: ["React", "Tailwind CSS", "React Router", "Context API"],
    },
    {
      title: "Nike",
      image: project2,
      live: "https://marlyadel.github.io/Nike/",
      code: "https://github.com/MarlyAdel/Nike",
      tools: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript", "Font Awesome"],
    },
    {
      title: "Ecommerce-Shop.com",
      image: project3,
      live: "https://shop-com-eta.vercel.app",
      code: "https://github.com/MarlyAdel/Ecommerce-Shop.com",
      tools: ["React", "Tailwind CSS", "Context API", " slick-carousel"],
    },
    {
      title: "Weather",
      image: project4,
      live: "https://marlyadel.github.io/Weather/",
      code: "https://github.com/MarlyAdel/Weather",
      tools: [" HTML5", "CSS3", "JavaScript", "APIs"],
    },
    {
      title: "Daniels",
      image: project5,
      live: "https://marlyadel.github.io/Daniels/",
      code: "https://github.com/MarlyAdel/Daniels",
      tools: ["HTML", "CSS", "Bootstrap", "JQuery"],
    },
    {
      title: "Coffero",
      image: project6,
      live: "https://coffee-five-dusky.vercel.app/",
      code: "https://github.com/MarlyAdel/Coffero",
      tools: ["Next.js", "Tailwind CSS", "Dynamic Routing", "Framer Motion"],
    },
    {
      title: "Js-CRUD",
      image: project7,
      live: "https://marlyadel.github.io/Js-CRUD/",
      code: "https://github.com/MarlyAdel/Js-CRUD",
      tools: ["HTML5", "Bootstrap", "JavaScript"],
    },
    {
      title: "Ecommerce-MegaMart",
      image: project8,
      live: "https://ecommerce-mega-mart.vercel.app",
      code: "https://github.com/MarlyAdel/Ecommerce-MegaMart",
      tools: ["React", "Bootstrap", "Redux Toolkit"],
    },
    {
      title: "Recipes",
      image: project9,
      live: "https://marlyadel.github.io/Recipes/",
      code: "https://github.com/MarlyAdel/Recipes",
      tools: ["React", "Sass", "Axios", "APIs"],
    },
    {
      title: "Fitness",
      image: project10,
      live: "https://fitness-bice-tau.vercel.app",
      code: "https://github.com/MarlyAdel/Fitness",
      tools: ["Next.js", "Tailwind CSS"],
    },
    {
      title: "Trippy",
      image: project11,
      live: "https://trippy-inky.vercel.app",
      code: "https://github.com/MarlyAdel/Trippy",
      tools: ["React", "CSS3", "React Router"],
    },
    {
      title: "Todo-List",
      image: project12,
      live: " https://marlyadel.github.io/Todo-List/",
      code: "https://github.com/MarlyAdel/Todo-List",
      tools: ["HTML5", "Bootstrap", "JavaScript", "APIs"],
    },
  ];
  return (
    <section id="projects" className="py-10 mt-16 px-3 sm:px-6 lg:px-0">
      <div className="container">
        {/* Title Section */}
        <motion.div
          className="relative text-center mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          {/* Background big text */}
          <h1 className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-950 opacity-15 sm:tracking-widest dark:text-gray-500">
            PROJECTS
          </h1>

          {/* Main title */}
          <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl sm:text-4xl font-extrabold text-pink-800 whitespace-nowrap">
            MY PROJECTS
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="projects-content grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg mt-7 dark:bg-gray-700
              ease-in-out
             hover:shadow-pink-400 transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56"
              />

              {/* Text */}
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-black dark:text-white text-xl font-bold font-robotoSlab">
                    {project.title}
                  </h3>
                  <div className="flex gap-2">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-pink-500 rounded-full hover:bg-pink-600 transition"
                    >
                      <FaEye className="text-white text-sm" />
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-pink-500 rounded-full hover:bg-pink-600 transition"
                    >
                      <FaCode className="text-white text-sm" />
                    </a>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mt-2 dark:text-gray-300">
                  {project.tools?.join(" . ")}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
