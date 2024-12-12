import React, { useState } from 'react';

// Define the type for the props
interface SliderProps {
    t: {
        aboutTitle: string;
        aboutText: string;
    };
}

const backgroundImages = [
    "/img/ss.jpg",
    "/img/hero-bg.jpg",
  ];


const Slider: React.FC<SliderProps> = ({ t }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextSlide = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    };

    const prevSlide = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + backgroundImages.length) % backgroundImages.length);
    };

    return (
        <section className="relative mb-12 flex flex-col md:flex-row h-auto md:h-[600px]">
            {/* Background Image Container */}
            <div className="relative w-full md:w-1/2 h-full">
                <div
                    className="absolute inset-0 bg-cover bg-center transition-opacity duration-500"
                    style={{
                        backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
                        opacity: 0.9, // Adjust opacity for overlay effect
                    }}
                />
            </div>

            {/* Text Container */}
            <div className="relative z-10 w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center bg-white bg-opacity-75">
                <h2 className="text-3xl md:text-2xl font-bold mb-4">
                    {t.aboutTitle} <span className="text-blue-600">Medical</span> Services That You Can <span className="text-blue-600">Trust!</span>
                </h2>
                <p className="text-gray-700 text-lg md:text-base">
                    {t.aboutText}
                </p>
                <div className="flex space-x-4 mt-4">
                    <button 
                        onClick={prevSlide} 
                        className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-300"
                    >
                        Previous
                    </button>
                    <button 
                        onClick={nextSlide} 
                        className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 transition duration-300"
                    >
                        Next
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Slider;