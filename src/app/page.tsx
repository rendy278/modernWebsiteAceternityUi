import React from "react";
import Navbar from "@/components/navbar";
import WebsiteDesign from "./websiteDesign";
import GrapichDesign from "./grapichDesign";
import Brands from "./brands";
import Services from "./services";
import ShopifyStore from "./shopifyStore";
import { Spotlight } from "@/components/ui/spotlight";
import SliderOne from "@/components/ui/slider";
import FAQS from "./faq";
const page = () => {
  return (
    <div className="w-full h-screen md:items-center md:justify-center  bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-x-hidden">
      <Navbar />
      <Spotlight className="hidden md:flex  md:-top-80" fill="white" />
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        <h1
          className="text-4xl pb-5 md:text-7xl px-6  text-slate-300 text-center bg-clip-text text-transparent 
        bg-gradient-to-b from-neutral-50 to-bg-neutral-400 bg-opacity-50"
        >
          Create, grow, and
          <br />
          scale your business
        </h1>
        <p className="mt-4 text-lg font-normal text-neutral-300 max-w-lg text-center mx-auto px-4">
          Custom tailored solutions for your business. We are a team of
          creatives who are excited to help you grow your business.
        </p>
        <div className="flex items-center mt-8 justify-center">
          <button className="p-[3px] relative">
            <div className="absolute  inset-0 bg-gradient-to-r from-neutral-100 to-neutral-500 rounded-3xl" />
            <div className="px-8 py-3 w-48   rounded-3xl font-semibold relative group transition duration-200 text-gray-800 bg-transparent">
              Book a call
            </div>
          </button>
        </div>
        <div className="w-full pt-20">
          <SliderOne />
          <WebsiteDesign />
          <GrapichDesign />
          <ShopifyStore />
          <Brands />
          <Services />
          <FAQS />
        </div>
      </div>
    </div>
  );
};

export default page;
