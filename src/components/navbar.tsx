"use client";
import React from "react";
import Link from "next/link";

import Mobilenav from "./mobilenav";
import Image from "next/image";
import { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import { links } from "@/constants/link";
import Logo from "../../public/logo/logo.svg";

const Navbar: React.FC = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const activeNav = (): void => {
    setIsActive(!isActive);
  };
  const closeNav = (): void => {
    setIsActive(isActive);
  };
  return (
    <nav className="p-6 fixed bg-black/[0.91] w-full  flex items-center justify-between z-50">
      <Link href="/" className="">
        <Image
          priority
          src={Logo}
          width={100}
          height={100}
          alt="Logo"
          className=" w-12 h-12 md:w-14 md:h-14"
        />
      </Link>

      <div
        className=" hidden lg:flex space-x-10 items-center text-slate-300 text-center bg-clip-text text-transparent 
        bg-gradient-to-b from-neutral-50 to bg-neutral-400 bg-opacity-50"
      >
        {links.map((link, index) => (
          <Link
            href={link.link}
            key={index}
            className="hover:text-white cursor-pointer"
          >
            {link.name}
          </Link>
        ))}
      </div>
      <div className="flex lg:hidden gap-4  justify-center items-center">
        <div>
          <Link
            href="#contact"
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            Contact
          </Link>
        </div>
        {isActive ? (
          <div
            onClick={activeNav}
            className="w-8  h-8 text-slate-300 cursor-pointer"
          >
            <X size={33} />
            <Mobilenav onClose={closeNav} />
          </div>
        ) : (
          <AlignJustify
            onClick={activeNav}
            className="w-8 h-8 text-slate-300 cursor-pointer"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
