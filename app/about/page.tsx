"use client";

import React, { useEffect } from "react";
import "tailwindcss/tailwind.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Navbar from "../component/navbar";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      once: true,
    });
  }, []);

  return (
    <>
      {/* Header Section */}
      <Navbar />

      {/* Parallax Video Background */}
      <div className="relative h-screen overflow-hidden">
        <video
          src="https://videos.pexels.com/video-files/10628544/10628544-hd_1920_1080_30fps.mp4"
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white text-center">
            Welcome to Paul Fashion
          </h1>
        </div>
      </div>

      {/* About Section */}
      <section className="bg-gray-800 text-white py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mt-9">About Us</h2>
          <div
            className="flex flex-col lg:flex-row items-center gap-6"
            data-aos="fade-right"
          >
            <img
              src="https://firebasestorage.googleapis.com/v0/b/mystorage-52d11.appspot.com/o/Paulfashion%20Garment%20exporter.jpg?alt=media&token=308fa0d6-e6ba-45d0-8df0-5a14cdc58df9"
              alt="Product Image"
              className="w-full lg:w-1/3 rounded shadow-md h-auto lg:h-auto"
            />

            <p className="text-gray-300 leading-relaxed" data-aos="fade-left">
              Welcome to Paul Fashion, where style meets quality. Established in
              1995, we are a prominent garments export unit based in Kolkata,
              India, dedicated to providing exquisite fashion apparel to clients
              around the world. At Paul Fashion, we specialize in a diverse
              range of garments, including t-shirts, hoodies, joggers, baby wear
              etcensuring that we cater to various tastes and preferences.
              <br /> <br />
              Our journey began with a vision to create high-quality clothing
              that not only reflects the latest fashion trends but also embodies
              the values of sustainability and craftsmanship. We believe that
              fashion should be both stylish and responsible, which is why we
              are committed to ethical sourcing and environmentally friendly
              production processes.
              <br /> <br />
              At the heart of Paul Fashion is our passionate team of
              professionals, who bring creativity, expertise, and a keen eye for
              detail to every piece we produce. We take great pride in our
              craftsmanship, employing skilled artisans who ensure that each
              garment meets our rigorous quality standards.
              <br />
              <br />
              We understand that our clients come from diverse markets, and we
              thrive on building long-lasting relationships based on trust and
              mutual success. Our commitment to customer satisfaction drives us
              to deliver exceptional service, timely deliveries, and innovative
              solutions tailored to our clients' needs.
              <br />
              <br />
              As we look to the future, Paul Fashion remains dedicated to
              expanding our collection and exploring new horizons in the fashion
              industry, all while staying true to our core values of quality,
              integrity, and sustainability.
              <br />
              <br />
              Join us on our journey to redefine fashion, one garment at a time.
            </p>
            <p className="text-gray-300 leading-relaxed"></p>
          </div>
        </div>
      </section>
      {/* Vision & Mission Section */}
      <section className="bg-white py-10">
        <div
          className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
          data-aos="fade-right"
        >
          <div className="p-6 bg-gray-50 shadow rounded">
            <h3 className="text-2xl font-bold">Vision</h3>
            <p className="text-gray-600 mt-4">
              Our journey began with a vision to create high-quality clothing
              that not only reflects the latest fashion trends but also embodies
              the values of sustainability and craftsmanship. We believe that
              fashion should be both stylish and responsible, which is why we
              are committed to ethical sourcing and environmentally friendly
              production processes.
            </p>
          </div>
          <div className="p-6 bg-gray-50 shadow rounded">
            <h3 className="text-2xl font-bold">Mission</h3>
            <p className="text-gray-600 mt-4">
              Our mission is to provide high-quality garments that meet the
              evolving needs of our customers while adhering to sustainable and
              ethical production practices. We aim to be a trusted partner in
              the fashion industry, known for innovation, quality, and
              outstanding service.
            </p>
          </div>
        </div>
      </section>

      {/* Management Team Section */}
      <section className="bg-orange-50 py-10">
        <div className="container mx-auto" data-aos="fade-up">
          <h3 className="text-2xl font-bold mb-6">Management Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto"></div>
              <h4 className="text-lg font-semibold mt-4">Mr. Ahsok Paul</h4>
              <p className="text-sm text-gray-600">CFO</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto"></div>
              <h4 className="text-lg font-semibold mt-4">Mr. Arghadeb Paul</h4>
              <p className="text-sm text-gray-600">Executive Director</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto"></div>
              <h4 className="text-lg font-semibold mt-4">Mr. Soumon </h4>
              <p className="text-sm text-gray-600">
                Operational Management Director
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="bg-white py-10">
        <div
          className="container mx-auto flex flex-col lg:flex-row items-center gap-6"
          data-aos="fade-left"
        >
          {/* Image on the Left */}
          <img
            src="https://img.freepik.com/premium-photo/packages-earth-global-delivery-concept-3d-illustration_764664-25257.jpg?w=740"
            alt="Certification Illustration"
            className="w-full lg:w-1/3 rounded shadow-md"
          />

          {/* Certifications Content */}
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-6">Certifications</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-gray-100 py-6 rounded shadow">
                  <img
                    src="https://cdn-icons-png.freepik.com/512/4726/4726010.png?ga=GA1.1.482866947.1730496749"
                    alt="PDF Icon"
                    className="mx-auto"
                    onClick={() => {
                      window.open(
                        "https://firebasestorage.googleapis.com/v0/b/mystorage-52d11.appspot.com/o/certificate%2FPF_ISO9001.pdf?alt=media&token=dff0b4bb-c93a-4423-800f-c3ec04ecac72",
                        "_blank"
                      );
                    }}
                  />
                  <p className="mt-2 text-sm font-medium">TSN CERTIFICATE</p>
                </div>
              </div>
            </div>
          </div>

          <img
            src="https://img.freepik.com/premium-photo/3d-india-map-with-cardboard-boxes-hand-truck_58466-4263.jpg?w=826"
            alt="Certification Illustration"
            className="w-full lg:w-1/3 rounded shadow-md"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto flex justify-between">
          <p className="text-sm">
            &copy; 2024 Paulfashion Export Co. All Rights Reserved.
          </p>
          <p className="text-sm">Contact: info@paulfashion.in</p>
        </div>
      </footer>
    </>
  );
};

export default AboutUs;
