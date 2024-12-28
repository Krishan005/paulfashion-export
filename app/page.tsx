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
import WorldMap from "react-svg-worldmap";
import { Carousel, CarouselResponsiveOption } from "primereact/carousel";
import useWindowSize from "@rooks/use-window-size";

import "primereact/resources/themes/saga-blue/theme.css"; // Theme

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

const responsiveOptions: CarouselResponsiveOption[] = [
  {
    breakpoint: "1400px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "1199px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 1,
    numScroll: 1,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
    numScroll: 1,
  },
];

export default function Home() {
  const { innerWidth, innerHeight, outerHeight, outerWidth } = useWindowSize();
  var windowWidth: any = innerWidth || 0;

  const [activeIndex, setActiveIndex] = useState(0);
  const [home, setHome] = useState<any>({});

  const [count, setCount] = useState(0);
  const [dataSlides, setDataSlides] = useState<any>([]);
  const [productSlides, setProductSlides] = useState<any>([
    {
      title: "Formal Wear",
      description: "Formal Wear",
      image:
        "https://img.freepik.com/free-photo/full-length-portrait-handsome-successful-businessman_171337-18653.jpg?w=360",
      phone: "7044221504",
    },
    {
      title: "Casual Wear",
      description: "Casual Wear",
      image:
        "https://img.freepik.com/free-photo/handsome-confident-young-curly-haired-man-drinking-coffee-standing-infront-isolated-white-wall_231208-1086.jpg?w=360",
      phone: "7044221504",
    },
  ]);

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

    return () => clearInterval(timer);
  }, []);

  const slides = [
    {
      title: "Why Choose Paul Fashion?",
      description:
        "At Paul Fashion, we understand that selecting a garment supplier is a significant decision for your business. Here are several reasons why we stand out as your ideal partner in the fashion industry",
    },
    {
      title: "1. Exceptional Quality",
      description:
        "We prioritize quality at every step of our production process. Our garments are crafted using premium materials and are subject to rigorous quality control checks, ensuring that every piece meets the highest standards.",
    },
    {
      title: "2. Diverse Product Range",
      description:
        "Our extensive collection includes a wide variety of garments, allowing us to cater to various customer preferences and market demands. Whether you need casual wear or formal attire, we’ve got you covered.",
    },
    {
      title: "3. Sustainability Commitment",
      description:
        "We are dedicated to sustainable and ethical practices. Our production methods are designed to minimize environmental impact, and we carefully select our materials to promote eco-friendly fashion.",
    },
    {
      title: "4. Custom Solutions",
      description:
        "Understanding that each client has unique needs, we offer custom design and manufacturing services. Our team collaborates closely with you to bring your vision to life, ensuring that the final product aligns with your brand identity.",
    },
    {
      title: "5. Timely Delivery",
      description:
        "We value your time and strive to meet your deadlines. Our efficient logistics and supply chain management systems ensure that your orders are delivered promptly, without compromising quality.",
    },
    {
      title: "6. Expert Team",
      description:
        "Our skilled and experienced team is our greatest asset. With a strong background in fashion and textiles, we bring creativity and innovation to every project, ensuring that your garments are on-trend and competitively positioned in the market.",
    },
    {
      title: "7. Client-Centric Approach",
      description:
        "At Paul Fashion, our clients are at the heart of everything we do. We believe in building strong, long-lasting relationships based on trust, transparency, and mutual growth. Your satisfaction is our priority.",
    },
    {
      title: "8. Competitive Pricing",
      description:
        "We offer quality garments at competitive prices, providing excellent value without sacrificing quality. Our pricing structure is designed to help you achieve your business goals while staying within budget.",
    },
    {
      title: " 9. Exceptional Customer Service",
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

  //  setup fetch
  useEffect(() => {
    try {
      const fetchProducts = async () => {
        const response = await fetch("/api/home");
        const data = await response.json();
        // console.log(data);
        setHome(data?.homes);
        setCount(data?.homes?.HappyCustomerNumber || 5860);
        var newSlides = data?.whyChooseUses?.data?.map((item: any) => ({
          title: item.Heading,
          description: item.Description,
        }));

        var newProductSlices = data?.products?.data?.map((item: any) => ({
          title: item.Name,
          description: item.Description,
          image: item.ImageLink,
          phone: item.EnquiryNumber,
        }));

        setProductSlides(newProductSlices);

        setDataSlides(newSlides);
      };

      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  }, []);
  const productTemplate: any = (product: any) => {
    return (
      <div className="border border-gray-300 rounded-md m-2 p-4 flex flex-col items-center text-center sm:flex-row sm:items-start sm:text-left sm:p-6">
        <div>
          <div className="mb-2 text-lg font-medium text-gray-900">
            {product.title}
          </div>
          <div className="text-sm text-gray-600">{product.description}</div>
        </div>
      </div>
    );
  };

  const ProductTemplateList: any = (product: any) => {
    return (
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-4 sm:px-8">
        {/* Product Category 1 */}
        <div className="text-center" data-aos="fade-up">
          <img
            src={product.image}
            alt="Casual Wear"
            className="mx-auto rounded-lg border-4 border-orange-500 p-2"
          />
          <h3 className="text-lg sm:text-xl font-semibold mt-4">
            {product.title}
          </h3>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-gray-600">
            {/* CREATE A BUTTON ENQUERY WITH WHATSAPP */}
            <a
              className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-full mt-4 inline-block"
              href={`https://wa.me/${product.phone}?text=${encodeURIComponent(
                "Hello, I'm interested in your products. Please share more details about " +
                  product.image
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Enquire Now
            </a>
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen font-sans">
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main style={{ overflowX: "hidden" }}>
        {/* Hero Section */}
        <div className="relative h-screen w-full overflow-hidden">
          {/* Video Background */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
            src={
              home?.TitleVideoLink
                ? home?.TitleVideoLink
                : "https://videos.pexels.com/video-files/10628542/10628542-hd_1920_1080_30fps.mp4"
            }
            autoPlay
            loop
            muted
            playsInline
          >
            Your browser does not support the video tag.
          </video>

          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-5"></div>

          {/* Content Section */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
              data-aos="fade-up"
            >
              {home?.Title ? home?.Title : "Welcome to Paulfashion Export Co."}
            </h1>
            <p
              className="text-sm sm:text-base md:text-lg mt-4 max-w-2xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {home?.Subtitle
                ? home?.Subtitle
                : `Paul Fashion is a leading garments export unit specializing in
              knitted goods. In 1995, we have built a reputation for quality and
              reliability in the international market. Our commitment to
              excellence and customer satisfaction has allowed us to forge
              long-lasting partnerships with clients around the globe.`}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              {/* Banner 1 */}
              <div
                className="bg-black bg-opacity-50 p-4 sm:p-6 rounded-lg shadow-lg max-w-[90%] sm:max-w-xs"
                data-aos="fade-right"
              >
                <h2 className="text-lg sm:text-xl font-semibold">
                  {home?.Heading1 ? home?.Heading1 : "Exclusive Deals"}
                </h2>
                <p className="mt-2 text-sm">
                  {home?.Description1
                    ? home?.Description1
                    : "Find the best offers on our products."}
                </p>
              </div>
              {/* Banner 2 */}
              <div
                className="bg-black bg-opacity-50 p-4 sm:p-6 rounded-lg shadow-lg max-w-[90%] sm:max-w-xs"
                data-aos="fade-left"
              >
                <h2 className="text-lg sm:text-xl font-semibold">
                  {home?.Heading2 ? home?.Heading2 : "New Arrivals"}
                </h2>
                <p className="mt-2 text-sm">
                  {home?.Description2
                    ? home?.Description2
                    : "Check out our latest product collections."}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Aboy us */}

        <section
          className="flex flex-col md:flex-row items-center justify-between bg-white p-8"
          id="about"
        >
          {/* Left: Image Section */}
          <div
            className="w-full md:w-1/2 flex justify-center"
            data-aos="fade-right"
          >
            <div className="relative border-4 border-orange-600">
              <img
                src={
                  home?.AboutImageLink
                    ? home?.AboutImageLink
                    : "https://img.freepik.com/free-photo/full-shot-women-shopping-together_23-2149241336.jpg?t=st=1734464350~exp=1734467950~hmac=9e623c574fd3877726526f450dc5747bd6e652395bc788a3a162f07feccc79ba&w=360"
                }
                // Replace with your image path
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
              {home?.AboutHeading ? home?.AboutHeading : " Paulfashion Export"}
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {home?.AboutDescription
                ? home?.AboutDescription
                : `
                 Our Company is engaged into trading and marketing of garments
              product and clothing of men, women, and children and accessories.
              We are expert in the field of trade and marketing of garments
              product and clothing of men, women, and children and accessories.
              `}
            </p>
            <button
              className="bg-orange-600 text-white py-2 px-4 rounded hover:bg-orange-700"
              onClick={() => {
                window.location.href = "/about";
              }}
            >
              Read More
            </button>

            <div className="mt-6 text-gray-700">
              Call to ask any question:{" "}
              <span className="text-orange-600 font-semibold">
                <a
                  href={
                    home?.AboutPhone
                      ? "tel:" + home?.AboutPhone
                      : "tel:7044221504"
                  }
                >
                  +91-{home?.AboutPhone ? home?.AboutPhone : "7044221504"}
                </a>
              </span>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section
          id="products"
          className="py-12 bg-gray-100"
          data-aos="fade-right"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
            Our Products
          </h2>
          <Carousel
            value={productSlides}
            numVisible={3}
            numScroll={3}
            responsiveOptions={responsiveOptions}
            className="custom-carousel"
            circular
            autoplayInterval={3000}
            itemTemplate={ProductTemplateList}
          />
        </section>

        {/* Export Section */}

        <div className="flex flex-col md:flex-row bg-white">
          {/* Left Section */}
          <div
            className="w-full md:w-1/2 relative bg-black text-white p-6 sm:p-8 md:p-12"
            data-aos="fade-right"
          >
            <h3 className="text-orange-400 font-semibold text-sm uppercase mb-4">
              Why Choose Us?
            </h3>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
              Exports / Imports
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mb-6">
              Our network is spread all over the world including India. The
              countries in which we deal are inclusive of:
            </p>
            <div className="flex flex-col sm:flex-row sm:justify-between space-y-4 sm:space-y-0">
              {/* Exports List */}
              <div data-aos="fade-up" data-aos-delay="200" className="sm:w-1/2">
                <h4 className="text-lg sm:text-xl font-semibold mb-2">
                  Exports
                </h4>
                <ul className="space-y-1 text-gray-300 text-sm sm:text-base">
                  <li>• USA</li>
                  <li>• Canada</li>
                  <li>• Europe</li>
                  <li>• Argentina</li>
                  <li>• Brazil</li>
                  <li>• Peru</li>
                  <li>• Japan</li>
                  <li>• Malaysia</li>
                  <li>• South Korea</li>
                  <li>• Australia</li>
                  <li>• New Zealand</li>
                  <li>• UAE</li>
                  <li>• Saudi Arabia</li>
                  <li>• Nigeria</li>
                </ul>
              </div>
              {/* Imports List */}
              <div data-aos="fade-up" data-aos-delay="400" className="sm:w-1/2">
                <h4 className="text-lg sm:text-xl font-semibold mb-2">
                  Imports
                </h4>
                <ul className="space-y-1 text-gray-300 text-sm sm:text-base">
                  <li>• China</li>
                  <li>• Vietnam</li>
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
            <div className="h-full flex items-center justify-center bg-[#121212]">
              <div
                className="bg-[#121212] text-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-xl"
                style={{
                  backgroundColor: "#121212",
                  borderRadius: "12px",
                  padding: "24px",
                  boxShadow: "0 6px 12px rgba(0, 0, 0, 0.8)",
                }}
              >
                <h2
                  style={{
                    textAlign: "center",
                    marginBottom: "16px",
                    color: "#ffcc00", // Accent color for the title
                  }}
                  className="text-xl sm:text-2xl font-bold"
                >
                  Most Export Countries
                </h2>
                <WorldMap
                  color="#ffcc00" // Map fill color (golden for a striking effect)
                  // Map background color matching the dark theme
                  title="Top 10 Exporting Countries"
                  value-suffix="exports"
                  size={windowWidth > 768 ? "lg" : "md"}
                  data={data}
                />
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-500 to-orange-500"></div>
            <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-500 to-orange-500"></div>
          </div>
        </div>

        {/* Countdown */}
        <div className="relative flex flex-col items-center justify-center min-h-screen text-white overflow-hidden">
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{
              height: "100vh", // Set the height to the viewport height
              objectFit: "cover", // Ensure the video scales properly
            }}
          >
            <source
              src={
                home?.HappyCustomerVideoLink
                  ? home?.HappyCustomerVideoLink
                  : "https://videos.pexels.com/video-files/6120425/6120425-uhd_2732_1440_25fps.mp4"
              }
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            <h2
              className="text-4xl font-bold mb-4 text-orange-500"
              data-aos="fade-up" // AOS animation
            >
              {home?.HappyCustomerTitle
                ? home?.HappyCustomerTitle
                : "Our Happy Customers"}
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
              {home?.HappyCustomerSubTitle
                ? home?.HappyCustomerSubTitle
                : " Thank you for being a part of our journey!"}
            </p>
          </div>

          {/* Overlay for better text visibility */}
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-0"></div>
        </div>

        {/* Why Choose Us */}
        <div
          className="custom-carousel-container overflow-hidden"
          aos-data="fade-up"
        >
          <h2 className="text-center text-2xl font-bold my-6">
            Why You Choose Us ?
          </h2>
          <Carousel
            value={dataSlides.length > 0 ? dataSlides : slides}
            numVisible={3}
            numScroll={3}
            responsiveOptions={responsiveOptions}
            className="custom-carousel"
            circular
            autoplayInterval={3000}
            itemTemplate={productTemplate}
            orientation="vertical"
          />
        </div>

        {/* Contact Section */}

        <ContactForm />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <div className="container mx-auto">
          <p className="text-sm">
            &copy; 2024 Paulfashion Export Co. All Rights Reserved.
          </p>
          <p className="text-sm">Contact: info@paulfashion.in</p>
        </div>
      </footer>
    </div>
  );
}
