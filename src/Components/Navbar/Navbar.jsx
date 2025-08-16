import React, { useEffect, useState } from 'react'
import AnimatedLogo from '../Animation/AnimatedLogo';

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

 useEffect(() => {
   const root = window.document.documentElement;
   if (darkMode) {
     root.classList.add("dark");
   } else {
     root.classList.remove("dark");
   }
 }, [darkMode]);

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg py-1 z-50 fixed top-0 w-full text-black dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:ms-24 ms-0">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center ">
            <div className="mt-2">
              <AnimatedLogo />
            </div>
            <a
              href="#home"
              className="font-bold font-playfair text-4xl text-pink-600 font-merienda dark:text-pink-500 ms-1 sm:ms-2"
            >
              Marly
              <span className="text-pink-700 dark:text-pink-700">.</span>
            </a>
          </div>

          {/* Center links (hidden on mobile) */}
          <div className="hidden sm:flex flex-1 justify-center space-x-7">
            <a href="#home" className="text-xl font-medium hover:text-pink-600">
              Home
            </a>
            <a
              href="#about"
              className="text-xl font-medium hover:text-pink-600"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-xl font-medium hover:text-pink-600"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-xl font-medium hover:text-pink-600"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-xl font-medium hover:text-pink-600"
            >
              Contact
            </a>
          </div>

          {/* Right side links (hidden on mobile) */}
          <div className="hidden sm:flex items-center space-x-6">
            {/* DarkMode */}
            <button onClick={() => setDarkMode(!darkMode)} className="text-2xl">
              {darkMode ? (
                <i className="fa-regular fa-sun text-pink-900 text-3xl dark:text-pink-500"></i>
              ) : (
                <i className="fa-regular fa-moon text-pink-900 text-3xl"></i>
              )}
            </button>
          </div>

          {/* menu (mobile only) */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="text-2xl me-5"
            >
              {darkMode ? (
                <i className="fa-regular fa-sun text-pink-900 text-3xl dark:text-pink-500"></i>
              ) : (
                <i className="fa-regular fa-moon text-pink-900 text-3xl"></i>
              )}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              type="button"
              className="p-2 text-gray-400 hover:text-white hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white rounded-md"
            >
              {menuOpen ? (
                // X icon
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // icon
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden px-4 pb-4 space-y-2">
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="block text-xl py-2 hover:text-pink-600"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="block text-xl py-2 hover:text-pink-600"
          >
            About
          </a>
          <a
            href="#skills"
            onClick={() => setMenuOpen(false)}
            className="block text-xl py-2 hover:text-pink-600"
          >
            Skills
          </a>
          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="block text-xl py-2 hover:text-pink-600"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="block text-xl py-2 hover:text-pink-600"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
