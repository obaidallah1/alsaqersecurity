import React, { useState, useRef, useEffect } from "react";

const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

interface NavbarProps {
  language: "en" | "ar";
}

const Navbar: React.FC<NavbarProps> = ({ language }) => {
  const links = {
    en: {
      home: "Home",
      about: "About Us",
      services: "Our Services",
      contact: "Contact Us",
    },
    ar: {
      home: "الرئيسية",
      about: "من نحن",
      services: "خدماتنا",
      contact: "تواصل معنا",
    },
  };

  const t = links[language];
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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

  const handleLinkClick = (section: keyof typeof t) => {
    scrollToSection(section);
    setIsOpen(false);
  };

  return (
    <div className="bg-gray-900 text-white">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        <a href="/" className="text-2xl font-bold text-white">
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

        <div
          id="navbarMenu"
          className={`hidden lg:flex lg:flex-row items-center ${
            language === "ar" ? "lg:space-x-reverse lg:space-x-4" : "lg:space-x-6"
          } space-y-4 lg:space-y-0`}
        >
          {Object.keys(t).map((key) => (
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
            className="absolute top-16 left-0 w-full bg-gray-900 lg:hidden transition-transform transform duration-300 ease-in-out"
            style={{ opacity: isOpen ? 1 : 0, transform: isOpen ? "translateY(0)" : "translateY(-20px)" }}
          >
            <div className="flex flex-col items-center p-4">
              {Object.keys(t).map((key) => (
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
  );
};

export default Navbar;