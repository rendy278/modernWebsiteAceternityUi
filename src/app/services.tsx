import { CardHoverEffectDemo } from "@/snippets/CardHover";
import React from "react";

const services = () => {
  return (
    <div>
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <h1 className="text-4xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-sky-200 bg-opacity-50">
          Streamline your business with
          <br />
          our services
        </h1>
        <p className="mt-8 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          From website design to social media management, We offer a wide range
          of services to help you grow your business.
        </p>
      </div>

      <div className="flex items-center justify-center">
        <CardHoverEffectDemo />
      </div>
    </div>
  );
};

export default services;
