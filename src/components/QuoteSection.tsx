import Image from "next/image";
import React from "react";

import { TbLicense } from "react-icons/tb";
import { MdHandyman } from "react-icons/md";
import { MdAccessTimeFilled } from "react-icons/md";

const QuoteSection = () => {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="container mx-auto flex flex-col lg:flex-row items-start gap-10">
        {/* Formulário e Texto */}
        <div className="w-full lg:w-2/3 bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Request A Quote</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Nome */}
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            {/* E-mail */}
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            {/* Telefone */}
            <input
              type="text"
              placeholder="Phone Number"
              className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            {/* Serviço */}
            <select className="border border-gray-300 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500">
              <option>Select Service</option>
              <option>Installation</option>
              <option>Repairjdjk</option>
              <option>Consultation</option>
            </select>
            {/* Botão */}
            <div className="col-span-1 md:col-span-2">
              <button className="w-full bg-yellow-500 text-white font-bold py-4 rounded-lg hover:bg-yellow-400 transition">
                Get a Free Quote
              </button>
            </div>
          </form>
        </div>

        {/* Por que somos os melhores */}
        <div className="w-full lg:w-1/3 flex flex-col items-center">
          <Image
            src="/assets/servico2.webp"
            alt="Service 1"
            className="w-full h-40 object-cover"
            width={300}
            height={300}
            quality={100}
          />
          <div className="bg-yellow-500 text-black p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Why We Are Best</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <TbLicense />
                <span>Licensed Technicians</span>
              </li>
              <li className="flex items-center gap-4">
                <MdHandyman />
                <span>Trusted Service</span>
              </li>
              <li className="flex items-center gap-4">
              <MdAccessTimeFilled />
                <span>Timely Services</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
