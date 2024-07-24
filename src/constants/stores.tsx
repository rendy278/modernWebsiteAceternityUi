import { StaticImageData } from "next/image";
import Image1 from "../../public/images/image2.png";
import Image2 from "../../public/images/shop-2.jpeg";
import Image3 from "../../public/images/s-2.webp";
interface stores {
  image: StaticImageData;
  quote: string;
  name: string;
}

export const stores: stores[] = [
  {
    image: Image1,
    quote: "Bird showed us to get started, what to do, and how to do it.",
    name: "Jason Scer",
  },
  {
    image: Image2,
    quote:
      "We had no idea how to get started, but Bird showed us the way. And we were able to create something amazing.",
    name: "John Prency",
  },
  {
    image: Image3,
    quote:
      "The team at Bird is amazing. They helped us create a stunning store that we are proud of.",
    name: "Miguel Martinez",
  },
];
