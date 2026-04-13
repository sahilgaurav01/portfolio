export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 border-b bg-white sticky top-0 z-50">
        <h1 className="text-xl font-bold text-blue-600">Sahil</h1>
        <div className="space-x-6 text-gray-600">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#skills" className="hover:text-blue-600">Skills</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <header className="text-center py-20 bg-gray-50 px-6">
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm <span className="text-blue-600">Sahil Gaurav</span>
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Software Engineering student focused on C++, Data Structures & Algorithms,
          and building scalable web applications.
        </p>

        <div className="space-x-4">
          <a href="#projects" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            View Projects
          </a>
          <a href="/resume.pdf" className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-100 transition">
            Download Resume
          </a>
        </div>
      </header>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          I am a Computer Science Engineering student at Lovely Professional University (LPU)
          with a strong interest in software development and problem solving.
          I am currently focused on mastering C++ and Data Structures & Algorithms
          to build efficient and scalable solutions. I also have hands-on experience
          in web development using modern technologies.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-8">Technical Skills</h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-3">Programming</h3>
              <p className="text-gray-600">C, C++, Python</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-3">Web Development</h3>
              <p className="text-gray-600">HTML, CSS, JavaScript, Next.js</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-3">Tools & Concepts</h3>
              <p className="text-gray-600">Git, GitHub, OOP, DBMS</p>
            </div>

          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-8">Selected Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="border p-6 rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
            <p className="text-gray-600 mb-3">
              Responsive personal portfolio built using Next.js and Tailwind CSS
              to showcase projects and skills.
            </p>
            <p className="text-sm text-blue-600 mb-3">Next.js • Tailwind CSS</p>
            <a href="#" className="text-blue-600 hover:underline">GitHub →</a>
          </div>

          <div className="border p-6 rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Python Mini Projects</h3>
            <p className="text-gray-600 mb-3">
              Collection of Python scripts exploring automation, data handling,
              and problem solving.
            </p>
            <p className="text-sm text-blue-600 mb-3">Python</p>
            <a href="#" className="text-blue-600 hover:underline">GitHub →</a>
          </div>

          <div className="border p-6 rounded-xl hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">C++ Problem Solving</h3>
            <p className="text-gray-600 mb-3">
              Implementations of data structures and algorithms to improve
              problem-solving skills.
            </p>
            <p className="text-sm text-blue-600 mb-3">C++ • DSA</p>
            <a href="#" className="text-blue-600 hover:underline">GitHub →</a>
          </div>

        </div>
      </section>

      {/* Achievements */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-semibold mb-6">Achievements</h2>
          <ul className="text-gray-700 space-y-2">
            <li>• Practicing Data Structures & Algorithms in C++</li>
            <li>• Built multiple projects in Python and Web Development</li>
            <li>• Strong understanding of OOP and DBMS fundamentals</li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-4">Get In Touch</h2>

        <div className="bg-gray-50 p-6 rounded-xl">
          <p className="text-gray-700 mb-2">
            Email: <span className="text-blue-600">sahilgaurav62068@gmail.com</span>
          </p>
          <p className="text-gray-700">
            GitHub: <span className="text-blue-600">github.com/sahilgaurav01</span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 border-t">
        © {new Date().getFullYear()} Sahil Gaurav. All rights reserved.
      </footer>

    </div>
  );
}