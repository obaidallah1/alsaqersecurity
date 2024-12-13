import { AnimatePresence, motion } from "framer-motion";
import React from "react";

interface AboutSectionProps {
  currentImage: number;
  backgroundImages: string[];
  icon: string;
  currentAboutText: { title: string; text: string };
}

const AboutSection: React.FC<AboutSectionProps> = ({
  currentImage,
  backgroundImages,
  icon,
  currentAboutText,
}) => {
  return (
    <section
      id="about"
      className="relative mt-20  pt-8 mb-12 flex flex-col md:flex-row h-auto md:h-[600px] bg-cover rounded-lg border border-[#8f7a2e] border-opacity-50 shadow-lg"
    >
      {/* Background Image Container */}
      <AnimatePresence>
        <motion.div
          key={currentImage}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          style={{
            backgroundImage: `url(${backgroundImages[currentImage]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%", // Flexible height
            width: "100%", // Full width
          }}
        />
      </AnimatePresence>

      {/* Icon Container */}
      <div className="relative mb-auto  z-10 flex items-center justify-center w-full md:w-1/2 p-4 md:p-6 max-h-[300px] md:max-h-none">
        <AnimatePresence>
          <motion.div
            key={icon}
            className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1 }}
            style={{
              backgroundImage: `url(${icon})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
        </AnimatePresence>
      </div>

      {/* Text Container */}
      <motion.div
        className="relative  z-20 w-full md:w-1/2 h-[140px] md:h-[400px] max-w-[500px] p-4 md:p-6 flex flex-col justify-center bg-white bg-opacity-90 rounded-lg shadow-md border border-[#A5993A] mx-auto md:ml-0 md:mr-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <h2 className="text-xl md:text-2xl font-bold mb-2 text-gray-800 text-center md:text-left">
          {currentAboutText.title}
        </h2>
        <p className="text-gray-700 text-sm md:text-base text-center md:text-left">
          {currentAboutText.text}
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
