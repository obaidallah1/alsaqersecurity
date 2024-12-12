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
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setDropdownOpen(false);
      }
    };

    const handleScroll = () => {
      setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
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

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const changeLanguage = (lang: "en" | "ar") => {
    setLanguage(lang);
    setDropdownOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 text-white py-1 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <img 
          src="/icons/alsaqer.png" 
          alt="Alsaqer Security Logo" 
          className="h-12 transition-transform duration-300 transform hover:scale-110"
        />
        <div className="text-center">
          <h1 className="text-lg font-bold text-white">
            <span className="text-blue-500">{language === "ar" ? "أمانكم" : "Your Safety"}</span>{" "}
            {language === "ar" ? "هدفنا" : "Our Goal"}
          </h1>
          <h2 className="text-sm font-bold">{t.header}</h2>
        </div>
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
      </div>
      <div className="bg-gray-900 text-white">
        <nav className="container mx-auto flex flex-col">
          <div className={`hidden lg:flex lg:flex-row items-center ${language === "ar" ? "lg:space-x-reverse lg:space-x-4" : "lg:space-x-6"} space-y-2 lg:space-y-0`}>
            {Object.keys(t).filter(key => key !== 'header').map((key) => (
              <button
                key={key}
                className="text-white hover:text-blue-400 transition duration-300 transform hover:scale-105"
                onClick={() => handleLinkClick(key as keyof typeof t)}
              >
                {t[key as keyof typeof t]}
              </button>
            ))}
            <div className="relative">
              <button
                className="flex items-center text-white border-0 bg-transparent hover:underline transition-colors duration-300"
                onClick={toggleDropdown}
              >
                {language === "en" ? "🇺🇸 English" : "🇾🇪 العربية"}
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded shadow-lg">
                  <button
                    className="flex items-center w-full px-4 py-2 text-white hover:bg-gray-700"
                    onClick={() => changeLanguage("en")}
                  >
                    🇺🇸 English
                  </button>
                  <button
                    className="flex items-center w-full px-4 py-2 text-white hover:bg-gray-700"
                    onClick={() => changeLanguage("ar")}
                  >
                    🇾🇪 العربية
                  </button>
                </div>
              )}
            </div>
          </div>

          {isOpen && (
            <div
              ref={menuRef}
              className="bg-gray-900 lg:hidden transition-transform transform duration-300 ease-in-out z-50"
            >
              <div className="flex flex-col items-center p-4 border-t border-gray-700">
                {Object.keys(t).filter(key => key !== 'header').map((key) => (
                  <button
                    key={key}
                    className="text-white hover:text-blue-400 transition duration-300 transform hover:scale-105 mb-2 w-full text-left"
                    onClick={() => handleLinkClick(key as keyof typeof t)}
                  >
                    {t[key as keyof typeof t]}
                  </button>
                ))}
                
                  <button
                    className="text-white hover:text-blue-400 transition duration-300 transform hover:scale-105 mb-2 w-full text-left"
                    onClick={() => setLanguage("en")}
                  >
                    English
                  </button>
                  <button
                    className="text-white hover:text-blue-400 transition duration-300 transform hover:scale-105 mb-2 w-full text-left"
                    onClick={() => setLanguage("ar")}
                  >
                    العربية
                  </button>
               
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default HeaderNavbar;