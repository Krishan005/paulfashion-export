"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import WorldMap from "react-svg-worldmap";

const data: any = [
  { country: "cn", value: 1444216107 }, // China
  { country: "in", value: 1393409038 }, // India
  { country: "us", value: 332915073 }, // United States
  { country: "id", value: 276361783 }, // Indonesia
  { country: "pk", value: 225199937 }, // Pakistan
  { country: "br", value: 213993437 }, // Brazil
  { country: "ng", value: 211400708 }, // Nigeria
  { country: "bd", value: 166303498 }, // Bangladesh
  { country: "ru", value: 145912025 }, // Russia
  { country: "mx", value: 130262216 }, // Mexico
  { country: "jp", value: 125836021 }, // Japan
  { country: "et", value: 118616350 }, // Ethiopia
  { country: "ph", value: 113891327 }, // Philippines
  { country: "eg", value: 104258327 }, // Egypt
  { country: "vn", value: 97475377 }, // Vietnam
  { country: "cd", value: 92378009 }, // DR Congo
  { country: "tr", value: 85814256 }, // Turkey
  { country: "ir", value: 85028760 }, // Iran
  { country: "de", value: 83155031 }, // Germany
  { country: "th", value: 69830779 }, // Thailand
  { country: "gb", value: 67326569 }, // United Kingdom
  { country: "fr", value: 65273511 }, // France
  { country: "it", value: 60367477 }, // Italy
  { country: "za", value: 59308690 }, // South Africa
  { country: "tz", value: 57637628 }, // Tanzania
  { country: "mm", value: 54817919 }, // Myanmar
  { country: "kr", value: 51780579 }, // South Korea
  { country: "co", value: 51265851 }, // Colombia
  { country: "ke", value: 47564296 }, // Kenya
  { country: "es", value: 47351567 }, // Spain
  { country: "ar", value: 45605826 }, // Argentina
  { country: "ug", value: 45741007 }, // Uganda
  { country: "ua", value: 41660982 }, // Ukraine
  { country: "dz", value: 43053054 }, // Algeria
  { country: "sd", value: 43849269 }, // Sudan
  { country: "iq", value: 40222503 }, // Iraq
  { country: "af", value: 38928341 }, // Afghanistan
  { country: "pl", value: 38386000 }, // Poland
  { country: "ca", value: 38005238 }, // Canada
  { country: "ma", value: 36910560 }, // Morocco
  { country: "sa", value: 34813871 }, // Saudi Arabia
  { country: "uz", value: 33469203 }, // Uzbekistan
  { country: "my", value: 32365999 }, // Malaysia
  { country: "pe", value: 32971854 }, // Peru
  { country: "ao", value: 32866272 }, // Angola
  { country: "gh", value: 31072940 }, // Ghana
  { country: "ne", value: 24206644 }, // Niger
  { country: "np", value: 29136808 }, // Nepal
  { country: "ve", value: 28435940 }, // Venezuela
  { country: "au", value: 25687041 }, // Australia
  { country: "cm", value: 26545863 }, // Cameroon
  { country: "mg", value: 27691019 }, // Madagascar
  { country: "ci", value: 26378274 }, // Ivory Coast

  // Add other countries if necessary
];

const PageExport = () => {
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
    <div className="flex flex-col md:flex-row bg-white">
      {/* Left Section */}
      <div
        className="w-full md:w-1/2 relative bg-black text-white p-6 md:p-12"
        data-aos="fade-right"
      >
        <h3 className="text-orange-400 font-semibold text-sm uppercase mb-4">
          Why Choose Us?
        </h3>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Exports / Imports
        </h2>
        <p className="text-gray-300 mb-6">
          Our network is spread all over the world including India. The
          countries in which we deal are inclusive of:
        </p>
        <div className="flex justify-between">
          {/* Exports List */}
          <div data-aos="fade-up" data-aos-delay="200">
            <h4 className="text-xl font-semibold mb-2">Exports</h4>
            <ul className="space-y-1 text-gray-300">
              <li>✔ Sri Lanka</li>
              <li>✔ Malaysia</li>
              <li>✔ Bangladesh</li>
              <li>✔ UAE</li>
              <li>✔ Singapore</li>
              <li>✔ Russia</li>
              <li>✔ Djibouti</li>
              <li>✔ Benin</li>
              <li>✔ Afghanistan</li>
            </ul>
          </div>
          {/* Imports List */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h4 className="text-xl font-semibold mb-2">Imports</h4>
            <ul className="space-y-1 text-gray-300">
              <li>✔ Canada</li>
              <li>✔ Australia</li>
              <li>✔ Myanmar</li>
              <li>✔ Tanzania</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div
        className="w-full md:w-1/2 relative"
        data-aos="fade-left"
        data-aos-delay="600"
      >
        <div className="h-full">
          <div
            className="min-h-screen flex items-center justify-center"
            style={{
              backgroundColor: "#121212", // Dark background
              color: "#ffffff", // Light text color
              padding: "20px",
            }}
          >
            <div
              style={{
                backgroundColor: "#1e1e1e", // Darker card background
                borderRadius: "8px",
                padding: "20px",
                boxShadow: "0 4px 6px rgba(253, 245, 245, 0.4)",
              }}
            >
              <h2
                style={{
                  textAlign: "center",
                  marginBottom: "10px",
                  color: "#f2f2f2",
                }}
              >
                Most Export Countries
              </h2>
              <WorldMap
                color="orange" // Map fill color (orange for dark theme)
                backgroundColor="#ffffff" // Map background
                title="Top 10 Populous Countries"
                value-suffix="people"
                size="lg"
                data={data}
                frame={true}
              />
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-2 bg-orange-500"></div>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-orange-500"></div>
        </div>
      </div>
    </div>
  );
};

export default PageExport;
