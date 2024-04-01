import React, { useState, useEffect } from "react";

export default function ButtonUp() {
  const [show, setShow] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
  }, []);

  return (
    <>
      {isMounted && (
        <button
          onClick={() => window.scrollTo(0, 0)}
          className={`${
            show ? "opacity-100" : "opacity-0"
          } fixed bottom-5 right-5 z-[10] bg-black text-background bg-primary mix-blend- p-2 rounded-full transition-opacity duration-300 md:hover:bg-[transparent] md:hover:text-primary`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </>
  );
}
