import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const ref = useRef(null);
  const mobileMenuRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useGSAP(
    () => {
      // Stagger the main children (title and nav section)
      gsap.from(ref.current.children, {
        duration: 1,
        y: -50,
        opacity: 0,
        stagger: 0.2,
      });

      // Stagger the <li> items and button inside the nav section
      gsap.from(".nav-item", {
        duration: 1,
        y: -50,
        opacity: 0,
        stagger: 0.2,
        delay: 0.4,
      });

      // Animate mobile menu when it opens - Faster stagger
      if (isOpen && mobileMenuRef.current) {
        gsap.from(mobileMenuRef.current.children, {
          duration: 0.3,
          y: -20,
          opacity: 0,
          stagger: 0.02, // Reduced from 0.05 to 0.02 for faster stagger
        });
      }
    },
    { scope: ref, dependencies: [isOpen] }
  );

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close mobile menu after clicking
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      ref={ref}
      className="fixed top-0 w-full bg-black z-50 flex text-white items-center cursor-pointer"
    >
      <a
        onClick={(e) => {
          e.preventDefault();
          handleScroll("home");
        }}
        href="#home"
        className="p-2 basis-1/2 font-bold text-3xl"
      >
        BIRAT ADHIKARI
      </a>
      <div className="flex p-2 basis-2/3 justify-evenly gap-4">
        {/* Desktop Menu */}
        <ul className="sm:flex hidden gap-4">
          <li className="p-2 nav-item">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("home");
              }}
            >
              Home
            </a>
          </li>
          <li className="p-2 nav-item">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("about");
              }}
            >
              About
            </a>
          </li>
          <li className="p-2 nav-item">
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("skills");
              }}
            >
              Skills
            </a>
          </li>
          <li className="p-2 nav-item">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("projects");
              }}
            >
              Projects
            </a>
          </li>
          <li className="p-2 nav-item">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("contact");
              }}
            >
              Contact
            </a>
          </li>
        </ul>
        <a
          href="/cv.pdf" // Adjust path to your CV file
          download
          className="border-2 p-2 cursor-pointer nav-item hidden sm:block"
          onMouseEnter={(e) =>
            gsap.to(e.target, {
              backgroundColor: "white",
              color: "black",
              duration: 0.3,
            })
          }
          onMouseLeave={(e) =>
            gsap.to(e.target, {
              backgroundColor: "transparent",
              color: "white",
              duration: 0.3,
            })
          }
        >
          Download CV
        </a>

        {/* Hamburger Icon for Mobile */}
        <button
          className="sm:hidden p-2 focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            ref={mobileMenuRef}
            className="absolute top-full left-0 w-full bg-black text-white sm:hidden flex flex-col items-center gap-4 py-4"
          >
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("home");
              }}
              className="p-2 nav-item"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("about");
              }}
              className="p-2 nav-item"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("projects");
              }}
              className="p-2 nav-item"
            >
              Projects
            </a>
            <a
              href="#skills"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("skills");
              }}
              className="p-2 nav-item"
            >
              Skills
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleScroll("contact");
              }}
              className="p-2 nav-item"
            >
              Contact
            </a>
            <a
              href="/cv.pdf"
              download
              className="border-2 p-2 cursor-pointer nav-item"
              onMouseEnter={(e) =>
                gsap.to(e.target, {
                  backgroundColor: "white",
                  color: "black",
                  duration: 0.3,
                })
              }
              onMouseLeave={(e) =>
                gsap.to(e.target, {
                  backgroundColor: "transparent",
                  color: "white",
                  duration: 0.3,
                })
              }
            >
              Download CV
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
