import React, { useEffect, useState, useRef } from 'react';

interface HeaderNavbarProps {
  language: "en" | "ar";
  setLanguage: (lang: "en" | "ar") => void;
}

const HeaderNavbar: React.FC<HeaderNavbarProps> = ({ language, setLanguage }) => {
  const translations = {
    en: {
      header: "Alsaqer Security Services",
      home: "Home",
      about: "About Us",
      services: "Our Services",
      contact: "Contact Us",
    },
    ar: {
      header: "شركة الصقر لخدمات الأمن",
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      contact: "تواصل معنا",
    },
  };

  const t = translations[language];
  const [fadeIn, setFadeIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleLinkClick = (section: keyof typeof t) => {
    scrollToSection(section);
    setIsOpen(false);
  };

  return (
    <header className={`text-white bg-gray-900 py-2 z-50 transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <img 
          src="/icons/alsaqer.png" 
          alt="Alsaqer Security Logo" 
          className="h-[50px] transition-transform duration-300 transform hover:scale-110" 
        />
        <h1 className="text-lg font-bold">{t.header}</h1>
        <div className="text-right p-2">
          <button
            className="px-2 py-1 text-white border-0 bg-transparent hover:underline transition-colors duration-300"
            onClick={() => setLanguage("en")}
          >
            English
          </button>
          <button
            className="px-2 py-1 text-white border-0 bg-transparent hover:underline transition-colors duration-300"
            onClick={() => setLanguage("ar")}
          >
            العربية
          </button>
        </div>
      </div>

      <div className="bg-gray-900 text-white">
        <nav className="container mx-auto flex items-center justify-between px-2 py-2">
          <a href="/" className="text-xl font-bold text-white">
            <span className="text-blue-500">{language === "ar" ? "أمانكم" : "Your Safety"}</span>{" "}
            {language === "ar" ? "هدفنا" : "Our Goal"}
          </a>

          <button
            type="button"
            className="lg:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          <div className={`hidden lg:flex lg:flex-row items-center ${language === "ar" ? "lg:space-x-reverse lg:space-x-4" : "lg:space-x-6"} space-y-4 lg:space-y-0`}>
            {Object.keys(t).filter(key => key !== 'header').map((key) => (
              <button
                key={key}
                className="text-white hover:text-blue-400 transition duration-300 transform hover:scale-105"
                onClick={() => handleLinkClick(key as keyof typeof t)}
              >
                {t[key as keyof typeof t]}
              </button>
            ))}
          </div>

          {isOpen && (
            <div
              ref={menuRef}
              className="absolute top-16 left-0 w-full bg-gray-900 lg:hidden transition-transform transform duration-300 ease-in-out z-50"
              style={{ opacity: isOpen ? 1 : 0, transform: isOpen ? "translateY(0)" : "translateY(-20px)" }}
            >
              <div className="flex flex-col items-center p-4">
                {Object.keys(t).filter(key => key !== 'header').map((key) => (
                  <button
                    key={key}
                    className="text-white hover:text-blue-400 transition duration-300 transform hover:scale-105 mb-2"
                    onClick={() => handleLinkClick(key as keyof typeof t)}
                  >
                    {t[key as keyof typeof t]}
                  </button>
                ))}
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default HeaderNavbar;