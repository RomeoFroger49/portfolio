import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef } from "react";
import Skills from "./Skills";
import image from "../../assets/profil_picture.webp";

export default function Me() {

  return (
    <section id="me" className="h-screen">
      <div className="flex justify-center">
        <h1 className="xl:text-4xl lg:text-4xl sm:text-2xl text-xl px-1 font-satoshiBlack">
          About Me
        </h1>
      </div>

      <div className="flex sm:flex-row flex-col pt-4 sm:p-12 z-[-1]">
        <img className="sm:w-1/2 h-1/2" src={image} alt="" />

        <div className="p-6 relative h-auto text-center " id="container">
          <div className="flex flex-col sticky gap-8 top-0">
            <h1 className=" text-xl font-satoshiBold">Test</h1>
            <h2 className="font-satoshiMedium text-md">
              Roméo Froger, a third-year information sciences student, channels
              creativity and expertise into front-end development. My portfolio
              is a testament to my innovative vision for interactive design.
            </h2>

            <h2 className="font-satoshiMedium text-md">
              Y Roméo Froger, a third-year information sciences student,
              channels creativity and expertise into front-end development. My
              portfolio is a testament to my innovative vision for interactive
              design.
            </h2>
          </div>
        </div>
      </div>

      <Skills />
    </section>
  );
}
