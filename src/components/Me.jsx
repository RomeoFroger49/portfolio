import image from "../../public/assets/profil_picture.webp";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect } from "react";

export default function Me() {
  const textRef = React.useRef(null);

  useEffect(() => {
    const text = textRef.current;

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(text, {
    scrollTrigger: {
      trigger: text,
      start: "top top",
      end: "bottom top",
      scrub: 1,
      pin: true,
    },
    y: 0,
    x: 0,
  });
  }, []);
  return (
    <section id="me" content="about" className="h-screen ">
      <div className="flex justify-center">
        <h1 className="xl:text-4xl lg:text-4xl sm:text-2xl text-xl px-1">
          About Me
        </h1>
      </div>

      <div className=" p-6 flex flex-col sm:flex-row">
        <div className="sm:w-1/2 p-6">
          <img src={image} alt="profil_picture" />
        </div>
        <div className=" p-6 flex flex-col items-center sm:w-1/2" ref={textRef}>
          <h1 className="text-xl font-satoshiBold pb-4"> Who I am ?</h1>
          <h2 className="text-center font-satoshiMedium pb-4">
            Roméo Froger, a third-year information sciences student, channels
            creativity and expertise into front-end development. My portfolio is
            a testament to my innovative vision for interactive design.
          </h2>
          <h2 className="text-center font-satoshiMedium pb-4">
            Roméo Froger, a third-year information sciences student, channels
            creativity and expertise into front-end development. My portfolio is
            a testament to my innovative vision for interactive design.
          </h2>
        </div>
      </div>
    </section>
  );
}
