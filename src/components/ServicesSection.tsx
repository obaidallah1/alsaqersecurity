import React from "react";

interface ServicesSectionProps {
  language: "en" | "ar";
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ language }) => {
  const servicesData = [
    {
      title: {
        en: "Home Security",
        ar: "أمان المنزل",
      },
      description: {
        en: "We provide top-notch home security systems to ensure your safety.",
        ar: "نقدم أنظمة أمان منزلية عالية الجودة لضمان سلامتك.",
      },
      image: "/icons/home.svg",
    },
    {
      title: {
        en: "Office Security",
        ar: "أمان المكتب",
      },
      description: {
        en: "Our office security solutions protect your business assets.",
        ar: "تحمي حلول أمان المكتب أصول عملك.",
      },
      image: "/icons/office.svg",
    },
    {
      title: {
        en: "Bodyguard Services",
        ar: "خدمات الحراسة",
      },
      description: {
        en: "Professional bodyguard services for personal protection.",
        ar: "خدمات حراسة محترفة للحماية الشخصية.",
      },
      image: "/icons/bodyguard.svg",
    },
  ];

  return (
    <section className="service_section py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">
            {language === "ar" ? "خدماتنا" : "Our Services"}
          </h2>
        </div>
        <div className="flex flex-wrap -mx-4">
          {servicesData.map((service, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 mb-8">
              <div className="bg-white rounded-lg shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
                <div className="img-box mb-4">
                  <img src={service.image} alt={service.title[language]} className="w-12 h-12" />
                </div>
                <div className="detail-box">
                  <h6 className="text-xl font-semibold mb-2">{service.title[language]}</h6>
                  <p className="text-gray-700 mb-4 text-lg">
                    {service.description[language]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;