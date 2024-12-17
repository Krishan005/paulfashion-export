"use client";

import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import Navbar from "./component/navbar";
import PageHeaderSection1 from "./component/pageheadersection1";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen font-sans">
      {/* Header */}

      <Navbar />
      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <PageHeaderSection1 />

        {/* About Us */}
        <section id="about" className="py-16" data-aos="fade-left">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-gray-700">
            At Garment Export Co., we specialize in manufacturing and exporting
            premium-quality garments to clients worldwide. With decades of
            experience, we pride ourselves on our craftsmanship, innovation, and
            sustainability.
          </p>
        </section>

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
                className="mx-auto rounded-lg"
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
                className="mx-auto rounded-lg"
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
                className="mx-auto rounded-lg"
              />
              <h3 className="text-xl font-semibold mt-4">Sports Wear</h3>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Why Choose Us?
          </h2>
          <ul className="list-disc list-inside space-y-4 text-gray-700">
            <li>Experienced in exporting to over 50 countries.</li>
            <li>Committed to sustainable and ethical practices.</li>
            <li>Customization options to suit your needs.</li>
            <li>Stringent quality control measures.</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-16 bg-gray-900 text-white text-center"
          data-aos="fade-in"
        >
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg mb-6">
            We'd love to hear from you. Reach out to us for inquiries and
            collaborations.
          </p>
          <a
            href="mailto:info@garmentexport.com"
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700"
          >
            Contact Us
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Garment Export Co. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
