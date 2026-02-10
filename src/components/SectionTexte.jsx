import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function SectionTexte() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const body = document.querySelector("body");
    const Hero = document.querySelector("#spanScroll");
    const texti = document.querySelectorAll("#i-section");

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
          gsap.to(texti, {
            color: "#1049C1",
            duration: 1,
          });
        } else {
          gsap.to(body, { backgroundColor: "transparent", duration: 1 });
          gsap.to(Hero, {
            display: "flex",
            duration: 0.5,
          });
          gsap.to(texti, {
            color: "rgb(209,209,200)",
            duration: 1,
          });
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="mb-16 h-screen text-left flex items-center pt-12"
      content="presentation"
    >
      <p
        className="xl:text-4xl text-lg font-satoshiMedium  text-[rgb(209,209,200)] sm:leading-[5rem] leading-[3rem]"
        ref={sectionRef}
      >
        <i id="i-section">Roméo Froger</i>, a first-year computer engineer
        student, I design and build modern, efficient web applications — from
        intuitive UI to robust back-end systems. Driven by curiosity, I’m also
        exploring <i id="i-section">DevOps</i> and{" "}
        <i id="i-section">applied AI</i> to create scalable, real-world
        solutions.
      </p>
    </section>
  );
}
