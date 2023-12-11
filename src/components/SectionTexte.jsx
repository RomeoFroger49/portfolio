import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function SectionTexte() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const body = document.querySelector("body");
    const Hero = document.querySelector("#spanScroll");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gsap.to(body, {
            backgroundColor: "black",
            duration: 1,
          });
          gsap.to(Hero, {
            display: "none",
            duration: 0.5,
          });
        } else {
          gsap.to(body, { backgroundColor: "transparent", duration: 1 });
          gsap.to(Hero, {
            display: "flex",
            duration: 0.5,
          });
        }
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    observer.observe(section);

    // Cleanup the observer when the component is unmounted
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="mb-16 h-screen text-center flex items-center pt-12"
      content="presentation"
    >
      <p
        className="xl:text-2xl text-lg font-satoshiMedium  text-primary sm:leading-[5rem] leading-[3rem]"
        ref={sectionRef}
      >
        Roméo Froger, a third-year information sciences student, passionately
        explores front-end development. Combining creativity and expertise, his
        portfolio reflects an innovative vision for interactive design.
      </p>
    </section>
  );
}
