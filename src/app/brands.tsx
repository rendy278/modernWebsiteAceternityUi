import React from "react";
import { Lora } from "next/font/google";
import { cn } from "@/lib/utils";
import { brand } from "@/constants/brand";
import { ReactNode } from "react";
import Image from "next/image";

const font = Lora({
  subsets: ["latin"],
  weight: ["400"],
});

const Brands = () => {
  return (
    <div className="text-white mt-8" id="brands">
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <h1 className="text-4xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
          The best brands
          <br />
          choose us
        </h1>
        <p className="mt-8 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          From small businesses to large corporations, we have helped many
          brands elevate their business.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 mx-auto place-items-center gap-5">
        {brand.map(
          (brandItem, index): ReactNode => (
            <div key={index} className="py-12 ">
              <Image
                src={brandItem.image}
                alt={`Brand ${index}`}
                className="w-28 h-28 md:w-40 md:h-40 object-contain"
              />
            </div>
          )
        )}
      </div>

      <div
        className={cn(
          "flex items-center mt-8 justify-center text-xl xl:text-2xl pt-10 md:pt-0 pb-4  px-8  text-center text-white  ",
          font.className
        )}
      >
        &quot;We got rid of nearly a dozen different tools because of what Bird
        does for us.&quot;
      </div>

      <div className="items-center flex justify-center flex-col text-white">
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={1000}
          height={1000}
          className="pt-2 xl:pt-0  w-10 xl:w-14 "
        />

        <div className=" text-center">
          <div className="text-sm  font-medium pt-4">Rendy Serizawa</div>
          <div className="text-sm">Marketing Director, Palium Software</div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
