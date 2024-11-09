import Header from '../components/Header';
import Footer from '../components/Footer';


// Contact Section with Contact Button

export default function Contact() {
    return (
        <div>
            <Header />
      <section id="contact" className="py-20 bg-blue-50">
        <div className="container mx-auto flex flex-col items-center text-center">
          <h2 className="text-3xl font-semibold mb-6 text-blue-800">Get in Touch</h2>
          <p className="text-lg text-gray-700 max-w-2xl mb-8">
            I'd love to hear from you! Whether you have a question, a project idea, or just want to connect, feel free to reach out.
          </p>
  
          {/* Contact Button */}
          <a
            href="mailto:rubabarifa@gmail.com" // Replace with your email address
            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Contact Me
          </a>
          
          {/* Additional Contact Options (optional) */}
          <p className="text-md text-gray-600 mt-6">
            Or connect with me on LinkedIn and Facebook for more updates.
          </p>
          
          <div className="flex space-x-4 mt-4">
            <a
              href="https://https://www.linkedin.com/in/arifa-rubab-bb54122b5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://www.facebook.com/in/rubabayub413"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition"
            >
              Facebook
            </a>
          </div>
        </div>
      </section>
      <Footer />
      </div>
    );
  }
  