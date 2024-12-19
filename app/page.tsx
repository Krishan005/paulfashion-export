"use client";

import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect, useState } from "react";
import Navbar from "./component/navbar";
import PageHeaderSection1 from "./component/pageheadersection1";
import AboutUsPage from "./component/pageaboutus";
import PageExport from "./component/pageexport";
import PageCountDown from "./component/pagecountdown";
import ContactForm from "./component/contactForm";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      title: "",
      description:
        "At Paul Fashion, we understand that selecting a garment supplier is a significant decision for your business. Here are several reasons why we stand out as your ideal partner in the fashion industry",
    },
    {
      title: "1. Exceptional Quality",
      description:
        "We prioritize quality at every step of our production process. Our garments are crafted using premium materials and are subject to rigorous quality control checks, ensuring that every piece meets the highest standards.",
    },
    {
      title: "2.	Diverse Product Range",
      description:
        "Our extensive collection includes a wide variety of garments, allowing us to cater to various customer preferences and market demands. Whether you need casual wear or formal attire, we’ve got you covered.",
    },
    {
      title: "3.	Sustainability Commitment",
      description:
        "We are dedicated to sustainable and ethical practices. Our production methods are designed to minimize environmental impact, and we carefully select our materials to promote eco-friendly fashion.",
    },
    {
      title: "4.	Custom Solutions",
      description:
        "Understanding that each client has unique needs, we offer custom design and manufacturing services. Our team collaborates closely with you to bring your vision to life, ensuring that the final product aligns with your brand identity.",
    },
    {
      title: "5.	Timely Delivery",
      description:
        "We value your time and strive to meet your deadlines. Our efficient logistics and supply chain management systems ensure that your orders are delivered promptly, without compromising quality",
    },
    {
      title: "6.	Expert Team",
      description:
        "Our skilled and experienced team is our greatest asset. With a strong background in fashion and textiles, we bring creativity and innovation to every project, ensuring that your garments are on-trend and competitively positioned in the market.",
    },
    {
      title: "7.	Client-Centric Approach",
      description:
        "At Paul Fashion, our clients are at the heart of everything we do. We believe in building strong, long-lasting relationships based on trust, transparency, and mutual growth. Your satisfaction is our priority.",
    },
    {
      title: "8.	Competitive Pricing",
      description:
        "We offer quality garments at competitive prices, providing excellent value without sacrificing quality. Our pricing structure is designed to help you achieve your business goals while staying within budget.",
    },
    {
      title: "",
      description:
        "By choosing Paul Fashion, you are partnering with a company that values quality, sustainability, and exceptional service. Let us help you elevate your brand with stylish and high-quality garments that your customers will love.",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    // Auto-scroll functionality
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen font-sans">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <PageHeaderSection1 />

        {/* About Us */}
        <AboutUsPage />

        {/* Product Categories */}
        <section
          id="products"
          className="py-16 bg-gray-100"
          data-aos="fade-right"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Product Category 1 */}
            <div className="text-center" data-aos="fade-up">
              <img
                src="https://img.freepik.com/free-photo/handsome-confident-young-curly-haired-man-drinking-coffee-standing-infront-isolated-white-wall_231208-1086.jpg?t=st=1734379675~exp=1734383275~hmac=1ea04d7fe4674998c20c90650b766833c044e3482d36eafd15a0c72ab50c345e&w=360"
                alt="Casual Wear"
                width={300}
                height={300}
                className="mx-auto rounded-lg border-4 border-orange-500 rounded-md p-2"
              />
              <h3 className="text-xl font-semibold mt-4">Casual Wear</h3>
            </div>

            {/* Product Category 2 */}
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src="https://img.freepik.com/free-photo/full-length-portrait-handsome-successful-businessman_171337-18653.jpg?t=st=1734379721~exp=1734383321~hmac=2cde896d06925ca61a739242c925e778d7524e67280adf5a0f62b4ad71370f7c&w=360"
                alt="Formal Wear"
                width={300}
                height={300}
                className="mx-auto rounded-lg border-4 border-orange-500 rounded-md p-2"
              />
              <h3 className="text-xl font-semibold mt-4">Formal Wear</h3>
            </div>

            {/* Product Category 3 */}
            <div
              className="text-center"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <img
                src="https://img.freepik.com/premium-photo/handsome-athletic-man-walking-street_652076-603.jpg?w=360"
                alt="Sports Wear"
                width={300}
                height={300}
                className="mx-auto rounded-lg border-4 border-orange-500 rounded-md p-2"
              />
              <h3 className="text-xl font-semibold mt-4">Sports Wear</h3>
            </div>
          </div>
        </section>

        {/* Export */}
        <PageExport />

        {/* Why Choose Us */}
        <section
          id="why-choose-us"
          className="py-16 bg-white overflow-hidden"
          data-aos="fade-up"
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800 underline decoration-gray-400">
            Why Choose Us
          </h2>

          <div className="relative w-full max-w-6xl mx-auto">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${activeIndex * (100 / 3)}%)`,
                width: `${(slides.length / 3) * 100}%`,
              }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-1/3 px-4 text-center"
                >
                  <div className="p-6 shadow-lg rounded-lg bg-gray-100">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">
                      {slide.title}
                    </h3>
                    <p className="text-gray-600">{slide.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}

        <PageCountDown />

        {/* Contact Section */}
        <ContactForm />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto flex justify-between">
          <p className="text-sm">
            &copy; 2024 Paulfashion Export Co. All Rights Reserved.
          </p>
          <p className="text-sm">Contact: info@paulfashion.in</p>
        </div>
      </footer>
    </div>
  );
}
