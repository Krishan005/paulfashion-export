"use client";

import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { addMsgs } from "../slices/counterSlice";
import { useAppDispatch, useAppSelector } from "../store/hook";
import { Toast } from "primereact/toast";

export default function ContactForm() {
  const dispatch = useAppDispatch();
  const toast: any = useRef(null);

  const { data, loading, error } = useAppSelector((state) => state.counter);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 3000, // Animation duration in milliseconds
    });
  }, []);

  useEffect(() => {
    if (data && formData.name !== "") {
      toast.current.show({
        severity: "success",
        summary: "Success",
        detail: "Message sent successfully",
      });
    }
  }, [data]);

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      if (
        formData.name === "" ||
        formData.email === "" ||
        formData.phone === "" ||
        formData.message === ""
      ) {
        toast.current.show({
          severity: "error",
          summary: "Error",
          detail: "Please fill all the fields",
        });
        return;
      }
      dispatch(addMsgs(formData));
    } catch (error: any) {
      setStatus(`Error: ${error.message}`);
    }
  };

  const handleWhatsAppEnquiry = () => {
    const phone = "7044221504"; // Replace with your WhatsApp number
    const message = encodeURIComponent(
      `Hello, I would like to make an enquiry.`
    );
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <div
      className="min-h-screen bg-black text-white flex items-center justify-center"
      id="contact"
    >
      <Toast ref={toast} />
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Form Section */}
        <div data-aos="fade-right">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <form
            onSubmit={handleSubmit}
            className="bg-gray-800 shadow-lg rounded-lg p-8 space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-600 bg-gray-900 text-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-600 bg-gray-900 text-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Your Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-600 bg-gray-900 text-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-600 bg-gray-900 text-white rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Send
            </button>
            <p className="text-sm text-gray-400 text-center">{status}</p>
          </form>

          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsAppEnquiry}
            className="mt-4 w-full py-2 px-4 bg-green-500 text-white font-medium rounded-md shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Enquiry with WhatsApp
          </button>
        </div>

        {/* Map Section */}
        <div data-aos="fade-left" className="flex justify-center items-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509172!2d-122.4013584850958!3d37.79101177975653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064d3a8b7e1%3A0x3d35a1817ae5db45!2sGoogle%20San%20Francisco!5e0!3m2!1sen!2sus!4v1674583158416!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            className="rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
