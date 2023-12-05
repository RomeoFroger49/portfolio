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
      className="mb-16 h-screen text-center flex items-center"
      id="projects"
      content="presentation"
    >
      <p
        className="xl:text-2xl sm:text-xl  text-primary-300 leading-[3.5rem]"
        ref={sectionRef}
      >
        Passionate explorer in the realm of front-end development, Roméo Froger,
        a third-year student in information sciences, shapes his journey with
        overflowing creativity and growing expertise. Dive into my portfolio to
        discover the intersection of my programming passion and innovative
        vision for interactive design.
      </p>
    </section>
  );
}
