import React from "react";
import { links } from "@/constants/link";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/[0.98] text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} My Company. All rights reserved.</p>
        <ul className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-4 mt-4">
          {links.map((link, index) => (
            <li key={index}>
              <a href={link.link} className="hover:underline">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
