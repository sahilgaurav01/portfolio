export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-800 sticky top-0 bg-gray-900 z-50">
        <h1 className="text-xl font-bold">Sahil</h1>
        <div className="space-x-6 text-gray-300">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm <span className="text-blue-500">Sahil Gaurav</span>
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto mb-6">
          B.Tech CSE Student focused on C++, DSA, and building scalable web applications.
        </p>

        <div className="space-x-4">
          <a href="#projects" className="bg-blue-600 px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            View Projects
          </a>
          <a href="#contact" className="border border-gray-600 px-6 py-2 rounded-lg hover:bg-gray-800 transition">
            Contact Me
          </a>
        </div>
      </header>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          I am a Computer Science Engineering student at LPU with a strong interest in
          software development and problem solving. Currently, I am focusing on mastering
          C++ and Data Structures & Algorithms while also building web projects using modern technologies.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3">Programming</h3>
            <p className="text-gray-400">C, C++, Python</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3">Web Development</h3>
            <p className="text-gray-400">HTML, CSS, JavaScript, Next.js</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-3">Tools</h3>
            <p className="text-gray-400">Git, GitHub, Tailwind CSS</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-gray-800 p-6 rounded-xl hover:shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
            <p className="text-gray-400 mb-3">
              Personal portfolio built using Next.js and Tailwind CSS with responsive design.
            </p>
            <span className="text-blue-400 text-sm">Next.js • Tailwind</span>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl hover:shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-semibold mb-2">Student Management System</h3>
            <p className="text-gray-400 mb-3">
              Console-based C++ project implementing CRUD operations and file handling.
            </p>
            <span className="text-blue-400 text-sm">C++</span>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>

        <div className="bg-gray-800 p-6 rounded-xl">
          <p className="text-gray-300 mb-2">
            Email: <span className="text-blue-400">sahilgaurav62068@gmail.com</span>
          </p>
          <p className="text-gray-300">
            GitHub: <span className="text-blue-400">github.com/sahilgaurav01</span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 border-t border-gray-800">
        © {new Date().getFullYear()} Sahil Gaurav
      </footer>
    </div>
  );
}