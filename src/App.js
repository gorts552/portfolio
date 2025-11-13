import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";

// Project data
const projects = [
  {
    title: "SisterCheck",
    description:
      "AI-Powered Ovarian Cyst Detection & Women's Health Management System with Flutter frontend, Node.js backend, and Python AI service.",
    tech: ["Flutter", "Node.js", "Python", "TensorFlow", "MongoDB"],
    link: "https://github.com/gorts552/sistercheck",
    image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "IRIS",
    description:
      "A reproductive health interactive system that provides educational content and symptom-based guidance via WhatsApp integration.",
    tech: ["Python", "Flask", "PostgreSQL", "Twilio"],
    link: "https://github.com/gorts552",
    image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "HEMA (in progress)",
    description:
      "Her Early Medical Assessment — a mobile-based system for cervical cancer and HPV risk prediction and patient support.",
    tech: ["Flutter", "Node.js", "Flask", "PostgreSQL"],
    link: "https://github.com/gorts552",
    image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    title: "Hackathon: Inventor Pipeline",
    description:
      "Contributed the data ingestion and preprocessing pipeline for a collaborative hackathon project focused on women's health diagnostics.",
    tech: ["Python", "Pandas", "Flask"],
    link: "https://github.com/gorts552",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
];

function App() {
  return (
    <div className="min-h-screen bg-background text-text">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-primary">Celine M.</h1>
          <div className="flex items-center space-x-6">
            <a href="#projects" className="text-text hover:text-primary transition-colors">
              Work
            </a>
            <a href="#contact" className="text-text hover:text-primary transition-colors">
              Contact
            </a>
            <div className="flex space-x-4">
              <a
                href="https://github.com/gorts552"
                target="_blank"
                rel="noreferrer"
                className="text-text/80 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/celine-m-253816361"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-blue-600"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
              Hi, I'm Celine Muthoni
            </h1>
            <p className="text-xl text-text/80 mb-8 max-w-2xl">
              Full Stack Developer passionate about building impactful solutions
              with modern technologies
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-primary text-primary rounded-lg font-medium hover:bg-primary/10 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
          
          {/* Profile Photo */}
          <div className="md:w-1/2 flex justify-center">
            <div className="w-56 h-64 md:w-72 md:h-80 rounded-[50%] overflow-hidden border-4 border-secondary/20 shadow-lg" style={{ borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%' }}>
              <img 
                src={process.env.PUBLIC_URL + '/assets/passport.jpg'} 
                alt="Celine Muthoni" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZWVlZWVlIi8+PHRleHQgeD0iNTAlIiB5PSI1JSIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iYmxhY2siPkNNPC90ZXh0Pjwvc3ZnPg=';
                  e.target.className = 'w-full h-full flex items-center justify-center bg-secondary/10';
                }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-3xl font-bold text-text mb-6">About Me</h2>
          <div className="space-y-6 text-text/90">
            <p>
              I'm a full stack developer passionate about building impactful
              digital solutions that blend technology with real-world problems
              and user needs. I'm especially drawn to creating tech solutions
              with empathy and the user in mind.
            </p>
            <p>
              I have worked primarily with Python, Node.js, Flutter, and Google
              Apps Script. I enjoy creating applications that are clean,
              efficient, and meaningful, and I'm always eager to learn and
              expand my technical skills.
            </p>

            <div className="pt-4">
              <h3 className="font-semibold text-gray-900 mb-3">
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "JavaScript",
                  "React",
                  "Node.js",
                  "Flask",
                  "PostgreSQL",
                  "MongoDB",
                  "Git",
                  "Docker",
                  "AWS",
                ].map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-secondary/10 text-text text-sm rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-text mb-4">
            My Projects
          </h2>
          <p className="text-text/80 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project
            represents a unique challenge and learning opportunity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-text mb-2">
                  {project.title}
                </h3>
                <p className="text-text/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-secondary/10 text-text text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  View on GitHub
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                      className="stroke-current"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-text mb-4">Get In Touch</h2>
            <p className="text-text/80 max-w-2xl mx-auto">
              Have a project in mind or want to chat? Feel free to reach out!
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Contact Info */}
              <div className="p-8 md:p-12 bg-primary text-white">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-white/20 p-3 rounded-lg mr-4">
                      <FiMail size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <a 
                        href="mailto:celinemuthoni16@gmail.com" 
                        className="text-white/90 hover:text-white hover:underline transition-colors break-all"
                      >
                        celinemuthoni16@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="pt-4">
                    <h4 className="font-medium mb-4">Follow Me</h4>
                    <div className="flex space-x-4">
                      <a
                        href="https://github.com/gorts552"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                        aria-label="GitHub"
                      >
                        <FiGithub size={20} />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/celine-m-253816361"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                        aria-label="LinkedIn"
                      >
                        <FiLinkedin size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold text-text mb-6">Send Me a Message</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text/80 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text/80 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text/80 mb-1">Message</label>
                    <textarea
                      id="message"
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-6 mt-16">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Celine Muthoni. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;




