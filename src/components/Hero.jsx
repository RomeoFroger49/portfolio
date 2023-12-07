import React, { useEffect, textRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

export default function Hero() {
  const textRef = React.useRef(null);
  const text2Ref = React.useRef(null);
  const divRef = React.useRef(null);
  const subText = React.useRef(null);

  useEffect(() => {
    const text = textRef.current;
    const text2 = text2Ref.current;
    const sub = subText.current;
    const div = divRef.current;
    const phrase = "Hello, I'm";
    const mots = [" a developer", " a designer", " Roméo"];
    const newPhrase = "Welcome to my portfolio ";

    gsap
      .timeline()

      .to(text, {
        duration: 1,
        text: { value: phrase, delimiter: "" },
        ease: "power1.in",
      })
      .to(text2, {
        duration: 1,
        text: { value: mots[0], delimiter: "" },
        ease: "power1.in",
      })
      .to(text2, {
        duration: 1,
        text: { value: "", delimiter: "" },
        ease: "power1.in",
      })
      .to(text2, {
        duration: 1,
        text: { value: mots[1], delimiter: "" },
        ease: "power1.in",
      })
      .to(text2, {
        duration: 1,
        text: { value: "", delimiter: "" },
        ease: "power1.in",
      })
      .to(text2, {
        duration: 1,
        text: { value: mots[2], delimiter: "" },
        ease: "power1.in",
      })
      .to(div, {
        duration: 1,
        position: "absolute",
        top: "35%",
      })
      .to(sub, {
        duration: 1,
        text: { value: newPhrase, delimiter: "" },
        ease: "power1.in",
      });

    gsap.registerPlugin(TextPlugin);
  }, []);

  return (
    <section id="hero" content="hero" className="relative h-q-full">
      <div className="relative h-full flex flex-col items-center justify-center gap-3 xl:gap-[10rem] xl:leading-10 lg:leading-8 sm:leading-4 leading-3">
        <div ref={divRef} className="absolute flex">
          <h1
            ref={textRef}
            className=" xl:text-8xl lg:text-4xl sm:text-2xl text-xl
          font-satoshiBlack pr-2 sm:pr-6 text-satoshiBlack"
          ></h1>
          <h1
            ref={text2Ref}
            className=" xl:text-8xl lg:text-4xl sm:text-2xl text-xl
          font-satoshiBlack pr-2 text-satoshiBlack text-primary"
          ></h1>
        </div>

        <h1
          ref={subText}
          className=" xl:text-2xl lg:text-xl sm:text-lg text-base
          font-satoshiBlack xl:pr-12 sm:pr-4 text-satoshiBlack p-4"
        >
        </h1>
      </div>

      <div
        id="spanScroll"
        className="absolute right-[-65px] bottom-12 rotate-90 flex items-center gap-2"
      >
        <h3 className="text-text">scroll</h3>
        <span className="w-8 h-0.5  bg-primary border-1 scale 0 transform scale-0  scroll-typo-animation"></span>
      </div>
    </section>
  );
}
