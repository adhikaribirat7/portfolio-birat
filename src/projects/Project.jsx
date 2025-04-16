import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const projectsRef = useRef();
  const titleRef = useRef();
  const projectsListRef = useRef();

  useGSAP(() => {
    const tl = gsap
      .timeline({ paused: true })
      .from(titleRef.current, { opacity: 0, y: 30, duration: 0.8 })
      .from(
        projectsListRef.current.children,
        { opacity: 0, y: 20, duration: 0.6, stagger: 0.2 },
        "-=0.4"
      );

    ScrollTrigger.create({
      trigger: projectsRef.current,
      start: "top 90%",
      end: "bottom 10%",
      onEnter: () => tl.restart(),
      onEnterBack: () => tl.restart(),
    });
  }, { scope: projectsRef });

  return (
    <section
      ref={projectsRef}
      className="min-h-screen py-12 px-4 bg-black text-white flex flex-col items-center justify-center"
      aria-label="Projects Section"
    >
      <div className="max-w-4xl w-full space-y-8">
        <h2
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold tracking-tight text-center"
        >
          My Projects
        </h2>
        <div ref={projectsListRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">3D Portfolio Website</h3>
            <p className="text-gray-300 mb-4">
              A personal portfolio built with React and Three.js, featuring interactive 3D elements and smooth animations.
            </p>
            <a
              href="https://github.com/birat-adhikari/3d-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View on GitHub
            </a>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">E-Commerce Platform</h3>
            <p className="text-gray-300 mb-4">
              A full-stack e-commerce solution using React, Node.js, and MongoDB with a responsive UI and secure payment integration.
            </p>
            <a
              href="https://github.com/birat-adhikari/ecommerce"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View on GitHub
            </a>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Real-Time Chat App</h3>
            <p className="text-gray-300 mb-4">
              A chat application with real-time messaging using Socket.io, React, and Express.
            </p>
            <a
              href="https://github.com/birat-adhikari/chat-app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View on GitHub
            </a>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Weather Dashboard</h3>
            <p className="text-gray-300 mb-4">
              A weather app displaying real-time data using a public API, styled with Tailwind CSS and React.
            </p>
            <a
              href="https://github.com/birat-adhikari/weather-dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;