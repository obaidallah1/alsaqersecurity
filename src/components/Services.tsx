import React, { useEffect, useState } from "react";
import { HoverEffect } from "./ui/card-hover-effect";

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
  const title =
    language === "ar" ? "لماذا تختار شركة الصقر؟ " : "Why Choose Us?";
  const [fadeIn, setFadeIn] = useState(false);

  // Trigger fade-in effect on component mount
  useEffect(() => {
    setFadeIn(true);
  }, []);

  // Include the image in the items array
  const items = services.map(service => ({
    title: service.title,
    description: service.description,
    image: service.image, // Pass the image property
  }));

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div
        className={`transition-opacity duration-500 ${
          fadeIn ? "opacity-100" : "opacity-0"
        }`}
      >
        <HoverEffect items={items} />
      </div>
    </section>
  );
};

export default Services;