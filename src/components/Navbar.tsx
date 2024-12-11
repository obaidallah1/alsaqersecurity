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
  const menuRef = useRef<HTMLDivElement>(null); // Ref for the mobile menu

  // Close the mobile menu when clicking outside of it
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

  const handleLinkClick = (section: string) => {
    scrollToSection(section);
    setIsOpen(false); // Close the menu after clicking a link
  };

  return (
    <div className="bg-gray-900 text-white">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Brand */}
        <a href="/" className="text-2xl font-bold text-white">
          <span className="text-blue-500">{language === "ar" ? "أمانك" : "Your Safety"}</span>{" "}
          {language === "ar" ? "مجهودنا" : "Our Efforts"}
        </a>

        {/* Toggler (for mobile) */}
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

        {/* Links */}
        <div
          id="navbarMenu"
          className={`hidden lg:flex lg:flex-row items-center ${
            language === "ar" ? "lg:space-x-reverse lg:space-x-4" : "lg:space-x-6"
          } space-y-4 lg:space-y-0`}
        >
          <button className="text-white hover:text-blue-400 transition-colors duration-200" onClick={() => handleLinkClick("home")}>
            {t.home}
          </button>
          <button className="text-white hover:text-blue-400 transition-colors duration-200" onClick={() => handleLinkClick("about")}>
            {t.about}
          </button>
          <button className="text-white hover:text-blue-400 transition-colors duration-200" onClick={() => handleLinkClick("services")}>
            {t.services}
          </button>
          <button className="text-white hover:text-blue-400 transition-colors duration-200" onClick={() => handleLinkClick("contact")}>
            {t.contact}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div ref={menuRef} className="absolute top-16 left-0 w-full bg-gray-900 lg:hidden">
            <div className="flex flex-col items-center p-4">
              <button className="text-white hover:text-blue-400 transition-colors duration-200 mb-2" onClick={() => handleLinkClick("home")}>
                {t.home}
              </button>
              <button className="text-white hover:text-blue-400 transition-colors duration-200 mb-2" onClick={() => handleLinkClick("about")}>
                {t.about}
              </button>
              <button className="text-white hover:text-blue-400 transition-colors duration-200 mb-2" onClick={() => handleLinkClick("services")}>
                {t.services}
              </button>
              <button className="text-white hover:text-blue-400 transition-colors duration-200 mb-2" onClick={() => handleLinkClick("contact")}>
                {t.contact}
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;