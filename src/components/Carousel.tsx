import React, { useState, useEffect } from "react";

interface CarouselItem {
  image: string;
  captionTitle: string;
  captionSubtitle: string;
  buttonText: string;
}

interface CarouselProps {
  items: CarouselItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number; // in milliseconds
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlay = true,
  autoPlayInterval = 5000,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      handleNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, currentIndex]);

  return (
    <div className="relative overflow-hidden">
      <div className="relative h-[500px]">
        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            style={{
              backgroundImage: `url(${item.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-white text-center">
              <h4 className="text-primary">{item.captionTitle}</h4>
              <h4 className="text-4xl md:text-5xl font-bold mt-2">
                {item.captionSubtitle}
              </h4>
              <a
                href="#"
                className="mt-4 px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-opacity-80"
              >
                {item.buttonText}
              </a>
            </div>
          </div>
        ))}

        {/* Previous Button */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
          onClick={handlePrev}
        >
          <span className="fas fa-chevron-left"></span>
        </button>

        {/* Next Button */}
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
          onClick={handleNext}
        >
          <span className="fas fa-chevron-right"></span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
