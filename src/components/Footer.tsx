import React from 'react';

interface FooterProps {
    language: "en" | "ar";
}

const Footer: React.FC<FooterProps> = ({ language }) => {
    const translations = {
        en: {
            companyName: "Alsaqer Security",
            quickLinks: ["Homepage", "Locations", "Contact"],
            popularLinks: ["Privacy", "Terms", "FAQs", "Help"],
            contact: {
                address: "Crater - King Salman Street",
                phone1: "+967 02 264 491",
                phone2: "+967 02 258 013",
                email: "info@alsaqersecurity.com",
            },
            rights: "© 2024 Alsaqer Security. All Rights Reserved.",
            description: "Providing top-notch security solutions with commitment and expertise.",
        },
        ar: {
            companyName: "شركة الصقر لخدمات الأمن",
            quickLinks: ["الرئيسية", "عنا", "تواصل معنا"],
            popularLinks: ["سياسة الخصوصية", "الشروط", "الأسئلة الشائعة", "مساعدة"],
            contact: {
                address: "كريتر - شارع الملك سلمان",
                phone1: "+967 02 264 491",
                phone2: "+967 02 258 013",
                email: "info@alsaqersecurity.com",
            },
            rights: "© 2024 شركة الصقر لخدمات الأمن. جميع الحقوق محفوظة.",
            description: "توفير حلول أمنية عالية الجودة مع الالتزام والخبرة.",
        },
    };

    const t = translations[language];

    return (
        <footer className="rounded-lg shadow m-4 bg-gray-900">
            <div className="w-full mx-auto max-w-screen-xl p-4">
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-300">
                    {t.popularLinks.map((link, index) => (
                        <li key={index}>
                            <a 
                                href="" 
                                className="hover:underline me-4 md:me-6 text-gray-300"
                            >
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="w-full mx-auto max-w-screen-xl p-4">
                <div className="text-center mb-4">
                    <h5 className="text-gray-300">{language === 'ar' ? 'للتواصل معنا' : 'Get In Touch'}</h5>
                    <p className="m-0 text-gray-300 mb-2">{t.contact.address}</p>
                    <div className="flex flex-col md:flex-row md:justify-center md:items-center">
                        <p className="m-0 text-gray-300 md:mr-4 mb-2" style={{ direction: 'ltr' }}>
                            <i className="fa fa-phone-alt mr-2"></i>{t.contact.phone1}
                        </p>
                        <p className="m-0 text-gray-300 mb-2" style={{ direction: 'ltr' }}>
                            <i className="fa fa-phone-alt mr-2"></i>{t.contact.phone2}
                        </p>
                    </div>
                    <p className="m-0 text-gray-300 mb-2">
                        <i className="fa fa-envelope mr-2"></i>
                        <a 
                            className="text-gray-300 hover:text-blue-600" 
                            href={`mailto:${t.contact.email}`}
                        >
                            {t.contact.email}
                        </a>
                    </p>

                    <a 
                        className="text-gray-300 hover:text-blue-600"
                        href="https://www.facebook.com/profile.php?id=100084175075125"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-facebook-f mr-2"></i>
                        {language === 'ar' ? 'فيسبوك' : 'Facebook'}
                    </a>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center mb-4 md:mb-0">
                        <img
                            src="/icons/alsaqer.png"
                            alt={t.companyName}
                            className="h-8 mr-3" // Adjust height as needed
                        />
                        <span className="text-sm text-gray-300">
                            {t.description}
                        </span>
                    </div>
                    <span className="text-sm text-gray-300 sm:text-center">
                        {t.rights}
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;