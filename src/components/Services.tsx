import React from 'react';

interface Service {
    title: {
        en: string;
        ar: string;
    };
    description: {
        en: string;
        ar: string;
    };
    image: string;
    iconClass: string;
}

interface ServicesProps {
    language: "en" | "ar";
}

const Services: React.FC<ServicesProps> = ({ language }) => {
    const services: Service[] = [
        {
            title: {
                en: "Office Security",
                ar: "أمن المكاتب",
            },
            description: {
                en: "Comprehensive security solutions for office environments.",
                ar: "حلول أمنية شاملة لبيئات المكتب.",
            },
            image: "img/service-1.jpg",
            iconClass: "flaticon-desk",
        },
        {
            title: {
                en: "Home Security",
                ar: "أمن المنازل",
            },
            description: {
                en: "Protecting your home with advanced security systems.",
                ar: "حماية منزلك باستخدام أنظمة أمان متقدمة.",
            },
            image: "img/service-2.jpg",
            iconClass: "flaticon-home",
        },
        {
            title: {
                en: "Industrial Security",
                ar: "أمن الصناعة",
            },
            description: {
                en: "Ensuring the safety of your industrial facilities.",
                ar: "ضمان سلامة منشآتك الصناعية.",
            },
            image: "img/service-3.jpg",
            iconClass: "flaticon-factory",
        },
        {
            title: {
                en: "Transport Security",
                ar: "أمن النقل",
            },
            description: {
                en: "Securing transportation of goods and people.",
                ar: "تأمين نقل البضائع والأشخاص.",
            },
            image: "img/service-4.jpg",
            iconClass: "flaticon-transportation",
        },
        {
            title: {
                en: "Property Security",
                ar: "أمن الممتلكات",
            },
            description: {
                en: "Comprehensive security for residential and commercial properties.",
                ar: "أمان شامل للممتلكات السكنية والتجارية.",
            },
            image: "img/service-5.jpg",
            iconClass: "flaticon-desk",
        },
        {
            title: {
                en: "Personal Security",
                ar: "أمن خاص",
            },
            description: {
                en: "Providing personal security services for individuals.",
                ar: "تقديم خدمات الأمان الشخصي للأفراد.",
            },
            image: "img/service-6.jpg",
            iconClass: "flaticon-bodyguard",
        },
    ];

    return (
        <div className="container pt-5">
            <div className="d-flex flex-column text-center mb-5">
                <h5 className="text-primary mb-3">{language === "ar" ? "خدماتنا" : "Our Services"}</h5>
                <h1 className="m-0">{language === "ar" ? "خدمات أمنية متميزة" : "Outstanding Security Services"}</h1>
            </div>
            <div className="row pb-3">
                {services.map((service, index) => (
                    <div className="col-md-6 col-lg-4 mb-4" key={index}>
                        <div className="card mb-2 p-3" style={{ backgroundColor: '#f8f9fa' }}> {/* Adjust background color */}
                            <img className="card-img-top" src={service.image} alt={service.title[language]} />
                            <div className="card-body" style={{ backgroundColor: '#007bff', color: 'white' }}> {/* Primary color for card body */}
                                <h3 className={`font-weight-normal d-flex flex-shrink-0 align-items-center justify-content-center bg-secondary text-white m-0 mr-3 ${service.iconClass}`} style={{ width: '45px', height: '45px' }}></h3>
                                <h6 className="card-title text-white text-truncate m-0">{service.title[language]}</h6>
                            </div>
                            <div className="card-footer" style={{ backgroundColor: '#007bff', color: 'white' }}>
                                {service.description[language]}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;