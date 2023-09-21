import React, { useState, useEffect } from "react";
import "./Carousel.scss";

const imageList = [
  "/images/carousel1.png",
  "/images/carousel2.png",
  "/images/carousel3.png",
];

const Carousel = () => {
  const [imgIdx, setImgIdx] = useState(0);

  const nextSlide = () => {
    setImgIdx((prevIdx) => (prevIdx + 1 === imageList.length ? 0 : prevIdx + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);

    // Clear interval and reset to the first image when component unmounts
    return () => {
      clearInterval(interval);
      setImgIdx(0);
    };
  }, []);

  return (
    <div className="carousel">
      <div
        className="translate"
        style={{
          transform: `translateX(-${imgIdx * 100}%)`,
        }}
      >
        {imageList.map((image, index) => (
          <div
            key={index}
            className="slide"
            style={{
              backgroundImage: `url(${image})`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
