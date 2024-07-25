import { StaticImageData } from "next/image";
import Image1 from "../../public/logo/logoipsum-248.svg";
import Image2 from "../../public/logo/logoipsum-245.svg";
import Image3 from "../../public/logo/logoipsum-225.svg";
import Image4 from "../../public/logo/stripelogo.png";
import Image5 from "../../public/logo/logoipsum-249.svg";
import Image6 from "../../public/logo/logoipsum-247.svg";
interface brand {
  image: StaticImageData;
}

export const brand: brand[] = [
  {
    image: Image1,
  },
  {
    image: Image2,
  },
  {
    image: Image3,
  },
  {
    image: Image4,
  },
  {
    image: Image5,
  },
  {
    image: Image6,
  },
];
