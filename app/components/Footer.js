export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-700">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold text-orange-500">
              Prasad Shaswat & Sunidhi Chaudhary
            </h2>
            <p className="text-gray-300 mt-1">
              Professional Web Development Services
            </p>
          </div>
          <div className="space-x-4">
            <a
              href="https://www.linkedin.com/in/prasadshaswat/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-orange-500 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/prasadshaswat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-orange-500 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com/prasadshaswat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-orange-500 transition-colors"
            >
              Twitter
            </a>
            <a
              href="mailto:contact@example.com"
              className="text-gray-300 hover:text-orange-500 transition-colors"
            >
              Email
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Prasad Shaswat & Sunidhi Chaudhary.
          All rights reserved.
        </div>
      </div>
    </footer>
  );
}
