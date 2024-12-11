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
        <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4">
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                    {t.popularLinks.map((link, index) => (
                        <li key={index}>
                            <a href="#" className="hover:underline me-4 md:me-6 text-gray-600 dark:text-gray-400">{link}</a>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="w-full mx-auto max-w-screen-xl p-4">
                <div className="text-center mb-4">
                    <h5 className="text-gray-600 dark:text-gray-400">{language === 'ar' ? 'للتواصل معنا' : 'Get In Touch'}</h5>
                    <p className="m-0 text-gray-600 dark:text-gray-400">{t.contact.address}</p>
                    <p className="m-0 text-gray-600 dark:text-gray-400" style={{ direction: 'ltr' }}>
                        <i className="fa fa-phone-alt mr-2"></i>{t.contact.phone1}
                    </p>
                    <p className="m-0 text-gray-600 dark:text-gray-400" style={{ direction: 'ltr' }}>
                        <i className="fa fa-phone-alt mr-2"></i>{t.contact.phone2}
                    </p>
                    <p className="m-0 text-gray-600 dark:text-gray-400">
                        <i className="fa fa-envelope mr-2"></i>
                        <a className="text-gray-600 dark:text-gray-400" href={`mailto:${t.contact.email}`}>
                            {t.contact.email}
                        </a>
                    </p>
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex items-center mb-4 md:mb-0">
                        <img
                            src="/icons/alsaqer.png"
                            alt={t.companyName}
                            className="h-8 mr-3" // Adjust height as needed
                        />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                            {t.description}
                        </span>
                    </div>
                    <span className="text-sm text-gray-600 sm:text-center dark:text-gray-400">
                        {t.rights}
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;