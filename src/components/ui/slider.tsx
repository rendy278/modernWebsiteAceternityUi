"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { imageSlider } from "@/constants/caraousel";
import { useMediaQuery } from "react-responsive";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderOne: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    className: "w-full mx-auto cursor-pointer center-mode space-x-4",
  };

  if (isMediumScreen) {
    settings.slidesToShow = 1.67;
  } else if (isSmallScreen) {
    settings.slidesToShow = 1;
  }

  if (!isClient) {
    return null;
  }

  return (
    <div className="space-x-4">
      <Slider {...settings}>
        {imageSlider.map((slide, index) => (
          <div key={index} className="px-2">
            <Image
              src={slide.img}
              width={500}
              height={500}
              alt={`Slide ${index + 1}`}
              className="rounded-xl"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderOne;
