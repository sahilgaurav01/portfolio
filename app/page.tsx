"use client";

import { motion } from "framer-motion";

export default function Home() {

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("sahilgaurav62068@gmail.com");
    alert("Email copied!");
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 border-b sticky top-0 bg-white z-50">
        <h1 className="text-xl font-bold text-blue-600">Sahil</h1>
        <div className="space-x-6 text-gray-600">
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>
      </nav>

      {/* Hero */}
      <motion.header 
        initial="hidden"
        animate="show"
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="text-center py-24 bg-gray-50 px-6"
      >
        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm <span className="text-blue-600">Sahil Gaurav</span>
        </h1>

        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Software Engineering student focused on C++, DSA, and building scalable applications.
        </p>

        <div className="space-x-4">
          <a href="#projects" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:scale-105 transition">
            View Projects
          </a>

          <button 
            onClick={copyEmail}
            className="border px-6 py-2 rounded-lg hover:bg-gray-100 transition hover:scale-105"
          >
            Copy Email
          </button>
        </div>
      </motion.header>

      {/* About */}
      <motion.section 
        id="about"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-6 py-16"
      >
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>

        <p className="text-gray-700 leading-relaxed">
          I am a Computer Science Engineering student at LPU, focused on mastering C++,
          Data Structures & Algorithms, and building scalable software systems.
          I enjoy solving problems and continuously improving my development skills.
        </p>
      </motion.section>

      {/* Projects */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-8">Projects</h2>

        <div className="grid md:grid-cols-2 gap-6">

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="border p-6 rounded-xl hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-2">Portfolio Website</h3>
            <p className="text-gray-600 mb-3">
              Modern responsive portfolio using Next.js and Tailwind CSS.
            </p>
            <a href="#" className="text-blue-600 hover:underline">GitHub →</a>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="border p-6 rounded-xl hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-2">Student Management System</h3>
            <p className="text-gray-600 mb-3">
              C++ system implementing CRUD operations and file handling.
            </p>
            <a href="#" className="text-blue-600 hover:underline">GitHub →</a>
          </motion.div>

        </div>
      </section>

      {/* Contact */}
      <motion.section 
        id="contact"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto px-6 py-16"
      >
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>

        <div className="bg-gray-50 p-6 rounded-xl">
          <p className="text-gray-700 mb-2">Email: sahilgaurav62068@gmail.com</p>
          <p className="text-gray-700 mb-4">GitHub: github.com/sahilgaurav01</p>

          <button 
            onClick={copyEmail}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 hover:scale-105 transition"
          >
            Copy Email
          </button>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="text-center text-gray-500 py-6 border-t">
        © {new Date().getFullYear()} Sahil Gaurav
      </footer>

    </div>
  );
}