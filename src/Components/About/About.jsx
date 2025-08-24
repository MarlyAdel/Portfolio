import React from 'react'
import { motion } from "framer-motion";
import codingImg from "../../assets/images/coding.gif";

export default function About() {


  return (
    <>
      <section id="about" className="mt-28 ">
        <div className="lg:container px-2 ">
          <div className="bg-pink-200 dark:bg-gray-900 px-6 pt-12 pb-10 sm:pb-6 shadow-xl rounded-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5  items-center">
              {/* About 1st section - Image */}
              <div className="p-0 ">
                <div className="flex justify-center md:justify-start">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="w-full"
                  >
                    <img
                      src={codingImg}
                      alt="About codingImg"
                      className="w-96 sm:w-80 md:w-[30rem] lg:w-full object-contain"
                    />
                  </motion.div>
                </div>
              </div>

              {/* About 2nd section - Text */}
              <motion.div
                className="px-4 text-center md:text-left"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <div className="relative text-center mb-6 ">
                  {/* Background big text */}
                  <h1 className="text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-900 opacity-10 tracking-widest dark:text-gray-500">
                    ABOUT
                  </h1>

                  {/* main title */}
                  <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl sm:text-4xl font-extrabold text-pink-800 whitespace-nowrap">
                    ABOUT ME
                  </h2>
                </div>

                <div className="about-content text-left sm:text-left">
                  <p className="pt-5 dark:text-gray-200 text-xl text-gray-700 leading-relaxed">
                    I am a passionate{" "}
                    <span className="text-pink-500 text-2xl font-semibold">
                      {" "}
                      Front-End Developer
                    </span>{" "}
                    with expertise in crafting interactive, responsive, and
                    visually engaging web applications. Proficient in leveraging
                    modern frameworks and libraries such as{" "}
                    <span className="font-semibold">React</span>,
                    <span className="font-semibold"> TailwindCSS</span> and{" "}
                    <span className="font-semibold">JavaScript</span> to deliver
                    seamless user experiences.
                  </p>
                  <p className="pt-7 dark:text-gray-400 text-gray-600 text-lg">
                    I am eager to apply my technical skills, creativity, and
                    attention to detail to contribute to innovative projects
                    within a dynamic development team.
                  </p>
                  <div className="mt-8">
                    <h2 className="text-2xl font-bold text-pink-600 mb-4">
                      Experiences
                    </h2>
                    <ul className="list-disc ms-5 text-lg text-gray-700 dark:text-white leading-relaxed space-y-2">
                      <li>
                        Built a full-featured eCommerce platform with 100+
                        products and payment methods using React and Context
                        Api.
                      </li>
                      <li>
                        Integrated RESTful APIs into multiple web applications
                        to deliver dynamic, real-time data updates.
                      </li>
                      <li>
                        Collaborated with designers and backend developers to
                        create seamless, user-focused digital experiences.
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
