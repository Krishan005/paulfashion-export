"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PageHeaderSection1 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation easing
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://cdn.pixabay.com/video/2019/05/17/23759-337232393_large.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold" data-aos="fade-up">
          Welcome to Paulfashion Export Co.
        </h1>
        <p
          className="text-sm[10] md:text-xl mt-4 max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Paulfashion Export Co. is engaged in importing and marketing a wide
          range of high-quality garment goods to the international market. Our
          product portfolio includes stylish men’s and women’s apparel, casual
          wear, formal wear, children’s clothing, fashion accessories, and
          premium fabrics. With a focus on current trends and exceptional
          craftsmanship, we provide garments that meet the demands of global
          markets while ensuring superior quality and customer satisfaction."
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {/* Banner 1 */}
          <div
            className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg max-w-xs"
            data-aos="fade-right"
          >
            <h2 className="text-xl font-semibold">Exclusive Deals</h2>
            <p className="mt-2 text-sm">
              Find the best offers on our products.
            </p>
          </div>
          {/* Banner 2 */}
          <div
            className="bg-black bg-opacity-50 p-6 rounded-lg shadow-lg max-w-xs"
            data-aos="fade-left"
          >
            <h2 className="text-xl font-semibold">New Arrivals</h2>
            <p className="mt-2 text-sm">
              Check out our latest product collections.
            </p>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-5"></div>
    </div>
  );
};

export default PageHeaderSection1;
