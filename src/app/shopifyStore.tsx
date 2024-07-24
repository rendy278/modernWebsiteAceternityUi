"use client";

import { BackgroundGradient } from "../components/ui/background-gradient";
import { stores } from "@/constants/stores";
import Image from "next/image";
import { ReactNode } from "react";

const shopifyStore = () => {
  return (
    <div className="text-white">
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <h1 className="text-4xl md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
          Shopify Stores
        </h1>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          We create stunning Shopify stores that are designed to convert.
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {stores.map((store, index) => (
          <BackgroundGradient
            key={index}
            className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-neutral-300 dark:bg-zinc-900"
          >
            <Image
              src={store.image}
              alt={`Store image of ${store.name}`}
              height="400"
              width="400"
              className="object-cover  rounded-md"
            />
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              {store.name}
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {store.quote}
            </p>
          </BackgroundGradient>
        ))}
      </div>
    </div>
  );
};

export default shopifyStore;
