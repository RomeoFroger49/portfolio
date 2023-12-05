import React, { useEffect, useRef } from "react";

export default function Hero() {
  return (
    <section content="hero" className="h-128 sm:h-256">
      <div className="h-full flex flex-col items-center justify-center gap-8 xl:gap-16 relative">
        <h1 className="xl:text-8xl sm:text-4xl text-xl  font-satoshiBlack xl:pr-12 sm:pr-4 text-primary transform scale-0 animate-enter-1  text-contour">
          Hello, I'm Roméo
        </h1>
        <h1 className="xl:text-8xl sm:text-4xl  text-xl font-satoshiBlack text-text  transform scale-0 animate-enter-2   text-contour">
          Hello, I'm Roméo
        </h1>
        <h1 className="xl:text-8xl sm:text-4xl text-xl font-satoshiBlack xl:pl-12 sm:pl-4 text-primary transform scale-0 animate-enter-3  text-contour">
          Hello, I'm Roméo
        </h1>
        <svg
          className="absolute z-[-2] mr-10  "
          width="70vw"
          viewBox="0 0 280 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_602_6)">
            <path
              d="M240.001 206.668C240.001 225.076 225.076 240.001 206.668 240.001C188.258 240.001 173.335 225.076 173.335 206.668C173.335 188.258 188.258 173.335 206.668 173.335C225.076 173.335 240.001 188.258 240.001 206.668ZM198.335 127.5C198.335 143.609 185.277 156.667 169.167 156.667C153.058 156.667 140 143.609 140 127.5C140 111.392 153.058 98.3325 169.167 98.3325C185.277 98.3325 198.335 111.393 198.335 127.5ZM140 190C140 217.614 117.614 240.001 89.999 240.001C62.3867 240.001 40 217.614 40 190C40 162.385 62.3867 140 89.999 140C117.614 140 140 162.385 140 190L140 190ZM123.336 81.668C123.336 104.68 104.68 123.336 81.668 123.336C58.6558 123.336 40 104.68 40 81.668C40 58.6558 58.6558 40 81.668 40C104.68 40 123.336 58.6558 123.336 81.668ZM240.001 65C240.001 78.8071 228.807 89.999 214.999 89.999C201.192 89.999 190 78.8071 190 64.9995C190 51.1924 201.192 40 215 40C228.807 40 240.001 51.1924 240.001 65H240.001ZM231.666 148.332C231.666 152.934 227.935 156.665 223.333 156.665C218.73 156.665 214.999 152.935 214.999 148.332C214.999 143.731 218.73 140 223.333 140C227.935 140 231.666 143.731 231.666 148.332ZM169.167 69.167C169.167 76.0718 163.572 81.668 156.667 81.668C149.764 81.668 144.168 76.0718 144.168 69.167C144.168 62.2646 149.764 56.6685 156.667 56.6685C163.571 56.6685 169.167 62.2642 169.167 69.167Z"
              fill="#184d67"
            />
          </g>
          <defs>
            <clipPath id="clip0_602_6">
              <rect
                width="200"
                height="200"
                fill="white"
                transform="translate(40 40)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </section>
  );
}
