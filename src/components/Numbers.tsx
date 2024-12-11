import React from 'react';

// Define the Stat interface
interface Stat {
    value: string;
    label: {
        en: string;
        ar: string;
    };
    description: {
        en: string;
        ar: string;
    };
}

interface NumbersProps {
    language: "en" | "ar";
}

// Type for the translations object
interface Translations {
    header: string;
    description: string;
    stats: Stat[];
}

const Numbers: React.FC<NumbersProps> = ({ language }) => {
    const translations: { [key: string]: Translations } = {
        en: {
            header: "Our Achievements Speak for Themselves",
            description: "With dedication and expertise, we have marked our presence in the security industry.",
            stats: [
                {
                    value: "25+",
                    label: {
                        en: "Years in Business",
                        ar: "سنوات من العمل",
                    },
                    description: {
                        en: "Providing top-notch security solutions.",
                        ar: "تقديم حلول أمنية عالية الجودة.",
                    },
                },
                {
                    value: "550+",
                    label: {
                        en: "Projects Delivered",
                        ar: "المشاريع المنجزة",
                    },
                    description: {
                        en: "Successfully completed in the last 25 years.",
                        ar: "تم إنجازها بنجاح في آخر 25 عامًا.",
                    },
                },
                {
                    value: "50+",
                    label: {
                        en: "Team Members",
                        ar: "أعضاء الفريق",
                    },
                    description: {
                        en: "Experts dedicated to your safety.",
                        ar: "خبراء مكرسون لسلامتك.",
                    },
                },
            ],
        },
        ar: {
            header: "إنجازاتنا تتحدث عن نفسها",
            description: "بفضل التزامنا وخبرتنا، وضعنا بصمتنا في صناعة الأمن.",
            stats: [
                {
                    value: "25+",
                    label: {
                        en: "سنوات من العمل",
                        ar: "سنوات من العمل",
                    },
                    description: {
                        en: "تقديم حلول أمنية عالية الجودة.",
                        ar: "تقديم حلول أمنية عالية الجودة.",
                    },
                },
                {
                    value: "550+",
                    label: {
                        en: "المشاريع المنجزة",
                        ar: "المشاريع المنجزة",
                    },
                    description: {
                        en: "تم إنجازها بنجاح في آخر 25 عامًا.",
                        ar: "تم إنجازها بنجاح في آخر 25 عامًا.",
                    },
                },
                {
                    value: "50+",
                    label: {
                        en: "أعضاء الفريق",
                        ar: "أعضاء الفريق",
                    },
                    description: {
                        en: "خبراء مكرسون لسلامتك.",
                        ar: "خبراء مكرسون لسلامتك.",
                    },
                },
            ],
        },
    };

    const t = translations[language];

    return (
        <section className="py-10 bg-gray-100 sm:py-16 lg:py-24">
            <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                        {t.header}
                    </h2>
                    <p className="mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                        {t.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 mt-10 text-center lg:mt-24 sm:gap-x-8 md:grid-cols-3">
                    {t.stats.map((stat: Stat, index: number) => (
                        <div key={index}>
                            <h3 className="font-bold text-7xl">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-600 to-blue-600">
                                    {stat.value}
                                </span>
                            </h3>
                            <p className="mt-4 text-xl font-medium text-gray-900">
                                {stat.label[language]}
                            </p>
                            <p className="text-base mt-0.5 text-gray-500">
                                {stat.description[language]}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Numbers;