"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUsPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing
      once: false, // Whether animation should happen only once
      mirror: true,
    });

    AOS.refresh();
  }, []);

  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-white p-8">
      {/* Left: Image Section */}
      <div
        className="w-full md:w-1/2 flex justify-center"
        data-aos="fade-right"
      >
        <div className="relative border-4 border-orange-600">
          <img
            src="https://img.freepik.com/free-photo/full-shot-women-shopping-together_23-2149241336.jpg?t=st=1734464350~exp=1734467950~hmac=9e623c574fd3877726526f450dc5747bd6e652395bc788a3a162f07feccc79ba&w=360" // Replace with your image path
            alt="Products"
            className="w-full h-auto"
          />
          <div className="absolute top-0 left-0 w-12 h-12 bg-orange-600"></div>
        </div>
      </div>

      {/* Right: Content Section */}
      <div
        className="w-full md:w-1/2 mt-8 md:mt-0 md:ml-8"
        data-aos="fade-left"
      >
        <h3 className="text-xl font-bold text-orange-600">ABOUT</h3>
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">
          Paulfashion Export Co
        </h2>
        <p className="text-gray-600 mb-4 leading-relaxed">
          Our Company is engaged into trading and marketing of garments product
          and clothing of men, women, and children and accessories. We are
          expert in the field of trade and marketing of garments product and
          clothing of men, women, and children and accessories.
        </p>
        <button className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700">
          Read More
        </button>

        <div className="mt-6 text-gray-700">
          Call to ask any question:{" "}
          <span className="text-orange-600 font-semibold">
            +91-33-22811396/97
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutUsPage;
