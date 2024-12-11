import React from 'react';

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

    return (
        <header 
            className="text-white py-4" 
            style={{ backgroundImage: 'url("/img/carousel-1.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className="container mx-auto flex justify-between items-center">
                <img 
                    src="/icons/alsaqer.png" 
                    alt="Alsaqer Security Logo" 
                    className="h-[70px]" // Adjust height as needed
                />
                <h1 className="text-xl font-bold">{t.header}</h1>
            </div>
            <div className="text-right p-4">
                <button
                    className="px-4 py-2 text-white border-0 bg-transparent hover:underline"
                    onClick={() => setLanguage("en")}
                >
                    English
                </button>
                <button
                    className="px-4 py-2 text-white border-0 bg-transparent hover:underline"
                    onClick={() => setLanguage("ar")}
                >
                    العربية
                </button>
            </div>
        </header>
    );
};

export default Header;