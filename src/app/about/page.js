import Header from '../components/Header';
import Footer from '../components/Footer';

// About Section with LinkedIn and Facebook links

export default function About() {
    return (
        <div>
            <Header />
      <section id="about" className="py-20 bg-gray-100">
        <div className="container mx-auto flex flex-col items-center text-center">
          <h2 className="text-3xl font-semibold mb-6">Hello, I'm Arifa Rubab</h2>
          <p className="text-lg text-gray-700 max-w-3xl mb-8">
            I’m a passionate web developer with experience in building responsive, user-friendly websites and applications.
            I specialize in modern web technologies like Next.js, React, and Tailwind CSS, aiming to create beautiful, functional experiences.
          </p>
          
          <div className="flex justify-center space-x-6">
            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/arifa-rubab-bb54122b5 "
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              LinkedIn
            </a>
            
            {/* Facebook Button */}
            <a
              href="https://www.facebook.com/in/rubabayub413"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-900 transition"
            >
              Facebook
            </a>

           {/* Instagram*/}
           <a
              href="https://www.instagram.com/rubabayub413"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-900 transition"
            >
              Instagram
            </a>
          </div>
  
  
          <p className="text-md text-gray-600 mt-6">
            Feel free to connect with me on LinkedIn or Facebook to discuss projects or collaborations. Let's bring your ideas to life!
          </p>
        </div>
      </section>
      <Footer />
      </div>
    );
  }
  