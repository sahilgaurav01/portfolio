export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <header className="text-center py-10">
        <h1 className="text-4xl font-bold">Sahil Gaurav</h1>
        <p className="text-gray-400 mt-2">
          B.Tech CSE Student | Aspiring Software Engineer
        </p>
      </header>

      <section className="max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl font-semibold mb-3">About Me</h2>
        <p className="text-gray-300">
          I am a Computer Science student at LPU, focused on learning C++ and Python.
          I aim to become a software engineer and build strong problem-solving skills.
        </p>
      </section>

      <section className="max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl font-semibold mb-3">Skills</h2>
        <ul className="grid grid-cols-2 gap-4 text-gray-300">
          <li>C++</li>
          <li>Python</li>
          <li>HTML & CSS</li>
          <li>Tailwind CSS</li>
          <li>Next.js</li>
          <li>Git & GitHub</li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl font-semibold mb-3">Projects</h2>
        <div className="space-y-4">
          <div className="bg-gray-800 p-4 rounded-xl">
            <h3 className="text-xl font-semibold">Portfolio Website</h3>
            <p className="text-gray-400">Built using Next.js and Tailwind CSS</p>
          </div>

          <div className="bg-gray-800 p-4 rounded-xl">
            <h3 className="text-xl font-semibold">Student Management System</h3>
            <p className="text-gray-400">C++ console project with CRUD operations</p>
          </div>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mb-10">
        <h2 className="text-2xl font-semibold mb-3">Contact</h2>
        <p className="text-gray-300">Email:sahilgaurav62068@gmail.com</p>
        <p className="text-gray-300">GitHub: github.com/sahilgaurav01</p>
      </section>

      <footer className="text-center text-gray-500 mt-10">
        © {new Date().getFullYear()} Sahil Gaurav
      </footer>
    </div>
  );
}