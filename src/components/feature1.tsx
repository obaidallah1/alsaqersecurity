import React from "react";

type Language = "en" | "ar";

interface FeatureTranslation {
    title: string;
    description: string;
}

interface FeatureTranslations {
    staff: Record<Language, FeatureTranslation>;
    equipment: Record<Language, FeatureTranslation>;
    support: Record<Language, FeatureTranslation>;
}

const featureTranslations: FeatureTranslations = {
    staff: {
        en: {
            title: "Professional Team",
            description: "Our extensive experience in civil security makes us among the leaders in the country, with continuous success stories we share with our clients.",
        },
        ar: {
            title: "طاقم محترف",
            description: "خبرتنا الطويلة في مجال الأمن المدني تجعلنا من الأوائل على مستوى البلد، مع قصص نجاح متواصلة نرويها لعملائنا.",
        },
    },
    equipment: {
        en: {
            title: "Latest Equipment",
            description: "We utilize the latest technologies and equipment to ensure the highest levels of security for our clients.",
        },
        ar: {
            title: "أحدث المعدات",
            description: "نستخدم أحدث التقنيات والمعدات لضمان أعلى مستويات الأمان لعملائنا.",
        },
    },
    support: {
        en: {
            title: "24/7 Support",
            description: "We are available 24/7 to meet our clients' needs at any time.",
        },
        ar: {
            title: "24/7 دعم",
            description: "نحن متواجدون على مدار الساعة لتلبية احتياجات عملائنا في أي وقت.",
        },
    },
};

interface Feature1Props {
    language: Language;
}

const Feature1: React.FC<Feature1Props> = ({ language }) => {
    const headerText = {
        en: "Your Safety, Our Priority",
        ar: "أمانكم، أولويتنا",
    };

    const subHeaderText = {
        en: "Providing top-notch security solutions tailored to your needs.",
        ar: "تقديم حلول أمنية عالية الجودة تناسب احتياجاتكم.",
    };

    return (
        <section className="py-12 bg-white sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">{headerText[language]}</h2>
                    <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8 font-pj">{subHeaderText[language]}</p>
                </div>

                <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 md:grid-cols-3 gap-12">
                    <div className="flex flex-col items-center border-b border-gray-200 pb-6 md:border-b-0 md:pb-0 md:border-r md:px-10">
                        <img src="/icons/staff.png" className="mb-3" alt="Staff Icon" />
                        <h5 className="mb-3 text-xl font-bold">{featureTranslations.staff[language].title}</h5>
                        <p className="m-0 text-gray-600">{featureTranslations.staff[language].description}</p>
                    </div>
                    
                    <div className="flex flex-col items-center border-b border-gray-200 pb-6 md:border-b-0 md:pb-0 md:border-r md:px-10">
                        <img src="/icons/equipment.png" className="mb-3" alt="Equipment Icon" />
                        <h5 className="mb-3 text-xl font-bold">{featureTranslations.equipment[language].title}</h5>
                        <p className="m-0 text-gray-600">{featureTranslations.equipment[language].description}</p>
                    </div>
                    
                    <div className="flex flex-col items-center pb-6 md:pb-0 md:px-10">
                        <img src="/icons/24_7.png" className="mb-3" alt="24/7 Support Icon" />
                        <h5 className="mb-3 text-xl font-bold">{featureTranslations.support[language].title}</h5>
                        <p className="m-0 text-gray-600">{featureTranslations.support[language].description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Feature1;