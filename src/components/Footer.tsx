import React from "react";

import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo ou Nome da Empresa */}
        <div className="mb-6 md:mb-0">
          <h1 className="text-2xl font-bold">YourCompany</h1>
          <p className="text-gray-400">Making your life easier, one solution at a time.</p>
        </div>

        {/* Links Úteis */}
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
          <a href="#about" className="text-gray-300 hover:text-yellow-500 transition">
            About Us
          </a>
          <a href="#services" className="text-gray-300 hover:text-yellow-500 transition">
            Services
          </a>
          <a href="#contact" className="text-gray-300 hover:text-yellow-500 transition">
            Contact
          </a>
        </div>

        {/* Redes Sociais */}
        <div className="flex space-x-4 mt-6 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookSquare />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaSquareXTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagramSquare />
          </a>
        </div>
      </div>

      {/* Linha de Direitos Reservados */}
      <div className="text-center text-gray-500 mt-8">
        © 2025 YourCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
