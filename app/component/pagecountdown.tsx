"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PageCountDown = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0; // Initial counter value
    const end = 5862; // Target value for "happy customers"
    const duration = 3000; // Duration in milliseconds (2 seconds)
    const increment = Math.ceil(end / (duration / 20)); // Smooth increment

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end); // Set the final value
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 20);

    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing
      once: false, // Whether animation should happen only once
      mirror: true,
    });

    AOS.refresh();
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h2
        className="text-4xl font-bold mb-4 text-orange-500"
        data-aos="fade-up" // AOS animation
      >
        Our Happy Customers
      </h2>
      <div
        className="text-6xl font-extrabold animate-pulse"
        data-aos="zoom-in" // AOS animation
        data-aos-delay="200" // Delay the animation slightly
      >
        {count.toLocaleString()}+
      </div>
      <p
        className="text-lg mt-4 text-gray-400"
        data-aos="fade-down" // AOS animation
      >
        Thank you for being a part of our journey!
      </p>
    </div>
  );
};

export default PageCountDown;
