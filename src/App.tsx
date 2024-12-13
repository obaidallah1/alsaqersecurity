import { useEffect, useState } from "react";
import Numbers from "./components/Numbers";
import Services from "./components/Services";
import Footer from "./components/Footer";
import ServicesSection from "./components/ServicesSection";
import HeaderNavbar from "./components/HeaderNavbar";
import { AnimatePresence, motion } from "framer-motion";
import Feature1 from "./components/feature1";
import { translations } from "../translations";
import AboutSection from "./components/aboutsection";

function App() {
  const [language, setLanguage] = useState<"en" | "ar">("ar");
  const t = translations[language];
  const backgroundImages = [
    "/img/ss.jpg",
    "/img/hero-bg.jpg",
    "/img/carousel-1.jpg",
  ];
  const icon = "/icons/alsaqer.png";
  const [currentImage, setCurrentImage] = useState(0);
  const [currentAboutText, setCurrentAboutText] = useState(t.aboutTexts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [backgroundImages.length]);

  useEffect(() => {
    const newText = t.aboutTexts[currentImage % t.aboutTexts.length];
    setCurrentAboutText(newText);
  }, [currentImage, t.aboutTexts]);

  return (
    <div dir={language === "ar" ? "rtl" : "ltr"} className="font-cairo">
      {/* Language Switcher */}
      <HeaderNavbar language={language} setLanguage={setLanguage} />
      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* About Section */}
        <AboutSection
  currentImage={currentImage}
  backgroundImages={backgroundImages}
  icon={icon}
  currentAboutText={currentAboutText}
/>

        <div className="my-4 border-t border-[#A5993A]"></div>
        <Feature1 language={language} />

        <div className="my-4 border-t border-[#A5993A]"></div>
        <section id="mission" className="mb-12">
          <h2
            className="text-2xl font-bold mb-4 text-black"
            style={{ textDecoration: "underline", textDecorationColor: "#8f7a2e" }}
          >
            {t.missionTitle}
          </h2>
          <p className="text-gray-700">{t.missionText}</p>
        </section>

        <div className="my-4 border-t border-[#A5993A]"></div>

        {/* Numbers Section */}
        <section id="numbers" className="mb-12">
          <Numbers language={language} />
        </section>

        <div className="my-4 border-t border-[#A5993A]"></div>

        <div id="services">
          <ServicesSection language={language} />
          <div className="my-4 border-t border-[#A5993A]"></div>
          {/* Why Choose Us Section */}
          <Services services={t.services} language={language} />
        </div>

        <div className="my-4 border-t border-[#A5993A]"></div>
      </main>

      {/* Contact Section */}
      <section
        id="contact"
        className="bg-cover bg-center py-8"
        style={{
          backgroundImage: "url(/img/banner.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container mx-auto px-4 md:px-8 relative">
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <div className="relative z-10 bg-white bg-opacity-75 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-900">
              {t.contactTitle}
            </h2>
            <div className="flex flex-col md:flex-row md:justify-between gap-6">
              <div className="flex-1 mb-4 md:mb-0">
                <i className="fas fa-envelope mr-4"></i>
                <h3 className="font-semibold text-gray-900 flex items-center mb-2">
                  <span
                    className={`${language === "ar" ? "text-right" : "text-left"}`}
                  >
                    {t.email}
                  </span>
                </h3>
                <a
                  className="text-blue-600 hover:text-blue-400"
                  href="mailto:info@alsaqersecurity.com"
                >
                  info@alsaqersecurity.com
                </a>
              </div>
              <div className="flex-1 mb-4 md:mb-0">
                <i className="fab fa-whatsapp mr-4"></i>
                <h3 className="font-semibold text-gray-900 flex items-center mb-2">
                  <span
                    className={`${language === "ar" ? "text-right" : "text-left"}`}
                  >
                    {t.phone}
                  </span>
                </h3>
                <p
                  className={`text-gray-800 ${language === "ar" ? "text-right" : "text-left"} mb-2`}
                  style={{ direction: "ltr" }}
                >
                  <a
                    href="https://wa.me/967737179330"
                    className="text-blue-600 hover:text-blue-400"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +967 737 179 330
                  </a>
                </p>
              </div>
              <div className="flex-1 mb-4 md:mb-0">
                <i className="fas fa-map-marker-alt mr-4"></i>
                <h3 className="font-semibold text-gray-900 flex items-center mb-2">
                  <span
                    className={`${language === "ar" ? "text-right" : "text-left"}`}
                  >
                    {t.location}
                  </span>
                </h3>
                <p
                  className={`text-gray-800 ${language === "ar" ? "text-right" : "text-left"}`}
                >
                  {t.address.join(", ")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="my-4 border-t border-[#A5993A]"></div>
      {/* Footer */}
      <Footer language={language} />
      <a
        href={`tel:${"+967737179330"}`}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-lg flex items-center justify-center transition group bg-cover bg-center z-50"
        style={{
          backgroundImage: `url('/icons/alsaqer.png')`,
        }}
      >
        <div className="flex items-center justify-center w-full h-full transition-all duration-300 group-hover:bg-[#8f7a2e] group-hover:rounded-full">
          <i className="fas fa-phone-alt text-[#111827] text-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"></i>
        </div>
      </a>
    </div>
  );
}

export default App;
