export default function Footer() {
  return (
    <footer className="bg-pink-700 dark:bg-gray-900 text-gray-300 py-6 mt-16">
      <div className="container mx-auto px-4 sm:px-8 md:px-16 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Copyright */}
        <p className="text-sm mb-3 md:mb-0">
          © {new Date().getFullYear()} Marly Adel. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex space-x-6 text-xl">
          <a
            href="https://www.linkedin.com/in/marlyadel-frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="dark:hover:text-pink-500 transition-colors "
          >
            <i className="fab fa-linkedin"></i>
          </a>

          {/* Gmail */}
          <a
            href="mailto:marlooadel1100@gmail.com"
            className="dark:hover:text-pink-500 transition-colors"
          >
            <i className="fas fa-envelope"></i>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/MarlyAdel"
            target="_blank"
            rel="noopener noreferrer"
            className="dark:hover:text-pink-500 transition-colors"
          >
            <i className="fab fa-github"></i>
          </a>

          {/* Vercel */}
          <a
            href="https://vercel.com/marlyadel"
            target="_blank"
            rel="noopener noreferrer"
            className="dark:hover:text-pink-500 transition-colors mt-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 256 256"
              fill="currentColor"
            >
              <path d="M128 0L256 256H0L128 0z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
