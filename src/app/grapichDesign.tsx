"use client";
import React from "react";
import { motion } from "framer-motion";
import { ThreeDCardDemo } from "@/snippets/3d-card-snippet";
import { EvervaultCardDemo } from "@/snippets/Evervault-card";
const grapichDesign = () => {
  return (
    <div>
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <h1 className="text-4xl  md:text-7xl text-center bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
          Graphic Design
        </h1>
        <p className="mt-8 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto px-4">
          We create stunning visuals for your brand. From logos to social media
          posts, we{"'"}ve got you covered.
        </p>
      </div>

      <div className="items-center md:flex justify-center md:mx-auto md:space-x-10">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="px-8 md:px-0"
        >
          <ThreeDCardDemo />
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="px-8 md:px-0"
        >
          <EvervaultCardDemo />
        </motion.div>
      </div>
    </div>
  );
};

export default grapichDesign;
