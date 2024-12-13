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
      className="relative mt-20 pt-8 mb-12 flex flex-col md:flex-row h-auto md:h-[600px] bg-cover rounded-lg border border-[#8f7a2e] border-opacity-50 shadow-lg"
    >
      {/* Background Image Container */}
      <AnimatePresence>
        <motion.div
          key={currentImage} // Key for unique tracking during image transitions
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }} // Start opacity
          animate={{ opacity: 1 }} // End opacity
          exit={{ opacity: 0 }} // Exit opacity for fade-out
          transition={{ duration: 1 }} // Transition duration
          style={{
            backgroundImage: `url(${backgroundImages[currentImage]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </AnimatePresence>

      {/* Icon Container */}
      <div className="relative z-10 flex items-center justify-center w-full md:w-1/2 p-4 md:p-6">
        <AnimatePresence>
          <motion.div
            key={icon} // Key for unique tracking during icon transitions
            className="w-64 h-64 rounded-full overflow-hidden shadow-lg"
            initial={{ opacity: 0, scale: 0.9 }} // Start opacity and scale
            animate={{ opacity: 1, scale: 1 }} // End opacity and scale
            exit={{ opacity: 0, scale: 0.9 }} // Exit opacity and scale
            transition={{ duration: 1 }} // Transition duration
            style={{
              backgroundImage: `url(${icon})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.9,
            }}
          />
        </AnimatePresence>
      </div>

      {/* Text Container */}
      <motion.div
        className="relative z-20 w-full md:w-1/2 p-6 flex flex-col justify-center bg-white bg-opacity-90 rounded-lg shadow-md border border-[#A5993A] ml-auto mr-auto md:ml-0 md:mr-0"
        initial={{ opacity: 0, y: 20 }} // Start opacity and position
        animate={{ opacity: 1, y: 0 }} // End opacity and position
        exit={{ opacity: 0, y: 20 }} // Exit opacity and position
        transition={{ duration: 1.5, delay: 0.5 }} // Smooth delayed animation
      >
        <h2 className="text-2xl md:text-xl font-bold mb-2 text-gray-800">
          {currentAboutText.title}
        </h2>
        <p className="text-gray-700 text-base">{currentAboutText.text}</p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
