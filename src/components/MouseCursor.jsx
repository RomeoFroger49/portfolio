import React, { useRef, useEffect, useState } from "react";

export default function MouseCursor() {

  

  const onMouseMove = (e) => {
    const cursor = document.querySelector("#cursor");
    cursor.style.left = e.pageX - 75 + "px";
    cursor.style.top = e.pageY - 100 + "px";
  };
  useEffect(() => {
    document.querySelectorAll("a").forEach((link) => {
      link.addEventListener("mouseenter", () => {
        const cursor = document.querySelector("#cursor");
        cursor.classList.add("hovered");
      });
      link.addEventListener("mouseleave", () => {
        const cursor = document.querySelector("#cursor");
        cursor.classList.remove("hovered");
      });
    });
  }, []);

  document.addEventListener("mousemove", onMouseMove);
  return (
    <div
      id="cursor"
      className="z-50 absolute rounded-full pointer-events-none hidden xl:block w-8 h-8 border-2 border-primary transition duration-300 ease-in-out "
    />
  );
}
