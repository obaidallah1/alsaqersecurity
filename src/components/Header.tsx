import React, { useEffect, useState } from 'react';

interface HeaderProps {
    language: "en" | "ar";
    setLanguage: (lang: "en" | "ar") => void;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage }) => {
    const translations = {
        en: {
            header: "Alsaqer Security Services",
        },
        ar: {
            header: "شركة الصقر لخدمات الأمن",
        },
    };

    const t = translations[language];
    const [fadeIn, setFadeIn] = useState(false);

    // Trigger fade-in effect on component mount
    useEffect(() => {
        setFadeIn(true);
    }, []);

    return (
        <header 
            className={`text-white py-4 transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`} 
            style={{ backgroundImage: 'url("/img/carousel-1.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="container mx-auto flex justify-between items-center">
                <img 
                    src="/icons/alsaqer.png" 
                    alt="Alsaqer Security Logo" 
                    className="h-[70px] transition-transform duration-300 transform hover:scale-110" // Logo scaling effect
                />
                <h1 className="text-xl font-bold">{t.header}</h1>
            </div>
            <div className="text-right p-4">
                <button
                    className="px-4 py-2 text-white border-0 bg-transparent hover:underline transition-colors duration-300"
                    onClick={() => setLanguage("en")}
                >
                    English
                </button>
                <button
                    className="px-4 py-2 text-white border-0 bg-transparent hover:underline transition-colors duration-300"
                    onClick={() => setLanguage("ar")}
                >
                    العربية
                </button>
            </div>
        </header>
    );
};

export default Header;