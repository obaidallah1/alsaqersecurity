// src/components/Services.tsx
import React, { useEffect, useState } from "react";

interface Service {
  title: string;
  description: string;
  image: string;
}

interface ServicesProps {
  language: "en" | "ar";
  services: Service[];
}

const Services: React.FC<ServicesProps> = ({ language, services }) => {
  const title = language === "ar" ? "لماذا تختارنا؟" : "Why Choose Us?";
  const [fadeIn, setFadeIn] = useState(false);

  // Trigger fade-in effect on component mount
  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-opacity duration-500 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
        {services.map((service, index) => (
          <div 
            key={index} 
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <img 
              src={service.image} 
              alt={service.title} 
              className="w-full h-48 object-cover transition-opacity duration-300"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;