// Importing components and libraries
import Header from '../app/components/Header';
import Footer from '../app/components/Footer';
import Image from 'next/image';

// Main Home Page Component
export default function Home() {
  return (
    <main className="flex flex-col items-center bg-gray-100 min-h-screen">
      {/* Header Component */}
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-blue-600 text-white py-20">
        <div className="container mx-auto flex flex-col items-center text-center">
          <h1 className="text-5xl font-bold mb-4">WELCOME TO MY PORTFOLIO</h1>
          <span className="text-xl font-serif text-red-800">A WEB DEVELOPER</span>
          <p className="text-lg mb-8">I’m a developer passionate about creating beautiful web experiences.</p>
          <a
            href="#about"
            className="bg-white text-blue-400 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
          >
            Learn More About Me
          </a>
        </div>

        {/* Responsive Image */}
        <div className="container mx-auto my-10 flex justify-evenly">
          <Image
            src="/rubab pic.jpeg"  // Ensure this matches your actual image file name in /public
            alt="Fashion Model"
            width={500}
            height={450}
            className="rounded-lg"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto flex flex-col items-center text-center">
          <h2 className="text-3xl font-semibold mb-4">Hello, I'm Arifa Rubab</h2>
          <p className="text-lg text-gray-700 max-w-2xl">
            I'm a passionate developer with experience in building responsive and user-friendly websites and applications.
            I love working with modern web technologies like Next.js, React, and Tailwind CSS to bring ideas to life.
          </p>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </main>
  );
}
