"use client";

import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll: any = () => {
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
      <h1 className="text-2xl font-bold">Paulfashion Export Co.</h1>
      <span>Page is in maintenance...</span>
      <nav className="flex gap-4">
        <a href="#about" className="hover:underline">
          About
        </a>
        <a href="#products" className="hover:underline">
          Products
        </a>
        <a href="#contact" className="hover:underline">
          Contact
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
