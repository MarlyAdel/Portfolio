import React from 'react'
import contactImg from "../../assets/images/contact.webp"
import gmailAnimation from "../../assets/images/Gmail.gif";
import githubAnimation from "../../assets/images/github icon black.gif";
import linkedinAnimation from "../../assets/images/Linkdin animation.gif";
import { motion } from "framer-motion";



export default function Contact() {
  return (
    <section id="contact" className="px-2 mt-12 sm:mt-28">
      <div className="container">
        <motion.div
          className="relative text-center mb-10 sm:mb-24 "
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          {/* Background big text */}
          <h1 className="text-[52px] sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-gray-950 opacity-15 sm:tracking-widest dark:text-gray-500">
            CONTACTS
          </h1>

          {/* main title */}
          <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl sm:text-4xl font-extrabold text-pink-800 whitespace-nowrap">
            GET IN TOUCH
          </h2>
        </motion.div>

        <div className="contact-content">
          <div className=" mx-auto grid md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <form className="space-y-5 ">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-400 dark:border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 dark:bg-gray-800 "
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-400 dark:border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 dark:bg-gray-800 "
              />
              <textarea
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 border border-gray-400 dark:border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 dark:bg-gray-800 "
              ></textarea>
              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors"
              >
                Send Message
              </button>
            </form>

            {/* Social Links */}
            <div className="flex flex-col justify-center space-y-6">
              <img
                src={contactImg}
                alt="Contact Image"
                className="hidden md:block w-52 sm:w-56 md:w-64 lg:w-80 mx-auto lg:ms-36 mb-6 md:mb-8 lg:mb-10 animate-rocket"
              />
              <div className="mt-12 flex justify-center items-center gap-6 text-pink-600 dark:text-pink-400">
                <a
                  href="mailto:marlooadel1100@gmail.com"
                  title="Send Email"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform glow-icon"
                >
                  <img
                    src={gmailAnimation}
                    alt="Gmail animation"
                    className="w-20 h-20 animate-bounce-slow"
                  />
                </a>
                <a
                  href="https://github.com/MarlyAdel"
                  title="GitHub Profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform glow-icon"
                >
                  <img
                    src={githubAnimation}
                    alt="Gmail animation"
                    className="w-11 h-11 animate-bounce-slow"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/marlyadel-frontend"
                  title="LinkedIn Profile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform glow-icon"
                >
                  <img
                    src={linkedinAnimation}
                    alt="Gmail animation"
                    className="w-20 h-20 animate-bounce-slow"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
