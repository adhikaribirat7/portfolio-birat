import React, { useRef, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContactMe = () => {
  const contactRef = useRef();
  const titleRef = useRef();
  const formRef = useRef();
  const detailsRef = useRef();
  const hiddenSubmitRef = useRef(); // Added ref for hidden submit button

  const [state, handleSubmit, reset] = useForm("mwplbvzo"); // Replace with your Formspree ID

  useGSAP(
    () => {
      const tl = gsap
        .timeline({ paused: true })
        .from(titleRef.current, { opacity: 0, y: 30, duration: 0.8 })
        .from(
          formRef.current.children,
          { opacity: 0, y: 20, duration: 0.6, stagger: 0.2 },
          "-=0.4"
        )
        .from(
          detailsRef.current.children,
          { opacity: 0, x: -20, duration: 0.6, stagger: 0.2 },
          "-=0.4"
        );

      ScrollTrigger.create({
        trigger: contactRef.current,
        start: "top 90%",
        end: "bottom 10%",
        onEnter: () => tl.restart(),
        onEnterBack: () => tl.restart(),
      });
    },
    { scope: contactRef }
  );

  // Reset form after success message
  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        reset(); // Reset form state to show the form again
      }, 2000); // 2 seconds delay (adjusted from 3 for consistency)

      return () => clearTimeout(timer); // Cleanup timeout on unmount
    }
  }, [state.succeeded, reset]);

  if (state.succeeded) {
    return (
      <section
        ref={contactRef}
        className="min-h-screen py-12 px-4 bg-black text-white flex flex-col items-center justify-center"
        aria-label="Contact Section"
      >
        <div className="max-w-4xl w-full space-y-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Thanks for Your Message!
          </h2>
          <p className="text-gray-300">I'll get back to you soon.</p>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={contactRef}
      className="min-h-screen py-12 px-4 bg-black text-white flex flex-col items-center justify-center"
      aria-label="Contact Section"
    >
      <div className="max-w-4xl w-full space-y-8">
        <h2
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold tracking-tight text-center"
        >
          Get in Touch
        </h2>
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
          <form ref={formRef} onSubmit={handleSubmit} className="flex-1 space-y-4">
            <div>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 bg-white rounded-lg text-black placeholder-gray-400 focus:outline-none"
                required
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 bg-white rounded-lg text-black placeholder-gray-400 focus:outline-none"
                required
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="4"
                className="w-full p-3 resize-none bg-white rounded-lg text-black placeholder-gray-400 focus:outline-none"
                required
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
              />
            </div>
            {/* Hidden submit button */}
            <input
              type="submit"
              ref={hiddenSubmitRef}
              style={{ display: "none" }}
            />
            <button
              type="button" // Changed from type="submit"
              onClick={() => hiddenSubmitRef.current.click()} // Trigger hidden submit button
              disabled={state.submitting}
              className="border-2 w-full p-2 cursor-pointer"
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
              {state.submitting ? "Sending..." : "Submit"}
            </button>
          </form>
          <div ref={detailsRef} className="flex-1 space-y-4 text-center md:text-left">
            <p className="text-gray-300">
              <span className="font-semibold">Email:</span> biratadhikari513@gmail.com
            </p>
            <p className="text-gray-300">
              <span className="font-semibold">Location:</span> Nepal, Pokhara-1-Bagar
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;