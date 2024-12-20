"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PageHeaderSection1 = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000, // Animation duration in milliseconds
    });

    AOS.refresh();
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://videos.pexels.com/video-files/10628542/10628542-hd_1920_1080_30fps.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
          data-aos="fade-up"
        >
          Welcome to Paulfashion Export Co.
        </h1>
        <p
          className="text-sm sm:text-base md:text-lg mt-4 max-w-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Paul Fashion is a leading garments export unit specializing in knitted
          goods. In 1995, we have built a reputation for quality and reliability
          in the international market. Our commitment to excellence and customer
          satisfaction has allowed us to forge long-lasting partnerships with
          clients around the globe.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          {/* Banner 1 */}
          <div
            className="bg-black bg-opacity-50 p-4 sm:p-6 rounded-lg shadow-lg max-w-[90%] sm:max-w-xs"
            data-aos="fade-right"
          >
            <h2 className="text-lg sm:text-xl font-semibold">
              Exclusive Deals
            </h2>
            <p className="mt-2 text-sm">
              Find the best offers on our products.
            </p>
          </div>
          {/* Banner 2 */}
          <div
            className="bg-black bg-opacity-50 p-4 sm:p-6 rounded-lg shadow-lg max-w-[90%] sm:max-w-xs"
            data-aos="fade-left"
          >
            <h2 className="text-lg sm:text-xl font-semibold">New Arrivals</h2>
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
