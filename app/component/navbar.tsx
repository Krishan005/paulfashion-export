"use client";

import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 70);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full py-4 px-8 flex justify-between items-center transition-all duration-300 z-50 ${
        isScrolled
          ? "bg-gray-900 text-white shadow-lg"
          : "bg-transparent text-white"
      }`}
    >
      <h1
        className="text-2xl font-bold"
        onClick={() => (window.location.href = "/")}
      >
        Paulfashion Export Co.
      </h1>
      {/* <span>Page is in mentainence...</span> */}
      <button
        className="sm:hidden text-white text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <nav
        className={`${
          isMenuOpen
            ? "flex flex-col bg-gray-900 sm:bg-transparent text-center"
            : "hidden"
        } sm:flex sm:flex-row sm:gap-4 gap-2 absolute sm:static top-16 left-0 w-full sm:w-auto py-4 sm:py-0`}
      >
        <a
          href="#about"
          className="hover:underline text-sm md:text-base py-2 sm:py-0"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </a>
        <a
          href="#products"
          className="hover:underline text-sm md:text-base py-2 sm:py-0"
          onClick={() => setIsMenuOpen(false)}
        >
          Products
        </a>
        <a
          href="#contact"
          className="hover:underline text-sm md:text-base py-2 sm:py-0"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
