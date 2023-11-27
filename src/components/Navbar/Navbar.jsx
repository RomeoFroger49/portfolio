import React from "react";
import NavLinksButton from "./NavLinksButton";

export default function Navbar() {
  const navLinks = ["projects", "me", "contact"];

  return (
    <nav className="navbar flex justify-between pb-4 sm:text-md text-xs transition scale-0 animate-enter-nav">
      <a className="navbar-brand font-satoshiBold text-primary" href="#">
        Roméo
      </a>
      <div className="flex w-1/2 justify-evenly font-satoshiMedium">
        {navLinks.map((link, index) => (
          <NavLinksButton name={link} key={index} />
        ))}
      </div>
    </nav>
  );
}
