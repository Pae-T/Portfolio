// src/components/Portfolio.jsx
import React, { useEffect, useRef, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
} from "lucide-react";
// Import รูปภาพที่ด้านบนของไฟล์
// import agodaLogo from "../assets/companies/agoda.png";

const Portfolio = () => {
  const containerRef = useRef(null);
  const [showRightImage, setShowRightImage] = useState(true);

  // Reset scroll position when component mounts
  useEffect(() => {
    if (containerRef.current) {
      // Force scroll to top
      containerRef.current.scrollTop = 0;

      // Prevent any automatic scrolling
      document.body.style.overflow = "hidden";
    }
  }, []);

  // Smooth scroll handler
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  // Existing data
  const companies = [
    //     { id: 1, logo: "/api/placeholder/100/40", alt: "Agoda" },
    //     { id: 2, logo: "/api/placeholder/100/40", alt: "Company 2" },
    //     { id: 3, logo: "/api/placeholder/100/40", alt: "Company 3" },
    //     { id: 4, logo: "/api/placeholder/100/40", alt: "Company 4" },
    //     { id: 5, logo: "/api/placeholder/100/40", alt: "Company 5" },
  ];

  const specializations = [
    // {
    //   title: "Business Software",
    //   description: "Specialized in developing B2B SaaS solutions",
    // },
    // {
    //   title: "Growth Stage",
    //   description: "Helping companies scale from $3-5M to $30M+ in ARR",
    // },
    // {
    //   title: "Sector Expertise",
    //   description:
    //     "Deep domain expertise in technology and digital transformation",
    // },
  ];

  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Built a full-stack e-commerce platform with React, Node.js, and MongoDB",
      link: "#",
    },
    {
      title: "Task Management App",
      description:
        "Developed a collaborative task management application using React and Firebase",
      link: "#",
    },
    {
      title: "Weather Dashboard",
      description:
        "Created a weather dashboard using React and OpenWeather API",
      link: "#",
    },
  ];

  const skills = [
    "React",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "Python",
    "SQL",
    "MongoDB",
    "Git",
    "AWS",
    "Docker",
    "REST APIs",
    "GraphQL",
  ];

  // Track scroll position
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollPosition = container.scrollTop;
      const viewportHeight = container.clientHeight;

      // ปรับจุดที่จะให้รูปหายเร็วขึ้น
      setShowRightImage(scrollPosition < viewportHeight * 0.7);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const experiences = [
    {
      title: "Lead IT Support",
      company: "Company Name",
      period: "2020 - Present",
      description: [
        "Leading IT support team of 10 members, serving 10,000+ users across the organization",
        "Implementing service desk solutions that improved ticket resolution time by 40%",
        "Coordinating with vendors and stakeholders to ensure seamless IT operations",
        "Managing IT infrastructure and maintaining 99.9% system uptime",
      ],
    },
    {
      title: "Front-end Developer",
      company: "Vision Bootcamp",
      period: "2023",
      description: [
        "Completed intensive front-end development bootcamp focusing on modern web technologies",
        "Developed multiple projects using React, Next.js, and Tailwind CSS",
        "Collaborated with team members in agile environment for project deliveries",
        "Implemented responsive and accessible web applications",
      ],
    },
  ];

  // เพิ่มตัวแปรสำหรับเก็บ URL รูปภาพ
  const profileImageUrl =
    "https://raw.githubusercontent.com/Pae-T/Portfolio/main/src/assets/Profile.jpg";

  return (
    <div className="w-full h-screen flex overflow-hidden">
      <div
        ref={containerRef}
        className={`
          h-screen overflow-y-auto scroll-smooth snap-y snap-mandatory
          transition-all duration-500 ease-out
          ${showRightImage ? "w-[60%]" : "w-full"}
        `}
      >
        {/* Main Header */}
        <div
          className="sticky top-0 bg-white/90 backdrop-blur-sm z-20 p-6
          transition-all duration-300"
        >
          <h1 className="text-2xl font-light mb-2">THANAKORN JARUPANITKUL</h1>
          <nav className="space-x-6 text-sm text-gray-500">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-gray-900 transition-colors duration-300"
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="hover:text-gray-900"
            >
              EXPERIENCE
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="hover:text-gray-900"
            >
              SKILLS
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-gray-900"
            >
              CONTACT
            </button>
          </nav>
        </div>

        {/* Home Section */}
        <section
          id="home"
          className="min-h-screen px-12 snap-start flex flex-col justify-center"
        >
          <div>
            <h2 className="text-7xl font-light mb-6">
              Full Stack <span className="text-gray-400">Developer</span>
            </h2>

            <div className="space-y-4 max-w-2xl">
              <p className="text-gray-600 text-lg leading-relaxed">
                Problem-solving enthusiast with a unique blend of IT Support
                leadership and front-end development skills.
              </p>

              <p className="text-gray-600 text-lg leading-relaxed">
                Leveraging technical support background to create user-centric
                web solutions. Committed to transforming complex challenges into
                elegant, efficient implementations.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="min-h-screen px-12 snap-start flex flex-col justify-center"
        >
          <div>
            <h2 className="text-3xl font-light mb-12">Experience</h2>
            <div className="space-y-12 max-w-4xl">
              {experiences.map((exp, index) => (
                <div key={index} className="group">
                  <div className="flex items-baseline justify-between mb-2">
                    <h3 className="text-xl font-medium">{exp.title}</h3>
                    <span className="text-gray-500 text-sm">{exp.period}</span>
                  </div>
                  <div className="text-gray-600 mb-2">{exp.company}</div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    {exp.description.map((item, idx) => (
                      <li
                        key={idx}
                        className="group-hover:text-gray-900 transition-colors"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="min-h-screen px-12 snap-start flex flex-col justify-center"
        >
          <div>
            <h2 className="text-3xl font-light mb-12">Skills</h2>
            <div className="grid grid-cols-2 gap-4 max-w-4xl">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-gray-50 px-6 py-3 rounded-lg
                    hover:bg-gray-100 transition-colors
                    flex items-center"
                >
                  <span className="text-gray-800">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen px-12 pb-24 snap-start flex flex-col justify-center"
        >
          <div>
            <h2 className="text-3xl font-light mb-6">Get In Touch</h2>
            <div className="max-w-2xl space-y-6">
              <p className="text-gray-600 text-lg">
                I'm always open to new opportunities and interesting projects.
              </p>

              {/* Social Links */}
              <div className="flex items-center space-x-6">
                <a
                  href="mailto:jarupanitkul@gmail.com"
                  className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2"
                >
                  {/* Email Icon */}
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>Email</span>
                </a>

                <a
                  href="https://github.com/Pae-T"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2"
                >
                  {/* GitHub Icon */}
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                  <span>GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/thanakorn-jarupanitkul-3bbb291aa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2"
                >
                  {/* LinkedIn Icon */}
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Right Image Section */}
      <div
        className={`
          bg-blue-50 relative
          transition-all duration-300 ease-out
          overflow-hidden
          ${showRightImage ? "w-[40%]" : "w-0"}
          ${showRightImage ? "delay-0" : "delay-1"}
        `}
      >
        <div
          className={`
            sticky top-0 h-screen
            transition-transform duration-300 ease-out
            ${
              showRightImage
                ? "translate-x-0 delay-0"
                : "translate-x-full delay-0"
            }
          `}
        >
          {/* Profile Image */}
          <img
            src={profileImageUrl}
            alt="Profile"
            className={`
              h-full w-full object-cover object-center
              transition-all duration-300 ease-out
            `}
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
