import { StaticImageData } from "next/image";
import ImageSlide1 from "../../public/images/business.jpeg";
import ImageSlide2 from "../../public/images/coffe.jpeg";
import ImageSlide3 from "../../public/images/image-business.jpeg";

interface ImageSlider {
  img: StaticImageData;
}

export const imageSlider: ImageSlider[] = [
  {
    img: ImageSlide1,
  },
  {
    img: ImageSlide2,
  },
  {
    img: ImageSlide3,
  },
];
