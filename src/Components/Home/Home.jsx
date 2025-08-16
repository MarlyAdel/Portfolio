import React, { useEffect, useState } from 'react'
import "./Home.css";
import myImg from "../../assets/images/marly.png"
import { motion } from "framer-motion";

export default function Home() {

   const [showButton, setShowButton] = useState(false);

   useEffect(() => {
     const handleScroll = () => {
       if (window.scrollY > 100) {
         setShowButton(true);
       } else {
         setShowButton(false);
       }
     };

     window.addEventListener("scroll", handleScroll);
     return () => window.removeEventListener("scroll", handleScroll);
   }, []);

  return (
    <>
      <section id="home">
        <div className="container pt-4 sm:pt-10 md:pt-3 lg:pt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:pt-16 pt-0 ">
            <div className="p-4 ">
              <motion.span
                className="text-3xl font-bold block"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0 }}
              >
                Hello, I’m
              </motion.span>
              <motion.h2
                className="text-5xl sm:text-5xl md:text-6xl font-extrabold font-robotoSlab mt-3 pb-6 bg-gradient-to-r from-pink-700 to-yellow-200 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Marly Adel <span className="text-black">👋</span>
              </motion.h2>
              <motion.p
                className="text-xl text-gray-600 dark:text-white font-medium leading-relaxed mx-auto md:mx-0"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                A passionate
                <span className="text-pink-500 text-2xl font-semibold">
                  {" "}
                  Front-End Developer
                </span>{" "}
                crafting modern, responsive and visually stunning web
                experiences using the latest technologies.
              </motion.p>
              <motion.a
                href="Marly-Adel-CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <button
                  aria-label="View CV"
                  className="mt-11 py-3 px-5 bg-pink-800 hover:bg-pink-700 text-white rounded-md text-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  {" "}
                  <i className="fa-solid fa-file"></i> View{" "}
                  <abbr title="curriculum vitae" className="no-underline">
                    CV
                  </abbr>
                </button>
              </motion.a>
            </div>

            <motion.div
              className="lg:w-96 flex justify-center lg:ms-40"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="relative w-full max-w-md mt-5 lg:-mt-24 px-2">
                <div className="absolute -inset-0  bg-pink-500 rounded-2xl opacity-50 blur-lg"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl max-w-full">
                  <img
                    src={myImg}
                    alt="Portrait of Marly Adel"
                    className="w-full h-auto "
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Go-Up Arrow */}
      {showButton && (
        <a className="go-up" href="#">
          <i className="fa-solid fa-arrow-up text-white"></i>
        </a>
      )}
    </>
  );
}
