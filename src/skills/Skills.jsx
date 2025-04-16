import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const skillsRef = useRef();
  const titleRef = useRef();
  const skillsListRef = useRef();

  useGSAP(() => {
    const tl = gsap
      .timeline({ paused: true })
      .from(titleRef.current, { opacity: 0, y: 30, duration: 0.8 })
      .from(
        skillsListRef.current.children,
        { opacity: 0, y: 20, duration: 0.6, stagger: 0.2 },
        "-=0.4"
      );

    ScrollTrigger.create({
      trigger: skillsRef.current,
      start: "top 90%",
      end: "bottom 10%",
      onEnter: () => tl.restart(),
      onEnterBack: () => tl.restart(),
    });
  }, { scope: skillsRef });

  return (
    <section
      ref={skillsRef}
      id="skills" // Added ID for navigation
      className="min-h-screen py-12 px-4 bg-black text-white flex flex-col items-center justify-center"
      aria-label="Skills Section"
    >
      <div className="max-w-4xl w-full space-y-8">
        <h2
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold tracking-tight text-center"
        >
          My Skills
        </h2>
        <div
          ref={skillsListRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">React</h3>
            <p className="text-gray-300">
              Building dynamic, responsive UIs with hooks, state management, and component-based architecture.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">JavaScript</h3>
            <p className="text-gray-300">
              Proficient in ES6+, asynchronous programming, and DOM manipulation.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Tailwind CSS</h3>
            <p className="text-gray-300">
              Crafting modern, utility-first designs with responsive layouts.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">GSAP</h3>
            <p className="text-gray-300">
              Creating smooth animations and scroll-triggered effects for engaging user experiences.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Node.js</h3>
            <p className="text-gray-300">
              Developing server-side applications and APIs with Express.
            </p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Git</h3>
            <p className="text-gray-300">
              Version control and collaboration using Git and GitHub workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;