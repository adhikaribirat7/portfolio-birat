import React, { useRef } from "react";
import profile3 from "../assets/profile3.jpg";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef();
  const titleRef = useRef();
  const textRef = useRef();
  const imageRef = useRef();

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
          imageRef.current,
          { opacity: 0, scale: 0.8, rotate: 10, duration: 1 },
          "-=0.4"
        );

      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top 90%",
        end: "bottom 10%",
        onEnter: () => tl.restart(),
        onEnterBack: () => tl.restart(),
      });

      if (!window.scrollY) tl.play();
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      className="min-h-screen py-12 px-4 bg-black text-white flex flex-col sm:flex-row items-center justify-around"
      aria-label="Hero Section"
    >
      <div className="max-w-sm md:max-w-lg space-y-6 text-center sm:text-left">
        <h1
          ref={titleRef}
          className="text-3xl lg:text-5xl font-bold tracking-tight"
        >
          Welcome to My Portfolio
        </h1>
        <p ref={textRef} className="text-base lg:text-lg leading-relaxed">
          Hi, I'm Birat Adhikari, a full-stack developer and UI designer
          specializing in React, Three.js, and more.
        </p>
      </div>
      <div ref={imageRef} className="mt-8 sm:mt-0">
        <img
          src={profile3}
          className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-lg"
          alt="Birat Adhikari"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Hero;
