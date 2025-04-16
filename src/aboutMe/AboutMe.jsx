import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutMe = () => {
  const aboutRef = useRef();
  const titleRef = useRef();
  const textRef = useRef();
  const eduRef = useRef();
  const workRef = useRef();
  const skillsRef = useRef();

  useGSAP(
    () => {
      const tl = gsap
        .timeline({ paused: true })
        .from([titleRef.current, textRef.current], {
          opacity: 0,
          y: 30,
          duration: 0.8,
          stagger: 0.2,
        })
        .from(
          [eduRef.current, workRef.current],
          { opacity: 0, y: 30, duration: 0.8, stagger: 0.2 },
          "-=0.4"
        )
        .from(
          skillsRef.current.children,
          { opacity: 0, x: -20, duration: 0.6, stagger: 0.2 },
          "-=0.4"
        );

      ScrollTrigger.create({
        trigger: aboutRef.current,
        start: "top 90%",
        end: "bottom 10%",
        onEnter: () => tl.restart(),
        onEnterBack: () => tl.restart(),
      });
    },
    { scope: aboutRef }
  );

  return (
    <section
      ref={aboutRef}
      className="min-h-screen py-12 px-4 bg-black text-white flex flex-col items-center justify-center"
      aria-label="About Me Section"
    >
      <div className="max-w-4xl w-full space-y-8">
        <h2
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold tracking-tight text-center"
        >
          About Me
        </h2>
        <p
          ref={textRef}
          className="text-base md:text-lg leading-relaxed text-gray-300 text-center"
        >
          I'm Birat Adhikari, a full-stack developer and UI designer passionate
          about creating immersive digital experiences with React, Three.js, and
          more.
        </p>
        <div ref={eduRef} className="space-y-2">
          <h3 className="text-xl md:text-2xl font-semibold text-center">
            Education
          </h3>
          <p className="text-gray-300 text-center">
            B.Sc hons computing - london meteropolitian University
            <br />
            Focused on software engineering, web development.
          </p>
        </div>
        <div ref={workRef} className="space-y-2">
          <h3 className="text-xl md:text-2xl font-semibold text-center">
            Work Experience
          </h3>
          <p className="text-gray-300 text-center">
            Full-Stack Developer
            <br />
            Developed web applications using React and Node.js, integrating 3D
            visualizations.
            <br />
            UI Designer <br />
            Designed user interfaces for startups.
          </p>
        </div>
        <div
          ref={skillsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6"
        >
          <div className="bg-gray-700 p-4 rounded-lg text-center shadow-md">
            React
          </div>
          <div className="bg-gray-700 p-4 rounded-lg text-center shadow-md">
            Three.js
          </div>
          <div className="bg-gray-700 p-4 rounded-lg text-center shadow-md">
            Node.js
          </div>
          <div className="bg-gray-700 p-4 rounded-lg text-center shadow-md">
            Tailwind CSS
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
